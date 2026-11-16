// storage.js — lưu tiến độ bằng localStorage. Mọi truy cập đều bọc try/catch
// (private window / bị chặn storage thì trang vẫn chạy, chỉ không nhớ tiến độ).

const PREFIX = "jslab:v1";
const FORMAT = "jslab-progress";

const keyOf = (id, field) => `${PREFIX}:${id}:${field}`;

function read(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function remove(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* bỏ qua */
  }
}

export const storage = {
  /** Code đã lưu của bài (null nếu chưa có). */
  getCode(id) {
    return read(keyOf(id, "code"));
  },
  setCode(id, code) {
    return write(keyOf(id, "code"), code);
  },
  resetCode(id) {
    remove(keyOf(id, "code"));
  },

  /** Trạng thái: { status: 'not-started'|'in-progress'|'passed', passed, total, at } */
  getStatus(id) {
    const raw = read(keyOf(id, "status"));
    if (!raw) return { status: "not-started", passed: 0, total: 0 };
    try {
      return JSON.parse(raw);
    } catch {
      return { status: "not-started", passed: 0, total: 0 };
    }
  },
  setStatus(id, info) {
    return write(keyOf(id, "status"), JSON.stringify({ ...info, at: new Date().toISOString() }));
  },

  /** Đã xác nhận "Tôi đã thử" để mở khoá lời giải. */
  hasAttempted(id) {
    return read(keyOf(id, "ack")) === "1";
  },
  setAttempted(id) {
    return write(keyOf(id, "ack"), "1");
  },

  /** Nhận xét AI người học dán vào (markdown). */
  getAiNote(id) {
    return read(keyOf(id, "ai"));
  },
  setAiNote(id, text) {
    return write(keyOf(id, "ai"), text);
  },
  clearAiNote(id) {
    remove(keyOf(id, "ai"));
  },

  /** Lựa chọn chung cho hộp thoại AI (chatbot, chế độ). */
  getPref(name) {
    return read(`${PREFIX}:pref:${name}`);
  },
  setPref(name, value) {
    return write(`${PREFIX}:pref:${name}`, value);
  },

  /** Xuất toàn bộ tiến độ của lab thành object (để lưu thành file JSON). */
  exportAll() {
    const data = {};
    try {
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && k.startsWith(PREFIX + ":")) data[k] = window.localStorage.getItem(k);
      }
    } catch {
      /* bỏ qua */
    }
    return { format: FORMAT, version: 1, exportedAt: new Date().toISOString(), data };
  },

  /** Nhập tiến độ từ object đã xuất. Trả về số khoá đã khôi phục. */
  importAll(payload) {
    if (!payload || payload.format !== FORMAT || typeof payload.data !== "object") {
      throw new Error("File không đúng định dạng tiến độ jslab");
    }
    let count = 0;
    for (const [k, v] of Object.entries(payload.data)) {
      if (k.startsWith(PREFIX + ":") && typeof v === "string" && write(k, v)) count++;
    }
    return count;
  },
};

export const STORAGE_PREFIX = PREFIX;
