// ai-review.js — soạn prompt nhờ chatbot (ChatGPT, Claude, Gemini…) nhận xét / chấm bài.
// Không dùng API key: chép prompt vào clipboard và mở chatbot ở tab mới (điền sẵn nếu hỗ trợ ?q=).

// Giới hạn độ dài URL an toàn; prompt dài hơn chỉ copy rồi mở trang chủ chatbot.
const MAX_URL_PROMPT = 6000;

export const CHATBOTS = [
  { id: "chatgpt", label: "ChatGPT", home: "https://chatgpt.com/", prefill: (q) => `https://chatgpt.com/?q=${q}` },
  { id: "claude", label: "Claude", home: "https://claude.ai/new", prefill: (q) => `https://claude.ai/new?q=${q}` },
  { id: "gemini", label: "Gemini", home: "https://gemini.google.com/app", prefill: null },
  { id: "copilot", label: "Copilot", home: "https://copilot.microsoft.com/", prefill: (q) => `https://copilot.microsoft.com/?q=${q}` },
  { id: "perplexity", label: "Perplexity", home: "https://www.perplexity.ai/", prefill: (q) => `https://www.perplexity.ai/search?q=${q}` },
  { id: "other", label: "Khác (chỉ copy)", home: null, prefill: null },
];

export const MODES = [
  { id: "grade", label: "📝 Nhận xét & chấm điểm" },
  { id: "hint", label: "💡 Gợi ý (không lộ lời giải)" },
  { id: "debug", label: "🐞 Giải thích lỗi" },
];

const MODE_INSTRUCTIONS = {
  grade: `Hãy chấm bài trên theo thang 10 và trả lời bằng markdown, đúng các mục sau:
## Điểm: X/10
## ✅ Điểm tốt
## ❌ Lỗi / chưa đúng yêu cầu
(nêu rõ TODO / bài nào, dòng nào nếu có thể)
## 🔧 Cách cải thiện
(đặt tên biến, cách viết hiện đại hơn, trường hợp biên…)
## 💡 Gợi ý code
(chỉ đoạn ngắn minh hoạ cho phần sai, KHÔNG viết lại toàn bộ lời giải)

Tiêu chí: đúng yêu cầu đề (quan trọng nhất), kết quả test tự động, code dễ đọc, dùng đúng kiến thức của bài.`,
  hint: `Tôi đang bí. Hãy đưa GỢI Ý từng bước để tôi tự làm tiếp:
- KHÔNG viết code lời giải hoàn chỉnh.
- Chỉ ra phần nào đang thiếu/sai và nên nghĩ theo hướng nào.
- Có thể nhắc lại khái niệm lý thuyết liên quan, ví dụ minh hoạ khác với đề bài.
Trả lời bằng markdown, ngắn gọn.`,
  debug: `Code của tôi đang lỗi hoặc không qua test. Hãy:
## 🐞 Nguyên nhân
(giải thích dễ hiểu vì sao lỗi / test fail)
## 🔍 Vị trí
(dòng / đoạn code gây lỗi)
## 🔧 Cách sửa
(hướng sửa, chỉ đoạn code ngắn cần đổi)
Trả lời bằng markdown.`,
};

function summaryText(summary) {
  if (!summary) return "(Chưa chấm tự động)";
  const lines = [];
  if (summary.timedOut) lines.push("- Code chạy quá thời gian (có thể vòng lặp vô hạn).");
  if (summary.crashed) lines.push(`- Worker lỗi: ${summary.crashed}`);
  if (summary.testsError) lines.push(`- tests.js lỗi: ${summary.testsError.message}`);
  if (summary.codeError) {
    const e = summary.codeError;
    lines.push(`- Code có lỗi${e.line ? ` ở dòng ${e.line}` : ""}: ${e.name}: ${e.message}`);
  }
  lines.push(`- Đạt ${summary.passed}/${summary.total} test.`);
  const failed = (summary.results || []).filter((r) => !r.pass);
  if (failed.length) {
    lines.push("- Test chưa qua:");
    for (const r of failed) lines.push(`  - [${r.id}] ${r.name}: ${r.message}`);
  }
  return lines.join("\n");
}

/** Ghép prompt tiếng Việt từ đề bài + code + kết quả chấm. Không bao giờ đưa lời giải vào. */
export function buildPrompt({ lesson, debai, code, summary, mode }) {
  const tags = lesson.tags?.length ? ` (${lesson.tags.join(", ")})` : "";
  return `Bạn là giảng viên JavaScript, đang hướng dẫn một người mới học. Hãy trả lời bằng tiếng Việt, thân thiện, cụ thể.

# Bài ${lesson.id}: ${lesson.title}${tags}

## Đề bài
${(debai || "(không có đề bài)").trim()}

## Code của tôi
\`\`\`js
${code.trim()}
\`\`\`

## Kết quả chấm tự động
${summaryText(summary)}

## Yêu cầu
${MODE_INSTRUCTIONS[mode] || MODE_INSTRUCTIONS.grade}
`;
}

// Copy đồng bộ bằng execCommand (dự phòng khi Clipboard API bị chặn / không có).
function copyTextSync(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  // Khi có <dialog> modal đang mở, phần còn lại của trang bị inert → gắn vào dialog.
  (document.querySelector("dialog[open]") || document.body).append(ta);
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  ta.remove();
  return ok;
}

/**
 * Copy prompt rồi mở chatbot. Trả về { copied, prefilled, opened } để báo cho người dùng.
 * window.open phải gọi trước await để không bị chặn popup.
 */
export async function openChatbot(botId, prompt) {
  const bot = CHATBOTS.find((b) => b.id === botId) || CHATBOTS[CHATBOTS.length - 1];
  const encoded = encodeURIComponent(prompt);
  const prefilled = Boolean(bot.prefill) && encoded.length <= MAX_URL_PROMPT;
  const url = prefilled ? bot.prefill(encoded) : bot.home;

  // Copy TRƯỚC khi mở tab mới (tab mới lấy focus sẽ làm Clipboard API từ chối).
  // execCommand chạy đồng bộ ngay khi trang còn focus; Clipboard API là đường chính.
  const syncCopied = copyTextSync(prompt);
  const asyncCopy = navigator.clipboard?.writeText
    ? navigator.clipboard.writeText(prompt).then(() => true, () => false)
    : Promise.resolve(false);

  // window.open gọi đồng bộ trong cú click để không bị chặn popup.
  // Với "noopener" window.open luôn trả null nên không dùng giá trị trả về.
  if (url) window.open(url, "_blank", "noopener");

  const copied = (await asyncCopy) || syncCopied;
  return { copied, prefilled, opened: Boolean(url), bot };
}
