# Bài Tập 01: Tổng Quan Về JavaScript & Các Cách Viết Code

> **Mục tiêu thực hành:**
> - Nắm vững bản chất ngôn ngữ thông dịch (Interpreted) và định kiểu động (Dynamic Typing) trong JavaScript.
> - Tránh bẫy ngầm định về phân biệt chữ hoa - chữ thường (Case Sensitivity) và ép kiểu tự động (Type Coercion).
> - Phân biệt rõ ưu - nhược điểm của 5 cách viết và nhúng JavaScript vào trang web.
> - Tự tay viết hàm chẩn đoán môi trường thực thi (Node.js vs Browser).
> - Thành thạo kỹ thuật chuyển đổi từ mã nguồn cổ điển (Inline Event Handler) sang chuẩn hiện đại (Event Listener tách biệt).

---

<a id="mục-lục"></a>
## Mục Lục

- [Phần 1: Đặc Tính Động (Dynamic Typing) & Phân Biệt Hoa Thường (Cơ Bản)](#phần-1-đặc-tính-động-dynamic-typing--phân-biệt-hoa-thường-cơ-bản)
  - [Bài 1.1: Trải nghiệm biến đổi kiểu dữ liệu động (Dynamic Typing)](#bài-11-trải-nghiệm-biến-đổi-kiểu-dữ-liệu-động-dynamic-typing)
  - [Bài 1.2: Bẫy phân biệt chữ hoa - chữ thường (Case Sensitivity)](#bài-12-bẫy-phân-biệt-chữ-hoa---chữ-thường-case-sensitivity)
- [Phần 2: Cạm Bẫy Ép Kiểu & Phân Tích 5 Cách Viết JS (Trung Bình)](#phần-2-cạm-bẫy-ép-kiểu--phân-tích-5-cách-viết-js-trung-bình)
  - [Bài 2.1: Phép tính toán lai và ép kiểu ngầm định (Type Coercion)](#bài-21-phép-tính-toán-lai-và-ép-kiểu-ngầm-định-type-coercion)
  - [Bài 2.2: Phân tích ưu / nhược điểm của 5 cách viết JavaScript](#bài-22-phân-tích-ưu--nhược-điểm-của-5-cách-viết-javascript)
- [Phần 3: Thử Thách Thực Chiến & Chẩn Đoán Môi Trường (Nâng Cao)](#phần-3-thử-thách-thực-chiến--chẩn-đoán-môi-trường-nâng-cao)
  - [Bài 3.1: Xây dựng hàm chẩn đoán môi trường thực thi (Environment Detector)](#bài-31-xây-dựng-hàm-chẩn-đoán-môi-trường-thực-thi-environment-detector)
  - [Bài 3.2: Refactor từ Inline Event sang External Event Listener chuẩn mực](#bài-32-refactor-từ-inline-event-sang-external-event-listener-chuẩn-mực)

---

## Phần 1: Đặc Tính Động (Dynamic Typing) & Phân Biệt Hoa Thường (Cơ Bản)

### Bài 1.1: Trải nghiệm biến đổi kiểu dữ liệu động (Dynamic Typing)
Trong JavaScript, một biến có thể tự do thay đổi kiểu dữ liệu theo giá trị được gán.
- **Yêu cầu:**
  1. Khai báo biến `bienDong` với từ khóa `let` và khởi tạo giá trị ban đầu là số nguyên `100`.
  2. Lần lượt gán lại giá trị cho biến này theo thứ tự:
     - Chuỗi: `"JavaScript không cần định kiểu trước"`
     - Boolean: `true`
     - Đối tượng: `{ name: "Học JS", version: "ES6+" }`
     - Giá trị rỗng: `null`
  3. Sau mỗi lần gán, dùng toán tử `typeof` để in ra giá trị và kiểu dữ liệu hiện tại của biến.
  4. Trả lời câu hỏi: `typeof null` in ra kết quả gì? Tại sao đây lại được coi là một "lỗi lịch sử nổi tiếng" của JavaScript?

[⬆️ Quay lại Mục lục](#mục-lục)

### Bài 1.2: Bẫy phân biệt chữ hoa - chữ thường (Case Sensitivity)
Cho 3 biến được đặt tên gần giống nhau:
```javascript
let userName = "Alice";
let Username = "Bob";
let USERNAME = "Charlie";
```
- **Yêu cầu:**
  1. Hãy in cả 3 biến ra màn hình để chứng minh JavaScript phân biệt chữ hoa và chữ thường.
  2. Tạo một khối `try...catch`, bên trong thử truy cập biến `username` (viết thường toàn bộ).
  3. Bắt lỗi ném ra và giải thích: Tại sao JavaScript lại ném lỗi `ReferenceError` thay vì lấy giá trị của một trong 3 biến trên?

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 2: Cạm Bẫy Ép Kiểu & Phân Tích 5 Cách Viết JS (Trung Bình)

### Bài 2.1: Phép tính toán lai và ép kiểu ngầm định (Type Coercion)
Hãy **dự đoán kết quả** và **kiểu dữ liệu** của các biểu thức sau trước khi chạy code:
```javascript
// 1. Phép cộng giữa số và chuỗi
const ketQua1 = 10 + "20";

// 2. Phép trừ giữa số và chuỗi
const ketQua2 = "50" - 10;

// 3. Phép nhân chuỗi chứa chữ không hợp lệ
const ketQua3 = "abc" * 2;

// 4. Cộng Boolean với số
const ketQua4 = true + 5;

// 5. Cộng null với số
const ketQua5 = null + 10;
```
- **Yêu cầu:** Hãy in ra màn hình giá trị và `typeof` của từng kết quả trên, kèm lời giải thích ngắn gọn vì sao JavaScript lại cho ra kết quả đó.

[⬆️ Quay lại Mục lục](#mục-lục)

### Bài 2.2: Phân tích ưu / nhược điểm của 5 cách viết JavaScript
Cho 3 tình huống thực tế sau, hãy chọn cách viết JavaScript phù hợp nhất và giải thích lý do:
1. **Tình huống A:** Bạn cần xây dựng toàn bộ logic tương tác cho một website thương mại điện tử lớn gồm 20 trang khác nhau.
2. **Tình huống B:** Bạn đang gặp bug giao diện trên trang web thực tế và muốn nhanh chóng kiểm tra xem một biến DOM có tồn tại hay không.
3. **Tình huống C:** Một lập trình viên viết code như sau trong file HTML:
   `<button onclick="alert('Đã mua hàng thành công!')">Mua ngay</button>`  
   Theo bạn, cách viết này có nhược điểm gì nếu website có 50 nút mua hàng ở nhiều trang khác nhau?

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 3: Thử Thách Thực Chiến & Chẩn Đoán Môi Trường (Nâng Cao)

### Bài 3.1: Xây dựng hàm chẩn đoán môi trường thực thi (Environment Detector)
JavaScript là ngôn ngữ chạy được ở cả môi trường Trình duyệt (Browser) và môi trường Máy chủ (Node.js). Tuy nhiên, mỗi môi trường lại có các đối tượng toàn cục khác nhau:
- Trình duyệt có đối tượng toàn cục `window` và `document`.
- Node.js có đối tượng toàn cục `process` và `global`.

- **Yêu cầu:** Viết một hàm `detectEnvironment()` trả về một đối tượng chứa:
  - `environmentName`: `"Node.js"` hoặc `"Browser"` hoặc `"Unknown"`.
  - `hasWindow`: Boolean (`true`/`false`).
  - `hasDocument`: Boolean (`true`/`false`).
  - `hasProcess`: Boolean (`true`/`false`).
- Lưu ý: Dùng `typeof` để kiểm tra an toàn (tránh văng lỗi `ReferenceError` khi truy cập biến không tồn tại ở môi trường đối lập).
- Chạy hàm và in thông tin chẩn đoán ra console.

[⬆️ Quay lại Mục lục](#mục-lục)

### Bài 3.2: Refactor từ Inline Event sang External Event Listener chuẩn mực
Cho đoạn mã HTML và JS cũ (Legacy Code):
```html
<!-- Mã HTML cũ vi phạm Clean Code -->
<button id="btn-save" onclick="saveData()">Lưu dữ liệu</button>
<script>
    function saveData() {
        alert("Dữ liệu đã được lưu thành công!");
    }
</script>
```

- **Yêu cầu:**
  1. Viết mã JavaScript mới chuyển đổi nút trên sang mô hình **External Event Listener**:
     - Thẻ HTML chỉ có: `<button id="btn-save">Lưu dữ liệu</button>`.
     - Toàn bộ logic được tách biệt hoàn toàn bằng `addEventListener`.
  2. Bổ sung tính năng: Lắng nghe sự kiện click nhưng có kiểm tra trạng thái: Không cho phép click liên tục nhiều lần (Debounce / Trạng thái cấm spam click).

[⬆️ Quay lại Mục lục](#mục-lục)
