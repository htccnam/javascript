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

// Đổi link tuyệt đối kiểu file:///d:/github/studyProgram/javascript/<đường dẫn> thành đường dẫn tương đối từ lab/
function rewriteFileLink(href) {
  const m = /^file:\/\/\/.*?\/javascript\/(.+)$/i.exec(href);
  return m ? `../${m[1]}` : href;
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

/**
 * @param {string} markdown  nội dung .md
 * @param {object} opts
 * @param {(lessonId:number, anchor:string) => void} [opts.onTheoryLink] bấm link tới docs/NN-*.md
 */
export function renderMarkdown(markdown, { onTheoryLink } = {}) {
  const html = window.marked.parse(markdown, { gfm: true });
  const clean = window.DOMPurify.sanitize(html);
  const container = document.createElement("div");
  container.className = "md";
  container.innerHTML = clean;

  transformAlerts(container);

  container.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (href.startsWith("#")) {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        // marked mã hoá href (ví dụ #mục-lục -> #m%E1%BB%A5c-l%E1%BB%A5c), phải giải mã trước khi tìm id
        let id = href.slice(1);
        try {
          id = decodeURIComponent(id);
        } catch {
          // giữ nguyên nếu chuỗi không hợp lệ
        }
        const target =
          container.querySelector(`[id="${CSS.escape(id)}"]`) ||
          container.querySelector(`[name="${CSS.escape(id)}"]`);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    const rewritten = rewriteFileLink(href);
    const theory = /docs\/(\d+)-[^#]*\.md(#(.*))?$/i.exec(rewritten);
    if (theory && onTheoryLink) {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        onTheoryLink(Number(theory[1]), theory[3] || "");
      });
      return;
    }
    a.setAttribute("href", rewritten);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });

  // Mermaid chạy sau khi container đã có trong DOM (xem renderInto)
  return container;
}

export async function renderInto(el, markdown, opts) {
  const node = renderMarkdown(markdown, opts);
  el.replaceChildren(node);
  try {
    await renderMermaid(node);
  } catch (err) {
    const warn = document.createElement("p");
    warn.className = "muted";
    warn.textContent = `Không vẽ được sơ đồ mermaid: ${err.message}`;
    node.append(warn);
  }
}
