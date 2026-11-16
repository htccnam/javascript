# Bài Tập 14: Ứng Dụng Toán Tử ++ Dạng Tiền Tố (Prefix) & Hậu Tố (Postfix) trong JavaScript

<a id="mục-lục"></a>
## Mục Lục

1. [Phần 1: Khởi Động — Cơ Chế Trả Về Của Tiền Tố vs Hậu Tố (Cơ bản)](#phần-1-khởi-động--cơ-chế-trả-về-của-tiền-tố-vs-hậu-tố-cơ-bản)
2. [Phần 2: Ứng Dụng Đánh Số Thứ Tự Danh Sách Với for...of (Trung bình)](#phần-2-ứng-dụng-đánh-số-thứ-tự-danh-sách-với-forof-trung-bình)
3. [Phần 3: Gỡ Lỗi Cạm Bẫy Tăng Biến 2 Lần Trong Vòng Lặp for (Trung bình)](#phần-3-gỡ-lỗi-cạm-bẫy-tăng-biến-2-lần-trong-vòng-lặp-for-trung-bình)
4. [Phần 4: Ứng Dụng Nâng Cao — Auto-increment ID Generator & Two Pointers (Thực chiến)](#phần-4-ứng-dụng-nâng-cao--auto-increment-id-generator--two-pointers-thực-chiến)

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết Trước Khi Làm Bài Tập
> * **Lý thuyết bài này:** Đọc kỹ [14 - Ứng Dụng Toán Tử ++ Dạng Tiền Tố & Hậu Tố Trong Thực Tế](file:///d:/github/studyProgram/javascript/docs/14-prefix-postfix-applications.md).
> * **Kiến thức bài trước bắt buộc:**
>   1. **Lý thuyết `++` và `--`** tại [05 - Hệ Thống Toán Tử](file:///d:/github/studyProgram/javascript/docs/05-conditionals-and-operators.md#3-toán-tử-số-học-arithmetic-operators-khác-biệt-x-vs-x) và [08 - Ép Kiểu & Vòng Lặp](file:///d:/github/studyProgram/javascript/docs/08-loops-and-type-coercion.md#2-toán-tử-tăng-giảm----giải-mã-prefix-vs-postfix).
>   2. **Mảng (Arrays)** tại [11 - Mảng Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/11-arrays.md).
>   3. **Vòng lặp `for...of`** tại [13 - Vòng Lặp For-In & For-Of](file:///d:/github/studyProgram/javascript/docs/13-for-in-and-for-of.md).

---

<a id="phần-1-khởi-động--cơ-chế-trả-về-của-tiền-tố-vs-hậu-tố-cơ-bản"></a>
## Phần 1: Khởi Động — Cơ Chế Trả Về Của Tiền Tố vs Hậu Tố (Cơ bản)

### Bài 1.1: Dự đoán và giải thích kết quả
Cho các đoạn mã khai báo sau:
```javascript
let a = 10;
let b = ++a;

let c = 10;
let d = c++;
```
**Yêu cầu:**
- Xác định giá trị cuối cùng của các biến `a`, `b`, `c`, `d`.
- Giải thích vì sao `b` và `d` lại có giá trị khác nhau mặc dù `a` và `c` cùng khởi tạo bằng `10`.

### Bài 1.2: Phân tích biểu thức phức tạp nhiều bước
Cho đoạn mã sau:
```javascript
let x = 5;
let result = ++x + x++ + ++x;
```
**Yêu cầu:**
- Lập bảng phân tích từng toán tử từ trái qua phải: giá trị trả về của từng biểu thức con và giá trị của biến `x` trong bộ nhớ tại thời điểm đó.
- Xác định giá trị cuối cùng của `result` và `x`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-2-ứng-dụng-đánh-số-thứ-tự-danh-sách-với-forof-trung-bình"></a>
## Phần 2: Ứng Dụng Đánh Số Thứ Tự Danh Sách Với for...of (Trung bình)

### Tình huống thực tế:
Bạn đang xây dựng tính năng hiển thị danh sách bài hát (Tracklist) cho một ứng dụng nghe nhạc. Danh sách đầu vào là một mảng tên các bài hát:
```javascript
const playlist = [
    "Bohemian Rhapsody",
    "Stairway to Heaven",
    "Hotel California",
    "Imagine",
    "Smells Like Teen Spirit"
];
```

**Yêu cầu:**
1. Khởi tạo một biến đếm số thứ tự bên ngoài `let trackNumber = 0`.
2. Sử dụng vòng lặp `for...of` để duyệt qua từng tên bài hát trong mảng `playlist`.
3. Ứng dụng toán tử tiền tố `++trackNumber` trong Template Literal để in ra từng dòng theo định dạng chuẩn:
   ```text
   Track 1: Bohemian Rhapsody
   Track 2: Stairway to Heaven
   ...
   ```
4. Giải thích ngắn gọn: Tại sao khởi tạo `trackNumber = 0` kết hợp `++trackNumber` lại chuẩn hơn `trackNumber++` trong trường hợp này?

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-3-gỡ-lỗi-cạm-bẫy-tăng-biến-2-lần-trong-vòng-lặp-for-trung-bình"></a>
## Phần 3: Gỡ Lỗi Cạm Bẫy Tăng Biến 2 Lần Trong Vòng Lặp for (Trung bình)

Một lập trình viên mới vào dự án muốn in danh sách học sinh kèm số thứ tự từ 1 đến 5, nhưng đã viết nhầm như sau:

```javascript
const students = ["An", "Bình", "Cường", "Dũng", "Em"];

for (let i = 0; i < students.length; i++) {
    console.log(`${++i}. ${students[i]}`);
}
```

Khi chạy code, màn hình in ra kết quả bất thường:
```text
1. Bình
3. Dũng
5. undefined
```

**Yêu cầu:**
1. Hãy giải thích cặn kẽ vì sao `'An'` và `'Cường'` bị biến mất và tại sao dòng cuối cùng lại in ra `5. undefined`.
2. Viết lại mã nguồn sửa lỗi theo **Cách 1: Giữ nguyên vòng lặp `for`** (sử dụng phép tính an toàn không làm thay đổi biến đếm).
3. Viết lại mã nguồn sửa lỗi theo **Cách 2: Chuyển sang vòng lặp `for...of`** (tự quản lý biến đếm bằng `++counter`).

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-4-ứng-dụng-nâng-cao--auto-increment-id-generator--two-pointers-thực-chiến"></a>
## Phần 4: Ứng Dụng Nâng Cao — Auto-increment ID Generator & Two Pointers (Thực chiến)

### Bài 4.1: Xây dựng trình phát sinh mã đơn hàng (Order Code Generator)
Viết một hàm `createOrderManager(prefix = "ORD")` sử dụng Closure:
- Bên trong hàm lưu trữ biến đếm đơn hàng cục bộ `let count = 0`.
- Trả về một đối tượng có 2 phương thức:
  - `generateOrder(customerName)`: Dùng toán tử tiền tố `++count` để sinh mã đơn hàng mới dạng `${prefix}-${String(count).padStart(3, '0')}`, trả về đối tượng đơn hàng `{ orderId, customerName, createdAt: new Date() }`.
  - `getTotalOrders()`: Trả về tổng số đơn hàng đã sinh ra (`count`).
- **Thử nghiệm:** Sinh 3 đơn hàng và kiểm tra xem mã đơn hàng có xuất phát chuẩn từ `"ORD-001"`, `"ORD-002"`, `"ORD-003"` hay không.

### Bài 4.2: Thuật toán kiểm tra mảng đối xứng với kỹ thuật Two Pointers
Cho một mảng các phần tử bất kỳ. Hãy viết hàm `isSymmetricArray(arr)` kiểm tra xem mảng có đối xứng hay không:
- Khởi tạo con trỏ đầu `let left = 0` và con trỏ cuối `let right = arr.length - 1`.
- Dùng vòng lặp `while (left < right)` kết hợp đồng thời `arr[left++]` và `arr[right--]` trong biểu thức so sánh.
- Trả về `true` nếu mảng đối xứng, `false` nếu không đối xứng.
- **Thử nghiệm:**
  - `isSymmetricArray([1, 2, 3, 2, 1])` $\rightarrow$ `true`
  - `isSymmetricArray(["a", "b", "c", "d"])` $\rightarrow$ `false`

[⬆️ Quay lại Mục lục](#mục-lục)
