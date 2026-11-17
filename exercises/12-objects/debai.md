# Bài Tập 12: Đối Tượng (Object) trong JavaScript

<a id="mục-lục"></a>
## Mục Lục

1. [Phần 1: Khai Báo, Truy Cập & Cập Nhật Object (Dot & Bracket Notation)](#phần-1-khai-báo-truy-cập-cập-nhật-object-dot-bracket-notation)
2. [Phần 2: Phương Thức (Method) và Từ Khóa this](#phần-2-phương-thức-method-và-từ-khóa-this)
3. [Phần 3: Duyệt và Thống Kê Dữ Liệu (Object.keys, values, entries)](#phần-3-duyệt-và-thống-kê-dữ-liệu-object-keys-values-entries)
4. [Phần 4: Chuyển Đổi Dữ Liệu Object <-> Array (Object.fromEntries, Object.hasOwn)](#phần-4-chuyển-đổi-dữ-liệu-object-array-object-fromentries-object-hasown)
5. [Phần 5: Kỹ Thuật Object Destructuring (Phân Rã Thuộc Tính)](#phần-5-kỹ-thuật-object-destructuring-phân-rã-thuộc-tính)
6. [Phần 6: Duyệt for...in & Phòng Tránh Cạm Bẫy Kiểm Tra Key](#phần-6-duyệt-forin--phòng-tránh-cạm-bẫy-kiểm-tra-key)
7. [Phần 7: Bản Chất Của const Với Object & Kỹ Thuật Đóng Băng Object.freeze](#phần-7-bản-chất-của-const-với-object--kỹ-thuật-đóng-băng-objectfreeze)
8. [Phần 8: Thuộc Tính, Phương Thức & Quy Ước Đặt Tên (Đối Tượng Dog)](#phần-8-thuộc-tính-phương-thức--quy-ước-đặt-tên-đối-tượng-dog)
9. [Phần 9: Bản Chất Từ Khóa this & Vì Sao Cần Dùng this (Đối Tượng Person)](#phần-9-bản-chất-từ-khóa-this--vì-sao-cần-dùng-this-đối-tượng-person)
10. [Phần 10: Enhanced Object Literals & Phân Rã Lồng Nhau (Nested Destructuring)](#phần-10-enhanced-object-literals--phân-rã-lồng-nhau-nested-destructuring)

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

---

<a id="phần-7-bản-chất-của-const-với-object--kỹ-thuật-đóng-băng-objectfreeze"></a>
## Phần 7: Bản Chất Của const Với Object & Kỹ Thuật Đóng Băng Object.freeze
Cho một đối tượng thành viên được khai báo bằng `const`:
```javascript
const member = {
  name: "John",
  role: "member"
};
```
1. **Sửa thuộc tính:** Đổi `name` thành `"Jane"` và thêm thuộc tính `level: 1`. In ra `member` để xác nhận thao tác thành công.
2. **Thử gán lại tham chiếu:** Bọc trong khối `try...catch` lệnh `member = { name: "Mike" }`. Trong khối `catch`, in ra tên lỗi `error.name` và `error.message` để quan sát lỗi `TypeError: Assignment to constant variable`.
3. **Đóng băng đối tượng:** Dùng `Object.freeze(member)` để đóng băng `member`. In ra kết quả kiểm tra `Object.isFrozen(member)`.
4. **Kiểm chứng tính bất biến:** Thử gán `member.name = "Bob"` sau khi đã freeze, rồi in ra `member.name` để chứng minh giá trị vẫn được bảo toàn là `"Jane"`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-8-thuộc-tính-phương-thức--quy-ước-đặt-tên-đối-tượng-dog"></a>
## Phần 8: Thuộc Tính, Phương Thức & Quy Ước Đặt Tên (Đối Tượng Dog)

Mô phỏng một đối tượng cún cưng `dog` tuân thủ nghiêm ngặt quy ước đặt tên chuẩn Clean Code trong JavaScript (Thuộc tính dùng Danh từ / Cụm danh từ; Phương thức bắt đầu bằng Động từ / Cụm động từ):

1. **Khai báo đối tượng `dog` gồm:**
   - **Thuộc tính (Danh từ):**
     - `name`: chuỗi `"Scooby Doo"` (Tên của chú cún).
     - `age`: số `5` (Số tuổi).
     - `isActive`: boolean `true` (Trạng thái hoạt động, quy ước tiền tố `is...` cho kiểu Boolean).
   - **Phương thức (Động từ):**
     - `speak()`: hàm in ra màn hình console chuỗi `"Go go..."`.
     - `calculateHumanAge()`: phương thức tính toán và trả về tuổi người tương ứng của cún (`this.age * 7`).
2. **Truy cập & Gọi thực thi:**
   - In ra console các thuộc tính: `dog.name`, `dog.age`, và `dog.isActive`.
   - Gọi phương thức `dog.speak()` để thực thi hành động sủa.
   - Gọi phương thức `dog.calculateHumanAge()` và in ra kết quả tuổi quy đổi.
3. **Kiểm chứng tính phân biệt HOA - thường (Case-sensitivity):**
   - Thêm một thuộc tính mới `dog.Name = "Scrappy Doo"` (chữ `N` viết hoa).
   - In ra cả `dog.name` và `dog.Name` để chứng minh JavaScript phân biệt chữ hoa - thường giữa hai thuộc tính hoàn toàn khác nhau.
4. **Phương thức cập nhật trạng thái:**
   - Bổ sung phương thức `updateAge(newAge)` cho `dog`: nhận tham số `newAge`, cập nhật thuộc tính `this.age = newAge` và in ra `Tuổi mới của cún: [newAge]`.
   - Gọi `dog.updateAge(6)`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-9-bản-chất-từ-khóa-this--vì-sao-cần-dùng-this-đối-tượng-person"></a>
## Phần 9: Bản Chất Từ Khóa this & Vì Sao Cần Dùng this (Đối Tượng Person)

Thực hành nắm vững bản chất ngữ cảnh của từ khóa `this` và hiểu sâu lý do tại sao dùng `this.prop` lại vượt trội, an toàn hơn việc hardcode tên biến (`person.prop`):

1. **Khởi tạo đối tượng `personWithThis`:**
   - Thuộc tính: `firstName: "John"`, `lastName: "Smith"`, `age: 30`.
   - Phương thức:
     - `getFullName()`: phương thức trả về chuỗi họ và tên đầy đủ dạng `${this.firstName} ${this.lastName}`.
     - `greet()`: phương thức in ra console dòng chữ `"Hello, " + this.firstName` (dùng `this.firstName` thay vì hardcode `personWithThis.firstName`).
2. **Gọi thực thi phương thức:**
   - In ra console kết quả `personWithThis.getFullName()` (kết quả mong đợi: `"John Smith"`).
   - Gọi `personWithThis.greet()` để in ra lời chào `"Hello, John"`.
3. **Kiểm chứng tính linh hoạt và an toàn của `this` khi chuyển giao tham chiếu:**
   - Khởi tạo biến `userRef = personWithThis`.
   - Gọi `userRef.getFullName()` qua biến mới `userRef` và in kết quả.
   - Giải thích trong chú thích (comment): Vì sao việc dùng `this` giúp phương thức luôn trỏ vào đúng đối tượng đang gọi nó, ngay cả khi tên biến bị đổi hoặc gán sang một biến khác.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-10-enhanced-object-literals--phân-rã-lồng-nhau-nested-destructuring"></a>
## Phần 10: Enhanced Object Literals & Phân Rã Lồng Nhau (Nested Destructuring)

Thực hành ứng dụng toàn bộ các cú pháp hiện đại của ES6 để tối ưu hóa code khi làm việc với Object:

1. **Enhanced Object Literals:**
   - Cho các biến có sẵn:
     ```javascript
     const name = "John Doe";
     const age = 30;
     const property = "lastName";
     ```
   - Khởi tạo object `enhancedPerson` kết hợp cả 3 kỹ thuật:
     - **Property shorthand:** Khai báo thuộc tính `name` và `age` (không viết lặp `name: name`).
     - **Computed property name:** Dùng cú pháp `[property]` để gán giá trị `"Smith"`.
     - Thêm thuộc tính thông thường: `firstName: "John"`.
     - **Method shorthand:** Định nghĩa phương thức `speak()` in ra `"Go go..."` (không dùng từ khóa `: function`).
   - In ra `enhancedPerson`, kiểm tra giá trị `enhancedPerson.lastName` và gọi `enhancedPerson.speak()`.

2. **Nested Destructuring (Phân rã lồng nhau):**
   - Cho đối tượng khóa học `course`:
     ```javascript
     const course = {
       title: "JavaScript Pro",
       info: {
         url: "https://fullstack.edu.vn",
         description: "JavaScript Basic, Advanced.",
         keywords: "js basic, js advanced"
       }
     };
     ```
   - Sử dụng **Object Destructuring** trong một câu lệnh duy nhất để:
     - Trích xuất thuộc tính `title` ở tầng ngoài cùng, đặt bí danh là `courseTitle` (để tránh xung đột với biến `title` ở Phần 5).
     - Đi sâu vào thuộc tính con `info` để trích xuất `keywords`, đồng thời đổi tên biến thành `topics`.
   - In ra giá trị của hai biến vừa trích xuất: `console.log(courseTitle)` và `console.log(topics)`.

[⬆️ Quay lại Mục lục](#mục-lục)



