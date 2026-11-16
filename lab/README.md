# JS Practice Lab — làm bài tập trực tiếp trên trình duyệt

Đọc đề → viết code → chạy → chấm tự động → lưu tiến độ, không cần build tool.

## Chạy

`fetch()` không hoạt động với `file://`, nên cần một web server nhỏ:

```bash
npm run dev            # http://localhost:5173
```

Mở `http://localhost:5173/lab/lab.html?lesson=14` (đổi số `14` thành bài bạn muốn).
VS Code "Live Server" cũng chạy được.

Cần kết nối mạng lần đầu để tải Monaco Editor, marked, DOMPurify (và mermaid khi bài có sơ đồ) từ cdnjs.
Nếu Monaco không tải được, lab tự chuyển sang ô soạn thảo đơn giản.

## Thao tác

| Nút | Tác dụng |
|---|---|
| ▶ Chạy (Ctrl+Enter) | Chạy code trong Web Worker, có timeout 3 giây |
| ✅ Chấm bài | Chạy code + bộ test `tests.js`, hiện Đạt/Chưa đạt từng TODO |
| ↺ Reset | Đưa code về `practice.js` gốc |
| ⇄ So sánh lời giải | Diff code của bạn với `loigiai.js` (mở sau khi bấm "Tôi đã thử") |
| ⤓ / ⤒ | Xuất / nhập file JSON tiến độ |

Code và tiến độ lưu trong localStorage của trình duyệt. Nếu đổi máy hoặc xoá dữ liệu trình duyệt, hãy xuất tiến độ trước.

## Kiến trúc

- `lab.html`, `lab.css` — giao diện 3 khung (trên điện thoại thành tab).
- `js/harness.js` — lõi chạy code và expect tối giản. Không phụ thuộc DOM, dùng chung cho Worker và `scripts/verify-tests.mjs`.
- `js/worker.js`, `js/runner.js` — Worker mới mỗi lần chạy, terminate khi quá 3 giây.
- `js/grader.js`, `js/console-view.js`, `js/markdown.js`, `js/editor.js`, `js/storage.js`, `js/lessons.js`, `js/main.js`.
- Dữ liệu bài: `exercises/lessons.json` (manifest) và `exercises/NN-*/tests.js` (test tự động).

## Viết test cho một bài (`tests.js`)

```js
defineTests(({ test, get, logs, source, expect }) => {
  test("2.1", "In Track 1..5", () => {
    expect(logs()).toContainTextsInOrder(["Track 1: Bohemian Rhapsody", "Track 2: Stairway to Heaven"]);
  });
  test("4.1", "createOrderManager sinh ORD-001", () => {
    expect(get("createOrderManager")("ORD").generateOrder("A").orderId).toBe("ORD-001");
  });
});
```

- `get(name)` đọc biến/hàm cấp cao nhất của code học viên.
- `logs()` trả về các dòng log dạng chuỗi; `source()` trả về mã nguồn của học viên.
- Matcher: `toBe`, `toEqual`, `toBeTruthy`, `toBeFalsy`, `toMatch`, `toContainLine`, `toContainText`, `toContainTextsInOrder`, `toThrow`.

Kiểm tra test trên Node (không cần trình duyệt):

```bash
npm run test:verify                # tất cả bài
node scripts/verify-tests.mjs 14   # một bài
```

Quy tắc: `loigiai.js` phải đạt 100% test của bài, và `practice.js` gốc phải trượt ít nhất một test.

## Giới hạn hiện tại

- Bài 16 (DOM) chưa chạy được trong lab: cần iframe sandbox và fixture riêng (giai đoạn 4 của kế hoạch). Tạm thời mở `exercises/16-dom-basics/loigiai.html`.
- Lỗi cú pháp (SyntaxError) chưa hiển thị số dòng; lỗi runtime thì có.
