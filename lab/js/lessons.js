// lessons.js — nạp manifest và tải file văn bản của bài (đường dẫn tương đối với gốc repo).

// lab/js/lessons.js  ->  ../../  là gốc repo
const REPO_ROOT = new URL("../../", import.meta.url);

export function repoUrl(path) {
  return new URL(path, REPO_ROOT);
}

export async function loadManifest() {
  const res = await fetch(repoUrl("exercises/lessons.json"), { cache: "no-cache" });
  if (!res.ok) throw new Error(`Không đọc được exercises/lessons.json (HTTP ${res.status})`);
  const data = await res.json();
  return data.lessons;
}

export async function fetchText(path) {
  const res = await fetch(repoUrl(path), { cache: "no-cache" });
  if (!res.ok) return null; // file không tồn tại (ví dụ bài chưa có tests.js)
  return res.text();
}
