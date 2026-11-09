# Khai báo, truy cập và cập nhật Object

Đề bài:

- Tạo một object car gồm các thuộc tính: brand: "Toyota", model: "Camry", year: 2020.
    - Thêm thuộc tính color: "Black" vào car.(2 cách ) , cách 2 thêm warranty : 2

    - Cập nhật year thành 2024.

    - xóa thuộc tính model.

- Dùng phương pháp Bracket Notation ([]) để in thuộc tính brand ra màn hình.

# Phương thức (Method) và Từ khóa this

Đề bài:

- Tạo một object rectangle đại diện cho hình chữ nhật có:
    - Thuộc tính: width: 10, height: 5.

    - Phương thức getArea(): Trả về diện tích.

    - Phương thức getPerimeter(): Trả về chu vi.

# Duyệt và thống kê dữ liệu

Đề bài:
Cho object chứa điểm số của một học sinh:

```JavaScript
const studentScores = {
  math: 8.5,
  english: 7.5,
  physics: 9.0,
  chemistry: 8.0
};
```

- In ra mảng danh sách tất cả các môn học , tất cả điểm .
- Tính điểm trung bình tất cả các môn của học sinh đó. (8.25)
- In ra danh sách theo định dạng: Môn [Tên môn]: [Điểm] điểm. (2 cách dùng vòng lặp for và dùng 1 phương thức nào đó của mảng)

# Chuyển đổi dữ liệu Object <-> Array

Đề bài:
Cho một mảng lưu trữ cấu hình dưới dạng cặp key-value:

```javascript
const configArr = [
    ["theme", "dark"],
    ["language", "vi"],
    ["notifications", true],
];
```

- Chuyển mảng trên thành Object tên config.
- Kiểm tra xem config có khóa "theme" hay không(2 cách : tạo mảng mới và dùng phương thức tĩnh).
- Thay đổi "theme" thành "light" và chuyển Object config ngược lại thành Mảng.
