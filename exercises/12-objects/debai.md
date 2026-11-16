# Bài Tập 12: Đối Tượng (Object) trong JavaScript

<a id="mục-lục"></a>
## Mục Lục

1. [Phần 1: Khai Báo, Truy Cập & Cập Nhật Object (Dot & Bracket Notation)](#phần-1-khai-báo-truy-cập-cập-nhật-object-dot-bracket-notation)
2. [Phần 2: Phương Thức (Method) và Từ Khóa this](#phần-2-phương-thức-method-và-từ-khóa-this)
3. [Phần 3: Duyệt và Thống Kê Dữ Liệu (Object.keys, values, entries)](#phần-3-duyệt-và-thống-kê-dữ-liệu-object-keys-values-entries)
4. [Phần 4: Chuyển Đổi Dữ Liệu Object <-> Array (Object.fromEntries, Object.hasOwn)](#phần-4-chuyển-đổi-dữ-liệu-object-array-object-fromentries-object-hasown)
5. [Phần 5: Kỹ Thuật Object Destructuring (Phân Rã Thuộc Tính)](#phần-5-kỹ-thuật-object-destructuring-phân-rã-thuộc-tính)
6. [Phần 6: Duyệt for...in & Phòng Tránh Cạm Bẫy Kiểm Tra Key](#phần-6-duyệt-forin--phòng-tránh-cạm-bẫy-kiểm-tra-key)

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết Trước Khi Làm Bài Tập
> * **Lý thuyết bài này:** Đọc kỹ [12 - Đối Tượng Trong JavaScript (Object)](file:///d:/github/studyProgram/javascript/docs/12-objects.md).
> * **Kiến thức bài trước bắt buộc:**
>   1. **Từ khóa `this` trong Regular Function vs Arrow Function** tại [09 - 3 Loại Hàm Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/09-function-types.md):
>      - *Vì sao bắt buộc?* Phần 2 yêu cầu viết phương thức cho Object dùng `this.brand`, nếu dùng Arrow function sẽ bị lỗi mất ngữ cảnh.
>   2. **Duyệt Mảng & Phương thức mảng** tại [11 - Mảng Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/11-arrays.md):
>      - *Vì sao bắt buộc?* Phần 3 và Phần 4 sử dụng `Object.keys()`, `Object.entries()` kết hợp duyệt mảng.
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

<a id="phần-1-khai-báo-truy-cập-cập-nhật-object-dot-bracket-notation"></a>
## Phần 1: Khai Báo, Truy Cập & Cập Nhật Object (Dot & Bracket Notation)
Tạo một object `car` gồm các thuộc tính: `brand: "Toyota"`, `model: "Camry"`, `year: 2020`.
1. Thêm thuộc tính `color: "Black"` vào `car` bằng Dot notation (`.`).
2. Thêm thuộc tính `warranty: 2` vào `car` bằng Bracket notation (`[]`).
3. Cập nhật `year` thành `2024`.
4. Xóa thuộc tính `model` khỏi `car` bằng từ khóa `delete`.
5. Dùng phương pháp Bracket Notation (`[]`) để in thuộc tính `brand` ra màn hình.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-2-phương-thức-method-và-từ-khóa-this"></a>
## Phần 2: Phương Thức (Method) và Từ Khóa this
Tạo một object `rectangle` đại diện cho hình chữ nhật có:
- Thuộc tính: `width: 10`, `height: 5`.
- Phương thức `getArea()`: Trả về diện tích (`this.width * this.height`).
- Phương thức `getPerimeter()`: Trả về chu vi (`(this.width + this.height) * 2`).

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-3-duyệt-và-thống-kê-dữ-liệu-object-keys-values-entries"></a>
## Phần 3: Duyệt và Thống Kê Dữ Liệu (Object.keys, values, entries)
Cho object chứa điểm số của một học sinh:
```javascript
const studentScores = {
  math: 8.5,
  english: 7.5,
  physics: 9.0,
  chemistry: 8.0
};
```
1. In ra mảng danh sách tất cả các môn học (`Object.keys`) và tất cả điểm (`Object.values`).
2. Tính điểm trung bình tất cả các môn của học sinh đó (kết quả: 8.25).
3. In ra danh sách theo định dạng: `Môn [Tên môn]: [Điểm] điểm` bằng 2 cách:
   - Vòng lặp `for...of` kết hợp `Object.entries()`
   - Phương thức `forEach()` của mảng

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-4-chuyển-đổi-dữ-liệu-object-array-object-fromentries-object-hasown"></a>
## Phần 4: Chuyển Đổi Dữ Liệu Object <-> Array (Object.fromEntries, Object.hasOwn)
Cho một mảng lưu trữ cấu hình dưới dạng cặp key-value:
```javascript
const configArr = [
  ["theme", "dark"],
  ["language", "vi"],
  ["notifications", true]
];
```
1. Chuyển mảng `configArr` thành một Object tên `config` bằng `Object.fromEntries()`.
2. Dùng `Object.hasOwn(config, "theme")` để kiểm tra sự tồn tại của khóa `"theme"`.
3. Cập nhật `theme` thành `"light"` và chuyển `config` ngược lại thành mảng bằng `Object.entries()`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-5-kỹ-thuật-object-destructuring-phân-rã-thuộc-tính"></a>
## Phần 5: Kỹ Thuật Object Destructuring (Phân Rã Thuộc Tính)
Cho thông tin một cuốn sách:
```javascript
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};
```
1. Sử dụng cú pháp **Object Destructuring** để trích xuất trực tiếp 2 biến `title` và `author` từ object `book`.
2. In ra console: `Tiêu đề sách: [title]` và `Tác giả: [author]`.
3. Thử trích xuất với giá trị mặc định: Lấy thuộc tính `publisher` với giá trị mặc định `"NXB Kim Đồng"`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-6-duyệt-forin--phòng-tránh-cạm-bẫy-kiểm-tra-key"></a>
## Phần 6: Duyệt for...in & Phòng Tránh Cạm Bẫy Kiểm Tra Key
Cho thông tin một nhân sự:
```javascript
const person = {
  name: "Alice",
  age: 25,
  isEmployed: true
};
```
1. Sử dụng vòng lặp `for...in` để duyệt qua từng key của `person` và in ra dạng `${key}: ${person[key]}`.
2. Kiểm tra an toàn trước khi cập nhật:
   - Dùng toán tử `in` để kiểm tra nếu `'age'` tồn tại trong `person` thì tăng `age` lên `26`.
   - In ra thông báo: `Tuổi sau sinh nhật: ${person.age}`.
3. Thử kiểm tra thuộc tính không tồn tại `'salary' in person` và in ra kết quả boolean (`false`).

[⬆️ Quay lại Mục lục](#mục-lục)
