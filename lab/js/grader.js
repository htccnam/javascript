// grader.js — chạy tests.js trên code học viên và hiển thị Đạt / Chưa đạt theo từng TODO.
import { execute } from "./runner.js";

/** Chấm bài. Trả về tóm tắt để hiển thị; không ném lỗi. */
export async function grade({ code, testsSrc, onLog }) {
  const out = await execute({ code, testsSrc, onLog });
  if (out.timedOut) {
    return { timedOut: true, passed: 0, total: 0, results: [] };
  }
  if (out.crashed) {
    return { crashed: out.crashed.message, passed: 0, total: 0, results: [] };
  }
  const r = out.report;
  const passed = r.results.filter((x) => x.pass).length;
  return {
    passed,
    total: r.results.length,
    results: r.results,
    codeError: r.error,
    testsError: r.testsError,
  };
}

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
};

/** Hiển thị kết quả chấm vào container. */
export function renderResults(container, summary) {
  container.replaceChildren();

  if (summary.timedOut) {
    container.append(el("div", "grade-banner grade-fail", "⏱ Quá 3 giây — có thể có vòng lặp vô hạn. Đã dừng chạy."));
    return;
  }
  if (summary.crashed) {
    container.append(el("div", "grade-banner grade-fail", `✖ Worker lỗi: ${summary.crashed}`));
    return;
  }
  if (summary.testsError) {
    container.append(el("div", "grade-banner grade-fail", `✖ tests.js lỗi: ${summary.testsError.message}`));
    return;
  }

  const allOk = summary.total > 0 && summary.passed === summary.total;
  const head = el(
    "div",
    `grade-banner ${allOk ? "grade-ok" : "grade-fail"}`,
    allOk
      ? `🎉 Đạt ${summary.passed}/${summary.total} test — làm tốt lắm!`
      : `Đạt ${summary.passed}/${summary.total} test`
  );
  container.append(head);

  if (summary.codeError) {
    const e = summary.codeError;
    const where = e.line ? ` ở dòng ${e.line}` : "";
    container.append(el("div", "grade-note", `Code có lỗi${where}: ${e.name}: ${e.message}`));
  }

  const list = el("ul", "grade-list");
  for (const r of summary.results) {
    const li = el("li", r.pass ? "t-pass" : "t-fail");
    li.append(el("span", "t-icon", r.pass ? "✔" : "✘"));
    li.append(el("span", "t-id", r.id));
    li.append(el("span", "t-name", r.name));
    if (!r.pass) li.append(el("div", "t-msg", r.message));
    list.append(li);
  }
  container.append(list);
}
