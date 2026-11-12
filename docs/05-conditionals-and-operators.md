# 05 - Câu Lệnh Rẽ Nhánh & Toàn Bộ Hệ Thống Toán Tử Trong JavaScript (Operators)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng luồng chạy của mã nguồn JavaScript giống như một **đoàn tàu hỏa trên mạng lưới đường ray**:
> - Mặc định, con tàu luôn chạy thẳng một mạch từ ga đầu đến ga cuối (thực thi tuần tự từng dòng code từ trên xuống dưới).
> - **Câu lệnh rẽ nhánh (`if...else`, `switch`)** chính là các **chiếc cần bẻ ghi đường ray (Track Switches)**: Tùy thuộc vào tín hiệu điều kiện (đèn xanh hay đèn đỏ, `true` hay `false`), con tàu sẽ được chuyển hướng đi vào nhánh đường ray phù hợp nhất mà không bao giờ bị đâm vào ngõ cụt.
> - **Toán tử số học & gán (`+`, `-`, `*`, `/`, `+=`, `++`)** là **động cơ và hộp số**: Biến đổi dữ liệu, cộng dồn nhiên liệu, gia tốc con tàu.
> - **Toán tử so sánh (`===`, `!==`, `>`, `<`)** là **cảm biến kiểm định công nghệ cao**: Đo lường chuẩn xác cả "kích thước" (giá trị) lẫn "chất liệu" (kiểu dữ liệu) của toa tàu trước khi cho phép ghép toa.
> - **Toán tử hiện đại (`?.`, `??`)** là **túi khí an toàn thông minh**: Giúp con tàu lướt êm qua những đoạn đường ray bị khuyết dữ liệu (`null`, `undefined`) mà không bao giờ bị trật bánh crash ứng dụng.

---

## Mục Lục
<a id="mục-lục"></a>

1. [Câu Lệnh Điều Kiện if...else & if...else if...else](#1-câu-lệnh-điều-kiện-if-else-if-else-if-else)
2. [Cấu Trúc Rẽ Nhánh switch...case & Kỹ Thuật Fall-Through](#2-cấu-trúc-rẽ-nhánh-switch-case-kỹ-thuật-fall-through)
3. [Toán Tử Số Học (Arithmetic Operators) & Khác Biệt x++ vs ++x](#3-toán-tử-số-học-arithmetic-operators-khác-biệt-x-vs-x)
4. [Toán Tử Gán (Assignment Operators)](#4-toán-tử-gán-assignment-operators)
5. [Toán Tử So Sánh (Comparison Operators)](#5-toán-tử-so-sánh-comparison-operators)
6. [Toán Tử Ba Ngôi (Ternary Operator)](#6-toán-tử-ba-ngôi-ternary-operator)
7. [Toán Tử Logic Cơ Bản & Đoản Mạch (Short-Circuit)](#7-toán-tử-logic-cơ-bản-đoản-mạch-short-circuit)
8. [Các Toán Tử Hiện Đại & Đặc Biệt (?. , ?? , typeof, instanceof, ...)](#8-các-toán-tử-hiện-đại-đặc-biệt-typeof-instanceof)
9. [Bảng Xếp Hạng Độ Ưu Tiên Toàn Diện Của Toán Tử (Operator Precedence)](#9-bảng-xếp-hạng-độ-ưu-tiên-toàn-diện-của-toán-tử-operator-precedence)
10. [Các Cạm Bẫy Phổ Biến (Common Pitfalls)](#10-các-cạm-bẫy-phổ-biến-common-pitfalls)
11. [Bảng So Sánh Tổng Kết Cốt Lõi](#11-bảng-so-sánh-tổng-kết-cốt-lõi)

---

<a id="1-câu-lệnh-điều-kiện-if-else-if-else-if-else"></a>
## 1. Câu Lệnh Điều Kiện if...else & if...else if...else

### 1.1. Cấu trúc `if...else` cơ bản
Điều khiển luồng chương trình bằng cách kiểm tra biểu thức điều kiện:
- Nếu `điều_kiện` là `true`, khối mã trong `if` được thực thi.
- Nếu `điều_kiện` là `false`, khối mã trong `else` được thực thi (phần `else` là tùy chọn).

```javascript
const temperature = 32;

if (temperature > 30) {
    console.log("Thời tiết hôm nay rất nóng, hãy bật điều hòa!");
} else {
    console.log("Thời tiết mát mẻ, dễ chịu.");
}
```

### 1.2. Cấu trúc `if...else if...else` (Nhiều điều kiện)
Kiểm tra nhiều điều kiện tuần tự từ trên xuống dưới. **Chỉ duy nhất khối mã của điều kiện đầu tiên đúng được thực thi**, các nhánh còn lại sẽ bị bỏ qua:

```javascript
const day = "Wednesday";
const time = 21;

if (time < 12) {
    console.log("Buổi sáng thứ " + day);
} else if (time < 18) {
    console.log("Buổi chiều thứ " + day);
} else {
    console.log("Buổi tối thứ " + day); // Nhánh này chạy vì time = 21 >= 18
}
// Kết quả: "Buổi tối thứ Wednesday"
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="2-cấu-trúc-rẽ-nhánh-switch-case-kỹ-thuật-fall-through"></a>
## 2. Cấu Trúc Rẽ Nhánh switch...case & Kỹ Thuật Fall-Through

### 2.1. Cú pháp và mục đích
`switch...case` được dùng khi bạn cần so sánh **một giá trị đơn lẻ với nhiều trường hợp (cases) cụ thể**. Nó giúp mã nguồn sạch sẽ, dễ đọc hơn việc viết một chuỗi dài `else if`.

> [!IMPORTANT]
> `switch` so sánh giá trị biểu thức với từng `case` bằng **toán tử so sánh nghiêm ngặt `===`** (cả giá trị lẫn kiểu dữ liệu).

```javascript
const day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("Hôm nay là thứ Hai.");
        break;
    case "Wednesday":
        console.log("Hôm nay là thứ Tư.");
        break;
    case "Friday":
        console.log("Hôm nay là thứ Sáu.");
        break;
    default:
        console.log("Hôm nay không phải thứ Hai, Tư, hay Sáu.");
}
// Kết quả: "Hôm nay là thứ Tư."
```
- **`break`**: Lệnh bắt buộc để ngắt và thoát khỏi khối `switch`. Nếu không có `break`, chương trình sẽ tiếp tục chạy các `case` bên dưới bất kể điều kiện có khớp hay không.
- **`default`**: Nhánh mặc định (tương đương `else`), chạy khi không có bất kỳ `case` nào khớp.

### 2.2. Kỹ thuật Fall-Through (Chảy tuột khi bỏ qua `break`)
Khi bạn chủ động bỏ từ khóa `break`, mã nguồn sẽ tiếp tục thực thi các `case` tiếp theo cho đến khi gặp `break` hoặc kết thúc `switch`:

```javascript
const score = 85;

switch (true) {
    case score >= 90:
        console.log("Hạng A");
        break;
    case score >= 80:
        console.log("Hạng B");
        // Không có break -> tiếp tục chảy xuống case dưới!
    case score >= 70:
        console.log("Đạt yêu cầu");
        break;
    default:
        console.log("Không đạt");
}
// Kết quả in ra cả 2 dòng:
// "Hạng B"
// "Đạt yêu cầu"
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="3-toán-tử-số-học-arithmetic-operators-khác-biệt-x-vs-x"></a>
## 3. Toán Tử Số Học (Arithmetic Operators) & Khác Biệt x++ vs ++x

Toán tử số học thực hiện các phép tính toán số học căn bản trong JavaScript:

| Toán tử | Tên toán tử | Ví dụ | Kết quả ($x = 10, y = 3$) |
| :---: | :--- | :--- | :--- |
| **`+`** | Cộng / Nối chuỗi | `x + y` | `13` (hoặc `"103"` nếu một bên là chuỗi) |
| **`-`** | Trừ | `x - y` | `7` |
| **`*`** | Nhân | `x * y` | `30` |
| **`/`** | Chia | `x / y` | `3.3333333333333335` |
| **`%`** | Chia lấy dư (Modulus) | `x % y` | `1` (vì $10 = 3 \times 3 + 1$) |
| **`**`** | Lũy thừa (ES6) | `x ** y` | `1000` (tương đương $10^3$) |
| **`++`** | Tăng 1 đơn vị | `x++` hoặc `++x` | `11` |
| **`--`** | Giảm 1 đơn vị | `x--` hoặc `--x` | `9` |

### Phân biệt sống còn giữa `x++` (Post-increment) và `++x` (Pre-increment):
Đây là bẫy kinh điển trong bài tập trắc nghiệm và phỏng vấn:
- **`x++` (Hậu tố - Post-increment):** **Trả về giá trị HIỆN TẠI** của $x$ trước để tham gia vào biểu thức tính toán, **rồi sau đó mới tăng** $x$ lên 1 đơn vị.
- **`++x` (Tiền tố - Pre-increment):** **Tăng $x$ lên 1 đơn vị TRƯỚC**, rồi mới trả về giá trị mới đó để tính toán.

```javascript
let a = 5;
let b = a++; // b nhận giá trị hiện tại là 5, sau đó a mới tăng lên 6
console.log(a, b); // a = 6, b = 5

let x = 5;
let y = ++x; // x tăng ngay lên 6, sau đó y nhận giá trị mới là 6
console.log(x, y); // x = 6, y = 6
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="4-toán-tử-gán-assignment-operators"></a>
## 4. Toán Tử Gán (Assignment Operators)

Dùng để gán hoặc vừa tính toán vừa gán giá trị cho một biến:

| Toán tử | Cách viết ngắn gọn | Tương đương với | Giải thích ý nghĩa |
| :---: | :--- | :--- | :--- |
| **`=`** | `x = y` | `x = y` | Gán giá trị vế phải cho biến vế trái |
| **`+=`** | `x += y` | `x = x + y` | Cộng thêm $y$ vào $x$ |
| **`-=`** | `x -= y` | `x = x - y` | Trừ bớt $y$ khỏi $x$ |
| **`*=`** | `x *= y` | `x = x * y` | Nhân $x$ với $y$ |
| **`/=`** | `x /= y` | `x = x / y` | Chia $x$ cho $y$ |
| **`%=`** | `x %= y` | `x = x % y` | Lấy phần dư của $x$ chia $y$ |
| **`**=`** | `x **= y` | `x = x ** y` | Nâng $x$ lên lũy thừa $y$ |
| **`??=`** | `x ??= y` | `x = x ?? y` | **Gán logic:** Chỉ gán $y$ nếu $x$ đang là `null` hoặc `undefined` (ES2021) |

```javascript
let score = 100;
score += 50; // score = 150
score *= 2;  // score = 300

let nickname = null;
nickname ??= "Khách vãng lai"; // Gán vì nickname là null
console.log(nickname); // "Khách vãng lai"
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="5-toán-tử-so-sánh-comparison-operators"></a>
## 5. Toán Tử So Sánh (Comparison Operators)

Toán tử so sánh dùng để đối chiếu 2 giá trị và luôn trả về kết quả kiểu Boolean (`true` hoặc `false`):

| Toán tử | Mô tả | Ví dụ | Kết quả | Ghi chú quan trọng |
| :---: | :--- | :--- | :---: | :--- |
| **`===`** | Bằng tuyệt đối (Strict Equality) | `'5' === 5` | `false` | **Khuyên dùng 100%:** So sánh cả giá trị lẫn kiểu dữ liệu. |
| **`==`** | Bằng lỏng lẻo (Loose Equality) | `'5' == 5` | `true` | **Tránh dùng:** Tự động ép kiểu ngầm định nguy hiểm. |
| **`!==`** | Không bằng tuyệt đối (Strict Inequality) | `'5' !== 5` | `true` | Khác nhau về kiểu hoặc giá trị. |
| **`!=`** | Không bằng lỏng lẻo (Loose Inequality) | `'5' != 5` | `false` | Tự động ép kiểu ngầm định. |
| **`>`** | Lớn hơn | `10 > 5` | `true` | |
| **`<`** | Nhỏ hơn | `10 < 5` | `false` | |
| **`>=`** | Lớn hơn hoặc bằng | `10 >= 10` | `true` | |
| **`<=`** | Nhỏ hơn hoặc bằng | `10 <= 5` | `false` | |

```javascript
console.log(5 === "5");  // false (number !== string)
console.log(5 == "5");   // true  (chuỗi "5" bị ép kiểu về số 5)
console.log(0 == false); // true  (cả 2 đều bị ép về 0)
console.log(0 === false);// false (number !== boolean)
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="6-toán-tử-ba-ngôi-ternary-operator"></a>
## 6. Toán Tử Ba Ngôi (Ternary Operator)

Toán tử ba ngôi là cú pháp rút gọn cho câu lệnh `if...else` đơn giản, trả về giá trị trực tiếp để gán cho biến hoặc return trong hàm:

$$\text{điều\_kiện} \mathbin{?} \text{biểu\_thức\_khi\_true} \mathbin{:} \text{biểu\_thức\_khi\_false}$$

```javascript
const age = 20;
const status = age >= 18 ? "Người lớn" : "Trẻ em";
console.log(status); // "Người lớn"

// Tương đương if...else:
let statusIf;
if (age >= 18) {
    statusIf = "Người lớn";
} else {
    statusIf = "Trẻ em";
}
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="7-toán-tử-logic-cơ-bản-đoản-mạch-short-circuit"></a>
## 7. Toán Tử Logic Cơ Bản & Đoản Mạch (Short-Circuit)

Dùng để kết hợp hoặc đảo ngược các biểu thức điều kiện:

| Toán tử | Tên gọi | Mô tả | Ví dụ |
| :---: | :--- | :--- | :--- |
| **`&&`** | AND (Và) | Trả về `true` khi **tất cả** các vế đều đúng. | `(5 > 2) && (10 > 3)` $\rightarrow$ `true` |
| **`||`** | OR (Hoặc) | Trả về `true` khi **ít nhất một** vế đúng. | `(5 < 2) || (10 > 3)` $\rightarrow$ `true` |
| **`!`** | NOT (Phủ định) | Đảo ngược giá trị Boolean. | `!(5 > 2)` $\rightarrow$ `false` |

### Cơ chế Đoản mạch (Short-circuit):
- **`A && B`:** Nếu $A$ sai (`false` / Falsy), JavaScript **dừng lại ngay lập tức** và trả về $A$, không thèm kiểm tra $B$.
- **`A || B`:** Nếu $A$ đúng (`true` / Truthy), JavaScript **dừng lại ngay lập tức** và trả về $A$, không thèm kiểm tra $B$.

> [!TIP]
> Để tìm hiểu chuyên sâu về bài toán bữa ăn, dã ngoại, phân quyền VIP streaming, bẫy bitwise `&`/`|` và độ ưu tiên kết hợp nhiều toán tử logic, mời bạn xem tiếp bài học chuyên biệt: [`docs/06-logical-operators.md`](file:///d:/github/studyProgram/javascript/docs/06-logical-operators.md).

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="8-các-toán-tử-hiện-đại-đặc-biệt-typeof-instanceof"></a>
## 8. Các Toán Tử Hiện Đại & Đặc Biệt (?. , ?? , typeof, instanceof, ...)

JavaScript hiện đại (ES6 đến ES2022) bổ sung các toán tử cực kỳ mạnh mẽ giúp viết code an toàn và ngắn gọn:

### 8.1. Optional Chaining (`?.`)
Giúp truy cập an toàn vào thuộc tính lồng sâu bên trong Object mà không làm sập (crash) chương trình nếu gặp `null` hoặc `undefined`:

```javascript
const user = {
    name: "Hoàng Nam"
    // Không có thuộc tính address
};

// ❌ Cách cũ không có ?.: Gây lỗi nghiêm trọng!
// console.log(user.address.street); // TypeError: Cannot read properties of undefined (reading 'street')

// ✅ Cách hiện đại với Optional Chaining:
console.log(user?.address?.street); // undefined (An toàn tuyệt đối, không bị crash!)
```

### 8.2. Nullish Coalescing Operator (`??`)
Trả về vế bên phải **chỉ khi** vế bên trái là `null` hoặc `undefined` (khác với `||` vốn coi cả `0`, `""`, `false` là Falsy):

```javascript
const count = 0; // Điểm số hợp lệ của người chơi là 0

const a = count || 10; // 10 (LỖI LOGIC: vì 0 bị coi là Falsy nên || nhảy sang 10)
const b = count ?? 10; // 0  (CHÍNH XÁC: vì 0 không phải là null/undefined)
```

### 8.3. Các toán tử đặc biệt khác
- **`typeof`:** Kiểm tra kiểu dữ liệu của một giá trị (`typeof "Nam"` $\rightarrow$ `"string"`, `typeof 123` $\rightarrow$ `"number"`).
- **`instanceof`:** Kiểm tra xem một đối tượng có thuộc về một Constructor/Class nào đó hay không (`[1, 2] instanceof Array` $\rightarrow$ `true`).
- **Spread / Rest Operator (`...`):** Trải các phần tử của mảng/object (`const clone = [...arr]`) hoặc gom nhóm các tham số của hàm (`function sum(...nums)`).
- **Toán tử Bitwise (`&`, `|`, `^`, `~`, `<<`, `>>`):** Thao tác trên từng bit nhị phân của số nguyên. Thường dùng trong mã hóa, đồ họa, xử lý nhị phân cấp thấp (ít dùng trong logic ứng dụng web).

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="9-bảng-xếp-hạng-độ-ưu-tiên-toàn-diện-của-toán-tử-operator-precedence"></a>
## 9. Bảng Xếp Hạng Độ Ưu Tiên Toàn Diện Của Toán Tử (Operator Precedence)

Khi một biểu thức chứa nhiều loại toán tử đan xen, JavaScript xử lý tuần tự theo thứ tự ưu tiên nghiêm ngặt từ cao xuống thấp:

| Mức ưu tiên | Nhóm toán tử | Các ký hiệu cụ thể | Hướng kết hợp (Associativity) |
| :---: | :--- | :--- | :---: |
| **1 (Cao nhất)** | **Dấu ngoặc đơn** | `( ... )` | Từ trong ra ngoài |
| **2** | **Truy cập thuộc tính & Gọi hàm** | `.` , `?.` , `[ ]` , `( )` | Trái sang phải |
| **3** | **Toán tử một ngôi (Unary)** | `++` , `--` , `!` , `typeof` , `+` (dương) , `-` (âm) | Phải sang trái |
| **4** | **Lũy thừa** | `**` | **Phải sang trái** ($2^{3^2} = 2^9$) |
| **5** | **Nhân, Chia, Lấy dư** | `*` , `/` , `%` | Trái sang phải |
| **6** | **Cộng, Trừ** | `+` , `-` | Trái sang phải |
| **7** | **So sánh thứ tự** | `<` , `<=` , `>` , `>=` , `instanceof` | Trái sang phải |
| **8** | **So sánh bằng** | `===` , `!==` , `==` , `!=` | Trái sang phải |
| **9** | **Logical AND** | `&&` | Trái sang phải |
| **10** | **Logical OR & Nullish** | `||` , `??` | Trái sang phải |
| **11** | **Toán tử ba ngôi** | `? :` | Phải sang trái |
| **12 (Thấp nhất)**| **Toán tử gán** | `=` , `+=` , `-=` , `*=` , `/=` , `??=` | **Phải sang trái** |

> [!TIP]
> **Lời khuyên vàng:** Bạn không cần phải ghi nhớ máy móc toàn bộ bảng 12 bậc ưu tiên này! Khi viết các biểu thức phức tạp, **hãy luôn chủ động dùng dấu ngoặc đơn `()`** để nhóm các phép tính theo đúng ý đồ của mình. Code vừa dễ đọc vừa không bao giờ bị bug do độ ưu tiên!

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="10-các-cạm-bẫy-phổ-biến-common-pitfalls"></a>
## 10. Các Cạm Bẫy Phổ Biến (Common Pitfalls)

### 10.1. Bẫy số 1: Dùng nhầm toán tử gán `=` trong điều kiện `if`
```javascript
let isLoggedIn = false;

// ❌ SAI LẦM: Dùng dấu = (gán giá trị) thay vì ===
if (isLoggedIn = true) {
    console.log("Bạn đã đăng nhập!"); // Luôn chạy vì kết quả phép gán là true!
}

// ✅ ĐÚNG:
if (isLoggedIn === true) { ... }
// Hoặc ngắn gọn hơn:
if (isLoggedIn) { ... }
```

### 10.2. Bẫy số 2: Quên `break` trong `switch` ngoài ý muốn
```javascript
const action = "create";
switch (action) {
    case "create":
        console.log("Tạo mới tài nguyên");
        // Quên break! Code sẽ tiếp tục chảy xuống nhánh delete!
    case "delete":
        console.log("Xóa tài nguyên!");
        break;
}
```

### 10.3. Bẫy số 3: Nhầm lẫn giữa `x++` và `++x` trong biểu thức gán
```javascript
let n = 10;
let res = n++ * 2; // res = 20, KHÔNG PHẢI 22! (vì n++ trả về 10 rồi mới tăng n lên 11)
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="11-bảng-so-sánh-tổng-kết-cốt-lõi"></a>
## 11. Bảng So Sánh Tổng Kết Cốt Lõi

| Cấu trúc / Toán tử | Khi nào nên sử dụng? | Lưu ý cốt lõi |
| :--- | :--- | :--- |
| **`if...else`** | Rẽ nhánh điều kiện logic phức tạp, so sánh khoảng giá trị (`<`, `>`, `>=`). | Hỗ trợ mọi biểu thức boolean. |
| **`switch...case`** | So sánh 1 giá trị cố định với danh sách nhiều trường hợp cụ thể. | So sánh bằng `===`, nhớ có `break` để tránh Fall-through ngoài ý muốn. |
| **`Ternary ( ? : )`** | Gán giá trị hoặc return biểu thức đơn giản dựa trên 1 điều kiện duy nhất. | Tránh lồng nhau quá 1 cấp. |
| **`===` vs `==`** | Luôn ưu tiên `===` trong mọi trường hợp. | `==` tự ý ép kiểu ngầm, tạo ra các bug logic tiềm ẩn. |
| **`?.` (Optional Chaining)** | Truy cập an toàn vào thuộc tính object lồng sâu. | Tránh lỗi crash `Cannot read properties of undefined`. |
| **`??` (Nullish)** | Cung cấp giá trị dự phòng khi giá trị là `null` hoặc `undefined`. | Không đè lên các giá trị Falsy hợp lệ như `0`, `""`, `false`. |

[⬆️ Quay lại Mục lục](#mục-lục)
