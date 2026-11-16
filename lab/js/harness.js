// =====================================================================
// harness.js — lõi chạy code & chấm test. KHÔNG phụ thuộc DOM.
// Dùng chung cho:
//   - lab/js/worker.js (Web Worker trong trình duyệt)
//   - scripts/verify-tests.mjs (Node, kiểm tra lời giải đạt 100%)
// =====================================================================

const MAX_LOGS = 2000;     // chặn log vô hạn
const MAX_ITEMS = 100;     // số phần tử hiển thị tối đa của mảng/Set/Map
const MAX_DEPTH = 4;       // độ sâu tối đa khi serialize object
// new Function(...) tự thêm 2 dòng đầu vào nguồn: "function anonymous(...\n) {\n"
const FUNCTION_LINE_OFFSET = 2;

// ---------------------------------------------------------------------
// Serialize giá trị thành cây dữ liệu thuần (an toàn để postMessage)
// ---------------------------------------------------------------------
export function toTree(value, path = new Set(), depth = 0) {
  if (value === undefined) return { t: "undefined" };
  if (value === null) return { t: "null" };
  switch (typeof value) {
    case "number":
      return { t: "number", v: Object.is(value, -0) ? "-0" : String(value) };
    case "bigint":
      return { t: "bigint", v: `${value}n` };
    case "string":
      return { t: "string", v: value };
    case "boolean":
      return { t: "boolean", v: String(value) };
    case "symbol":
      return { t: "symbol", v: String(value) };
    case "function":
      return { t: "function", v: `[Function${value.name ? ": " + value.name : " (anonymous)"}]` };
  }
  if (path.has(value)) return { t: "circular", v: "[Circular]" };
  if (value instanceof Error) {
    return { t: "error", name: value.name, message: value.message };
  }
  if (value instanceof Date) {
    return { t: "date", v: isNaN(value) ? "Invalid Date" : value.toISOString() };
  }
  if (depth > MAX_DEPTH) return { t: "more", v: Array.isArray(value) ? "[Array]" : "[Object]" };

  path.add(value);
  try {
    if (Array.isArray(value)) {
      const items = value.slice(0, MAX_ITEMS).map((x) => toTree(x, path, depth + 1));
      return { t: "array", items, len: value.length, more: Math.max(0, value.length - MAX_ITEMS) };
    }
    if (value instanceof Map) {
      const entries = [...value].slice(0, MAX_ITEMS).map(([k, v]) => [toTree(k, path, depth + 1), toTree(v, path, depth + 1)]);
      return { t: "map", entries, size: value.size };
    }
    if (value instanceof Set) {
      const items = [...value].slice(0, MAX_ITEMS).map((x) => toTree(x, path, depth + 1));
      return { t: "set", items, size: value.size };
    }
    const keys = Object.keys(value);
    const entries = keys.map((k) => [k, toTree(value[k], path, depth + 1)]);
    const ctor = value.constructor && value.constructor.name !== "Object" ? value.constructor.name : "";
    return { t: "object", entries, cls: ctor };
  } finally {
    path.delete(value);
  }
}

// Chuỗi hiển thị một cây đã serialize (dùng cho log dạng text và để so khớp test)
export function inspect(tree) {
  switch (tree.t) {
    case "string": return `'${tree.v}'`;
    case "array": {
      if (!tree.items.length) return "[]";
      const more = tree.more ? `, ... ${tree.more} more` : "";
      return `[ ${tree.items.map(inspect).join(", ")}${more} ]`;
    }
    case "set": return `Set(${tree.size}) { ${tree.items.map(inspect).join(", ")} }`;
    case "map": return `Map(${tree.size}) { ${tree.entries.map(([k, v]) => `${inspect(k)} => ${inspect(v)}`).join(", ")} }`;
    case "object": {
      const body = tree.entries.map(([k, v]) => `${k}: ${inspect(v)}`).join(", ");
      const prefix = tree.cls ? `${tree.cls} ` : "";
      return body ? `${prefix}{ ${body} }` : `${prefix}{}`;
    }
    case "error": return `${tree.name}: ${tree.message}`;
    case "undefined": return "undefined";
    case "null": return "null";
    default: return tree.v;
  }
}

// Giống console.log: chuỗi giữ nguyên, các giá trị khác được inspect
export function formatArgs(args) {
  return args.map((a) => (typeof a === "string" ? a : inspect(toTree(a)))).join(" ");
}

// ---------------------------------------------------------------------
// Expect tối giản (không dùng thư viện ngoài)
// ---------------------------------------------------------------------
function show(v) {
  try {
    return typeof v === "string" ? JSON.stringify(v) : inspect(toTree(v));
  } catch {
    return String(v);
  }
}

function deepEqual(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (const [k, v] of a) if (!b.has(k) || !deepEqual(v, b.get(k))) return false;
    return true;
  }
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    for (const v of a) if (!b.has(v)) return false;
    return true;
  }
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  return ka.every((k) => Object.prototype.hasOwnProperty.call(b, k) && deepEqual(a[k], b[k]));
}

class ExpectationError extends Error {}
const fail = (msg) => new ExpectationError(msg);

export function expect(actual) {
  return {
    toBe(expected) {
      if (!Object.is(actual, expected)) throw fail(`Kỳ vọng ${show(expected)} nhưng nhận ${show(actual)}`);
    },
    toEqual(expected) {
      if (!deepEqual(actual, expected)) throw fail(`Kỳ vọng ${show(expected)} nhưng nhận ${show(actual)}`);
    },
    toBeTruthy() {
      if (!actual) throw fail(`Kỳ vọng giá trị truthy nhưng nhận ${show(actual)}`);
    },
    toMatch(re) {
      if (!re.test(String(actual))) throw fail(`Không khớp mẫu ${re}`);
    },
    toBeFalsy() {
      if (actual) throw fail(`Kỳ vọng giá trị falsy nhưng nhận ${show(actual)}`);
    },
    // actual phải là mảng dòng log (string[]). Tham số: chuỗi (khớp đúng sau khi trim) hoặc RegExp
    toContainLine(expected) {
      const lines = actualLines(actual);
      const hit = lines.some((l) =>
        expected instanceof RegExp ? expected.test(l) : l.trim() === String(expected).trim()
      );
      if (!hit) throw fail(`Không có dòng nào khớp ${show(String(expected))}`);
    },
    // Các đoạn phải xuất hiện theo đúng thứ tự (mỗi đoạn nằm trong một dòng log)
    toContainTextsInOrder(parts) {
      const lines = actualLines(actual);
      let from = 0;
      for (const part of parts) {
        const idx = lines.findIndex((l, i) => i >= from && l.includes(part));
        if (idx < 0) throw fail(`Thiếu (hoặc sai thứ tự) dòng chứa ${show(part)}`);
        from = idx + 1;
      }
    },
    toContainText(part) {
      const lines = actualLines(actual);
      if (!lines.some((l) => l.includes(part))) throw fail(`Không có dòng nào chứa ${show(part)}`);
    },
    toThrow(ErrorClass) {
      if (typeof actual !== "function") throw fail("toThrow cần một hàm");
      try {
        actual();
      } catch (e) {
        if (ErrorClass && !(e instanceof ErrorClass)) throw fail(`Ném sai loại lỗi: ${e && e.name}`);
        return;
      }
      throw fail("Kỳ vọng hàm ném lỗi nhưng không ném");
    },
  };
}

function actualLines(actual) {
  if (!Array.isArray(actual)) throw fail("Cần truyền logs() (mảng dòng log)");
  return actual;
}

// ---------------------------------------------------------------------
// Mô tả lỗi: lấy message, tên và số dòng (trong code học viên) nếu có
// ---------------------------------------------------------------------
function describeError(err, phase) {
  const message = err && err.message !== undefined ? String(err.message) : String(err);
  const name = (err && err.name) || "Error";
  let line = null;
  const stack = (err && err.stack) || "";
  const m = /<anonymous>:(\d+):\d+/.exec(stack);
  if (m && phase === "run") {
    const n = Number(m[1]) - FUNCTION_LINE_OFFSET;
    if (n > 0) line = n;
  }
  return { phase, name, message, line };
}

// ---------------------------------------------------------------------
// Chạy: code học viên -> (tuỳ chọn) bộ test
// ---------------------------------------------------------------------
export function runSandbox({ code = "", testsSrc = null, onLog = () => {} } = {}) {
  const report = { error: null, testsError: null, results: [], logCount: 0 };
  const captured = [];
  let depth = 0;
  let overflow = false;

  const emit = (level, args) => {
    const text = formatArgs(args);
    if (captured.length < MAX_LOGS) captured.push(text);
    else overflow = true;
    report.logCount++;
    if (report.logCount <= MAX_LOGS) {
      onLog({ level, depth, text, trees: args.map((a) => toTree(a)) });
    }
  };

  const fakeConsole = {
    log: (...a) => emit("log", a),
    info: (...a) => emit("info", a),
    debug: (...a) => emit("log", a),
    warn: (...a) => emit("warn", a),
    error: (...a) => emit("error", a),
    dir: (...a) => emit("log", a),
    table: (...a) => emit("table", a),
    assert: (cond, ...rest) => {
      if (!cond) emit("error", ["Assertion failed", ...rest]);
    },
    group: (...a) => {
      if (a.length) onLog({ level: "group", depth, text: formatArgs(a), trees: [] });
      depth++;
    },
    groupCollapsed: (...a) => fakeConsole.group(...a),
    groupEnd: () => {
      depth = Math.max(0, depth - 1);
    },
    time: () => {},
    timeEnd: () => {},
    clear: () => {},
  };

  // ---- 1. Chạy code học viên. Trả về get(name) để test đọc biến cấp cao nhất ----
  let api;
  try {
    const fn = new Function("console", "defineTests", `${code}\n;\nreturn { get: (name) => eval(name) };`);
    api = fn(fakeConsole, () => {});
  } catch (err) {
    report.error = describeError(err, "run");
    api = {
      get: () => {
        throw new Error("Code chưa chạy được");
      },
    };
  }

  // ---- 2. Chạy bộ test (nếu có) ----
  if (testsSrc) {
    const tests = [];
    const harness = {
      test: (id, name, fn) => tests.push({ id, name, fn }),
      get: api.get,
      logs: () => captured.slice(),
      // Mã nguồn học viên — để kiểm tra việc đặt tên (ví dụ: có biến isLoggedIn không)
      source: () => code,
      expect,
    };
    try {
      const setup = new Function("defineTests", "expect", testsSrc);
      setup((registerFn) => registerFn(harness), expect);
    } catch (err) {
      report.testsError = describeError(err, "tests");
    }
    for (const t of tests) {
      try {
        t.fn();
        report.results.push({ id: t.id, name: t.name, pass: true, message: "" });
      } catch (err) {
        const msg = err instanceof ExpectationError
          ? err.message
          : report.error
            ? `Code lỗi: ${report.error.message}`
            : `Lỗi: ${err && err.message}`;
        report.results.push({ id: t.id, name: t.name, pass: false, message: msg });
      }
    }
  }

  report.overflow = overflow;
  return report;
}
