# 10 - Đối Tượng Trong JavaScript (Object: Cấu Trúc, Phương Thức & Từ Khóa this)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng một **hồ sơ nhân sự** trong một doanh nghiệp:
> - Hồ sơ có các thông tin mô tả danh tính (Thuộc tính / Properties): Tên, tuổi, chức vụ, mức lương.
> - Hồ sơ cũng quy định các hành động nhân viên đó có thể thực hiện (Phương thức / Methods): Điểm danh, tính lương thưởng, ký báo cáo.
> - Từ khóa **`this`** chính là đại từ xưng hô **"Tôi"** của nhân viên đó: Khi nhân viên An nói "Lương của tôi (`this.salary`)", nó trỏ chính xác vào mức lương của hồ sơ An, chứ không nhầm sang hồ sơ của đồng nghiệp bên cạnh!

---

## Mục Lục
<a id="mục-lục"></a>

1. [Khai Báo & Truy Cập Thuộc Tính: Dot vs Bracket Notation](#1-khai-báo--truy-cập-thuộc-tính-dot-vs-bracket-notation)
2. [Thao Tác Thuộc Tính: Thêm, Sửa, Xóa (delete)](#2-thao-tác-thuộc-tính-thêm-sửa-xóa-delete)
3. [Phương Thức (Method) và Từ Khóa this](#3-phương-thức-method-và-từ-khóa-this)
4. [Các Phương Thức Tĩnh Cốt Lõi Của Object](#4-các-phương-thức-tĩnh-cốt-lõi-của-object)
5. [Chuyển Đổi Qua Lại Giữa Object và Array](#5-chuyển-đổi-qua-lại-giữa-object-và-array)
6. [Best Practices Trong Thực Tế](#6-best-practices-trong-thực-tế)

---

## 1. Khai Báo & Truy Cập Thuộc Tính: Dot vs Bracket Notation

```javascript
const user = {
  name: "Huy",
  age: 25,
  "home address": "Hà Nội" // Thuộc tính có khoảng trắng
};

// 1. Dot Notation (Dấu chấm - Gọn gàng, phổ biến nhất)
console.log(user.name); // "Huy"

// 2. Bracket Notation (Dấu ngoặc vuông - Dùng khi key có ký tự đặc biệt hoặc là biến động)
console.log(user["home address"]); // "Hà Nội"

const keyName = "age";
console.log(user[keyName]); // 25
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 2. Thao Tác Thuộc Tính: Thêm, Sửa, Xóa (delete)

```javascript
const car = { brand: "Toyota" };

// Thêm mới
car.color = "Red";
car["year"] = 2024;

// Cập nhật
car.color = "Black";

// Xóa thuộc tính
delete car.color;
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 3. Phương Thức (Method) và Từ Khóa this
Phương thức là một hàm được gán làm thuộc tính của Object. Từ khóa `this` bên trong một regular method trỏ về chính object đang gọi phương thức đó:

```javascript
const rectangle = {
  width: 10,
  height: 5,
  getArea() {
    return this.width * this.height; // this trỏ tới rectangle
  },
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
};

console.log(rectangle.getArea()); // 50
```

> [!WARNING]
> **Cạm bẫy:** Không dùng Arrow Function làm method cho Object nếu cần dùng `this`, vì Arrow function không có `this` riêng mà kế thừa `this` từ phạm vi cha (thường là `window` hoặc `global`).

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 4. Các Phương Thức Tĩnh Cốt Lõi Của Object
Constructor `Object` cung cấp các phương thức tĩnh cực mạnh:

- **`Object.keys(obj)`**: Trả về mảng chứa tất cả các key (khóa) của object.
- **`Object.values(obj)`**: Trả về mảng chứa tất cả các giá trị của object.
- **`Object.entries(obj)`**: Trả về mảng 2 chiều chứa các cặp `[key, value]`.
- **`Object.hasOwn(obj, prop)`**: Kiểm tra an toàn xem thuộc tính có thuộc về chính object đó hay không (thay thế cho `hasOwnProperty`).

```javascript
const scores = { math: 9, physics: 8 };

console.log(Object.keys(scores));    // ["math", "physics"]
console.log(Object.values(scores));  // [9, 8]
console.log(Object.entries(scores)); // [["math", 9], ["physics", 8]]
console.log(Object.hasOwn(scores, "math")); // true
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 5. Chuyển Đổi Qua Lại Giữa Object và Array

```javascript
// 1. Chuyển Object -> Array 2 chiều
const entries = Object.entries({ theme: "dark", lang: "vi" });
// [["theme", "dark"], ["lang", "vi"]]

// 2. Chuyển Array 2 chiều -> Object
const obj = Object.fromEntries(entries);
// { theme: "dark", lang: "vi" }
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 6. Best Practices Trong Thực Tế
1. Duyệt Object bằng `Object.entries()` kết hợp `for...of` và Destructuring:
   ```javascript
   for (const [key, value] of Object.entries(studentScores)) {
     console.log(`Môn ${key}: ${value} điểm`);
   }
   ```
2. Dùng Object Destructuring để code ngắn gọn:
   ```javascript
   const { brand, year } = car;
   ```

[⬆️ Quay lại Mục lục](#mục-lục)
