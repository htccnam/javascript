// Web Worker (module). Nhận {code, testsSrc}, chạy bằng harness.js, gửi log về trang chính.
import { runSandbox } from "./harness.js";

self.onmessage = (event) => {
  const { code, testsSrc } = event.data;
  const report = runSandbox({
    code,
    testsSrc,
    onLog: (entry) => self.postMessage({ type: "log", entry }),
  });
  self.postMessage({ type: "done", report });
};
