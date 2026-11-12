# Bài Tập 03: Từ Khóa Khai Báo (var, let, const) & Kiểu Dữ Liệu Trong JavaScript

## Mục Lục
<a id="mục-lục"></a>

1. [Phần 1: Phạm Vi (Scope) & Tái Khai Báo (var vs let vs const)](#phần-1-phạm-vi-scope-tái-khai-báo-var-vs-let-vs-const)
2. [Phần 2: Bản Chất của const với Kiểu Primitive vs Mảng & Object](#phần-2-bản-chất-của-const-với-kiểu-primitive-vs-mảng-object)
3. [Phần 3: Nhận Diện & Tránh 4 Cạm Bẫy Phổ Biến Khi Dùng const](#phần-3-nhận-diện-tránh-4-cạm-bẫy-phổ-biến-khi-dùng-const)
4. [Phần 4: Khám Phá 7 Kiểu Dữ Liệu Nguyên Thủy (Primitive Types)](#phần-4-khám-phá-7-kiểu-dữ-liệu-nguyên-thủy-primitive-types)

---

<a id="phần-1-phạm-vi-scope-tái-khai-báo-var-vs-let-vs-const"></a>
## Phần 1: Phạm Vi (Scope) & Tái Khai Báo (var vs let vs const)

### 1.1. Kiểm chứng Block Scope vs Function Scope
Cho đoạn mã sau bên trong một khối lệnh `{}`:
```javascript
{
    var bienVar = "Tôi là var";
    let bienLet = "Tôi là let";
    const bienConst = "Tôi là const";
}
```
**Yêu cầu:**
- Hãy in 3 biến trên ra màn hình **ở bên ngoài** khối lệnh `{}`.
- Quan sát và giải thích biến nào in ra thành công và biến nào bắn ra lỗi `ReferenceError`? Tại sao?

### 1.2. Kiểm chứng việc Khai Báo Lại (Re-declaration)
- Thử khai báo `var x = 10;` rồi khai báo lại `var x = 20;` trong cùng phạm vi.
- Thử khai báo `let y = 10;` rồi khai báo lại `let y = 20;` trong cùng phạm vi.
- Hãy giải thích lý do vì sao tính năng cho phép khai báo lại của `var` lại là mầm mống gây ra lỗi ngầm nghiêm trọng trong các dự án lớn.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-2-bản-chất-của-const-với-kiểu-primitive-vs-mảng-object"></a>
## Phần 2: Bản Chất của const với Kiểu Primitive vs Mảng & Object

### 2.1. Thử thách với biến nguyên thủy
- Khai báo một biến hằng `const score = 100;`.
- Thử gán lại `score = 150;` hoặc `score++`. Bọc trong khối `try...catch` để bắt lỗi và in ra tên lỗi cùng thông điệp lỗi.
- Giải thích: Tại sao kiểu nguyên thủy (Primitive) khi đi với `const` lại gần như bị "đóng băng" hoàn toàn?

### 2.2. Thử thách với chiếc hộp mảng: ["An", "Bình"]
Cho mảng ban đầu:
```javascript
const friend = ["An", "Bình"];
```
**Yêu cầu thực hiện tuần tự các thao tác sau:**
1. Thêm khách hàng `"Cường"` vào cuối mảng (`push`).
2. Thêm khách hàng ưu tiên `"Dũng"` vào đầu mảng (`unshift`).
3. Sửa phần tử đầu tiên thành `"Minh"` (`friend[0] = "Minh"`).
4. Phục vụ (xóa) khách hàng ở đầu mảng (`shift`).
5. Xóa khách hàng ở cuối mảng (`pop`).
6. Dùng `splice` xóa 1 phần tử tại vị trí bất kỳ.
7. Thử gán lại biến `friend = ["Nam", "Lan"]` và giải thích tại sao JavaScript báo lỗi dù các thao tác sửa đổi mảng ở trên vẫn chạy trơn tru.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-3-nhận-diện-tránh-4-cạm-bẫy-phổ-biến-khi-dùng-const"></a>
## Phần 3: Nhận Diện & Tránh 4 Cạm Bẫy Phổ Biến Khi Dùng const

### 3.1. Bẫy số 1: Nghĩ rằng `const` làm mảng trở nên bất biến
- Viết code chứng minh mảng khai báo bằng `const` hoàn toàn có thể thêm phần tử mới bằng `push()`.

### 3.2. Bẫy số 2: Khai báo `const` không gán giá trị khởi tạo
- Thử nghiệm cú pháp `const taxRate;` bên trong một khối `try...catch` hoặc giải thích lỗi cú pháp `Missing initializer in const declaration`.

### 3.3. Bẫy số 3: Bẫy kiểm tra kiểu dữ liệu của Mảng
- Dùng `typeof` để kiểm tra một mảng: kết quả in ra là gì?
- Tại sao không được dùng `typeof` để xác định mảng?
- Viết cách kiểm tra mảng chuẩn xác 100% bằng phương thức tĩnh `Array.isArray()`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-4-khám-phá-7-kiểu-dữ-liệu-nguyên-thủy-primitive-types"></a>
## Phần 4: Khám Phá 7 Kiểu Dữ Liệu Nguyên Thủy (Primitive Types)

### 4.1. Khởi tạo và kiểm tra `typeof` của 7 kiểu nguyên thủy
Tạo 7 biến tương ứng với 7 kiểu dữ liệu nguyên thủy trong JavaScript:
1. `Number`: số tuổi hoặc đơn giá
2. `String`: tên người dùng
3. `Boolean`: trạng thái kích hoạt tài khoản (`true`/`false`)
4. `Undefined`: biến khai báo chưa gán giá trị
5. `Null`: biến chủ động đánh dấu rỗng
6. `BigInt`: số nguyên lớn hơn $2^{53} - 1$ (thêm `n` ở cuối)
7. `Symbol`: mã định danh duy nhất

**Yêu cầu:**
- In ra giá trị và kiểu dữ liệu (`typeof`) của từng biến.
- Nhận xét: `typeof null` in ra kết quả gì? Đó là tính năng hay lỗi lịch sử?

### 4.2. Tính bất biến (Immutability) của chuỗi ký tự
Cho chuỗi:
```javascript
let greeting = "hello";
greeting[0] = "H"; // Cố gắng sửa chữ 'h' thành 'H'
```
- In ra chuỗi `greeting` sau lệnh trên. Chuỗi có bị đổi thành `"Hello"` không?
- Rút ra kết luận về tính chất của kiểu dữ liệu nguyên thủy khi lưu trữ trong vùng nhớ Stack.

[⬆️ Quay lại Mục lục](#mục-lục)
