# AI nhận xét / chấm bài trong lab, không cần API key

## Context
Người dùng muốn mỗi bài lab có nút nhờ AI nhận xét và chấm code, nhưng **không dùng API key**. Họ sẽ dùng bất kỳ chatbot nào mình đang có (ChatGPT, Claude, Gemini, Copilot…).

Lab là trang tĩnh trên GitHub Pages, không có backend, nên trang không thể tự gọi chatbot. Cách làm là để lab **soạn sẵn prompt đầy đủ**, gồm đề bài, code hiện tại và kết quả chấm tự động. Lab chép prompt vào clipboard và mở chatbot ở tab mới, điền sẵn prompt nếu chatbot hỗ trợ. Người dùng dán câu trả lời của AI ngược lại vào lab. Lab lưu và hiển thị nhận xét đó theo từng bài.

## Bước 0
Chép nguyên văn plan này vào repo tại `plan/ai-review-lab.md`, tạo thư mục `plan/` vì hiện chưa có.

## Luồng sử dụng
1. Trên thanh công cụ có thêm nút **🤖 Nhờ AI nhận xét**, đặt cạnh "✅ Chấm bài".
2. Bấm nút để mở dialog:
   - **Chế độ**:
     - *Nhận xét & chấm điểm*: AI chấm thang 10 và nêu điểm mạnh, lỗi, cách cải thiện.
     - *Gợi ý (không lộ lời giải)*: AI chỉ gợi ý hướng đi, không viết code đáp án.
     - *Giải thích lỗi*: dùng khi test fail hoặc code có lỗi.
   - **Chatbot**: ChatGPT, Claude, Gemini, Copilot, Perplexity hoặc "Khác (chỉ copy)". Lựa chọn cuối cùng được nhớ trong localStorage.
   - Ô xem trước prompt, cho phép sửa trước khi gửi.
   - Nút **Copy & mở chatbot**.
3. Chatbot nào hỗ trợ điền sẵn qua URL thì lab dùng URL đó; nếu không thì chỉ mở trang chủ. Prompt luôn được chép vào clipboard để dán tay (Ctrl+V) khi cần.
   - ChatGPT: `https://chatgpt.com/?q=…`, Claude: `https://claude.ai/new?q=…`, Perplexity: `https://www.perplexity.ai/search?q=…`, Copilot: `https://copilot.microsoft.com/?q=…`
   - Gemini (`https://gemini.google.com/app`) và "Khác": chỉ copy.
   - Prompt dài hơn khoảng 6000 ký tự sau khi mã hoá thì không đưa vào URL, chỉ mở trang và báo "Đã copy, hãy dán vào khung chat".
4. Tab phải có thêm tab **🤖 AI**. Người dùng dán câu trả lời của AI vào ô, bấm Lưu. Nhận xét được render bằng `renderInto` (markdown đẹp như Đề bài) và lưu theo bài. Có nút Sửa và Xoá.

## Nội dung prompt (tiếng Việt)
- Vai trò: "Bạn là giảng viên JavaScript, chấm bài cho người mới học."
- Tên bài và tags, lấy từ `state.lesson`.
- Đề bài: `debai.md` của bài, tải qua `fetchText` và cache trong state.
- Code người học, đặt trong khối ```js.
- Kết quả chấm tự động, nếu có: `passed/total` và danh sách test fail kèm message, lấy từ summary của `grade()`. Nếu người dùng chưa chấm, nút AI tự chạy `gradeCode()` trước.
- Yêu cầu đầu ra theo chế độ. Ví dụ với chế độ chấm:
  `## Điểm: X/10`, `## Điểm tốt`, `## Lỗi / chưa đúng`, `## Cách cải thiện` và `## Gợi ý code` (ngắn). Câu trả lời viết bằng markdown, tiếng Việt.
- Lời giải `loigiai.js` **không** đưa vào prompt, để tránh AI lộ đáp án.

## Thay đổi file
- **`lab/js/ai-review.js`** (mới):
  - `buildPrompt({ lesson, debai, code, summary, mode })`
  - Danh sách `CHATBOTS` gồm `{ id, label, url(prompt) | null }`
  - `openChatbot(botId, prompt)` thực hiện `navigator.clipboard.writeText`, dự phòng bằng textarea với `execCommand("copy")`, rồi `window.open`.
- **`lab/js/main.js`**:
  - `gradeCode()` lưu `state.lastSummary = summary`, và đặt lại khi chuyển bài.
  - Thêm `state.debai` (cache). `showLeftTab` hiện đã fetch debai, nên tái sử dụng nội dung đó.
  - Thêm `openAiDialog()` và đăng ký nút trong `wireToolbar()`.
  - `showRightTab` hỗ trợ thêm `"ai"`, tức `#ai-panel`.
- **`lab/js/storage.js`**: thêm `getAiNote(id)`, `setAiNote(id, text)`, `clearAiNote(id)` với key `jslab:v1:<id>:ai`. Thêm `jslab:v1:aiBot` cho chatbot đã chọn. `exportAll`/import tự gồm cả key mới nếu đang quét theo prefix; cần kiểm tra lại khi làm.
- **`lab/lab.html`**:
  - Thêm nút `#btn-ai` vào toolbar.
  - Thêm tab `data-right-tab="ai"` và `<div id="ai-panel" class="results scroll" hidden>`.
  - Thêm `<dialog id="ai-dialog">` gồm select chế độ, các radio/nút chatbot, textarea prompt và các nút.
- **`lab/lab.css`**: style cho dialog và panel AI, dùng lại token có sẵn (`--primary`, `.btn`, `.diff-dialog` làm mẫu) và hỗ trợ dark mode.

## Kiểm tra
1. Chạy `npm run dev` rồi mở `http://localhost:5173/lab/lab.html?lesson=5`.
2. Viết code dở dang, bấm 🤖. Kết quả mong đợi: bài tự được chấm, dialog hiện prompt có đề bài, code và danh sách test fail, không chứa lời giải.
3. Chọn ChatGPT. Kết quả mong đợi: tab mới mở với prompt điền sẵn. Chọn Gemini: trang mở ra, Ctrl+V dán được prompt.
4. Dán một câu trả lời markdown vào tab 🤖 AI và Lưu. Kết quả mong đợi: hiển thị có định dạng, F5 vẫn còn, chuyển sang bài khác thì panel trống.
5. Xuất tiến độ ra JSON. Kết quả mong đợi: file có key `:ai`. Thử lại ở dark mode và trên mobile (≤900px).
