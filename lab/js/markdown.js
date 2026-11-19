// markdown.js — render debai.md / docs/*.md: marked + DOMPurify, GitHub alerts, mermaid, viết lại link file:///.

const MERMAID_URL = "https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.1/mermaid.min.js";
let mermaidPromise = null;
let mermaidCounter = 0;

function loadMermaid() {
  if (window.mermaid) return Promise.resolve(window.mermaid);
  if (!mermaidPromise) {
    mermaidPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = MERMAID_URL;
      s.onload = () => {
        window.mermaid.initialize({ startOnLoad: false, theme: "default" });
        resolve(window.mermaid);
      };
      s.onerror = () => reject(new Error("Không tải được mermaid từ CDN"));
      document.head.append(s);
    });
  }
  return mermaidPromise;
}

// Slug generator cho heading chuẩn tiếng Việt
export function slugifyHeading(text) {
  if (!text) return "";
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{M}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Khởi tạo renderer cho marked để tự động gán id cho h1..h6
let markedInitialized = false;
function initMarkedRenderer() {
  if (markedInitialized || !window.marked) return;
  const renderer = {
    heading(text, level, raw) {
      const rawText = (raw || text).replace(/<[^>]+>/g, "").trim();
      const id = slugifyHeading(rawText);
      return `<h${level} id="${id}">${text}</h${level}>`;
    },
  };
  window.marked.use({ renderer });
  markedInitialized = true;
}

// Đổi link tuyệt đối kiểu file:/// hoặc link ngoài thư mục lab thành tương đối
function rewriteFileLink(href) {
  if (!href) return href;
  const m = /(?:docs\/.*|exercises\/.*|agent\.md.*|index\.html.*)$/i.exec(href);
  return m ? `../${m[0]}` : href;
}

// Phân tích link xem có phải liên kết đến bài học trong chương trình không
export function parseLessonLink(href) {
  if (!href) return null;
  const clean = href.replace(/^file:\/\/\/.*?\/javascript\//i, "").replace(/^file:\/\/\/.*?\//i, "");

  // Link dạng lab.html?lesson=NN[&tab=theory|debai][#anchor]
  const labMatch = /lab\.html\?lesson=(\d+)(?:&tab=(theory|debai|code))?(?:#(.*))?$/i.exec(href);
  if (labMatch) {
    return {
      lessonId: Number(labMatch[1]),
      tab: labMatch[2] || "theory",
      anchor: labMatch[3] || ""
    };
  }

  // Link dạng docs/NN-*.md#anchor hoặc 01-overview.md#anchor
  const docMatch = /(?:docs\/|^)(\d+)-[^#\/\s]*\.md(?:#(.*))?$/i.exec(clean);
  if (docMatch) {
    return {
      lessonId: Number(docMatch[1]),
      tab: "theory",
      anchor: docMatch[2] || ""
    };
  }

  // Link dạng exercises/NN-*/[debai.md]#anchor
  const exMatch = /exercises\/(\d+)-[^#\/\s]*(?:\/debai\.md|\/)?(?:#(.*))?$/i.exec(clean);
  if (exMatch) {
    return {
      lessonId: Number(exMatch[1]),
      tab: "debai",
      anchor: exMatch[2] || ""
    };
  }

  return null;
}

// Chuyển "> [!IMPORTANT]" (GitHub alert) thành khối có class để CSS tô màu
function transformAlerts(root) {
  root.querySelectorAll("blockquote").forEach((bq) => {
    const first = bq.querySelector("p") || bq;
    const match = /^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i.exec(first.innerHTML);
    if (!match) return;
    const type = match[1].toLowerCase();
    first.innerHTML = first.innerHTML.replace(/^\s*\[!\w+\](<br\s*\/?>)?\s*/i, "");
    bq.classList.add("alert", `alert-${type}`);
  });
}

async function renderMermaid(root) {
  const blocks = root.querySelectorAll("pre code.language-mermaid");
  if (!blocks.length) return;
  const mermaid = await loadMermaid();
  for (const code of blocks) {
    const div = document.createElement("div");
    div.className = "mermaid";
    div.id = `mmd-${++mermaidCounter}`;
    div.textContent = code.textContent;
    code.closest("pre").replaceWith(div);
  }
  await mermaid.run({ querySelector: ".mermaid" });
}

// Tiền xử lý văn bản: thay thế dự phòng mọi ký tự LaTeX mũi tên thành ký tự Unicode
function preprocessMarkdown(md) {
  if (!md) return md;
  return md
    .replace(/\$\\rightarrow\$/g, "→")
    .replace(/\\rightarrow/g, "→")
    .replace(/\$\\to\$/g, "→")
    .replace(/\$\\longrightarrow\$/g, "→")
    .replace(/\\longrightarrow/g, "→")
    .replace(/\$\\Rightarrow\$/g, "⇒")
    .replace(/\\Rightarrow/g, "⇒")
    .replace(/\$\\Leftarrow\$/g, "⇐")
    .replace(/\\Leftarrow/g, "⇐");
}

/**
 * @param {string} markdown  nội dung .md
 * @param {object} opts
 * @param {(lessonId:number, tab:string, anchor:string) => void} [opts.onLessonNavigate] bấm link bài học
 * @param {(lessonId:number, anchor:string) => void} [opts.onTheoryLink] tương thích ngược
 */
export function renderMarkdown(markdown, { onLessonNavigate, onTheoryLink } = {}) {
  initMarkedRenderer();
  const rawText = preprocessMarkdown(markdown);
  const html = window.marked.parse(rawText, { gfm: true });
  const clean = window.DOMPurify.sanitize(html);
  const container = document.createElement("div");
  container.className = "md";
  container.innerHTML = clean;

  transformAlerts(container);

  const nav = onLessonNavigate || ((id, tab, anchor) => {
    if (onTheoryLink) onTheoryLink(id, anchor);
  });

  container.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;

    // 1. Link anchor nội bộ trong cùng tài liệu: #...
    if (href.startsWith("#")) {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        let id = href.slice(1);
        try {
          id = decodeURIComponent(id);
        } catch {}
        let target =
          container.querySelector(`[id="${CSS.escape(id)}"]`) ||
          container.querySelector(`[name="${CSS.escape(id)}"]`);
        if (!target) {
          const norm = slugifyHeading(id);
          target =
            container.querySelector(`[id="${CSS.escape(norm)}"]`) ||
            container.querySelector(`[name="${CSS.escape(norm)}"]`);
        }
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          const headingEl =
            target.nextElementSibling && /^H[1-6]$/.test(target.nextElementSibling.tagName)
              ? target.nextElementSibling
              : target;
          headingEl.style.transition = "background-color 0.4s ease";
          headingEl.style.backgroundColor = "var(--warn-bg, #fef9c3)";
          setTimeout(() => {
            headingEl.style.backgroundColor = "";
          }, 2000);
        }
      });
      return;
    }

    // 2. Link điều hướng bài học (docs, exercises, lab.html)
    const parsed = parseLessonLink(href);
    if (parsed && nav) {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        nav(parsed.lessonId, parsed.tab, parsed.anchor);
      });
      return;
    }

    // 3. Các link khác (agent.md, external...)
    const rewritten = rewriteFileLink(href);
    a.setAttribute("href", rewritten);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });

  return container;
}

// Tô màu cú pháp cho khối code có khai báo ngôn ngữ (```javascript, ```html...).
function highlightCode(root) {
  if (!window.hljs) return;
  root.querySelectorAll('pre code[class*="language-"]').forEach((block) => {
    if (block.classList.contains("language-mermaid")) return;
    try {
      window.hljs.highlightElement(block);
    } catch {
      // giữ nguyên text nếu lỗi
    }
  });
}

export async function renderInto(el, markdown, opts) {
  const node = renderMarkdown(markdown, opts);
  el.replaceChildren(node);
  highlightCode(node);
  try {
    await renderMermaid(node);
  } catch (err) {
    const warn = document.createElement("p");
    warn.className = "muted";
    warn.textContent = `Không vẽ được sơ đồ mermaid: ${err.message}`;
    node.append(warn);
  }
}
