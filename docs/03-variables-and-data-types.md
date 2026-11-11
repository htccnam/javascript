# 03 - Từ Khóa Khai Báo (var, let, const) & Kiểu Dữ Liệu Nguyên Thủy trong JavaScript

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng việc lập trình giống như bạn đang **quản lý đồ đạc trong một ngôi nhà thông minh**:
> - **Chiếc nhãn dán (`var`):** Là loại nhãn dán lỏng lẻo từ thời xa xưa (1995). Bạn dán nó trong phòng tắm (khối lệnh `{}`), nhưng gió thổi làm nó bay tuốt ra tận phòng khách (không có Block Scope, gây rò rỉ biến). Ai vào nhà cũng có thể dán một nhãn trùng tên đè lên nhãn cũ mà không hề có tiếng chuông báo động nào reo lên!
> - **Chiếc nhãn dán gắn tường (`let`):** Là loại nhãn dán hiện đại (ES6 2015). Nó chỉ có hiệu lực bên trong căn phòng nơi nó được dán (Block Scope). Không ai được phép dán đè nhãn trùng tên trong cùng một phòng, nhưng bạn được phép bóc món đồ cũ ra và dán nhãn đó vào một món đồ mới (cho phép gán lại giá trị).
> - **Chiếc nhãn đóng đinh cố định (`const`):** Là chiếc nhãn được **đóng đinh vĩnh viễn** vào một vị trí. Tuyệt đối không ai được phép bóc chiếc nhãn này đem đi dán vào vị trí khác!
>   - Nhưng hãy chú ý: Nếu chiếc nhãn đó dán trên một **chiếc hộp rỗng (Mảng hoặc Object)**, bạn vẫn thoải mái mở nắp hộp ra để bỏ thêm đồ vào (`push`), lấy bớt đồ ra (`pop`), hoặc sơn sửa các món đồ bên trong hộp! **`const` chỉ khóa chiếc nhãn dán, không hề khóa đồ đạc bên trong hộp!**

---

## Mục Lục
<a id="mục-lục"></a>

1. [Từ Khóa Khai Báo Là Gì?](#1-từ-khóa-khai-báo-là-gì)
2. [Khác Biệt Cốt Lõi: Scope, Re-assign & Re-declaration (Bảng So Sánh var, let, const)](#2-khác-biệt-cốt-lõi-scope-re-assign--re-declaration-bảng-so-sánh-var-let-const)
3. [Đi Sâu Vào const: Bản Chất Khóa Biến Chứ Không Khóa Giá Trị](#3-đi-sâu-vào-const-bản-chất-khóa-biến-chứ-không-khóa-giá-trị)
4. [Hai Nhóm Kiểu Dữ Liệu: Primitive (Nguyên Thủy) vs Reference (Tham Chiếu)](#4-hai-nhóm-kiểu-dữ-liệu-primitive-nguyên-thủy-vs-reference-tham-chiếu)
5. [const Với Kiểu Primitive vs const Với Mảng / Object](#5-const-với-kiểu-primitive-vs-const-với-mảng--object)
6. [Bảng So Sánh Chi Tiết: const vs let](#6-bảng-so-sánh-chi-tiết-const-vs-let)
7. [4 Lỗi Thường Gặp Nhất Khi Làm Việc Với const](#7-4-lỗi-thường-gặp-nhất-khi-làm-việc-với-const)
8. [Vì Sao Hiện Nay Không Ai Dùng var Nữa?](#8-vì-sao-hiện-nay-không-ai-dùng-var-nữa)
9. [Quy Tắc Vàng Khi Chọn Từ Khóa Khai Báo Biến](#9-quy-tắc-vàng-khi-chọn-từ-khóa-khai-báo-biến)
10. [7 Kiểu Dữ Liệu Nguyên Thủy (Primitive Types) Trong JavaScript](#10-7-kiểu-dữ-liệu-nguyên-thủy-primitive-types-trong-javascript)

---

## 1. Từ Khóa Khai Báo Là Gì?
Trong JavaScript, **từ khóa khai báo (`var`, `let`, `const`)** quy định:
1. Cách thức một biến được cấp phát vào bộ nhớ trong quá trình khởi tạo.
2. **Phạm vi hoạt động (Scope):** Biến đó sống ở đâu, ai có quyền nhìn thấy và sử dụng nó.
3. Liệu giá trị lưu trữ trong biến có thể **gán lại (re-assign)** được hay không.
4. Liệu biến có thể **khai báo lại (re-declare)** trong cùng một phạm vi hay không.

```javascript
var oldWay = "Cách cũ từ ES5";
let modernCounter = 0;
const API_URL = "https://api.example.com";
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 2. Khác Biệt Cốt Lõi: Scope, Re-assign & Re-declaration (Bảng So Sánh var, let, const)
Cả `let` và `var` đều cho phép gán lại giá trị, còn `const` thì không. Tuy nhiên, lý do lớn nhất khiến `var` bị loại bỏ trong lập trình hiện đại nằm ở **phạm vi hoạt động (scope)** và **cơ chế Hoisting**:

| Tiêu chí | `const` | `let` | `var` |
| :--- | :--- | :--- | :--- |
| **Gán lại giá trị (Re-assign)** | ❌ **Không** | ✅ **Có** | ✅ **Có** |
| **Phạm vi hoạt động (Scope)** | **Block Scope** (trong cặp `{}`) | **Block Scope** (trong cặp `{}`) | **Function Scope** (trong hàm) |
| **Khai báo lại trong cùng scope** | ❌ **Lỗi** (`SyntaxError`) | ❌ **Lỗi** (`SyntaxError`) | ✅ **Cho phép** (Dễ gây ghi đè trùng tên) |
| **Cơ chế Hoisting** | ✅ Có (nằm trong **TDZ** - gọi trước khi khai báo sẽ báo lỗi `ReferenceError`) | ✅ Có (nằm trong **TDZ** - gọi trước khi khai báo sẽ báo lỗi `ReferenceError`) | ✅ Có (hoisted lên đầu scope với `undefined`, dễ tạo lỗi ngầm) |

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 3. Đi Sâu Vào const: Bản Chất Khóa Biến Chứ Không Khóa Giá Trị

### 3.1. `const` là gì?
`const` (viết tắt của *constant*) là từ khóa dùng để khai báo một **biến hằng** — biến mà bạn không thể gán lại sang một giá trị hoặc vùng nhớ khác:

```javascript
const x = 10;
x = 20; // ❌ TypeError: Assignment to constant variable.
```

### 3.2. Điều quan trọng nhất cần nhớ
> [!IMPORTANT]
> **`const` khóa CÁI TÊN BIẾN, không khóa NỘI DUNG BÊN TRONG giá trị!**
> - `const` chỉ cấm gán lại biến (`variable = ...`).
> - `const` **không cấm** thay đổi dữ liệu bên trong mảng hoặc object!

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 4. Hai Nhóm Kiểu Dữ Liệu: Primitive (Nguyên Thủy) vs Reference (Tham Chiếu)
Lý do vì sao `const` có hành vi khác nhau giữa số/chuỗi và mảng/object bắt nguồn từ cách JavaScript tổ chức bộ nhớ:

| Nhóm dữ liệu | Ví dụ cụ thể | Vùng nhớ lưu trữ | Có "ruột" để sửa đổi không? |
| :--- | :--- | :--- | :---: |
| **Primitive (Nguyên thủy)** | `number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol` | Lưu trực tiếp tại **Stack** (kích thước cố định) | ❌ **Không** (Bất biến - Immutable) |
| **Reference (Tham chiếu)** | `Array`, `Object`, `Function` | Lưu tại **Heap**, biến giữ con trỏ địa chỉ tại **Stack** | ✅ **Có** (Có thể thay đổi - Mutable) |

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 5. const Với Kiểu Primitive vs const Với Mảng / Object

### 5.1. `const` với kiểu Primitive (Gần như đóng băng hoàn toàn)
```javascript
const i = 1;
// i giữ trực tiếp giá trị 1.
// Số 1 là bất biến, không có "ruột" để sửa.
// Muốn i thành 2 thì bắt buộc phải gán lại biến -> mà const cấm!

i = 2; // ❌ TypeError: Assignment to constant variable.
i++;   // ❌ TypeError (tương đương i = i + 1)
```
**Kết luận:** Với kiểu nguyên thủy, `const` biến giá trị thành bất biến hoàn toàn.

### 5.2. `const` với mảng và object (Khóa địa chỉ tham chiếu)
```javascript
const friend = ["An", "Bình"];
// friend giữ địa chỉ trỏ đến vùng nhớ Heap chứa mảng.
// const khóa địa chỉ đó -> bạn không được trỏ friend sang mảng khác.
// Nhưng nội dung bên trong chiếc hộp mảng vẫn sửa thoải mái!
```

- ✅ **Được phép (Thay đổi nội dung bên trong mảng):**
```javascript
friend.push("Cường");    // Thêm cuối mảng -> ["An", "Bình", "Cường"]
friend.unshift("Dũng");  // Thêm đầu mảng  -> ["Dũng", "An", "Bình", "Cường"]
friend.pop();            // Xóa phần tử cuối
friend.shift();          // Xóa phần tử đầu
friend[0] = "Minh";      // Sửa trực tiếp phần tử tại index 0
friend.splice(1, 1);     // Xóa hoặc chèn tại vị trí bất kỳ
```

- ❌ **Không được phép (Gán lại sang vùng nhớ khác):**
```javascript
friend = ["Cường"]; // ❌ TypeError: Assignment to constant variable.
friend = "hello";   // ❌ TypeError
friend = 123;       // ❌ TypeError
```

### 5.3. Hình dung trực quan: Nhãn Dán và Chiếc Hộp
```text
[Nhãn: friend] ===== ĐÓNG ĐINH BẰNG CONST =====> [Hộp Mảng: ["An", "Bình"]]
                                                       │
                                  Thêm/Bớt thoải mái: ├── push("Cường")
                                                      ├── pop()
                                                      └── [0] = "Minh"
```
- `friend` là chiếc nhãn dán.
- Mảng `["An", "Bình"]` là chiếc hộp chứa đồ.
- `const` dán chặt nhãn `friend` lên chiếc hộp đó. Bạn **không được bóc nhãn dán sang chiếc hộp khác**.
- Nhưng bạn **vẫn được mở nắp hộp, thêm đồ, bớt đồ, sắp xếp đồ vật bên trong**!

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 6. Bảng So Sánh Chi Tiết: const vs let

| Hành động | `const` | `let` |
| :--- | :---: | :---: |
| **Khai báo kèm gán giá trị ban đầu** (`const x = 1; let y = 1;`) | ✅ Được phép | ✅ Được phép |
| **Khai báo không gán giá trị** (`let z;`) | ❌ **Báo lỗi ngay cú pháp** | ✅ Được phép (nhận `undefined`) |
| **Gán lại biến sang giá trị mới** (`x = 2;`) | ❌ **Báo lỗi `TypeError`** | ✅ Được phép |
| **Sửa nội dung thuộc tính của Object** (`obj.name = "Mới";`) | ✅ Được phép | ✅ Được phép |
| **Thêm / xóa phần tử của Mảng** (`arr.push(4);`) | ✅ Được phép | ✅ Được phép |

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 7. 4 Lỗi Thường Gặp Nhất Khi Làm Việc Với const

### Lỗi 1: Nghĩ rằng `const` làm mảng trở nên bất biến
```javascript
const arr = [1, 2, 3];
arr.push(4); // ✅ Hoàn toàn hợp lệ! Nhiều người lầm tưởng dòng này báo lỗi.
```

### Lỗi 2: Gán lại biến `const`
```javascript
const arr = [1, 2, 3];
arr = [4, 5, 6]; // ❌ Lỗi thật sự: TypeError: Assignment to constant variable.
```

### Lỗi 3: Khai báo `const` mà không khởi tạo giá trị
```javascript
const x; // ❌ Lỗi cú pháp: SyntaxError: Missing initializer in const declaration
// Khắc phục: Phải gán giá trị ngay: const x = 10;
```

### Lỗi 4: Nhầm `typeof` khi kiểm tra mảng
```javascript
const arr = [1, 2, 3];
typeof arr;         // "object" (Không phải "array" - bẫy phổ biến!)
Array.isArray(arr); // ✅ true (Đây mới là cách chuẩn xác nhất để kiểm tra mảng)
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 8. Vì Sao Hiện Nay Không Ai Dùng var Nữa?
`var` là tàn dư từ phiên bản JavaScript đầu tiên năm 1995. Có 3 lý do cốt tử khiến `var` bị "cấm chỉ định" trong code hiện đại:

1. **Rò rỉ biến ra ngoài phạm vi (Out-of-scope leak):**
   `var` không hỗ trợ Block Scope (không bị giới hạn bởi cặp `{}` của `if`, `for`, `while`). Biến khai báo trong vòng lặp sẽ "tràn" ra ngoài và làm dính bẩn phạm vi bên ngoài:
   ```javascript
   for (var i = 0; i < 3; i++) {}
   console.log(i); // 3 (Rò rỉ! Lẽ ra i phải biến mất sau vòng for)
   ```
2. **Tự động ghi đè biến (Accidental Overwriting):**
   Bạn có thể vô tình khai báo `var user = "An"` rồi 50 dòng sau lại viết `var user = "Bình"` mà JavaScript không hề đưa ra cảnh báo nào, dẫn đến mất dữ liệu nghiêm trọng trong dự án lớn.
3. **Cơ chế Hoisting kỳ quặc:**
   Gọi biến `var` trước dòng khai báo không làm crash chương trình mà trả về `undefined`. Lỗi logic này cực kỳ khó debug!

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 9. Quy Tắc Vàng Khi Chọn Từ Khóa Khai Báo Biến
Trừ khi bạn phải bảo trì các dự án di sản (legacy code) từ hơn một thập kỷ trước, nguyên tắc làm việc chuẩn Clean Code quốc tế hiện nay là:

> [!TIP]
> **Quy tắc 3 bước:**
> 1. **Mặc định ưu tiên 100% dùng `const`** cho tất cả các biến (kể cả mảng, object, hàm).
> 2. **Chỉ chuyển sang dùng `let`** khi bạn biết chắc chắn giá trị của biến đó bắt buộc phải thay đổi (ví dụ: biến đếm vòng lặp, tích lũy điểm số, cờ bật tắt trạng thái).
> 3. **Tuyệt đối nói KHÔNG với `var`** trong toàn bộ mã nguồn viết mới.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 10. 7 Kiểu Dữ Liệu Nguyên Thủy (Primitive Types) Trong JavaScript
Các kiểu dữ liệu nguyên thủy lưu trữ giá trị trực tiếp tại vùng nhớ **Stack** (truy xuất siêu tốc). Chúng là những giá trị đơn lẻ và **không thể sửa đổi nội dung gốc (Immutable)**. Mọi thao tác biến đổi đều tạo ra một bản sao hoàn toàn mới:

| Kiểu dữ liệu | Mô tả bản chất | Ví dụ thực tế |
| :--- | :--- | :--- |
| **Number** | Đại diện cho cả số nguyên và số thực (chuẩn IEEE 754 64-bit). Chứa cả các giá trị đặc biệt: `NaN`, `Infinity`, `-Infinity`. | `let age = 21;`<br>`let price = 99.99;` |
| **String** | Chuỗi ký tự biểu diễn văn bản, được bọc trong cặp dấu `""`, `''` hoặc backticks `\`\` ` (Template Literals). | `const name = "Hoàng Nam";`<br>`` `Xin chào ${name}` `` |
| **Boolean** | Chỉ nhận 1 trong 2 giá trị nhị phân `true` hoặc `false`, dùng trong các biểu thức rẽ nhánh điều kiện logic. | `let isLoggedIn = true;`<br>`let hasAdminRole = false;` |
| **Undefined** | Trạng thái mặc định của một biến khi vừa được khai báo trong bộ nhớ mà chưa từng được gán giá trị nào. | `let status; // undefined` |
| **Null** | Giá trị rỗng có chủ ý, dùng để người lập trình chủ động đánh dấu biến đó hiện tại "không có gì". | `let currentUser = null;` |
| **BigInt** | Biểu diễn các số nguyên lớn tùy ý vượt quá giới hạn an toàn $2^{53} - 1$ của kiểu `Number`. Khai báo bằng cách thêm hậu tố `n`. | `const bigNum = 9007199254740991n;` |
| **Symbol** | Tạo ra một định danh duy nhất (Unique) và bất biến trên toàn hệ thống, không bao giờ trùng lặp, thường dùng làm key bảo vệ cho Object. | `const id = Symbol("id");` |

[⬆️ Quay lại Mục lục](#mục-lục)
