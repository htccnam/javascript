# 09 - Cơ Chế Hoisting & Scope Trong JavaScript (Từ Bản Chất Đến Thực Chiến)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng JavaScript Engine giống như một **người quản lý nhà hàng chuẩn bị mở cửa đón khách**:
> Quá trình chạy code JavaScript luôn diễn ra qua 2 giai đoạn:
> 1. **Giai đoạn chuẩn bị trước giờ mở cửa (Pha khởi tạo bộ nhớ - Creation Phase):** Người quản lý đi kiểm tra toàn bộ nhà hàng, ghi nhận tên và vị trí của tất cả nhân sự.
>    - **Bếp trưởng (Function Declaration):** Có mặt đầy đủ cả người lẫn tài năng từ trước khi mở cửa. Bất kỳ ai bước vào nhà hàng đều có thể yêu cầu Bếp trưởng nấu ngay lập tức (**Hoisted toàn bộ cả tên lẫn thân hàm**).
>    - **Bảng tên nhân viên `var`:** Thẻ tên đã được treo lên móc từ sáng, nhưng người nhân viên chưa đến nơi (`undefined`). Nếu ai hỏi bảng tên có chưa thì có rồi, nhưng bảo làm việc ngay thì chưa làm được (**Hoisted phần khai báo, giá trị là `undefined`**).
>    - **Nhân viên `let` & `const` trong phòng kiểm soát an ninh (Temporal Dead Zone - TDZ):** Tên của họ đã có trong danh sách đăng ký, nhưng theo nội quy nghiêm ngặt, họ bị cấm tiếp xúc với bất kỳ ai cho đến khi hoàn tất thủ tục xuất trình thẻ tại bàn làm việc (**Hoisted nhưng không được truy cập trước dòng gán, truy cập trước sẽ bị phạt lỗi `ReferenceError`**).
> 2. **Giai đoạn mở cửa đón khách (Pha thực thi code - Execution Phase):** Bắt đầu chạy từng dòng lệnh từ trên xuống dưới theo thứ tự xuất hiện.

---

<a id="mục-lục"></a>
## Mục Lục

- [1. Hoisting Là Gì?](#1-hoisting-là-gì)
- [2. Hoisting Với Biến (`var` vs `let` / `const`)](#2-hoisting-với-biến-var-vs-let-const)
  - [2.1. Ví dụ 1: Biến khai báo bằng `var`](#2-1-ví-dụ-1-biến-khai-báo-bằng-var)
  - [2.2. Ví dụ 2: Biến khai báo bằng `let` và `const` (Vùng Chết Tạm Thời - TDZ)](#2-2-ví-dụ-2-biến-khai-báo-bằng-let-và-const-vùng-chết-tạm-thời---tdz)
- [3. Hoisting Với Hàm (Function)](#3-hoisting-với-hàm-function)
  - [3.1. Ví dụ 3: Hàm khai báo (Function Declaration)](#3-1-ví-dụ-3-hàm-khai-báo-function-declaration)
  - [3.2. Ví dụ 4: Hàm biểu thức (Function Expression)](#3-2-ví-dụ-4-hàm-biểu-thức-function-expression)
- [4. "Đầu Phạm Vi" Là Gì? (Scope & Hoisting)](#4-đầu-phạm-vi-là-gì-scope-hoisting)
- [5. Cạm Bẫy Thường Gặp & Cách Phòng Tránh (Common Pitfalls)](#5-cạm-bẫy-thường-gặp-cách-phòng-tránh-common-pitfalls)
- [6. Bảng Tổng Kết So Sánh Cơ Chế Hoisting](#6-bảng-tổng-kết-so-sánh-cơ-chế-hoisting)
- [7. Lời Khuyên Thực Chiến](#7-lời-khuyên-thực-chiến)

---

<a id="1-hoisting-là-gì"></a>
## 1. Hoisting Là Gì?

**Hoisting** (nghĩa đen là *"kéo lên/nâng lên"*) là một cơ chế đặc thù của JavaScript, trong đó các phần khai báo biến và hàm được đưa lên **đầu phạm vi (scope)** của chúng trước khi bất kỳ dòng code nào được thực thi.

> [!IMPORTANT]
> **Hiểu đúng bản chất:** JavaScript **KHÔNG HỀ** di chuyển hay cắt dán dòng code của bạn lên đầu file vật lý! 
> Thực tế, trong **Pha khởi tạo bộ nhớ (Creation Phase)**, trình thông dịch của JS đọc qua toàn bộ mã nguồn một lượt, quét các từ khóa khai báo (`var`, `let`, `const`, `function`) và cấp phát vùng nhớ cho chúng trước khi bước vào **Pha thực thi (Execution Phase)**.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="2-hoisting-với-biến-var-vs-let-const"></a>
## 2. Hoisting Với Biến (`var` vs `let` / `const`)

<a id="2-1-ví-dụ-1-biến-khai-báo-bằng-var"></a>
### 2.1. Ví dụ 1: Biến khai báo bằng `var`

Xét đoạn code sau:
```javascript
console.log(x); // In ra: undefined (không bị báo lỗi!)
var x = 5;
console.log(x); // In ra: 5
```

**Bản chất JS Engine xử lý như sau:**
Dòng lệnh `var x = 5;` thực chất gồm 2 bước:
1. **Khai báo (Declaration):** `var x;` $\rightarrow$ Được đưa lên đầu phạm vi trong Creation Phase và tự động gán giá trị khởi tạo là `undefined`.
2. **Gán giá trị (Assignment):** `x = 5;` $\rightarrow$ Giữ nguyên vị trí ban đầu và chỉ được gán khi luồng chạy tới dòng này trong Execution Phase.

Đoạn code trên được JS Engine hiểu tương đương:
```javascript
var x;          // Được hoisted lên đầu với giá trị undefined
console.log(x); // In ra undefined
x = 5;          // Đến đây mới gán giá trị 5
console.log(x); // In ra 5
```

---

<a id="2-2-ví-dụ-2-biến-khai-báo-bằng-let-và-const-vùng-chết-tạm-thời---tdz"></a>
### 2.2. Ví dụ 2: Biến khai báo bằng `let` và `const` (Vùng Chết Tạm Thời - TDZ)

Xét đoạn code sau:
```javascript
console.log(y); // ❌ Lỗi: ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

> [!WARNING]
> **Hiểu lầm phổ biến:** *"Biến `let` và `const` không được hoisted."* $\rightarrow$ **SAI!**
> Cả `let` và `const` **ĐỀU ĐƯỢC HOISTED**, nhưng khác với `var`, chúng **KHÔNG** được khởi tạo giá trị `undefined`. Thay vào đó, chúng rơi vào một trạng thái gọi là **Temporal Dead Zone (TDZ - Vùng chết tạm thời)**.

```text
Phạm vi bắt đầu ---------------------------------+
|                                                |
|   VÙNG CHẾT TẠM THỜI (TDZ)                     |
|   (Biến y đã được cấp phát tên trong bộ nhớ    |
|    nhưng KHÔNG ĐƯỢC PHÉP TRUY CẬP)             |
|                                                |
|   console.log(y); // ❌ ReferenceError!        |
|                                                |
+---Dòng khai báo: let y = 10; ------------------+ (TDZ kết thúc tại đây)
|   console.log(y); // ✅ Hợp lệ: In ra 10       |
|                                                |
Phạm vi kết thúc --------------------------------+
```

**Quy tắc bất di bất dịch:** Bạn bắt buộc phải khai báo xong `let`/`const` rồi mới được phép sử dụng.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="3-hoisting-với-hàm-function"></a>
## 3. Hoisting Với Hàm (Function)

<a id="3-1-ví-dụ-3-hàm-khai-báo-function-declaration"></a>
### 3.1. Ví dụ 3: Hàm khai báo (Function Declaration)

```javascript
sayHi(); // In ra: "Xin chào!" (Vẫn chạy mượt mà!)

function sayHi() {
    console.log("Xin chào!");
}
```

**Giải thích:**
Hàm khai báo (Function Declaration) được JS Engine **hoisted toàn phần** (cả phần tên hàm lẫn toàn bộ thân hàm bên trong `{ ... }`). Do đó, bạn có thể gọi hàm ở bất kỳ vị trí nào trong cùng phạm vi, kể cả trước dòng khai báo hàm.

---

<a id="3-2-ví-dụ-4-hàm-biểu-thức-function-expression"></a>
### 3.2. Ví dụ 4: Hàm biểu thức (Function Expression)

Hàm biểu thức là khi bạn định nghĩa một hàm và gán nó vào một biến:

```javascript
greet(); // ❌ Lỗi: TypeError: greet is not a function

var greet = function () {
    console.log("Chào bạn!");
};
```

**Giải thích tại sao lại ném lỗi `TypeError`:**
- Biến `greet` được khai báo bằng `var`, nên nó được hoist lên đầu với giá trị `undefined`.
- Thân hàm `function() { ... }` **chưa được gán** cho tới khi code chạy tới dòng đó.
- Tại dòng đầu tiên, `greet` đang là `undefined`. Việc bạn gọi `greet()` tương đương với việc thực hiện `undefined()`. Trong JavaScript, chỉ có hàm mới gọi được với dấu `()`, gọi một giá trị không phải hàm sẽ sinh ra lỗi **`TypeError: ... is not a function`**.

Nếu bạn dùng `const` hoặc `let` cho Function Expression:
```javascript
welcome(); // ❌ Lỗi: ReferenceError: Cannot access 'welcome' before initialization

const welcome = () => {
    console.log("Welcome!");
};
```
Lúc này biến `welcome` nằm trong **TDZ**, nên việc truy cập trước khi gán sẽ văng lỗi **`ReferenceError`** thay vì `TypeError`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="4-đầu-phạm-vi-là-gì-scope-hoisting"></a>
## 4. "Đầu Phạm Vi" Là Gì? (Scope & Hoisting)

> [!IMPORTANT]
> **Khái niệm then chốt:** Hoisting **CHỈ** đưa phần khai báo lên **đầu phạm vi (scope) nơi nó được viết**, chứ không phải lúc nào cũng bay lên đầu toàn bộ file!

Ta cần phân biệt 2 cấp độ phạm vi cơ bản:
1. **Phạm vi toàn cục (Global Scope):** Code được viết ở ngoài cùng file (trong môi trường script thông thường). Phần khai báo sẽ được hoist lên đầu file và có thể truy cập ở mọi nơi.
2. **Phạm vi hàm (Function/Local Scope):** Code được viết bên trong một hàm (ví dụ hàm `run()`). Phần khai báo bên trong hàm chỉ được hoist lên **đầu của chính hàm đó**.

### Ví dụ phân tích cơ chế phạm vi:

```javascript
// 1. Gọi hàm run ngoài phạm vi toàn cục:
run();

// 2. Thử gọi hàm internalFunction từ bên ngoài:
// internalFunction(); // ❌ ReferenceError: internalFunction is not defined!

function run() {
    console.log("--- Bắt đầu hàm run ---");

    // Gọi hàm con TRƯỚC khi định nghĩa bên trong hàm run:
    internalFunction(); // ✅ Chạy thành công: "Tôi là hàm nội bộ!"

    function internalFunction() {
        console.log("Tôi là hàm nội bộ!");
    }
}
```

**Phân tích chi tiết:**
- `run` được khai báo ở phạm vi ngoài cùng $\rightarrow$ được hoisted lên đầu file $\rightarrow$ gọi `run()` ở dòng 2 hoàn toàn hợp lệ.
- `internalFunction` được khai báo **bên trong hàm `run()`** $\rightarrow$ nó thuộc phạm vi của `run`.
- Nó chỉ được hoisted lên **đầu thân hàm `run`**. Do đó, gọi ở bất kỳ dòng nào bên trong `run` đều hợp lệ.
- Tuy nhiên, từ bên ngoài hàm `run`, thế giới bên ngoài hoàn toàn không biết `internalFunction` là ai $\rightarrow$ ném lỗi **`ReferenceError: internalFunction is not defined`**.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="5-cạm-bẫy-thường-gặp-cách-phòng-tránh-common-pitfalls"></a>
## 5. Cạm Bẫy Thường Gặp & Cách Phòng Tránh (Common Pitfalls)

### Cạm bẫy 1: Biến trùng tên ghi đè lẫn nhau do `var`
```javascript
var name = "Nam";

function test() {
    console.log(name); // In ra undefined, KHÔNG PHẢI "Nam"!
    var name = "Hoàng";
    console.log(name); // In ra "Hoàng"
}

test();
```
*Giải thích:* Bên trong hàm `test`, biến cục bộ `var name` được hoisted lên đầu hàm `test` với giá trị `undefined`, che khuất (shadow) biến `name` toàn cục bên ngoài.

### Cạm bẫy 2: Function Declaration được ưu tiên hơn `var` khi trùng tên
```javascript
console.log(typeof diem); // In ra "function", không phải "undefined"!

var diem = 10;
function diem() {
    return 100;
}
```
*Giải thích:* Trong Creation Phase, Function Declaration được đưa lên trước và ghi đè phần khai báo `var` trùng tên. Sau đó khi chạy tới dòng `diem = 10;` thì `diem` mới chuyển thành kiểu số.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="6-bảng-tổng-kết-so-sánh-cơ-chế-hoisting"></a>
## 6. Bảng Tổng Kết So Sánh Cơ Chế Hoisting

| Loại khai báo | Có Hoisting không? | Giá trị khởi tạo khi Hoist | Dùng trước khai báo được không? | Lỗi sinh ra nếu gọi sai |
| :--- | :---: | :---: | :---: | :--- |
| **`var`** | ✅ Có | `undefined` | ✅ Được *(nhưng giá trị là `undefined`)* | Không lỗi nếu chỉ đọc, `TypeError` nếu gọi như hàm |
| **`let` / `const`** | ✅ Có | Không khởi tạo *(kẹt trong TDZ)* | ❌ **Không** | `ReferenceError: Cannot access before initialization` |
| **`function` (Declaration)** | ✅ Có | Toàn bộ định nghĩa hàm | ✅ **Được gọi thoải mái** | Không lỗi |
| **Function Expression (`var`)** | ✅ *(phần biến)* | `undefined` | ❌ **Không** | `TypeError: ... is not a function` |
| **Function Expression (`const/let`)**| ✅ *(phần biến)*| Không khởi tạo *(TDZ)* | ❌ **Không** | `ReferenceError: Cannot access before initialization` |

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="7-lời-khuyên-thực-chiến"></a>
## 7. Lời Khuyên Thực Chiến

1. **Luôn dùng `const` (mặc định) và `let` (khi cần gán lại giá trị).** Hạn chế tối đa hoặc bỏ hẳn việc dùng `var` trong các dự án hiện đại để tránh các lỗi tiềm ẩn do Hoisting gây ra.
2. **Khai báo biến ở đầu phạm vi sử dụng** và định nghĩa hàm trước khi gọi để luồng đọc code tự nhiên, rõ ràng và dễ bảo trì.
3. **Nắm vững TDZ** để tự tin giải thích trong các buổi phỏng vấn kỹ thuật JavaScript từ mức Junior đến Senior!

[⬆️ Quay lại Mục lục](#mục-lục)
