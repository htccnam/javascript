// editor.js — Monaco Editor nạp từ cdnjs (AMD loader).

const MONACO_VS = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs";
let monacoPromise = null;

export function loadMonaco() {
  if (window.monaco) return Promise.resolve(window.monaco);
  if (!monacoPromise) {
    monacoPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `${MONACO_VS}/loader.min.js`;
      s.onload = () => {
        window.require.config({ paths: { vs: MONACO_VS } });
        window.require(["vs/editor/editor.main"], () => resolve(window.monaco), reject);
      };
      s.onerror = () => reject(new Error("Không tải được Monaco Editor từ CDN (kiểm tra kết nối mạng)"));
      document.head.append(s);
    });
  }
  return monacoPromise;
}

export function createEditor(monaco, container, value) {
  return monaco.editor.create(container, {
    value,
    language: "javascript",
    theme: matchMedia("(prefers-color-scheme: dark)").matches ? "vs-dark" : "vs",
    automaticLayout: true,
    minimap: { enabled: false },
    fontSize: 14,
    tabSize: 2,
    wordWrap: "on",
    scrollBeyondLastLine: false,
  });
}

export function createDiff(monaco, container, original, modified) {
  const diff = monaco.editor.createDiffEditor(container, {
    automaticLayout: true,
    readOnly: true,
    renderSideBySide: true,
    theme: matchMedia("(prefers-color-scheme: dark)").matches ? "vs-dark" : "vs",
  });
  diff.setModel({
    original: monaco.editor.createModel(original, "javascript"),
    modified: monaco.editor.createModel(modified, "javascript"),
  });
  return diff;
}
