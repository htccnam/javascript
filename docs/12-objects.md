# 12 - Đối Tượng Trong JavaScript (Object: Cấu Trúc, Thao Tác & Từ Khóa this)

<a id="mục-lục"></a>
## Mục Lục

1. [Khái Niệm Object Literals Trong JavaScript](#1-khái-niệm-object-literals-trong-javascript)
   - [1.1. Object Literals là gì? Cú pháp cơ bản](#11-object-literals-là-gì-cú-pháp-cơ-bản)
   - [1.2. Ví dụ thực tế: Dữ liệu người dùng & Cấu hình ứng dụng](#12-ví-dụ-thực-tế-dữ-liệu-người-dùng--cấu-hình-ứng-dụng)
   - [1.3. Sơ bộ về các cách tạo Object khác (Constructor, Object.create)](#13-sơ-bộ-về-các-cách-tạo-object-khác-constructor-objectcreate)
2. [Làm Việc Với Object Cơ Bản (CRUD)](#2-làm-việc-với-object-cơ-bản-crud)
   - [2.1. Thêm một cặp key-value mới (Dot vs Bracket Notation)](#21-thêm-một-cặp-key-value-mới-dot-vs-bracket-notation)
   - [2.2. Truy cập và cập nhật giá trị thuộc tính](#22-truy-cập-và-cập-nhật-giá-trị-thuộc-tính)
   - [2.3. Xóa một cặp key-value với từ khóa delete](#23-xóa-một-cặp-key-value-với-từ-khóa-delete)
3. [Kỹ Thuật Object Destructuring (Phân Rã Thuộc Tính)](#3-kỹ-thuật-object-destructuring-phân-rã-thuộc-tính)
   - [3.1. Bản chất và cú pháp cơ bản](#31-bản-chất-và-cú-pháp-cơ-bản)
   - [3.2. Đổi tên biến (Alias) và Giá trị mặc định (Default Values)](#32-đổi-tên-biến-alias-và-giá-trị-mặc-định-default-values)
4. [Duyệt Qua Các Cặp Key-Value Của Object](#4-duyệt-qua-các-cặp-key-value-của-object)
   - [4.1. Vòng lặp for...in duyệt qua các Keys](#41-vòng-lặp-forin-duyệt-qua-các-keys)
   - [4.2. Duyệt qua bộ ba phương thức tĩnh: Object.keys, Object.values, Object.entries](#42-duyệt-qua-bộ-ba-phương-thức-tĩnh-objectkeys-objectvalues-objectentries)
5. [Phương Thức (Method) và Bản Chất Từ Khóa this](#5-phương-thức-method-và-bản-chất-từ-khóa-this)
   - [5.1. Định nghĩa phương thức và cú pháp rút gọn ES6](#51-định-nghĩa-phương-thức-và-cú-pháp-rút-gọn-es6)
   - [5.2. Ngữ cảnh của từ khóa this](#52-ngữ-cảnh-của-từ-khóa-this)
   - [5.3. Cạm bẫy Arrow Function làm method](#53-cạm-bẫy-arrow-function-làm-method)
6. [Chuyển Đổi Qua Lại Giữa Object và Array](#6-chuyển-đổi-qua-lại-giữa-object-và-array)
7. [Các Sai Lầm & Cạm Bẫy Phổ Biến (Common Pitfalls)](#7-các-sai-lầm--cạm-bẫy-phổ-biến-common-pitfalls)
   - [7.1. Không kiểm tra sự tồn tại của key trước khi truy cập](#71-không-kiểm-tra-sự-tồn-tại-của-key-trước-khi-truy-cập)
   - [7.2. Sử dụng từ khóa dành riêng (Reserved Keywords) làm key](#72-sử-dụng-từ-khóa-dành-riêng-reserved-keywords-làm-key)
   - [7.3. Nhầm lẫn giữa Dot notation và Bracket notation với biến động](#73-nhầm-lẫn-giữa-dot-notation-và-bracket-notation-với-biến-động)
8. [Bảng So Sánh Tổng Kết Cốt Lõi](#8-bảng-so-sánh-tổng-kết-cốt-lõi)

---

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng một **hồ sơ nhân sự điện tử** trong một doanh nghiệp:
> - Hồ sơ chứa các thông tin định danh (Thuộc tính / Properties): Tên, tuổi, chức vụ, mức lương — được tổ chức theo cặp nhãn tên và giá trị (`key: value`).
> - Hồ sơ cũng quy định các hành động nhân viên đó có thể thực hiện (Phương thức / Methods): Điểm danh, tính lương thưởng, ký báo cáo.
> - Từ khóa **`this`** chính là đại từ xưng hô **"Tôi"** của nhân viên đó: Khi nhân viên An nói "Lương của tôi (`this.salary`)", nó trỏ chính xác vào mức lương trong hồ sơ của An, chứ không nhầm sang hồ sơ của đồng nghiệp bên cạnh!
> - Kỹ thuật **Object Destructuring** giống như chiếc máy quét tự động: Chỉ cần bạn yêu cầu "Hãy trích xuất cho tôi Tên và Email", máy sẽ tự động rút trích 2 thông tin đó ra thành 2 biến riêng biệt để dùng ngay mà không cần bạn phải mở từng trang hồ sơ xem thủ công.

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết (Prerequisites)
> Để hiểu sâu cấu trúc Object, từ khóa `this` và các phương thức tĩnh trong bài này, bạn bắt buộc phải nắm vững:
> 1. **Bản chất Object lưu theo tham chiếu vùng nhớ Heap** tại [03 - Khai Báo Biến & Kiểu Dữ Liệu (Mục 11.7)](file:///d:/github/studyProgram/javascript/docs/03-variables-and-data-types.md#117-object-đối-tượng-dạng-tổng-quát-key-value):
>    - *Vì sao bắt buộc?* Để hiểu vì sao gán `obj2 = obj1` là dùng chung một ô nhớ (thay đổi một bên làm đổi cả hai bên).
> 2. **Ngữ cảnh `this` của Regular Function vs Arrow Function** tại [09 - 3 Loại Hàm Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/09-function-types.md):
>    - *Vì sao bắt buộc?* Khi viết phương thức cho Object, Regular Function giữ đúng ngữ cảnh `this` trỏ về Object, còn Arrow Function không có `this` riêng nên trỏ ra ngoài phạm vi bao quanh.
> 3. **Thao tác duyệt Mảng** tại [11 - Mảng (Arrays)](file:///d:/github/studyProgram/javascript/docs/11-arrays.md):
>    - *Vì sao bắt buộc?* `Object.keys()`, `Object.values()`, `Object.entries()` đều trả về một **Mảng**; bạn cần kỹ năng duyệt mảng từ Bài 11 để xử lý dữ liệu.
> * **Đích đến tiếp theo:** Object là nền móng cốt lõi để bạn học [13 - Vòng Lặp For-In & For-Of](file:///d:/github/studyProgram/javascript/docs/13-for-in-and-for-of.md), cấu trúc dữ liệu hiện đại [15 - Map & Set](file:///d:/github/studyProgram/javascript/docs/15-map-and-set.md), thao tác phần tử DOM tại [16 - Thao Tác DOM](file:///d:/github/studyProgram/javascript/docs/16-dom-basics.md), và tuần tự hóa dữ liệu trong [17 - JSON & Xử Lý Lỗi](file:///d:/github/studyProgram/javascript/docs/17-json-and-error-handling.md).
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

<a id="1-khái-niệm-object-literals-trong-javascript"></a>
## 1. Khái Niệm Object Literals Trong JavaScript

<a id="11-object-literals-là-gì-cú-pháp-cơ-bản"></a>
### 1.1. Object Literals là gì? Cú pháp cơ bản

**Object Literals (Cú pháp khởi tạo đối tượng trực tiếp)** là cách phổ biến, trực quan và ngắn gọn nhất để tạo ra một đối tượng trong JavaScript bằng việc sử dụng cặp dấu ngoặc nhọn `{}`.

Một đối tượng bao gồm tập hợp các cặp **key-value** (khóa - giá trị):
- **Key (Khóa / Tên thuộc tính):** Luôn là một chuỗi (`string`) hoặc một `symbol`. Dù bạn viết key không có dấu ngoặc kép (`name: "Alice"`), JavaScript Engine vẫn tự động coi key đó là chuỗi `"name"`.
- **Value (Giá trị thuộc tính):** Có thể là **bất kỳ kiểu dữ liệu hợp lệ nào** trong JavaScript: Chuỗi, Số, Boolean, `null`, `undefined`, Mảng (`Array`), Hàm (`Function`), hoặc thậm chí là một Object khác lồng bên trong.

```javascript
const objectName = {
  key1: value1,
  key2: value2,
  // Thêm nhiều cặp key-value khác tại đây
};
```

<a id="12-ví-dụ-thực-tế-dữ-liệu-người-dùng--cấu-hình-ứng-dụng"></a>
### 1.2. Ví dụ thực tế: Dữ liệu người dùng & Cấu hình ứng dụng

Trong phát triển ứng dụng thực tế, Object Literals giúp tổ chức các dữ liệu có liên quan mật thiết với nhau vào chung một cấu trúc rõ ràng:

```javascript
// 1. Lưu trữ thông tin tài khoản người dùng
const user = {
  username: "user123",
  email: "user@example.com",
  signUpDate: "2021-01-01",
  isActive: true,
  roles: ["admin", "editor"]
};

// 2. Định nghĩa cấu hình kết nối mạng cho ứng dụng
const config = {
  apiUrl: "https://api.example.com",
  apiKey: "abc123secret",
  timeout: 5000,
  retryAttempts: 3
};
```

<a id="13-sơ-bộ-về-các-cách-tạo-object-khác-constructor-objectcreate"></a>
### 1.3. Sơ bộ về các cách tạo Object khác (Constructor, Object.create)

Bên cạnh Object Literals `{}` là cách tạo đối tượng đơn giản và dùng nhiều nhất, JavaScript còn cung cấp các cách tạo đối tượng khác phục vụ mô hình Lập trình hướng đối tượng (OOP):
- **Hàm khởi tạo (Constructor Function):** `function Person(name) { this.name = name; } const p = new Person("Bob");` — Dùng làm khuôn mẫu tạo nhiều đối tượng có cùng thuộc tính.
- **`Object.create(proto)`:** Tạo một object mới kế thừa trực tiếp từ một prototype chỉ định sẵn.
- **ES6 Class:** Cú pháp hướng đối tượng hiện đại bọc trên nền tảng prototype.
*(Các phương pháp trên sẽ được đào sâu ở các bài học nâng cao về OOP & Prototype).*

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="2-làm-việc-với-object-cơ-bản-crud"></a>
## 2. Làm Việc Với Object Cơ Bản (CRUD)

Khi đã có một object, bạn có toàn quyền thêm, đọc, cập nhật và xóa các thuộc tính bên trong nó.

<a id="21-thêm-một-cặp-key-value-mới-dot-vs-bracket-notation"></a>
### 2.1. Thêm một cặp key-value mới (Dot vs Bracket Notation)

Có 2 cú pháp chính để thêm thuộc tính mới vào object:
1. **Dot Notation (`.` - Dấu chấm):** Cú pháp ngắn gọn, trực quan, dùng khi tên key là định danh hợp lệ (không chứa khoảng trắng, không chứa dấu gạch ngang, không bắt đầu bằng số).
2. **Bracket Notation (`[]` - Dấu ngoặc vuông):** Linh hoạt tuyệt đối, bắt buộc dùng khi:
   - Tên key chứa ký tự đặc biệt hoặc khoảng trắng (`"home address"`, `"user-agent"`).
   - Tên key được lưu trong một biến động (`obj[dynamicKey]`).

```javascript
const car = {
  make: "Toyota",
  model: "Camry"
};

// 1. Thêm mới bằng Dot notation
car.year = 2021;

// 2. Thêm mới bằng Bracket notation
car["color"] = "Gray";
car["car-engine"] = "V6 3.5L"; // Key có dấu gạch ngang bắt buộc dùng []

console.log(`Năm sản xuất: ${car.year}`); // Năm sản xuất: 2021
console.log(`Màu sắc: ${car.color}`);     // Màu sắc: Gray
```

<a id="22-truy-cập-và-cập-nhật-giá-trị-thuộc-tính"></a>
### 2.2. Truy cập và cập nhật giá trị thuộc tính

Việc cập nhật giá trị cũng sử dụng toán tử gán `=` tương tự như khi thêm mới:

```javascript
const person = {
  name: "Alice",
  age: 25
};

// Truy cập đọc giá trị
console.log(`Tuổi hiện tại: ${person.age}`); // 25

// Cập nhật giá trị mới
person.age = 26;

// Kiểm tra lại sau cập nhật
console.log(`Tuổi sau sinh nhật: ${person.age}`); // 26
```

<a id="23-xóa-một-cặp-key-value-với-từ-khóa-delete"></a>
### 2.3. Xóa một cặp key-value với từ khóa delete

Để loại bỏ hoàn toàn một cặp key-value ra khỏi object, sử dụng toán tử `delete`:

```javascript
const employee = {
  name: "Bob",
  position: "Manager",
  salary: 5000
};

console.log(`Vị trí công việc: ${employee.position}`); // "Manager"

// Xóa thuộc tính position
delete employee.position;

console.log(employee);
// Kết quả: { name: 'Bob', salary: 5000 }
// Thuộc tính position đã biến mất hoàn toàn!
console.log(employee.position); // undefined
```

> [!TIP]
> Gán `employee.position = undefined` hoặc `null` **không làm biến mất key**, key đó vẫn tồn tại trong object. Chỉ duy nhất `delete employee.position` mới gỡ bỏ hoàn toàn key ra khỏi bộ nhớ object.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="3-kỹ-thuật-object-destructuring-phân-rã-thuộc-tính"></a>
## 3. Kỹ Thuật Object Destructuring (Phân Rã Thuộc Tính)

<a id="31-bản-chất-và-cú-pháp-cơ-bản"></a>
### 3.1. Bản chất và cú pháp cơ bản

**Object Destructuring (ES6)** là cú pháp cho phép bạn "mở hộp" đối tượng và trích xuất trực tiếp các giá trị của thuộc tính vào các biến độc lập chỉ trong một dòng code:

```javascript
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};

// Cách truyền thống (dài dòng, lặp lại 'book.' nhiều lần):
// const title = book.title;
// const author = book.author;

// Cách hiện đại dùng Destructuring:
const { title, author } = book;

console.log(`Tiêu đề sách: ${title}`);   // The Great Gatsby
console.log(`Tác giả: ${author}`);       // F. Scott Fitzgerald
```

<a id="32-đổi-tên-biến-alias-và-giá-trị-mặc-định-default-values"></a>
### 3.2. Đổi tên biến (Alias) và Giá trị mặc định (Default Values)

Destructuring còn hỗ trợ đổi tên biến (để tránh trùng tên với biến sẵn có) và gán giá trị mặc định khi thuộc tính không tồn tại (`undefined`):

```javascript
const userProfile = {
  username: "nam_dev",
  city: "Hà Nội"
};

// 1. Đổi tên biến bằng dấu hai chấm (: aliasName)
// 2. Gán giá trị mặc định bằng dấu bằng (= defaultValue)
const { username: accountName, city, country = "Việt Nam" } = userProfile;

console.log(accountName); // "nam_dev" (tên biến mới)
console.log(city);        // "Hà Nội"
console.log(country);     // "Việt Nam" (giá trị mặc định fallback khi userProfile không có key country)
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="4-duyệt-qua-các-cặp-key-value-của-object"></a>
## 4. Duyệt Qua Các Cặp Key-Value Của Object

<a id="41-vòng-lặp-forin-duyệt-qua-các-keys"></a>
### 4.1. Vòng lặp for...in duyệt qua các Keys

Vòng lặp `for...in` là cấu trúc lặp kinh điển trong JavaScript được thiết kế riêng để duyệt qua tất cả các **keys** (thuộc tính có thể liệt kê) của một đối tượng:

```javascript
const person = {
  name: "John",
  age: 30,
  isEmployed: true
};

// Duyệt qua từng key của person
for (const key in person) {
  // Bắt buộc dùng Bracket notation person[key] vì 'key' là một biến!
  console.log(`${key}: ${person[key]}`);
}
// Kết quả:
// name: John
// age: 30
// isEmployed: true
```

<a id="42-duyệt-qua-bộ-ba-phương-thức-tĩnh-objectkeys-objectvalues-objectentries"></a>
### 4.2. Duyệt qua bộ ba phương thức tĩnh: Object.keys, Object.values, Object.entries

Constructor `Object` cung cấp 3 phương thức tĩnh cực kỳ mạnh mẽ giúp chuyển đổi các thành phần của Object thành Mảng để dễ dàng kết hợp cùng `for...of` hoặc các hàm xử lý mảng (`map`, `filter`, `forEach`):

```javascript
const scores = { math: 9, english: 8, physics: 8.5 };

// 1. Object.keys(obj) -> Mảng chứa tất cả các keys
const subjectList = Object.keys(scores);
console.log(subjectList); // ["math", "english", "physics"]

// 2. Object.values(obj) -> Mảng chứa tất cả các values
const scoreList = Object.values(scores);
console.log(scoreList);   // [9, 8, 8.5]

// 3. Object.entries(obj) -> Mảng 2 chiều chứa các cặp [key, value]
const entries = Object.entries(scores);
console.log(entries);     // [["math", 9], ["english", 8], ["physics", 8.5]]

// Duyệt bằng for...of kết hợp Destructuring cặp [key, value]:
for (const [subject, score] of Object.entries(scores)) {
  console.log(`Môn ${subject}: ${score} điểm`);
}
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="5-phương-thức-method-và-bản-chất-từ-khóa-this"></a>
## 5. Phương Thức (Method) và Bản Chất Từ Khóa this

<a id="51-định-nghĩa-phương-thức-và-cú-pháp-rút-gọn-es6"></a>
### 5.1. Định nghĩa phương thức và cú pháp rút gọn ES6

Phương thức (Method) là một hàm được gán làm thuộc tính của một Object:

```javascript
const rectangle = {
  width: 10,
  height: 5,

  // Cú pháp rút gọn chuẩn ES6 (khuyên dùng):
  getArea() {
    return this.width * this.height;
  },
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
};

console.log("Diện tích:", rectangle.getArea());       // 50
console.log("Chu vi:", rectangle.getPerimeter());   // 30
```

<a id="52-ngữ-cảnh-của-từ-khóa-this"></a>
### 5.2. Ngữ cảnh của từ khóa this

Bên trong một Regular Method, từ khóa `this` đại diện cho **chính đối tượng đang gọi phương thức đó** (ngữ cảnh trước dấu chấm):
- Khi gọi `rectangle.getArea()`, trước dấu chấm là `rectangle` $\rightarrow$ `this` chính là đối tượng `rectangle`.
- Nhờ có `this`, một phương thức có thể dễ dàng truy cập và thao tác với các thuộc tính nội bộ khác của chính đối tượng đó.

<a id="53-cạm-bẫy-arrow-function-làm-method"></a>
### 5.3. Cạm bẫy Arrow Function làm method

> [!WARNING]
> **Tuyệt đối không dùng Arrow Function làm method cho Object nếu bên trong cần dùng `this`!**
> ```javascript
> const counter = {
>   count: 10,
>   // ❌ SAI: Arrow function không có this riêng, nó kế thừa this từ phạm vi ngoài (global/window)
>   increment: () => {
>     this.count++; // this.count sẽ ra undefined, phép tính ra NaN!
>   }
> };
> ```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="6-chuyển-đổi-qua-lại-giữa-object-và-array"></a>
## 6. Chuyển Đổi Qua Lại Giữa Object và Array

Trong quá trình xử lý dữ liệu từ API hoặc chuẩn bị dữ liệu hiển thị bảng, việc biến đổi qua lại giữa Object và Mảng là thao tác diễn ra liên tục:

```javascript
// 1. Chuyển Mảng các cặp [key, value] thành Object (Object.fromEntries)
const configEntries = [
  ["theme", "dark"],
  ["language", "vi"],
  ["notifications", true]
];

const configObj = Object.fromEntries(configEntries);
console.log(configObj);
// Kết quả: { theme: 'dark', language: 'vi', notifications: true }

// 2. Chuyển Object thành Mảng các cặp [key, value] (Object.entries)
configObj.theme = "light";
const updatedEntries = Object.entries(configObj);
console.log(updatedEntries);
// Kết quả: [ ['theme', 'light'], ['language', 'vi'], ['notifications', true] ]
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="7-các-sai-lầm--cạm-bẫy-phổ-biến-common-pitfalls"></a>
## 7. Các Sai Lầm & Cạm Bẫy Phổ Biến (Common Pitfalls)

<a id="71-không-kiểm-tra-sự-tồn-tại-của-key-trước-khi-truy-cập"></a>
### 7.1. Không kiểm tra sự tồn tại của key trước khi truy cập

Khi bạn truy cập vào một thuộc tính không hề tồn tại trong object, JavaScript sẽ âm thầm trả về `undefined` chứ không báo lỗi ngay:

```javascript
const person = { name: "John" };
console.log(person.age); // undefined
```

Tuy nhiên, nếu bạn tiếp tục truy cập sâu vào thuộc tính con của `undefined` (`person.age.value`), chương trình sẽ ném lỗi crash ngay lập tức: `TypeError: Cannot read properties of undefined`!

#### Các cách kiểm tra an toàn:
```javascript
// Cách 1: Sử dụng toán tử 'in' (Kiểm tra key trong object và cả prototype)
if ("age" in person) {
  console.log(`Tuổi: ${person.age}`);
}

// Cách 2: Sử dụng Object.hasOwn() (Chuẩn hiện đại ES2022, an toàn nhất)
if (Object.hasOwn(person, "age")) {
  console.log(`Tuổi: ${person.age}`);
}

// Cách 3: Sử dụng Optional Chaining (?.) khi truy cập lồng nhau
console.log(person?.address?.street); // An toàn, trả về undefined nếu address không có
```

<a id="72-sử-dụng-từ-khóa-dành-riêng-reserved-keywords-làm-key"></a>
### 7.2. Sử dụng từ khóa dành riêng (Reserved Keywords) làm key

Trong JavaScript, có những từ khóa dành riêng của ngôn ngữ như `function`, `var`, `class`, `delete`, `return`, `default`, `new`.
Mặc dù trong JavaScript hiện đại (ES5+), bạn vẫn có thể đặt tên key trùng với các từ khóa này:

```javascript
const badObject = {
  function: "làm việc",
  var: 123,
  delete: true
};
```

Tuy nhiên, **đây là một Bad Practice nghiêm trọng** cần tuyệt đối tránh:
- Khi dùng Destructuring, cú pháp sẽ bị lỗi xung đột cú pháp (`const { function } = badObject;` $\rightarrow$ lỗi `SyntaxError`).
- Gây khó đọc, dễ nhầm lẫn trong quá trình bảo trì mã nguồn và dễ gây lỗi trên các bộ biên dịch cũ.
- **Giải pháp:** Luôn sử dụng danh từ mô tả rõ nghĩa thay thế: `fn`, `action`, `variable`, `isDeleted`.

<a id="73-nhầm-lẫn-giữa-dot-notation-và-bracket-notation-với-biến-động"></a>
### 7.3. Nhầm lẫn giữa Dot notation và Bracket notation với biến động

```javascript
const user = { name: "Alice", age: 25 };
const property = "name";

// ❌ SAI LẦM PHỔ BIẾN:
console.log(user.property); // undefined!
// Vì JavaScript tìm key tên đúng là "property" trong object user, chứ không đọc biến property!

// ✅ CÁCH ĐÚNG:
console.log(user[property]); // "Alice"
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="8-bảng-so-sánh-tổng-kết-cốt-lõi"></a>
## 8. Bảng So Sánh Tổng Kết Cốt Lõi

| Thao tác / Phương pháp | Cú pháp | Đặc điểm nổi bật | Khi nào nên dùng |
| :--- | :--- | :--- | :--- |
| **Object Literals** | `{ key: value }` | Trực quan, ngắn gọn, khai báo tại chỗ | 95% các trường hợp tạo đối tượng |
| **Dot Notation** | `obj.key` | Sạch sẽ, dễ đọc, hỗ trợ IntelliSense | Khi key là định danh chuẩn cố định |
| **Bracket Notation** | `obj["key"]` hoặc `obj[prop]` | Hỗ trợ khoảng trắng, ký tự lạ, biến động | Khi key là biến động hoặc có ký tự đặc biệt |
| **Xóa thuộc tính** | `delete obj.key` | Xóa sổ hoàn toàn cặp key-value khỏi bộ nhớ | Dọn dẹp dữ liệu thừa trước khi serialize |
| **Destructuring** | `const { a, b } = obj;` | Trích xuất thuộc tính thành biến riêng biệt | Khi cần dùng nhiều thuộc tính từ 1 object |
| **Duyệt keys** | `for (const k in obj)` | Duyệt qua tất cả tên thuộc tính có thể liệt kê | Khi cần duyệt trực tiếp trên cấu trúc đối tượng |
| **Object.keys / values** | `Object.keys(obj)` | Trả về Mảng các keys hoặc values | Kết hợp với các hàm mảng (`map`, `filter`) |
| **Object.entries** | `Object.entries(obj)` | Trả về Mảng 2 chiều `[[k1, v1], [k2, v2]]` | Dùng với `for...of` hoặc chuyển sang `Map` |
| **Kiểm tra tồn tại** | `'key' in obj` hoặc `Object.hasOwn()` | Trả về `true`/`false` chuẩn xác | Phòng vệ trước khi đọc thuộc tính sâu |

[⬆️ Quay lại Mục lục](#mục-lục)
