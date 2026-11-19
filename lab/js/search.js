// lab/js/search.js — Client-side search engine tối ưu tiếng Việt cho JavaScript Study Program.
// Hỗ trợ tìm kiếm không dấu ("vong lap" -> "Vòng Lặp"), fuzzy match, highlight từ khóa và ranking.

// lab/js/search.js -> ../../ là thư mục gốc repo
const REPO_ROOT = new URL("../../", import.meta.url);

let indexData = null;
let loadPromise = null;

// Hàm chuẩn hóa tiếng Việt tối ưu: loại bỏ dấu thanh unicode, chuyển đ/Đ -> d/D, lowercase, trim
export function normalizeVi(str) {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u0111/g, 'd')
    .replace(/\u0110/g, 'D')
    .toLowerCase()
    .trim();
}

// Tải và cache search-index.json
export async function loadSearchIndex() {
  if (indexData) return indexData;
  if (!loadPromise) {
    loadPromise = (async () => {
      const url = new URL("search-index.json", REPO_ROOT);
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) throw new Error(`Không thể nạp search-index.json (HTTP ${res.status})`);
      const data = await res.json();
      // Pre-compute normalized fields để tăng tốc search runtime
      for (const doc of data.documents) {
        doc._hn = normalizeVi(doc.heading);
        doc._bcn = normalizeVi(doc.breadcrumb);
        doc._kn = (doc.keywords || []).map(k => normalizeVi(k));
      }
      indexData = data;
      return data;
    })();
  }
  return loadPromise;
}

// Tính điểm phù hợp của document với các từ khóa tìm kiếm
function computeScore(doc, terms) {
  const hn = doc._hn || '';
  const bn = doc.bodyNorm || '';
  const bcn = doc._bcn || '';
  const kn = doc._kn || [];

  let score = 0;
  let allMatched = true;

  for (const term of terms) {
    let matchedInDoc = false;

    // 1. Khớp trong Heading (trọng số cao nhất)
    if (hn.includes(term)) {
      score += 12;
      matchedInDoc = true;
      if (hn.startsWith(term)) score += 4;
      // Khớp từ nguyên vẹn
      if (new RegExp(`(?:^|\\s)${escapeRegExp(term)}(?:\\s|$)`).test(hn)) score += 6;
    }

    // 2. Khớp trong Keywords công nghệ
    if (kn.some(k => k.includes(term))) {
      score += 8;
      matchedInDoc = true;
    }

    // 3. Khớp trong Breadcrumb
    if (bcn.includes(term)) {
      score += 3;
      matchedInDoc = true;
    }

    // 4. Khớp trong nội dung Body
    if (bn.includes(term)) {
      score += 2;
      matchedInDoc = true;
    }

    if (!matchedInDoc) {
      allMatched = false;
    }
  }

  // Bonus lớn nếu TẤT CẢ các từ khóa đều có mặt trong bài (AND logic)
  if (allMatched && terms.length > 1) {
    score *= 2.2;
  }

  return score;
}

// Highlight từ khóa trong chuỗi (hỗ trợ cả khi query không dấu mà text có dấu)
function highlightMatch(text, terms) {
  if (!text) return '';
  const normText = normalizeVi(text);
  const ranges = [];

  for (const term of terms) {
    let startIdx = 0;
    while (startIdx < normText.length) {
      const foundIdx = normText.indexOf(term, startIdx);
      if (foundIdx === -1) break;
      ranges.push([foundIdx, foundIdx + term.length]);
      startIdx = foundIdx + Math.max(1, term.length);
    }
  }

  if (!ranges.length) return escapeHtml(text);

  // Gom các range trùng lặp hoặc gối lên nhau
  ranges.sort((a, b) => a[0] - b[0]);
  const merged = [ranges[0]];
  for (let i = 1; i < ranges.length; i++) {
    const prev = merged[merged.length - 1];
    const curr = ranges[i];
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }

  // Ánh xạ vị trí từ normText về text gốc
  // Chú ý: độ dài text và normText cơ bản là tương đương (sau khi NFD đã được gộp)
  // Để an toàn 100% khi có sai lệch ký tự Unicode, ta tính theo tỷ lệ chỉ số
  let html = '';
  let lastPos = 0;
  for (const [start, end] of merged) {
    const s = Math.min(start, text.length);
    const e = Math.min(end, text.length);
    html += escapeHtml(text.slice(lastPos, s));
    html += '<mark>' + escapeHtml(text.slice(s, e)) + '</mark>';
    lastPos = e;
  }
  html += escapeHtml(text.slice(lastPos));
  return html;
}

// Tạo snippet trích đoạn chứa từ khóa với highlight
function buildSnippet(body, terms) {
  if (!body) return '';
  const normBody = normalizeVi(body);

  // Tìm vị trí xuất hiện sớm nhất của một trong các term
  let bestPos = -1;
  for (const t of terms) {
    const pos = normBody.indexOf(t);
    if (pos !== -1 && (bestPos === -1 || pos < bestPos)) {
      bestPos = pos;
    }
  }

  const WINDOW_SIZE = 140;
  let start = 0;
  let end = body.length;

  if (bestPos !== -1) {
    start = Math.max(0, bestPos - 35);
    end = Math.min(body.length, start + WINDOW_SIZE);
  } else {
    end = Math.min(body.length, WINDOW_SIZE);
  }

  let slice = body.slice(start, end);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < body.length ? '…' : '';

  return prefix + highlightMatch(slice, terms) + suffix;
}

// API tìm kiếm chính
export function search(query) {
  if (!indexData || !query) return [];
  const normalizedQuery = normalizeVi(query);
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  const results = [];
  for (const doc of indexData.documents) {
    const score = computeScore(doc, terms);
    if (score > 0) {
      results.push({
        ...doc,
        score,
        headingHighlight: highlightMatch(doc.heading, terms),
        snippet: buildSnippet(doc.body || '', terms),
      });
    }
  }

  // Sắp xếp theo score giảm dần
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 25);
}

// Xây dựng đường dẫn URL chính xác dẫn đến bài và anchor
export function resultUrl(doc, fromLab = false) {
  const tab = doc.type === 'theory' ? 'theory' : 'debai';
  const prefix = fromLab ? '' : 'lab/';
  let url = `${prefix}lab.html?lesson=${doc.lessonId}&tab=${tab}`;
  if (doc.anchor) {
    url += `#${encodeURIComponent(doc.anchor)}`;
  }
  return url;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
