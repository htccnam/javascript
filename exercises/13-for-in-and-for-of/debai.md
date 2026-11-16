# Bài Tập 13: Vòng Lặp For-In & For-Of Trong JavaScript (For-In vs For-Of Loops)

<a id="mục-lục"></a>
## Mục Lục

- [Phần 1: Cấp Độ Cơ Bản (Cú Pháp & Bản Chất Cơ Bản)](#phần-1-cấp-độ-cơ-bản-cú-pháp--bản-chất-cơ-bản)
  - [Bài 1.1: Trải nghiệm duyệt Object với for...in](#bài-11-trải-nghiệm-duyệt-object-với-forin)
  - [Bài 1.2: Duyệt Mảng và Chuỗi với for...of](#bài-12-duyệt-mảng-và-chuỗi-với-forof)
- [Phần 2: Cấp Độ Trung Bình (Xử Lý Dữ Liệu Thực Tế)](#phần-2-cấp-độ-trung-bình-xử-lý-dữ-liệu-thực-tế)
  - [Bài 2.1: Quản lý hồ sơ nhân sự & Tính tổng kho hàng bằng for...in](#bài-21-quản-lý-hồ-sơ-nhân-sự--tính-tổng-kho-hàng-bằng-forin)
  - [Bài 2.2: Kiểm tra thuộc tính bắt buộc của sản phẩm bằng toán tử in](#bài-22-kiểm-tra-thuộc-tính-bắt-buộc-của-sản-phẩm-bằng-toán-tử-in)
  - [Bài 2.3: Tính điểm trung bình học sinh bằng for...of](#bài-23-tính-điểm-trung-bình-học-sinh-bằng-forof)
- [Phần 3: Cấp Độ Nâng Cao / Thực Chiến (Giải Thuật & Phòng Tránh Cạm Bẫy)](#phần-3-cấp-độ-nâng-cao--thực-chiến-giải-thuật--phòng-tránh-cạm-bẫy)
  - [Bài 3.1: Tìm kiếm sách trong danh mục và tối ưu hóa bằng break](#bài-31-tìm-kiếm-sách-trong-danh-mục-và-tối-ưu-hóa-bằng-break)
  - [Bài 3.2: Thực nghiệm cạm bẫy Array.prototype khi dùng for...in duyệt mảng](#bài-32-thực-nghiệm-cạm-bẫy-arrayprototype-khi-dùng-forin-duyệt-mảng)
  - [Bài 3.3: Bẻ khóa lỗi TypeError: not iterable và kỹ thuật duyệt Object bằng Object.entries()](#bài-33-bẻ-khóa-lỗi-typeerror-not-iterable-và-kỹ-thuật-duyệt-object-bằng-objectentries)

---

> **Mục tiêu thực hành:**
> - Thành thạo cú pháp và cơ chế của `for...in` để lấy danh sách tên thuộc tính (keys) của Object.
> - Hiểu rõ cách dùng Bracket Notation `object[key]` bên trong `for...in` và tránh lỗi dùng `object.key`.
> - Tận dụng sức mạnh của `for...of` để lấy trực tiếp giá trị của Mảng và Chuỗi mà không cần biến đếm `i`.
> - Phân biệt rạch ròi giữa **vòng lặp `for...in`** và **toán tử `in`** kiểm tra sự tồn tại của thuộc tính.
> - Trực tiếp tái hiện và khắc phục 2 lỗi kinh điển trong phỏng vấn JavaScript: Dính prototype khi duyệt mảng bằng `for...in` và lỗi `TypeError: not iterable` khi dùng `for...of` cho Object.

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết Trước Khi Làm Bài Tập
> * **Lý thuyết bài này:** Đọc kỹ [13 - Vòng Lặp For-In & For-Of Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/13-for-in-and-for-of.md).
> * **Kiến thức bài trước bắt buộc:**
>   1. **Duyệt Mảng & Chỉ mục** tại [11 - Mảng Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/11-arrays.md):
>      - *Vì sao bắt buộc?* Để hiểu vì sao `for...of` ra đời thay thế cho `for (let i = 0; i < arr.length; i++)`.
>   2. **Truy cập thuộc tính Object (Dot vs Bracket Notation)** tại [12 - Đối Tượng Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/12-objects.md):
>      - *Vì sao bắt buộc?* Trong `for...in`, biến `key` là chuỗi động; bạn bắt buộc phải dùng `obj[key]` chứ không thể dùng `obj.key`.
>   3. **Block Scope của `const`** tại [03 - Khai Báo Biến & Kiểu Dữ Liệu](file:///d:/github/studyProgram/javascript/docs/03-variables-and-data-types.md):
>      - *Vì sao bắt buộc?* Luôn khai báo `for (const key in obj)` hoặc `for (const item of arr)` để tránh ô nhiễm biến toàn cục.
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

<a id="phần-1-cấp-độ-cơ-bản-cú-pháp--bản-chất-cơ-bản"></a>
## Phần 1: Cấp Độ Cơ Bản (Cú Pháp & Bản Chất Cơ Bản)

<a id="bài-11-trải-nghiệm-duyệt-object-với-forin"></a>
### Bài 1.1: Trải nghiệm duyệt Object với for...in
Cho đối tượng người dùng:
```javascript
const person = {
  name: "Nguyen Van A",
  age: 30,
  city: "Hà Nội"
};
```
- **Yêu cầu:**
  1. Sử dụng vòng lặp `for...in` để in ra lần lượt tất cả các tên thuộc tính (keys) của đối tượng `person`.
  2. Tiếp tục sử dụng `for...in` và cú pháp ngoặc vuông `person[key]` để in ra thông tin theo định dạng: `Thuộc tính: <key> => Giá trị: <value>`.
  3. Trả lời câu hỏi: Nếu thay bằng `person.key` thì console sẽ in ra kết quả gì? Vì sao?

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-12-duyệt-mảng-và-chuỗi-với-forof"></a>
### Bài 1.2: Duyệt Mảng và Chuỗi với for...of
Cho mảng danh sách màu sắc và một chuỗi lời chào:
```javascript
const colors = ["red", "green", "blue", "yellow"];
const greeting = "Xin chào!";
```
- **Yêu cầu:**
  1. Sử dụng vòng lặp `for...of` duyệt qua mảng `colors` để in ra từng màu viết in hoa (dùng `.toUpperCase()`).
  2. Sử dụng vòng lặp `for...of` duyệt qua chuỗi `greeting` để đếm xem có bao nhiêu ký tự khác khoảng trắng `" "` trong chuỗi đó.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-2-cấp-độ-trung-bình-xử-lý-dữ-liệu-thực-tế"></a>
## Phần 2: Cấp Độ Trung Bình (Xử Lý Dữ Liệu Thực Tế)

<a id="bài-21-quản-lý-hồ-sơ-nhân-sự--tính-tổng-kho-hàng-bằng-forin"></a>
### Bài 2.1: Quản lý hồ sơ nhân sự & Tính tổng kho hàng bằng for...in
Cho dữ liệu nhân viên và kho hàng:
```javascript
const employee = {
  name: "Nguyễn Văn B",
  age: 28,
  position: "Front-end Developer",
  salary: 15000000
};

const inventory = {
  aoThun: 25,
  quanJeans: 30,
  giayTheThao: 15,
  muLuoiTrai: 10
};
```
- **Yêu cầu:**
  1. Dùng `for...in` định dạng thông tin nhân viên thành chuỗi hồ sơ hoàn chỉnh:
     `Thông tin nhân viên: [name: Nguyễn Văn B, age: 28, position: Front-end Developer, salary: 15000000]`.
  2. Dùng `for...in` duyệt qua đối tượng `inventory` để tính tổng số lượng toàn bộ các mặt hàng đang có trong kho. In kết quả: `Tổng số sản phẩm trong kho: X`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-22-kiểm-tra-thuộc-tính-bắt-buộc-của-sản-phẩm-bằng-toán-tử-in"></a>
### Bài 2.2: Kiểm tra thuộc tính bắt buộc của sản phẩm bằng toán tử in
Cho thông tin một sản phẩm được gửi lên từ người bán và danh sách thuộc tính bắt buộc:
```javascript
const product = {
  id: "SP01",
  name: "Điện thoại thông minh",
  price: 15000000
  // Thiếu thuộc tính "category"
};

const requiredProps = ["id", "name", "price", "category"];
```
- **Yêu cầu:**
  1. Dùng vòng lặp `for...of` duyệt qua từng phần tử trong `requiredProps`.
  2. Dùng **toán tử `in`** (`prop in product`) để kiểm tra sản phẩm có chứa thuộc tính đó không.
  3. Gom các thuộc tính còn thiếu vào một mảng `missingProps`.
  4. Nếu `missingProps` có phần tử, in ra cảnh báo: `⚠️ Sản phẩm không đủ điều kiện đăng tải! Còn thiếu: [category]`. Nếu đủ thuộc tính, in: `✅ Sản phẩm hợp lệ!`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-23-tính-điểm-trung-bình-học-sinh-bằng-forof"></a>
### Bài 2.3: Tính điểm trung bình học sinh bằng for...of
Cho danh sách điểm kiểm tra của học sinh:
```javascript
const scores = [8.5, 9.0, 7.5, 10.0, 9.5, 6.0];
```
- **Yêu cầu:**
  1. Dùng vòng lặp `for...of` tính tổng điểm và tìm điểm số cao nhất (Max score) trong danh sách.
  2. Tính điểm trung bình (làm tròn 2 chữ số thập phân bằng `.toFixed(2)`).
  3. Dựa vào điểm trung bình, xếp loại: `>= 8.0` là "Giỏi", `>= 6.5` là "Khá", còn lại "Trung bình".

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-3-cấp-độ-nâng-cao--thực-chiến-giải-thuật--phòng-tránh-cạm-bẫy"></a>
## Phần 3: Cấp Độ Nâng Cao / Thực Chiến (Giải Thuật & Phòng Tránh Cạm Bẫy)

<a id="bài-31-tìm-kiếm-sách-trong-danh-mục-và-tối-ưu-hóa-bằng-break"></a>
### Bài 3.1: Tìm kiếm sách trong danh mục và tối ưu hóa bằng break
Cho cơ sở dữ liệu sách trong thư viện:
```javascript
const books = [
  { id: 101, title: "Sách lập trình JavaScript", author: "Nguyễn Văn A", year: 2023, isAvailable: true },
  { id: 102, title: "Học thiết kế web", author: "Trần Thị B", year: 2022, isAvailable: false },
  { id: 103, title: "Kỹ năng quản lý thời gian", author: "Lê Văn C", year: 2024, isAvailable: true },
  { id: 104, title: "Giải thuật nâng cao", author: "Phạm Văn D", year: 2021, isAvailable: true }
];
```
- **Yêu cầu:**
  1. Viết vòng lặp `for...of` tìm kiếm cuốn sách có tiêu đề `"Học thiết kế web"`.
  2. Nếu tìm thấy, in ra đầy đủ thông tin: `Mã: 102 | Tên: Học thiết kế web | Tác giả: Trần Thị B | Năm: 2022 | Trạng thái: Đã mượn`.
  3. Lập tức sử dụng từ khóa `break` để thoát vòng lặp ngay khi thấy kết quả (đếm số lần lặp để chứng minh vòng lặp đã dừng lại ở lần thứ 2 thay vì chạy hết 4 cuốn sách).

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-32-thực-nghiệm-cạm-bẫy-arrayprototype-khi-dùng-forin-duyệt-mảng"></a>
### Bài 3.2: Thực nghiệm cạm bẫy Array.prototype khi dùng for...in duyệt mảng
Trong JavaScript, nhiều lập trình viên có thói quen nguy hiểm là dùng `for...in` để duyệt mảng:
```javascript
// Giả lập một thư viện bên thứ 3 vô tình mở rộng Prototype của Array:
Array.prototype.customMethod = function() { return "Hack!"; };
Array.prototype.author = "Hacker";

const techStack = ["JavaScript", "HTML", "CSS", "React"];
```
- **Yêu cầu:**
  1. Dùng vòng lặp `for...in` duyệt qua mảng `techStack` và in ra tất cả các giá trị nhận được. Hãy quan sát xem những thuộc tính "lạ" nào xuất hiện trong kết quả.
  2. Viết lại bằng vòng lặp `for...of` và so sánh kết quả.
  3. Rút ra kết luận quan trọng: Tại sao trong bất kỳ hoàn cảnh nào cũng **KHÔNG ĐƯỢC dùng `for...in` để duyệt mảng**?

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-33-bẻ-khóa-lỗi-typeerror-not-iterable-và-kỹ-thuật-duyệt-object-bằng-objectentries"></a>
### Bài 3.3: Bẻ khóa lỗi TypeError: not iterable và kỹ thuật duyệt Object bằng Object.entries()
Cho đối tượng cấu hình máy chủ:
```javascript
const serverConfig = {
  host: "localhost",
  port: 8080,
  protocol: "https",
  maxConnections: 1000
};
```
- **Yêu cầu:**
  1. Cố tình sử dụng vòng lặp `for...of` trực tiếp trên đối tượng `serverConfig` bên trong khối `try...catch` để bắt và in ra lỗi `TypeError: serverConfig is not iterable`.
  2. Giải thích vì sao Plain Object trong JavaScript không thể duyệt trực tiếp bằng `for...of`.
  3. Sử dụng kỹ thuật hiện đại: Kết hợp `Object.entries(serverConfig)` với vòng lặp `for...of` và cú pháp Destructuring `[key, value]` để duyệt qua toàn bộ cấu hình máy chủ và in ra định dạng: `⚙️ Cấu hình [key]: value`.

[⬆️ Quay lại Mục lục](#mục-lục)

---
*Tài liệu bài tập được biên soạn độc quyền cho hệ thống giáo trình JavaScript Study Program.*
