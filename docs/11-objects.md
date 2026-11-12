# 11 - Đối Tượng Trong JavaScript (Object: Cấu Trúc, Phương Thức & Từ Khóa this)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng một **hồ sơ nhân sự** trong một doanh nghiệp:
> - Hồ sơ có các thông tin mô tả danh tính (Thuộc tính / Properties): Tên, tuổi, chức vụ, mức lương.
> - Hồ sơ cũng quy định các hành động nhân viên đó có thể thực hiện (Phương thức / Methods): Điểm danh, tính lương thưởng, ký báo cáo.
> - Từ khóa **`this`** chính là đại từ xưng hô **"Tôi"** của nhân viên đó: Khi nhân viên An nói "Lương của tôi (`this.salary`)", nó trỏ chính xác vào mức lương của hồ sơ An, chứ không nhầm sang hồ sơ của đồng nghiệp bên cạnh!

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết (Prerequisites)
> Để hiểu sâu cấu trúc Object, từ khóa `this` và các phương thức tĩnh trong bài này, bạn bắt buộc phải nắm vững:
> 1. **Ngữ cảnh `this` của Regular Function vs Arrow Function** tại [08 - 3 Loại Hàm Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/08-function-types.md):
>    - *Vì sao bắt buộc?* Khi viết phương thức (Method) cho Object, dùng Function thường thì `this` trỏ đúng vào đối tượng gọi nó; nếu dùng Arrow Function thì `this` bị mất ngữ cảnh (trỏ ra ngoài Window/Global).
> 2. **Bản chất Object lưu theo tham chiếu vùng nhớ Heap** tại [03 - Khai Báo Biến & Kiểu Dữ Liệu (Mục 11.7)](file:///d:/github/studyProgram/javascript/docs/03-variables-and-data-types.md#117-object-đối-tượng-dạng-tổng-quát-key-value):
>    - *Vì sao bắt buộc?* Để hiểu vì sao copy object bằng dấu `=` (`obj2 = obj1`) sẽ làm thay đổi cả object gốc, từ đó hiểu tại sao cần dùng Spread Operator `{...obj}` hoặc `Object.assign()`.
> 3. **Thao tác duyệt Mảng** tại [10 - Mảng (Arrays)](file:///d:/github/studyProgram/javascript/docs/10-arrays.md):
>    - *Vì sao bắt buộc?* Các hàm tĩnh của Object gồm `Object.keys()`, `Object.values()`, `Object.entries()` đều trả về một **Mảng**; bạn cần kỹ năng duyệt mảng từ Bài 10 để biến đổi dữ liệu.
> * **Đích đến tiếp theo:** Object là viên gạch nền móng để bạn tiến sang [12 - Cấu Trúc Map & Set](file:///d:/github/studyProgram/javascript/docs/12-map-and-set.md) và quản lý phần tử DOM tại [13 - Thao Tác DOM](file:///d:/github/studyProgram/javascript/docs/13-dom-basics.md).
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

## Mục Lục
<a id="mục-lục"></a>

1. [Khai Báo & Truy Cập Thuộc Tính: Dot vs Bracket Notation](#1-khai-báo-truy-cập-thuộc-tính-dot-vs-bracket-notation)
2. [Thao Tác Thuộc Tính: Thêm, Sửa, Xóa (delete)](#2-thao-tác-thuộc-tính-thêm-sửa-xóa-delete)
3. [Phương Thức (Method) và Từ Khóa this](#3-phương-thức-method-và-từ-khóa-this)
4. [Các Phương Thức Tĩnh Cốt Lõi Của Object](#4-các-phương-thức-tĩnh-cốt-lõi-của-object)
5. [Chuyển Đổi Qua Lại Giữa Object và Array](#5-chuyển-đổi-qua-lại-giữa-object-và-array)
6. [Best Practices Trong Thực Tế](#6-best-practices-trong-thực-tế)

---

<a id="1-khai-báo-truy-cập-thuộc-tính-dot-vs-bracket-notation"></a>
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

<a id="2-thao-tác-thuộc-tính-thêm-sửa-xóa-delete"></a>
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

<a id="3-phương-thức-method-và-từ-khóa-this"></a>
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

<a id="4-các-phương-thức-tĩnh-cốt-lõi-của-object"></a>
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

<a id="5-chuyển-đổi-qua-lại-giữa-object-và-array"></a>
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

<a id="6-best-practices-trong-thực-tế"></a>
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
