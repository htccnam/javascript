# 05 - Truthy & Falsy trong JavaScript (Bản Chất & Ép Kiểu Ngầm Định)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng JavaScript là một **nhân viên soát vé rạp chiếu phim**:
> - Trước cửa vào phòng chiếu, nhân viên này chỉ quan tâm đúng một câu hỏi nhị phân: **"Có được vào xem hay không (true/false)?"**
> - Thay vì đòi hỏi một tấm vé boolean thuần túy, người xem có thể đưa ra rất nhiều thứ khác nhau: một chuỗi văn bản `"hello"`, một mảng rỗng `[]`, số `0`, hay chiếc ví rỗng `null`.
> - Người soát vé sẽ tự động "phiên dịch" (ép kiểu ngầm):
>   - Bất cứ thứ gì mang tính "rỗng", "hư vô", "số không" hoặc "không tồn tại" sẽ bị coi là **Falsy** (bị chặn lại).
>   - Tất cả mọi thứ còn lại — kể cả một chiếc hộp rỗng `[]` hay một object chưa có gì `{}` — đều được coi là **Truthy** (cho qua cửa).

---

## Mục Lục
<a id="mục-lục"></a>

1. [Khái Niệm Truthy & Falsy](#1-khái-niệm-truthy--falsy)
2. [Danh Sách 8 Giá Trị Falsy Trong JavaScript](#2-danh-sách-8-giá-trị-falsy-trong-javascript)
3. [Cơ Chế Ép Kiểu Ngầm Định (Implicit Type Coercion)](#3-cơ-chế-ép-kiểu-ngầm-định-implicit-type-coercion)
4. [Toán Tử Logic: &&, ||, ?? và !!](#4-toán-tử-logic---và-)
5. [Cạm Bẫy Phổ Biến & So Sánh == vs ===](#5-cạm-bẫy-phổ-biến--so-sánh--vs-)
6. [Best Practices Trong Thực Tế Dự Án](#6-best-practices-trong-thực-tế-dự-án)

---

## 1. Khái Niệm Truthy & Falsy
Trong JavaScript, một giá trị **Truthy** là giá trị được coi là `true` khi đặt trong ngữ cảnh luận lý (Boolean context) như câu lệnh điều kiện `if`, vòng lặp `while`, hoặc biểu thức toán tử 3 ngôi (`? :`).

Ngược lại, một giá trị **Falsy** là giá trị sẽ được chuyển đổi thành `false` trong ngữ cảnh luận lý.

```javascript
if ("JavaScript") {
  console.log("Chuỗi không rỗng là Truthy -> Chạy vào đây!");
}

if (0) {
  // Sẽ không chạy vì 0 là Falsy
} else {
  console.log("0 là Falsy -> Chạy vào nhánh else!");
}
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 2. Danh Sách 8 Giá Trị Falsy Trong JavaScript
JavaScript chỉ có duy nhất **8 giá trị Falsy** (tính đến ECMAScript hiện đại). Mọi giá trị khác ngoài 8 giá trị này đều là **Truthy**:

| STT | Giá trị Falsy | Kiểu dữ liệu (`typeof`) | Ý nghĩa thực tế |
| :---: | :--- | :--- | :--- |
| 1 | `false` | `boolean` | Giá trị boolean sai nguyên bản |
| 2 | `0` | `number` | Số không |
| 3 | `-0` | `number` | Số âm không |
| 4 | `0n` | `bigint` | Số 0 kiểu BigInt |
| 5 | `""` (hoặc `''`, ````) | `string` | Chuỗi ký tự rỗng (độ dài 0) |
| 6 | `null` | `object` (bug lịch sử) | Giá trị rỗng có chủ ý |
| 7 | `undefined` | `undefined` | Biến chưa được gán giá trị |
| 8 | `NaN` | `number` | "Not-a-Number" (kết quả phép toán lỗi) |

> [!IMPORTANT]
> **Đặc biệt lưu ý:**
> - `[]` (mảng rỗng) là **Truthy**!
> - `{}` (object rỗng) là **Truthy**!
> - `"0"` (chuỗi có số không) là **Truthy**!
> - `"false"` (chuỗi chữ false) là **Truthy**!

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 3. Cơ Chế Ép Kiểu Ngầm Định (Implicit Type Coercion)
Khi đặt giá trị vào biểu thức điều kiện, JS Engine tự động gọi ngầm hàm `Boolean(val)`:

```javascript
// JavaScript Engine tự động ép kiểu:
const username = "Huy";
if (username) { // Tương đương: if (Boolean(username) === true)
  console.log(`Xin chào ${username}`);
}
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 4. Toán Tử Logic: &&, ||, ?? và !!

### 4.1. Toán tử `&&` (Logical AND - Tìm Falsy đầu tiên)
Toán tử `&&` trả về **giá trị Falsy đầu tiên** mà nó bắt gặp. Nếu tất cả đều Truthy, nó trả về giá trị cuối cùng.
```javascript
console.log(true && "An" && 0 && "Linh"); // 0 (Falsy đầu tiên)
console.log("An" && "Bình" && "Cường");   // "Cường" (Truthy cuối)
```

### 4.2. Toán tử `||` (Logical OR - Tìm Truthy đầu tiên)
Toán tử `||` trả về **giá trị Truthy đầu tiên** mà nó bắt gặp. Nếu tất cả đều Falsy, nó trả về giá trị cuối cùng.
```javascript
const defaultName = userInput || "Khách vãng lai";
```

### 4.3. Toán tử `??` (Nullish Coalescing)
Toán tử `??` chỉ coi `null` và `undefined` là giá trị rỗng, cho phép giữ lại `0`, `""`, và `false`.
```javascript
const count = 0;
console.log(count || 10); // 10 (vì 0 là falsy -> sai mong muốn!)
console.log(count ?? 10); // 0 (vì 0 không phải null/undefined -> chuẩn xác!)
```

### 4.4. Toán tử `!!` (Double NOT)
Ép kiểu tường minh bất kỳ biến nào về `true` hoặc `false` primitive:
```javascript
const token = "eyJhbGciOi...";
const isAuthenticated = !!token; // true
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 5. Cạm Bẫy Phổ Biến & So Sánh == vs ===
Toán tử so sánh bằng lỏng lẻo (`==`) thực hiện ép kiểu ngầm định phức tạp và gây ra nhiều cạm bẫy:
```javascript
0 == false;         // true (0 và false đều ép về số 0)
"" == false;        // true ("" ép về 0)
[] == false;        // true ([] ép về "" rồi ép về 0)
null == undefined;  // true (quy ước đặc biệt)
null == false;      // false (null chỉ bằng null hoặc undefined)
NaN == NaN;         // false (NaN không bằng chính nó!)
```

> [!TIP]
> **Quy tắc vàng:** Luôn dùng so sánh nghiêm ngặt (`===` và `!==`) để kiểm tra cả giá trị lẫn kiểu dữ liệu mà không lo bị ép kiểu ngầm.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 6. Best Practices Trong Thực Tế Dự Án

### 6.1. Kiểm tra mảng rỗng
```javascript
// ❌ SAI:
if (arr) { ... } // Luôn true dù mảng rỗng!

// ✅ ĐÚNG:
if (arr.length === 0) {
  console.log("Mảng rỗng");
}
```

### 6.2. Kiểm tra object rỗng
```javascript
// ❌ SAI:
if (obj) { ... } // Luôn true dù {} rỗng!

// ✅ ĐÚNG:
if (Object.keys(obj).length === 0) {
  console.log("Object rỗng");
}
```

[⬆️ Quay lại Mục lục](#mục-lục)
