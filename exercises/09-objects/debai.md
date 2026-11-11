# Bài Tập 09: Đối Tượng (Object) trong JavaScript

## Mục Lục
<a id="mục-lục"></a>

1. [Phần 1: Khai Báo, Truy Cập & Cập Nhật Object (Dot & Bracket Notation)](#phần-1-khai-báo-truy-cập--cập-nhật-object-dot--bracket-notation)
2. [Phần 2: Phương Thức (Method) và Từ Khóa this](#phần-2-phương-thức-method-và-từ-khóa-this)
3. [Phần 3: Duyệt và Thống Kê Dữ Liệu (Object.keys, values, entries)](#phần-3-duyệt-và-thống-kê-dữ-liệu-objectkeys-values-entries)
4. [Phần 4: Chuyển Đổi Dữ Liệu Object <-> Array (Object.fromEntries, Object.hasOwn)](#phần-4-chuyển-đổi-dữ-liệu-object---array-objectfromentries-objecthasown)

---

## Phần 1: Khai Báo, Truy Cập & Cập Nhật Object (Dot & Bracket Notation)
Tạo một object `car` gồm các thuộc tính: `brand: "Toyota"`, `model: "Camry"`, `year: 2020`.
1. Thêm thuộc tính `color: "Black"` vào `car` bằng Dot notation (`.`).
2. Thêm thuộc tính `warranty: 2` vào `car` bằng Bracket notation (`[]`).
3. Cập nhật `year` thành `2024`.
4. Xóa thuộc tính `model` khỏi `car` bằng từ khóa `delete`.
5. Dùng phương pháp Bracket Notation (`[]`) để in thuộc tính `brand` ra màn hình.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 2: Phương Thức (Method) và Từ Khóa this
Tạo một object `rectangle` đại diện cho hình chữ nhật có:
- Thuộc tính: `width: 10`, `height: 5`.
- Phương thức `getArea()`: Trả về diện tích (`this.width * this.height`).
- Phương thức `getPerimeter()`: Trả về chu vi (`(this.width + this.height) * 2`).

[⬆️ Quay lại Mục lục](#mục-lục)

---

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

[⬆️ Quay lại Mục lục](#mục-lục)
