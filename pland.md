# Kế hoạch: JS Practice Lab — làm bài tập trực tiếp trên web

## Context
Dự án hiện có 17 bài (`docs/NN-*.md` + `exercises/NN-*/{debai.md, practice.js, loigiai.js, loigiai.html}`), không build tool. Học viên phải mở `practice.js` trong VS Code, sửa, rồi mở `loigiai.html` + F12 Console để xem kết quả; đề bài/lý thuyết là file `.md` thô (trình duyệt hiển thị dạng text). Mục tiêu: một trang web cho phép **đọc đề → viết code → chạy → chấm tự động → lưu tiến độ** ngay trên trình duyệt.

Quyết định đã chốt: **Vanilla HTML/JS tĩnh + CDN** (không build, deploy GitHub Pages), **có test tự động từng TODO**, **lưu tiến độ bằng localStorage** (có xuất/nhập JSON).

## Kiến trúc

```
lab/
  lab.html              # trang làm bài: lab.html?lesson=14
  lab.css
  js/
    main.js             # khởi tạo, routing theo ?lesson, phím tắt
    lessons.js          # nạp manifest
    markdown.js         # render debai.md / docs/*.md (marked + DOMPurify + mermaid)
    editor.js           # Monaco editor
    runner.js           # chạy code trong Web Worker / iframe sandbox, có timeout
    worker.js           # môi trường chạy bài thường (console giả, harness test)
    dom-runner.html     # iframe sandbox cho bài DOM (16)
    console-view.js     # hiển thị log/group/table/error như DevTools
    grader.js           # chạy tests.js, hiển thị Đạt/Chưa đạt
    storage.js          # localStorage: code, trạng thái, xuất/nhập
exercises/lessons.json  # manifest 17 bài
exercises/NN-*/tests.js # test tự động mỗi bài (mới)
exercises/16-dom-basics/fixture.html   # markup HTML tách ra từ loigiai.html
scripts/verify-tests.mjs               # Node: chạy loigiai.js với tests.js để kiểm tra test đúng
```

Thư viện CDN (pin version): `monaco-editor@0.45.0` (cdnjs loader), `marked@12.0.2`, `dompurify@3.1.6`, `mermaid@10.9.1` (chỉ khi gặp khối mermaid).

## Các thành phần chính

1. **Manifest `exercises/lessons.json`** — mỗi bài: `id`, `slug`, `title`, `tags`, `summary`, `doc`, `dir`, `runtime: "worker" | "dom"`, `prerequisites` (lấy từ đồ thị trong `agent.md`). Dùng chung cho `lab.html` và `index.html`.

2. **Giao diện `lab.html`** (3 cột, responsive thành tab trên mobile):
   - Trái: tab **Đề bài** (`debai.md`) / **Lý thuyết** (`docs/NN.md`) / **Lời giải** (`loigiai.js`, khoá sau xác nhận "Tôi đã thử").
   - Giữa: Monaco editor, nạp code đã lưu hoặc `practice.js`. Nút: ▶ Chạy (Ctrl+Enter), ✅ Chấm bài, ↺ Reset về đề gốc, so sánh với lời giải (diff editor của Monaco).
   - Phải: **Console** (log/group/table/warn/error) + **Kết quả chấm** theo từng TODO (1.1, 2.1…). Bài DOM: thêm khung **Preview** iframe.
   - Thanh trên: chọn bài trước/sau, cảnh báo bài tiên quyết chưa hoàn thành.

3. **Runner an toàn** (`runner.js`):
   - Bài thường: chạy trong **Web Worker** mới mỗi lần; `worker.terminate()` sau 3s → bắt được vòng lặp vô hạn (rất cần cho bài 08/14).
   - Bài DOM (16): iframe `sandbox="allow-scripts"` (không `allow-same-origin`), `srcdoc` = `fixture.html` + code; giao tiếp qua `postMessage`; timeout thì xoá iframe.
   - Console giả chuyển log về trang chính dạng dữ liệu đã serialize (xử lý object, array, Map/Set, undefined, NaN, vòng tham chiếu).
   - Lỗi cú pháp/runtime hiển thị kèm số dòng, highlight dòng trong Monaco.

4. **Định dạng test `tests.js`** — code học viên + harness được ghép vào cùng một hàm, nên test đọc được biến `let/const` cấp cao nhất qua `eval` cục bộ:
   ```js
   defineTests(({ test, get, logs, expect }) => {
     test("2.1", "In Track 1..5 bằng ++trackNumber", () => {
       expect(logs()).toContainLine("Track 1: Bohemian Rhapsody");
     });
     test("4.1", "createOrderManager sinh ORD-001", () => {
       const m = get("createOrderManager")("ORD");
       expect(m.generateOrder("A").id).toBe("ORD-001");
     });
   });
   ```
   Helper tối giản tự viết (`toBe`, `toEqual`, `toContainLine`, `toThrow`, `toBeTruthy`), không dùng thư viện. Bài "dự đoán giá trị" (vd 14 – 1.1) → thêm ô trả lời dạng biến `const answer_1_1 = {a: ?, b: ?}` trong practice, test so sánh.

5. **Lưu trữ** (`storage.js`): khoá `jslab:v1:<id>:code`, `jslab:v1:<id>:status` (`not-started | in-progress | passed`, số test đạt). Tự lưu (debounce 500ms). Nút xuất/nhập file JSON tiến độ. Mọi truy cập bọc try/catch.

6. **Cập nhật `index.html`**: thêm nút **"💻 Làm bài trực tuyến"** → `lab/lab.html?lesson=NN` trên mỗi thẻ bài tập, thanh tiến độ tổng (x/17) và huy hiệu trạng thái mỗi bài đọc từ localStorage. Giữ nguyên các link cũ (`loigiai.html`, `debai.md`) để không phá cách học cũ.

7. **Markdown**: renderer xử lý GitHub alert `> [!IMPORTANT]`, khối ```mermaid, highlight code, và **viết lại link** `file:///d:/github/studyProgram/javascript/...` thành link tương đối / mở trong lab (vd `docs/14-...md` → tab Lý thuyết).

## Lộ trình triển khai (theo giai đoạn)

| Giai đoạn | Nội dung | Kết quả |
|---|---|---|
| 1. Khung | `lessons.json`, `lab.html` layout, markdown render, Monaco, storage | Đọc đề + viết code + lưu được |
| 2. Runner | Worker + console view + timeout + báo lỗi dòng | Chạy code ngay trên trang |
| 3. Chấm bài | Harness `defineTests`, `grader.js`, `scripts/verify-tests.mjs`; viết `tests.js` thí điểm cho bài **14** và **13** | Chấm tự động hoạt động end-to-end |
| 4. Phủ nội dung | Viết `tests.js` cho 15 bài còn lại; bài 16 tách `fixture.html` + iframe runner | Toàn bộ 17 bài làm được trên web |
| 5. Tích hợp | Nút/tiến độ trên `index.html`, cảnh báo tiên quyết, xuất/nhập, README hướng dẫn, `npm run dev` | Sẵn sàng deploy GitHub Pages |

## Lưu ý
- `fetch()` không chạy với `file://` → thêm script `"dev": "npx --yes http-server -c-1 -p 5173"` vào `package.json` và ghi chú trong README (VS Code Live Server cũng dùng được).
- Không sửa nội dung `practice.js`/`loigiai.js` hiện có trừ khi cần biến trả lời cho bài dự đoán; các `npm run test:*` / `solution:*` vẫn chạy bằng Node như cũ.
- Lỗi nhỏ phát hiện khi đọc: `exercises/16-dom-basics/practice.js` vẫn ghi "Bài tập 15" / đường dẫn `15-dom-basics` sau khi đánh số lại — sửa luôn ở giai đoạn 4.

## Kiểm tra (Verification)
1. `node scripts/verify-tests.mjs` → mọi `loigiai.js` phải **đạt 100%** test của bài đó, và `practice.js` gốc phải **trượt** các test TODO (đảm bảo test có ý nghĩa).
2. `npm run dev` → mở `http://localhost:5173/lab/lab.html?lesson=14`: dán lời giải → Chấm bài → tất cả xanh; reload trang → code vẫn còn; nhập `while(true){}` → sau 3s báo timeout, trang không treo.
3. Bài 16: thao tác trong Preview (thêm todo, dark mode) và test DOM đạt với lời giải.
4. `index.html` hiển thị đúng tiến độ sau khi hoàn thành 1 bài; xuất JSON rồi xoá localStorage và nhập lại → khôi phục.
5. Thử trên màn hình hẹp (≈375px): layout chuyển sang tab, không cuộn ngang.
