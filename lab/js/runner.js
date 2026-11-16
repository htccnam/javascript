// runner.js — chạy code trong Web Worker MỚI mỗi lần; terminate sau timeout để bắt vòng lặp vô hạn.

export const RUN_TIMEOUT_MS = 3000;

/**
 * @param {object} opts
 * @param {string} opts.code          mã học viên
 * @param {string|null} opts.testsSrc nội dung tests.js (null = chỉ chạy)
 * @param {(entry: object) => void} opts.onLog  nhận từng dòng log (đã serialize)
 * @returns {Promise<{report?: object, timedOut?: boolean, crashed?: object}>}
 */
export function execute({ code, testsSrc = null, onLog = () => {}, timeoutMs = RUN_TIMEOUT_MS }) {
  return new Promise((resolve) => {
    let worker;
    try {
      worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
    } catch (err) {
      resolve({ crashed: { message: `Không tạo được Worker: ${err.message}` } });
      return;
    }

    let finished = false;
    const finish = (result) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      worker.terminate();
      resolve(result);
    };

    const timer = setTimeout(() => {
      finish({ timedOut: true });
    }, timeoutMs);

    worker.onmessage = (event) => {
      const data = event.data;
      if (data.type === "log") onLog(data.entry);
      else if (data.type === "done") finish({ report: data.report });
    };
    worker.onerror = (event) => {
      finish({ crashed: { message: event.message || "Lỗi không xác định trong Worker" } });
    };

    worker.postMessage({ code, testsSrc });
  });
}
