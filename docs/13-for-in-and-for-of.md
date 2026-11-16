# 13 - Vòng Lặp For-In & For-Of Trong JavaScript (For-In vs For-Of Loops)

<a id="mục-lục"></a>
## Mục Lục

- [1. Tổng Quan Về Vòng Lặp for...in và for...of](#1-tổng-quan-về-vòng-lặp-forin-và-forof)
- [2. Vòng Lặp for...in: Duyệt Qua Thuộc Tính Của Object](#2-vòng-lặp-forin-duyệt-qua-thuộc-tính-của-object)
  - [2.1. Cú pháp và cách hoạt động](#21-cú-pháp-và-cách-hoạt-động)
  - [2.2. Truy cập Key và Value bằng Bracket Notation](#22-truy-cập-key-và-value-bằng-bracket-notation)
- [3. Vòng Lặp for...of: Duyệt Qua Giá Trị Của Cấu Trúc Lặp (Iterable)](#3-vòng-lặp-forof-duyệt-qua-giá-trị-của-cấu-trúc-lặp-iterable)
  - [3.1. Cú pháp và cách hoạt động](#31-cú-pháp-và-cách-hoạt-động)
  - [3.2. Duyệt qua Mảng (Array)](#32-duyệt-qua-mảng-array)
  - [3.3. Duyệt qua Chuỗi (String)](#33-duyệt-qua-chuỗi-string)
  - [3.4. Ưu điểm vượt trội của for...of so với for truyền thống](#34-ưu-điểm-vượt-trội-của-forof-so-với-for-truyền-thống)
- [4. 6 Tình Huống Thực Chiến Kinh Điển](#4-6-tình-huống-thực-chiến-kinh-điển)
  - [Tình huống 1: Quản lý thông tin nhân viên (Hiển thị hồ sơ chi tiết)](#tình-huống-1-quản-lý-thông-tin-nhân-viên-hiển-thị-hồ-sơ-chi-tiết)
  - [Tình huống 2: Kiểm tra thuộc tính sản phẩm bằng toán tử in](#tình-huống-2-kiểm-tra-thuộc-tính-sản-phẩm-bằng-toán-tử-in)
  - [Tình huống 3: Ứng dụng bán hàng: Tính tổng số lượng hàng tồn kho](#tình-huống-3-ứng-dụng-bán-hàng-tính-tổng-số-lượng-hàng-tồn-kho)
  - [Tình huống 4: Thương mại điện tử: Duyệt danh sách sản phẩm Object trong Mảng](#tình-huống-4-thương-mại-điện-tử-duyệt-danh-sách-sản-phẩm-object-trong-mảng)
  - [Tình huống 5: Quản lý thư viện: Tìm kiếm sách theo tên và ngắt sớm bằng break](#tình-huống-5-quản-lý-thư-viện-tìm-kiếm-sách-theo-tên-và-ngắt-sớm-bằng-break)
  - [Tình huống 6: Quản lý điểm số: Tính điểm trung bình học sinh](#tình-huống-6-quản-lý-điểm-số-tính-điểm-trung-bình-học-sinh)
- [5. So Sánh Toàn Diện: for vs for...in vs for...of](#5-so-sánh-toàn-diện-for-vs-forin-vs-forof)
  - [5.1. Bảng so sánh 3 cấu trúc lặp](#51-bảng-so-sánh-3-cấu-trúc-lặp)
  - [5.2. Khi nào nên dùng loại nào?](#52-khi-nào-nên-dùng-loại-nào)
- [6. 3 Cạm Bẫy Phổ Biến Nhất & Cách Khắc Phục (Common Pitfalls)](#6-3-cạm-bẫy-phổ-biến-nhất--cách-khắc-phục-common-pitfalls)
  - [Cạm bẫy 1: Dùng for...in để duyệt Mảng (Bẫy kế thừa Prototype)](#cạm-bẫy-1-dùng-forin-để-duyệt-mảng-bẫy-kế-thừa-prototype)
  - [Cạm bẫy 2: Dùng for...of cho Object (Lỗi TypeError: not iterable)](#cạm-bẫy-2-dùng-forof-cho-object-lỗi-typeerror-not-iterable)
  - [Cạm bẫy 3: Quên từ khóa const hoặc let (Ô nhiễm biến toàn cục)](#cạm-bẫy-3-quên-từ-khóa-const-hoặc-let-ô-nhiễm-biến-toàn-cục)
- [7. Bảng Tổng Kết Cốt Lõi](#7-bảng-tổng-kết-cốt-lõi)

---

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng việc xử lý dữ liệu trong JavaScript giống như bạn đang điều hành một **kho vận thông minh**:
> - **Object (`{}`)** giống như một **chiếc tủ hồ sơ nhiều ngăn khóa riêng biệt**: Mỗi ngăn có dán một nhãn tên duy nhất (`name`, `age`, `role`). Để kiểm kê hồ sơ, người thủ kho phải cầm cuốn sổ ghi chép đọc qua từng chiếc nhãn tên (**`for...in`** — duyệt từng **key**), rồi dùng chiếc nhãn đó tra vào tủ để rút hồ sơ tương ứng ra xem (`person[key]`).
> - **Array (`[]`) & String** giống như một **băng chuyền tự động lăn bánh**: Hàng hóa nối đuôi nhau trôi tuần tự qua băng chuyền. Người công nhân chỉ việc đứng ở cửa ra và nhấc trực tiếp từng món hàng ra dùng (**`for...of`** — duyệt từng **value**), hoàn toàn không cần bận tâm hàng đó đang nằm ở vị trí thứ mấy (index) hay phải canh chừng biến đếm `i`!
>
> Bộ đôi `for...in` và `for...of` sinh ra để giải phóng bạn khỏi việc phải tự quản lý biến đếm `i`, điều kiện dừng và bước nhảy thủ công trong vòng `for` truyền thống.

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết (Prerequisites)
> Để hiểu sâu bản chất và vận dụng linh hoạt `for...in` và `for...of` trong bài này, bạn bắt buộc phải nắm vững:
> 1. **Cấu trúc Mảng & Duyệt Mảng** tại [11 - Mảng Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/11-arrays.md):
>    - *Vì sao bắt buộc?* `for...of` vận hành trên các cấu trúc dữ liệu có tính chất duyệt được (Iterable) mà Mảng là đại diện tiêu biểu nhất.
> 2. **Cấu trúc Đối Tượng & Truy cập Bracket Notation `obj[key]`** tại [12 - Đối Tượng Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/12-objects.md):
>    - *Vì sao bắt buộc?* `for...in` trả về tên thuộc tính (Key) dưới dạng chuỗi; bạn bắt buộc phải dùng cú pháp ngoặc vuông `obj[key]` để đọc giá trị tương ứng (nếu dùng `obj.key` sẽ tìm thuộc tính cố định tên `"key"` và ra `undefined`).
> 3. **Từ khóa khai báo biến (`const`, `let`) & Block Scope** tại [03 - Khai Báo Biến & Kiểu Dữ Liệu](file:///d:/github/studyProgram/javascript/docs/03-variables-and-data-types.md):
>    - *Vì sao bắt buộc?* Để hiểu lý do vì sao trong `for (const key in obj)` ta dùng được `const` mà không sinh lỗi gán lại giá trị (mỗi lần lặp tạo ra một phạm vi khối Block Scope độc lập).
> * **Đích đến tiếp theo:** Hai vòng lặp này là công cụ duyệt dữ liệu trực tiếp trong [14 - Cấu Trúc Map & Set](file:///d:/github/studyProgram/javascript/docs/14-map-and-set.md) (`for (const [k, v] of map)`) và duyệt danh sách phần tử giao diện trong [15 - Thao Tác DOM](file:///d:/github/studyProgram/javascript/docs/15-dom-basics.md).
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

<a id="1-tổng-quan-về-vòng-lặp-forin-và-forof"></a>
## 1. Tổng Quan Về Vòng Lặp for...in và for...of

Trong JavaScript hiện đại (từ chuẩn ES6/ECMAScript 2015), JavaScript cung cấp 2 cấu trúc lặp chuyên biệt để duyệt qua các cấu trúc dữ liệu phức tạp:

- **`for...in`** (Duyệt qua **Key**): Được thiết kế để duyệt qua toàn bộ các **thuộc tính (property names / keys)** có thể đếm được (enumerable) của một **Đối tượng (Object)**.
- **`for...of`** (Duyệt qua **Value**): Được thiết kế để duyệt trực tiếp qua các **giá trị (values)** của bất kỳ cấu trúc dữ liệu nào có giao thức lặp (**Iterable Protocol**), tiêu biểu là **Mảng (Array)**, **Chuỗi (String)**, **Map**, **Set**, và **DOM NodeList**.

```text
               ┌── for...in  ──>  Duyệt KEYS  ──>  Dành cho OBJECT ({})
CẤU TRÚC LẶP ──┤
               └── for...of  ──>  Duyệt VALUES ──> Dành cho ITERABLE (Array [], String "", Map, Set)
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="2-vòng-lặp-forin-duyệt-qua-thuộc-tính-của-object"></a>
## 2. Vòng Lặp for...in: Duyệt Qua Thuộc Tính Của Object

### 2.1. Cú pháp và cách hoạt động
Vòng lặp `for...in` duyệt qua tất cả các tên thuộc tính (keys) của một Object:

```javascript
for (const key in object) {
  // Thực thi mã với từng key
}
```

Ví dụ cơ bản:
```javascript
const person = { name: "Nguyen Van A", age: 30 };

// 1. Duyệt qua danh sách keys
for (const key in person) {
  console.log(key);
}
// Kết quả in ra:
// name
// age
```

### 2.2. Truy cập Key và Value bằng Bracket Notation
Vì `key` là một biến lưu chuỗi tên thuộc tính (`"name"`, `"age"`), nên để lấy giá trị tương ứng từ object, bạn **bắt buộc phải dùng cú pháp ngoặc vuông (Bracket Notation)**:

```javascript
const person = { name: "Nguyen Van A", age: 30 };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Kết quả in ra:
// name: Nguyen Van A
// age: 30
```

> [!WARNING]
> **Cảnh báo sai lầm cú pháp:** Tuyệt đối không viết `person.key`! JavaScript sẽ tìm thuộc tính có tên thực sự là `"key"` trên đối tượng và trả về `undefined`. Phải luôn viết `person[key]`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="3-vòng-lặp-forof-duyệt-qua-giá-trị-của-cấu-trúc-lặp-iterable"></a>
## 3. Vòng Lặp for...of: Duyệt Qua Giá Trị Của Cấu Trúc Lặp (Iterable)

### 3.1. Cú pháp và cách hoạt động
Vòng lặp `for...of` duyệt trực tiếp qua từng **phần tử (values)** của một đối tượng có tính chất `Iterable`:

```javascript
for (const value of iterable) {
  // Sử dụng trực tiếp giá trị value
}
```

### 3.2. Duyệt qua Mảng (Array)
```javascript
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
// In ra:
// red
// green
// blue
```

### 3.3. Duyệt qua Chuỗi (String)
Mỗi chuỗi ký tự trong JavaScript cũng là một cấu trúc có thể duyệt được (Iterable), cho phép lấy từng ký tự:

```javascript
const greeting = "Xin chào!";

for (const char of greeting) {
  console.log(char);
}
// In ra từng ký tự: X, i, n,  , c, h, à, o, !
```

### 3.4. Ưu điểm vượt trội của for...of so với for truyền thống
So với vòng `for (let i = 0; i < arr.length; i++)`:
1. **Gọn gàng, sáng sủa:** Không cần khai báo biến đếm `i`, không cần viết điều kiện `i < length` và bước nhảy `i++`.
2. **Loại bỏ lỗi Off-by-one:** Tránh hoàn toàn việc viết nhầm `<= length` dẫn đến phần tử cuối cùng bị `undefined`.
3. **Truy cập thẳng vào giá trị:** Dùng trực tiếp `color` thay vì phải gõ `colors[i]`.
4. **Hỗ trợ đầy đủ `break` và `continue`:** Khác với phương thức `forEach()` không thể dừng giữa chừng, `for...of` cho phép `break` để thoát hoặc `continue` để bỏ qua lượt lặp bất cứ lúc nào!

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="4-6-tình-huống-thực-chiến-kinh-điển"></a>
## 4. 6 Tình Huống Thực Chiến Kinh Điển

Dưới đây là 6 tình huống thực tế giúp bạn phân biệt rõ nét khi nào nên dùng `for...in` và khi nào nên dùng `for...of`:

### Tình huống 1: Quản lý thông tin nhân viên (Hiển thị hồ sơ chi tiết)
**Nghiệp vụ:** Bạn đang phát triển một module quản trị nhân sự, cần hiển thị toàn bộ hồ sơ nhân viên dưới dạng danh sách các thuộc tính và giá trị tương ứng:

```javascript
const employee = {
  name: "Nguyễn Văn B",
  age: 28,
  position: "Front-end Developer"
};

console.log("Thông tin nhân viên:");
for (const key in employee) {
  console.log(`- ${key}: ${employee[key]}`);
}
// In ra:
// - name: Nguyễn Văn B
// - age: 28
// - position: Front-end Developer
```

---

### Tình huống 2: Kiểm tra thuộc tính sản phẩm bằng toán tử in
**Nghiệp vụ:** Trong ứng dụng bán hàng, sản phẩm hợp lệ trước khi cho phép đăng tải bắt buộc phải có đủ 3 trường: `id`, `name`, `price`.

```javascript
const product = {
  id: 1,
  name: "Điện thoại thông minh",
  price: 15000000
};

const requiredProps = ["id", "name", "price"];

console.log("Kiểm tra thuộc tính sản phẩm:");
for (const property of requiredProps) {
  // Lưu ý: 'in' ở đây là TOÁN TỬ IN (Binary Operator), khác với vòng lặp for...in
  if (property in product) {
    console.log(`Sản phẩm có ${property}.`);
  } else {
    console.log(`Sản phẩm thiếu ${property}.`);
  }
}
```

> [!NOTE]
> **Phân biệt:** `"id" in product` là **toán tử `in`** dùng để kiểm tra xem một chuỗi key có tồn tại trong Object hay không (trả về `true`/`false`). Nó khác với **cấu trúc lặp `for...in`**. Trong JavaScript không có toán tử `of` độc lập tương tự.

---

### Tình huống 3: Ứng dụng bán hàng: Tính tổng số lượng hàng tồn kho
**Nghiệp vụ:** Số lượng từng mặt hàng được lưu trong một Object dạng `{ tênSanPham: sốLượng }`. Cần tính tổng sản phẩm hiện có trong kho:

```javascript
const inventory = {
  aoThun: 25,
  quanJeans: 30,
  giayTheThao: 15
};

let totalItems = 0;
for (const item in inventory) {
  totalItems += inventory[item];
}

console.log(`Tổng số sản phẩm trong kho: ${totalItems}`); // 70
```

---

### Tình huống 4: Thương mại điện tử: Duyệt danh sách sản phẩm Object trong Mảng
**Nghiệp vụ:** Một API trả về mảng các đối tượng sản phẩm. Cần duyệt mảng và hiển thị thông tin từng sản phẩm ra giao diện:

```javascript
const products = [
  { name: "Điện thoại thông minh", price: 15000000, description: "Điện thoại mới nhất 2024" },
  { name: "Máy tính bảng", price: 12000000, description: "Thiết kế mỏng, nhẹ" },
  { name: "Laptop", price: 25000000, description: "Hiệu suất cao, cho dân thiết kế" }
];

console.log("Danh sách sản phẩm:");
for (const product of products) {
  console.log(`${product.name} - ${product.price.toLocaleString("vi-VN")} đ - ${product.description}`);
}
```

---

### Tình huống 5: Quản lý thư viện: Tìm kiếm sách theo tên và ngắt sớm bằng break
**Nghiệp vụ:** Tìm kiếm thông tin cuốn sách trong danh mục dựa trên từ khóa người dùng nhập vào. Khi tìm thấy, in thông tin và ngắt vòng lặp ngay lập tức để tiết kiệm tài nguyên:

```javascript
const books = [
  { title: "Sách lập trình JavaScript", author: "Nguyễn Văn A", year: 2023 },
  { title: "Học thiết kế web", author: "Trần Thị B", year: 2022 },
  { title: "Kỹ năng quản lý thời gian", author: "Lê Văn C", year: 2024 }
];

const searchTitle = "Học thiết kế web";

for (const book of books) {
  if (book.title === searchTitle) {
    console.log(`Tìm thấy sách: ${book.title} - Tác giả: ${book.author} - Năm: ${book.year}`);
    break; // Ngắt vòng lặp ngay khi thấy kết quả!
  }
}
```

---

### Tình huống 6: Quản lý điểm số: Tính điểm trung bình học sinh
**Nghiệp vụ:** Cho một mảng điểm số của học sinh, tính tổng và tính điểm trung bình chung:

```javascript
const scores = [8, 9, 7, 10, 9.5];
let totalScore = 0;

for (const score of scores) {
  totalScore += score;
}

const averageScore = totalScore / scores.length;
console.log(`Điểm trung bình: ${averageScore.toFixed(2)}`); // 8.70
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="5-so-sánh-toàn-diện-for-vs-forin-vs-forof"></a>
## 5. So Sánh Toàn Diện: for vs for...in vs for...of

### 5.1. Bảng so sánh 3 cấu trúc lặp

| Tiêu chí | `for` truyền thống | `for...in` | `for...of` |
| :--- | :--- | :--- | :--- |
| **Mục đích chính** | Điều khiển chi tiết số lần lặp, bước nhảy | Duyệt qua các **thuộc tính (Keys)** | Duyệt qua các **giá trị (Values)** |
| **Kiểu dữ liệu đích** | Mảng, Chuỗi, Số đếm giải thuật | **Object (`{}`)** | **Iterable (Array, String, Map, Set)** |
| **Giá trị biến lặp nhận** | Số nguyên chỉ mục `i` (index) | Chuỗi tên thuộc tính (`string`) | Giá trị thực của phần tử |
| **Hỗ trợ break/continue?**| Có | Có | Có |
| **Độ an toàn trên Mảng** | An toàn tuyệt đối | **Nguy hiểm** (Dính prototype) | An toàn, chuẩn mực hiện đại |
| **Độ phức tạp cú pháp** | Khá dài dòng (`for(;;;)`) | Rất ngắn gọn | Rất ngắn gọn |

### 5.2. Khi nào nên dùng loại nào?
- **Dùng `for...in` khi:** Bạn có một Plain Object (`{}`) và muốn duyệt qua toàn bộ các key của nó (hoặc tính tổng giá trị các key trong object).
- **Dùng `for...of` khi:** Bạn cần duyệt qua Mảng hoặc Chuỗi để lấy từng giá trị ra xử lý, hoặc khi làm việc với `Map`, `Set`, `NodeList`.
- **Dùng `for` truyền thống khi:** Bạn cần kiểm soát chỉ mục `i`, cần bước nhảy tùy chỉnh (`i += 2`), lặp ngược từ cuối về đầu (`i--`), hoặc cần biến đổi mảng gốc tại chỗ.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="6-3-cạm-bẫy-phổ-biến-nhất--cách-khắc-phục-common-pitfalls"></a>
## 6. 3 Cạm Bẫy Phổ Biến Nhất & Cách Khắc Phục (Common Pitfalls)

### Cạm bẫy 1: Dùng for...in để duyệt Mảng (Bẫy kế thừa Prototype)
**Sai lầm:** Nhiều người quen tay dùng `for...in` trên Mảng. Khi đó, `for...in` không chỉ duyệt các chỉ mục số của mảng mà còn **duyệt cả các thuộc tính mở rộng được thêm vào `Array.prototype`** bởi thư viện bên thứ 3:

```javascript
// Thư viện bên ngoài thêm một thuộc tính vào prototype của Array
Array.prototype.thuocTinhMoRong = "Giá trị mở rộng nguy hiểm";

const colors = ["Red", "Green", "Blue"];

// BẪY NGUY HIỂM:
for (const index in colors) {
  console.log(colors[index]);
}
// Kết quả in ra:
// Red
// Green
// Blue
// Giá trị mở rộng nguy hiểm  <-- Lỗi logic nghiêm trọng làm hỏng code!
```

> **Giải pháp chuẩn:** Khi làm việc với Mảng, luôn luôn sử dụng **`for...of`** hoặc **`for` truyền thống**. Tuyệt đối không dùng `for...in` cho Mảng!

---

### Cạm bẫy 2: Dùng for...of cho Object (Lỗi TypeError: not iterable)
**Sai lầm:** Một Plain Object trong JavaScript theo mặc định **KHÔNG PHẢI LÀ MỘT ITERABLE** (không có phương thức `[Symbol.iterator]` tích hợp):

```javascript
const person = {
  name: "Nguyen Van A",
  age: 30
};

for (const value of person) {
  console.log(value);
}
// ❌ UNCAUGHT TYPEERROR: person is not iterable!
```

> **Giải pháp chuẩn:**
> - Cách 1: Dùng `for...in` để duyệt object: `for (const key in person) { console.log(person[key]); }`
> - Cách 2: Biến Object thành Iterable bằng các phương thức tĩnh:
>   - Duyệt keys: `for (const key of Object.keys(person))`
>   - Duyệt values: `for (const val of Object.values(person))`
>   - Duyệt cả cặp [key, value]: `for (const [key, val] of Object.entries(person))`

---

### Cạm bẫy 3: Quên từ khóa const hoặc let (Ô nhiễm biến toàn cục)
**Sai lầm:** Viết vòng lặp mà quên khai báo biến lặp:

```javascript
const myArray = [1, 2, 3];

for (value of myArray) { // ❌ Thiếu 'const' hoặc 'let'
  console.log(value);
}

// Hậu quả: Biến value bị rò rỉ ra phạm vi toàn cục (Global Scope)!
console.log(window.value); // 3 (trong trình duyệt)
```

> **Giải thích cơ chế:**
> - Ở chế độ bình thường (Non-strict mode), JS tự động tạo biến `value` ở Global Scope (gây ô nhiễm bộ nhớ và đè giá trị biến khác).
> - Ở chế độ nghiêm ngặt (`"use strict"` hoặc ES Module), JavaScript sẽ quăng lỗi ngay lập tức: `ReferenceError: value is not defined`.
>
> **Giải pháp:** Luôn khai báo `for (const item of arr)` hoặc `for (let item of arr)`.
> *Tại sao dùng được `const`?* Vì mỗi lần lặp của `for...in` và `for...of` sẽ tạo ra một **Block Scope mới** và một ràng buộc định danh (binding) hoàn toàn mới, biến không bị gán lại trong cùng một scope!

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="7-bảng-tổng-kết-cốt-lõi"></a>
## 7. Bảng Tổng Kết Cốt Lõi

| Cấu trúc | Cú pháp | Đối tượng phù hợp | Biến lặp nhận gì? | Lưu ý sống còn |
| :--- | :--- | :--- | :--- | :--- |
| **`for...in`** | `for (const key in obj)` | **Object `{}`** | Tên thuộc tính (`key` dạng string) | Lấy giá trị phải dùng `obj[key]`; Không dùng cho Mảng để tránh bẫy Prototype |
| **`for...of`** | `for (const val of iterable)` | **Array `[]`, String `""`**, Map, Set | Giá trị thực (`value`) | Không dùng trực tiếp cho Object (sinh lỗi `not iterable`); Hỗ trợ `break`/`continue` |
| **Toán tử `in`**| `"prop" in obj` | Object | Trả về `true`/`false` | Kiểm tra sự tồn tại của key trong Object (không phải vòng lặp) |

[⬆️ Quay lại Mục lục](#mục-lục)

---
*Tài liệu học tập được biên soạn độc quyền cho hệ thống giáo trình JavaScript Study Program.*
