# 05 - Câu Lệnh Rẽ Nhánh & Toán Tử Logic Trong JavaScript

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng luồng chạy của mã nguồn JavaScript giống như một **đoàn tàu hỏa trên mạng lưới đường ray**:
> - Mặc định, con tàu luôn chạy thẳng một mạch từ ga đầu đến ga cuối (thực thi tuần tự từng dòng code từ trên xuống dưới).
> - **Câu lệnh rẽ nhánh (`if...else`, `switch`)** chính là các **chiếc cần bẻ ghi đường ray (Track Switches)**: Tùy thuộc vào tín hiệu điều kiện (đèn xanh hay đèn đỏ, `true` hay `false`), con tàu sẽ được chuyển hướng đi vào nhánh đường ray phù hợp nhất mà không bao giờ bị đâm vào ngõ cụt.
> - **Toán tử so sánh nghiêm ngặt (`===`, `!==`)** là chiếc **cảm biến kiểm định công nghệ cao**: Đo lường chuẩn xác cả "kích thước" (giá trị) lẫn "chất liệu" (kiểu dữ liệu) của toa tàu trước khi cho phép ghép toa.
> - **Toán tử logic (`!`, `&&`, `||`)** là **hệ thống điều phối liên hoàn**: Phải thỏa mãn toàn bộ các trạm kiểm tra (`&&`), hoặc chỉ cần một lối đi thông thoáng (`||`), con tàu mới có thể tiến bước. Khi có sự cố, toán tử đảo ngược (`!`) sẽ lập tức biến tín hiệu cho phép thành lệnh dừng khẩn cấp!

---

## Mục Lục
<a id="mục-lục"></a>

1. [Câu Lệnh Điều Kiện if...else & if...else if...else](#1-câu-lệnh-điều-kiện-ifelse--ifelse-ifelse)
2. [Cấu Trúc Rẽ Nhánh switch...case & Kỹ Thuật Fall-Through](#2-cấu-trúc-rẽ-nhánh-switchcase--kỹ-thuật-fall-through)
3. [Toán Tử So Sánh: Nghiêm Ngặt (===, !==) vs Lỏng Lẻo (==, !=)](#3-toán-tử-so-sánh-nghiêm-ngặt----vs-lỏng-lẻo--)
4. [Toán Tử Ba Ngôi (Ternary Operator)](#4-toán-tử-ba-ngôi-ternary-operator)
5. [Toán Tử Logic: NOT (!, !!), AND (&&), OR (||)](#5-toán-tử-logic-not---and--or-)
6. [Thứ Tự Ưu Tiên Của Các Toán Tử Logic](#6-thứ-tự-ưu-tiên-của-các-toán-tử-logic)
7. [Các Cạm Bẫy Phổ Biến (Common Pitfalls)](#7-các-cạm-bẫy-phổ-biến-common-pitfalls)
8. [Bảng So Sánh Tổng Kết Cốt Lõi](#8-bảng-so-sánh-tổng-kết-cốt-lõi)

---

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

## 3. Toán Tử So Sánh: Nghiêm Ngặt (===, !==) vs Lỏng Lẻo (==, !=)

### 3.1. So sánh nghiêm ngặt (Strict Equality: `===` và `!==`)
- So sánh cả **giá trị** và **kiểu dữ liệu**.
- Tuyệt đối không thực hiện ép kiểu ngầm định.

```javascript
console.log(5 === 5);    // true  (cùng số 5)
console.log(5 === "5");  // false (number !== string)
console.log(5 !== 10);   // true
console.log(5 !== "5");  // true  (khác kiểu dữ liệu)
```

### 3.2. So sánh lỏng lẻo (Loose Equality: `==` và `!=`)
- Tự động thực hiện **ép kiểu ngầm (Type Coercion)** về cùng kiểu dữ liệu trước khi so sánh.
- Rất dễ sinh ra lỗi ngầm nguy hiểm:

```javascript
console.log(5 == "5");   // true  (chuỗi "5" bị ép về số 5)
console.log(0 == false); // true  (cả 2 đều bị ép về 0)
console.log("" == false);// true  (chuỗi rỗng bị ép về 0)
console.log(5 != "6");   // true
console.log(0 != false); // false
```

> [!TIP]
> **Khuyến nghị vàng:** Luôn luôn dùng `===` và `!==` trong mọi dự án thực tế. Không bao giờ dùng `==` trừ khi bạn có chủ đích kiểm tra cả `null` và `undefined` cùng lúc (`val == null`).

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 4. Toán Tử Ba Ngôi (Ternary Operator)
Toán tử ba ngôi là cú pháp rút gọn cho câu lệnh `if...else` đơn giản, trả về giá trị trực tiếp để gán cho biến hoặc return trong hàm:

$$\text{điều\_kiện} \mathbin{?} \text{biểu\_thức\_khi\_true} \mathbin{:} \text{biểu\_thức\_khi\_false}$$

```javascript
const hour = 21;

// Cách viết ngắn gọn với Ternary Operator:
const greeting = hour < 12 ? "Chào buổi sáng!" : "Chào buổi tối!";
console.log(greeting); // "Chào buổi tối!"

// Tương đương với cách viết if...else truyền thống:
let greetingIf;
if (hour < 12) {
    greetingIf = "Chào buổi sáng!";
} else {
    greetingIf = "Chào buổi tối!";
}
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 5. Toán Tử Logic: NOT (!, !!), AND (&&), OR (||)

### 5.1. Toán tử NOT (`!`) và ép kiểu boolean tường minh (`!!`)
- Đảo ngược giá trị logic: nếu biểu thức là `true` thì thành `false`, và ngược lại.
- Tự động ép giá trị về kiểu boolean trước khi đảo:

```javascript
const isActive = true;
console.log(!isActive); // false
console.log(!false);    // true
console.log(!0);        // true (vì 0 là falsy -> phủ định thành true)
console.log(!"hello");  // false (vì "hello" là truthy -> phủ định thành false)

// Dùng !! (Double NOT) để ép kiểu boolean tường minh:
console.log(!!0);       // false
console.log(!!"admin"); // true
```

### 5.2. Toán tử AND (`&&` - Tìm Falsy đầu tiên)
- Đánh giá biểu thức từ trái sang phải.
- **Cơ chế đoản mạch (Short-circuit):** Dừng lại ngay lập tức khi gặp giá trị `false` (hoặc Falsy) đầu tiên và trả về giá trị đó.
- Nếu tất cả biểu thức đều `true`, trả về giá trị của biểu thức cuối cùng:

```javascript
console.log(5 > 0 && 10 > 0); // true  (cả 2 đều true)
console.log(5 > 0 && 10 < 0); // false (vế sau là false)

// Cơ chế Short-circuit với giá trị thực tế:
console.log(0 && 5);          // 0  (dừng ngay ở 0 vì 0 là falsy)
console.log(5 && 10);         // 10 (cả 2 truthy -> trả về vế cuối)
console.log("An" && "" && "Bình"); // "" (falsy đầu tiên)
```

### 5.3. Toán tử OR (`||` - Tìm Truthy đầu tiên)
- Đánh giá biểu thức từ trái sang phải.
- **Cơ chế đoản mạch (Short-circuit):** Dừng lại ngay lập tức khi gặp giá trị `true` (hoặc Truthy) đầu tiên và trả về giá trị đó.
- Nếu tất cả biểu thức đều `false`, trả về giá trị của biểu thức cuối cùng:

```javascript
console.log(0 > 0 || 10 > 0); // true  (vế sau là true)
console.log(0 > 0 || 10 < 0); // false (cả 2 đều false)

// Cơ chế Short-circuit với giá trị thực tế:
console.log(0 || 5);          // 5  (trả về truthy đầu tiên)
console.log(10 || 20);        // 10 (trả về truthy đầu tiên)
console.log(0 || "" || null); // null (tất cả đều falsy -> trả về vế cuối)
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 6. Thứ Tự Ưu Tiên Của Các Toán Tử Logic
Khi kết hợp nhiều toán tử logic trong cùng một biểu thức, JavaScript thực thi theo thứ tự ưu tiên từ cao xuống thấp:

$$\text{1. } \mathbf{!} \text{ (NOT - Cao nhất)} \quad \longrightarrow \quad \text{2. } \mathbf{\&\&} \text{ (AND - Trung bình)} \quad \longrightarrow \quad \text{3. } \mathbf{||} \text{ (OR - Thấp nhất)}$$

```javascript
// Phân tích biểu thức sau:
const result = !false || false && false;

// Bước 1: Thực thi NOT trước: !false -> true
// Biểu thức trở thành: true || false && false

// Bước 2: Thực thi AND trước OR: false && false -> false
// Biểu thức trở thành: true || false

// Bước 3: Thực thi OR: true || false -> true
console.log(result); // true
```

> [!TIP]
> **Quy tắc Clean Code:** Đừng bắt đồng đội phải nhớ bảng độ ưu tiên! Luôn sử dụng cặp ngoặc tròn `()` để biểu thị rõ ràng ý định gom nhóm logic: `(!false) || (false && false)`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 7. Các Cạm Bẫy Phổ Biến (Common Pitfalls)

### 7.1. Bẫy số 1: Dùng nhầm toán tử gán `=` trong điều kiện `if`
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

### 7.2. Bẫy số 2: Quên `break` trong `switch` ngoài ý muốn
```javascript
const action = "create";
switch (action) {
    case "create":
        console.log("Tạo mới tài nguyên");
        // Quên break! Code sẽ chạy tiếp sang nhánh delete!
    case "delete":
        console.log("Xóa tài nguyên!");
        break;
}
```

### 7.3. Bẫy số 3: Lạm dụng toán tử ba ngôi lồng nhau (Nested Ternary)
```javascript
// ❌ RẤT KHÓ ĐỌC (Code Smell):
const message = score > 90 ? "Xuất sắc" : score > 80 ? "Giỏi" : score > 65 ? "Khá" : "Trung bình";

// ✅ NÊN DÙNG: if...else if...else hoặc hàm có return sớm
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 8. Bảng So Sánh Tổng Kết Cốt Lõi

| Cấu trúc / Toán tử | Khi nào nên sử dụng? | Lưu ý cốt lõi |
| :--- | :--- | :--- |
| **`if...else`** | Rẽ nhánh điều kiện logic phức tạp, so sánh khoảng giá trị (`<`, `>`, `>=`). | Hỗ trợ mọi biểu thức boolean. |
| **`switch...case`** | So sánh 1 giá trị cố định với danh sách nhiều trường hợp cụ thể (Menu, Mã lỗi, Trạng thái đơn hàng). | So sánh bằng `===`, nhớ có `break` để tránh Fall-through ngoài ý muốn. |
| **`Ternary ( ? : )`** | Gán giá trị hoặc return biểu thức đơn giản dựa trên 1 điều kiện duy nhất. | Tránh lồng nhau quá 1 cấp để đảm bảo tính dễ đọc. |
| **`===` vs `==`** | Luôn ưu tiên `===` trong mọi trường hợp. | `==` tự ý ép kiểu ngầm, tạo ra các bug logic tiềm ẩn. |
| **`&&` (AND)** | Kiểm tra đồng thời nhiều điều kiện; thực hiện short-circuit khi cần guarded execution. | Dừng ngay ở Falsy đầu tiên. |
| **`||` (OR)** | Cung cấp giá trị dự phòng (fallback); kiểm tra ít nhất 1 điều kiện đúng. | Dừng ngay ở Truthy đầu tiên. |

[⬆️ Quay lại Mục lục](#mục-lục)
