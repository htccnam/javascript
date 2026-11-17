// main.js — khởi tạo trang lab.html?lesson=NN: đề bài, lý thuyết, lời giải, editor, console, chấm bài.
import { loadManifest, fetchText } from "./lessons.js";
import { storage } from "./storage.js";
import { renderInto } from "./markdown.js";
import { loadMonaco, createEditor, createDiff } from "./editor.js";
import { execute } from "./runner.js";
import { ConsoleView } from "./console-view.js";
import { grade, renderResults } from "./grader.js";
import { CHATBOTS, MODES, buildPrompt, openChatbot } from "./ai-review.js";

const $ = (sel) => document.querySelector(sel);
const params = new URLSearchParams(location.search);
const TOTAL_LESSONS_HINT = 17;

const state = {
  lessons: [],
  lesson: null,
  practice: "",
  testsSrc: undefined, // undefined = chưa tải; null = không có tests.js
  solution: undefined,
  editor: null, // adapter: { getValue, setValue, onChange, onRun, highlight, monaco? }
  saveTimer: null,
  leftTab: "debai",
  consoleView: null,
  busy: false,
  debai: undefined, // nội dung debai.md (cache cho prompt AI)
  lastSummary: null, // kết quả chấm gần nhất (đưa vào prompt AI)
  aiEditing: false,
};

// ---------------------------------------------------------------------
// Adapter editor: Monaco nếu tải được, nếu không dùng textarea (vẫn chạy được offline)
// ---------------------------------------------------------------------
function textareaEditor(container, value) {
  const ta = document.createElement("textarea");
  ta.className = "fallback-editor";
  ta.spellcheck = false;
  ta.value = value;
  container.replaceChildren(ta);
  return {
    getValue: () => ta.value,
    setValue: (v) => (ta.value = v),
    onChange: (cb) => ta.addEventListener("input", cb),
    onRun: (cb) =>
      ta.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
          e.preventDefault();
          cb();
        }
      }),
    highlight: () => {},
    monaco: null,
  };
}

function monacoEditor(monaco, container, value) {
  const ed = createEditor(monaco, container, value);
  let decorations = [];
  return {
    getValue: () => ed.getValue(),
    setValue: (v) => ed.setValue(v),
    onChange: (cb) => ed.onDidChangeModelContent(cb),
    onRun: (cb) => ed.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, cb),
    highlight: (line) => {
      decorations = ed.deltaDecorations(
        decorations,
        line ? [{ range: new monaco.Range(line, 1, line, 1), options: { isWholeLine: true, className: "err-line" } }] : []
      );
      if (line) ed.revealLineInCenter(line);
    },
    monaco,
    raw: ed,
  };
}

// ---------------------------------------------------------------------
// Khởi tạo
// ---------------------------------------------------------------------
async function init() {
  state.consoleView = new ConsoleView($("#console"));
  wireToolbar();

  try {
    state.lessons = await loadManifest();
  } catch (err) {
    showFatal(err.message);
    return;
  }

  const id = Number(params.get("lesson")) || 1;
  const lesson = state.lessons.find((l) => l.id === id);
  if (!lesson) {
    showFatal(`Không tìm thấy bài ${params.get("lesson")}. Dùng lab.html?lesson=1 … lab.html?lesson=${state.lessons.length}`);
    return;
  }
  state.lesson = lesson;
  document.title = `Bài ${lesson.id}: ${lesson.title} — JS Practice Lab`;

  renderHeader();
  renderPrereqs();
  renderLessonNav();

  state.practice = (await fetchText(`${lesson.dir}/practice.js`)) ?? "// Không tìm thấy practice.js";
  await setupEditor();

  if (lesson.runtime === "dom") {
    $("#dom-notice").hidden = false;
    $("#btn-run").disabled = true;
    $("#btn-grade").disabled = true;
  }

  renderAiPanel();

  const requested = params.get("tab");
  showLeftTab(["debai", "theory", "solution"].includes(requested) ? requested : "debai");
}

function showFatal(message) {
  const box = $("#fatal");
  box.textContent = message;
  box.hidden = false;
}

async function setupEditor() {
  const saved = storage.getCode(state.lesson.id);
  const initial = saved ?? state.practice;
  const container = $("#editor");

  let adapter;
  try {
    const monaco = await loadMonaco();
    adapter = monacoEditor(monaco, container, initial);
  } catch (err) {
    showNote(`${err.message}. Đang dùng ô soạn thảo đơn giản.`);
    adapter = textareaEditor(container, initial);
  }
  state.editor = adapter;

  adapter.onChange(() => scheduleSave());
  adapter.onRun(() => runCode());
}

function scheduleSave() {
  clearTimeout(state.saveTimer);
  state.saveTimer = setTimeout(() => {
    const id = state.lesson.id;
    storage.setCode(id, state.editor.getValue());
    const current = storage.getStatus(id);
    if (current.status !== "passed") storage.setStatus(id, { ...current, status: "in-progress" });
    renderHeader();
  }, 500);
}

// ---------------------------------------------------------------------
// Giao diện: header, tiên quyết, điều hướng
// ---------------------------------------------------------------------
function renderHeader() {
  const l = state.lesson;
  $("#lesson-title").textContent = `Bài ${l.id}: ${l.title}`;
  $("#lesson-tags").textContent = l.tags.join(" · ");

  const s = storage.getStatus(l.id);
  const badge = $("#status-badge");
  const labels = { passed: "✅ Đã đạt", "in-progress": "✏️ Đang làm", "not-started": "⬜ Chưa làm" };
  badge.textContent = labels[s.status] || labels["not-started"];
  badge.className = `badge badge-${s.status}`;

  const done = state.lessons.filter((x) => storage.getStatus(x.id).status === "passed").length;
  $("#progress-text").textContent = `Tiến độ: ${done}/${state.lessons.length || TOTAL_LESSONS_HINT} bài`;
}

function renderPrereqs() {
  const l = state.lesson;
  const notDone = l.prerequisites
    .map((pid) => state.lessons.find((x) => x.id === pid))
    .filter((p) => p && storage.getStatus(p.id).status !== "passed");
  const box = $("#prereq");
  if (!notDone.length) {
    box.hidden = true;
    return;
  }
  box.hidden = false;
  box.replaceChildren(
    document.createTextNode("⚠️ Nên hoàn thành trước: "),
    ...notDone.flatMap((p, i) => {
      const a = document.createElement("a");
      a.href = `lab.html?lesson=${p.id}`;
      a.textContent = `Bài ${p.id} (${p.title})`;
      return i ? [document.createTextNode(", "), a] : [a];
    })
  );
}

function renderLessonNav() {
  const select = $("#lesson-select");
  select.replaceChildren(
    ...state.lessons.map((x) => {
      const o = document.createElement("option");
      o.value = x.id;
      o.textContent = `${x.id}. ${x.title}`;
      o.selected = x.id === state.lesson.id;
      return o;
    })
  );
  const idx = state.lessons.findIndex((x) => x.id === state.lesson.id);
  const prev = state.lessons[idx - 1];
  const next = state.lessons[idx + 1];
  $("#btn-prev").disabled = !prev;
  $("#btn-next").disabled = !next;
  if (prev) $("#btn-prev").onclick = () => goTo(prev.id);
  if (next) $("#btn-next").onclick = () => goTo(next.id);
}

function goTo(id, extra = "") {
  location.href = `lab.html?lesson=${id}${extra}`;
}

// ---------------------------------------------------------------------
// Panel trái: Đề bài / Lý thuyết / Lời giải
// ---------------------------------------------------------------------
// Phóng to / thu nhỏ khung lý thuyết (chỉ dùng khi đang ở tab Lý thuyết)
function setLeftFullscreen(on) {
  const pane = $("#pane-left");
  const btn = $("#btn-fullscreen");
  pane.classList.toggle("fullscreen", on);
  btn.textContent = on ? "✕ Thu nhỏ" : "⛶ Toàn màn hình";
  btn.title = on ? "Thu nhỏ (Esc)" : "Phóng to lý thuyết (Esc để thoát)";
  btn.setAttribute("aria-pressed", String(on));
}

async function showLeftTab(tab) {
  state.leftTab = tab;
  const fsBtn = $("#btn-fullscreen");
  fsBtn.hidden = tab !== "theory";
  if (tab !== "theory") setLeftFullscreen(false);
  document.querySelectorAll("[data-left-tab]").forEach((b) => {
    b.classList.toggle("active", b.dataset.leftTab === tab);
  });
  const content = $("#left-content");
  const l = state.lesson;

  if (tab === "debai" || tab === "theory") {
    content.replaceChildren(textOf("Đang tải…"));
    const path = tab === "debai" ? `${l.dir}/debai.md` : l.doc;
    const md = await fetchText(path);
    if (tab === "debai") state.debai = md;
    if (state.leftTab !== tab) return; // người dùng đã chuyển tab khác
    if (md === null) {
      content.replaceChildren(textOf(`Không tìm thấy ${path}`));
      return;
    }
    const opts = {
      onTheoryLink: (id, anchor) => {
        if (id === l.id) showLeftTab("theory");
        else goTo(id, `&tab=theory${anchor ? "#" + anchor : ""}`);
      },
    };
    if (window.marked && window.DOMPurify) {
      await renderInto(content, md, opts);
    } else {
      content.replaceChildren(Object.assign(document.createElement("pre"), { textContent: md }));
    }
    return;
  }

  // solution
  if (!storage.hasAttempted(l.id)) {
    const wrap = document.createElement("div");
    wrap.className = "locked";
    const p = document.createElement("p");
    p.textContent = "🔒 Hãy tự thử làm bài trước. Lời giải sẽ mở sau khi bạn xác nhận.";
    const btn = document.createElement("button");
    btn.className = "btn primary";
    btn.textContent = "Tôi đã thử";
    btn.onclick = () => {
      storage.setAttempted(l.id);
      showLeftTab("solution");
    };
    wrap.append(p, btn);
    content.replaceChildren(wrap);
    return;
  }
  if (state.solution === undefined) {
    content.replaceChildren(textOf("Đang tải…"));
    state.solution = await fetchText(`${l.dir}/loigiai.js`);
  }
  if (state.leftTab !== "solution") return;
  const pre = document.createElement("pre");
  pre.className = "solution";
  pre.textContent = state.solution ?? "// Không tìm thấy loigiai.js";
  content.replaceChildren(pre);
}

function textOf(text) {
  const p = document.createElement("p");
  p.className = "muted";
  p.textContent = text;
  return p;
}

// ---------------------------------------------------------------------
// Chạy & chấm
// ---------------------------------------------------------------------
function showNote(text) {
  state.consoleView.appendNote(text);
}

function setBusy(on) {
  state.busy = on;
  $("#btn-run").disabled = on || state.lesson.runtime === "dom";
  $("#btn-grade").disabled = on || state.lesson.runtime === "dom";
  $("#run-status").textContent = on ? "Đang chạy…" : "";
}

async function runCode() {
  if (state.busy) return;
  const view = state.consoleView;
  view.clear();
  state.editor.highlight(null);
  setBusy(true);
  const out = await execute({ code: state.editor.getValue(), testsSrc: null, onLog: (e) => view.append(e) });
  setBusy(false);
  reportRun(out);
  showRightTab("console");
}

function reportRun(out) {
  const view = state.consoleView;
  if (out.timedOut) {
    view.appendError({ message: "Quá 3 giây — có thể có vòng lặp vô hạn. Đã dừng." }, "Hết thời gian");
    return;
  }
  if (out.crashed) {
    view.appendError({ message: out.crashed.message }, "Worker lỗi");
    return;
  }
  const r = out.report;
  if (r.error) {
    view.appendError(r.error, r.error.name);
    state.editor.highlight(r.error.line);
  }
  view.appendNote(`— Hoàn tất: ${r.logCount} dòng log${r.overflow ? " (đã cắt bớt)" : ""} —`);
}

async function gradeCode() {
  if (state.busy) return;
  const l = state.lesson;
  setBusy(true);
  const view = state.consoleView;
  view.clear();
  state.editor.highlight(null);

  if (state.testsSrc === undefined) state.testsSrc = await fetchText(`${l.dir}/tests.js`);
  if (state.testsSrc === null) {
    setBusy(false);
    renderResults($("#results"), { passed: 0, total: 0, results: [], testsError: { message: "Bài này chưa có tests.js" } });
    showRightTab("results");
    return;
  }

  const summary = await grade({ code: state.editor.getValue(), testsSrc: state.testsSrc, onLog: (e) => view.append(e) });
  setBusy(false);
  state.lastSummary = summary;

  renderResults($("#results"), summary);
  if (summary.codeError) state.editor.highlight(summary.codeError.line);

  const passed = summary.passed === summary.total && summary.total > 0;
  storage.setStatus(l.id, {
    status: passed ? "passed" : "in-progress",
    passed: summary.passed,
    total: summary.total,
  });
  renderHeader();
  renderPrereqs();
  showRightTab("results");
}

// ---------------------------------------------------------------------
// Thanh công cụ, tab phải, mobile, diff, xuất/nhập
// ---------------------------------------------------------------------
function showRightTab(tab) {
  document.querySelectorAll("[data-right-tab]").forEach((b) => b.classList.toggle("active", b.dataset.rightTab === tab));
  $("#console").hidden = tab !== "console";
  $("#results").hidden = tab !== "results";
  $("#ai-panel").hidden = tab !== "ai";
}

// ---------------------------------------------------------------------
// AI nhận xét (không API key): soạn prompt → copy + mở chatbot → dán câu trả lời về
// ---------------------------------------------------------------------
function fillSelect(select, items, current) {
  select.replaceChildren(
    ...items.map((it) => {
      const o = document.createElement("option");
      o.value = it.id;
      o.textContent = it.label;
      o.selected = it.id === current;
      return o;
    })
  );
}

function currentPrompt() {
  return buildPrompt({
    lesson: state.lesson,
    debai: state.debai,
    code: state.editor.getValue(),
    summary: state.lastSummary,
    mode: $("#ai-mode").value,
  });
}

async function openAiDialog() {
  if (!state.lesson || !state.editor) return;
  const l = state.lesson;
  if (state.debai === undefined) state.debai = await fetchText(`${l.dir}/debai.md`);
  // Chưa chấm thì chấm trước để prompt có kết quả test (bỏ qua bài DOM)
  if (!state.lastSummary && l.runtime !== "dom") await gradeCode();

  const failed = state.lastSummary && state.lastSummary.passed < state.lastSummary.total;
  fillSelect($("#ai-mode"), MODES, storage.getPref("aiMode") || (failed ? "debug" : "grade"));
  fillSelect($("#ai-bot"), CHATBOTS, storage.getPref("aiBot") || "chatgpt");
  $("#ai-prompt").value = currentPrompt();
  $("#ai-status").textContent = "";
  $("#ai-dialog").showModal();
}

async function sendToChatbot() {
  const botId = $("#ai-bot").value;
  storage.setPref("aiBot", botId);
  storage.setPref("aiMode", $("#ai-mode").value);
  const res = await openChatbot(botId, $("#ai-prompt").value);
  const parts = [];
  parts.push(res.copied ? "✔ Đã copy prompt." : "✖ Không copy được — hãy bôi đen ô trên và Ctrl+C.");
  if (res.prefilled) parts.push(`Đã mở ${res.bot.label} với prompt điền sẵn.`);
  else if (res.opened) parts.push(`Đã mở ${res.bot.label} — dán (Ctrl+V) vào khung chat.`);
  else parts.push("Hãy dán (Ctrl+V) vào chatbot bạn dùng.");
  parts.push("Xong thì dán câu trả lời vào tab 🤖 AI.");
  $("#ai-status").textContent = parts.join(" ");
  state.aiEditing = !storage.getAiNote(state.lesson.id);
  renderAiPanel();
  showRightTab("ai");
}

function renderAiPanel() {
  const panel = $("#ai-panel");
  const l = state.lesson;
  if (!l) return;
  const note = storage.getAiNote(l.id);
  const head = document.createElement("div");
  head.className = "ai-head";

  const mkBtn = (label, cls, onClick) => {
    const b = document.createElement("button");
    b.className = `btn ${cls}`;
    b.textContent = label;
    b.addEventListener("click", onClick);
    return b;
  };

  if (!note || state.aiEditing) {
    const intro = document.createElement("p");
    intro.className = "muted";
    intro.textContent =
      "Bấm “🤖 Nhờ AI nhận xét” để gửi bài cho chatbot bạn đang dùng, rồi dán câu trả lời vào đây để lưu lại.";
    const ta = document.createElement("textarea");
    ta.className = "ai-input";
    ta.placeholder = "Dán nhận xét của AI vào đây (markdown)…";
    ta.value = note ?? "";
    head.append(
      mkBtn("💾 Lưu nhận xét", "primary", () => {
        const text = ta.value.trim();
        if (!text) return;
        storage.setAiNote(l.id, text);
        state.aiEditing = false;
        renderAiPanel();
      }),
      mkBtn("🤖 Nhờ AI nhận xét", "", openAiDialog)
    );
    if (note) head.append(mkBtn("Huỷ", "", () => ((state.aiEditing = false), renderAiPanel())));
    panel.replaceChildren(intro, ta, head);
    return;
  }

  head.append(
    mkBtn("✏️ Sửa", "", () => ((state.aiEditing = true), renderAiPanel())),
    mkBtn("🗑 Xoá", "", () => {
      if (!confirm("Xoá nhận xét AI của bài này?")) return;
      storage.clearAiNote(l.id);
      renderAiPanel();
    }),
    mkBtn("🤖 Nhận xét lại", "", openAiDialog)
  );
  const body = document.createElement("div");
  panel.replaceChildren(head, body);
  if (window.marked && window.DOMPurify) renderInto(body, note);
  else body.append(Object.assign(document.createElement("pre"), { textContent: note }));
}

function wireToolbar() {
  $("#btn-run").addEventListener("click", runCode);
  $("#btn-grade").addEventListener("click", gradeCode);

  $("#btn-reset").addEventListener("click", () => {
    if (!confirm("Đặt lại code về practice.js gốc? Code bạn đã viết sẽ bị xoá.")) return;
    state.editor.setValue(state.practice);
    storage.resetCode(state.lesson.id);
  });

  $("#btn-ai").addEventListener("click", openAiDialog);
  $("#ai-mode").addEventListener("change", () => ($("#ai-prompt").value = currentPrompt()));
  $("#ai-send").addEventListener("click", sendToChatbot);
  $("#ai-close").addEventListener("click", () => $("#ai-dialog").close());

  $("#btn-diff").addEventListener("click", openDiff);
  $("#diff-close").addEventListener("click", () => $("#diff-dialog").close());

  document.querySelectorAll("[data-left-tab]").forEach((b) =>
    b.addEventListener("click", () => showLeftTab(b.dataset.leftTab))
  );
  $("#btn-fullscreen").addEventListener("click", () =>
    setLeftFullscreen(!$("#pane-left").classList.contains("fullscreen"))
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $("#pane-left").classList.contains("fullscreen")) setLeftFullscreen(false);
  });
  document.querySelectorAll("[data-right-tab]").forEach((b) =>
    b.addEventListener("click", () => showRightTab(b.dataset.rightTab))
  );
  document.querySelectorAll("[data-mobile-pane]").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll("[data-mobile-pane]").forEach((x) => x.classList.toggle("active", x === b));
      document.querySelectorAll(".pane").forEach((p) => p.classList.toggle("mobile-active", p.id === b.dataset.mobilePane));
    })
  );

  $("#lesson-select").addEventListener("change", (e) => goTo(Number(e.target.value)));
  $("#btn-export").addEventListener("click", exportProgress);
  $("#file-import").addEventListener("change", importProgress);
  showRightTab("console");
}

async function openDiff() {
  const l = state.lesson;
  if (state.solution === undefined) state.solution = await fetchText(`${l.dir}/loigiai.js`);
  if (!storage.hasAttempted(l.id)) {
    if (!confirm("Bạn chưa xác nhận 'Tôi đã thử'. Xem lời giải bây giờ?")) return;
    storage.setAttempted(l.id);
  }
  const box = $("#diff-view");
  box.replaceChildren();
  const dialog = $("#diff-dialog");
  dialog.showModal();
  if (!state.editor.monaco) {
    box.textContent = "So sánh cần Monaco Editor (đang offline).";
    return;
  }
  const diff = createDiff(state.editor.monaco, box, state.editor.getValue(), state.solution ?? "");
  dialog.addEventListener("close", () => diff.dispose(), { once: true });
}

function exportProgress() {
  const blob = new Blob([JSON.stringify(storage.exportAll(), null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "jslab-progress.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

async function importProgress(e) {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const count = storage.importAll(JSON.parse(await file.text()));
    alert(`Đã khôi phục ${count} mục tiến độ.`);
    location.reload();
  } catch (err) {
    alert(`Không nhập được: ${err.message}`);
  }
}

init();
