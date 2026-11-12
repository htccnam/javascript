# Bài Tập 02: Thực Hành Chuẩn Hóa Quy Ước Đặt Tên (Naming Conventions)

> **Mục tiêu thực hành:**
> - Nắm vững và áp dụng chuẩn xác 4 phong cách viết: `camelCase`, `PascalCase`, `UPPER_SNAKE_CASE`, và `kebab-case`.
> - Thành thạo cách đặt tên biến Boolean theo dạng câu hỏi Yes/No với các tiền tố `is`, `has`, `can`, `should` và loại bỏ bẫy logic phủ định.
> - Phân biệt chính xác danh từ số ít (đơn giá trị) và số nhiều (danh sách/mảng) trong code thực tế.
> - Xây dựng tên hàm theo cấu trúc chuẩn `Động từ + Tân ngữ` và phân biệt rõ hằng số bất biến toàn cục vs biến `const` thông thường.
> - Tự tin thực hiện Code Review và Refactor mã nguồn cũ thành mã nguồn sạch (Clean Code), chuyên nghiệp.

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết Trước Khi Làm Bài Tập
> * **Lý thuyết bài này:** Đọc kỹ [02 - Quy Ước Đặt Tên Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/02-naming-conventions.md).
> * **Kiến thức bài trước bắt buộc:**
>   1. **Tính nhạy chữ hoa - chữ thường (Case-sensitive)** tại [01 - Tổng Quan Về JavaScript (Mục 2.4)](file:///d:/github/studyProgram/javascript/docs/01-javascript-overview.md#24-phân-biệt-chữ-hoa---chữ-thường-case-sensitivity):
>      - *Vì sao bắt buộc?* Quy ước `camelCase` (`isLoggedIn`), `PascalCase` (`BankAccount`), và `UPPER_SNAKE_CASE` (`MAX_RETRIES`) hoàn toàn dựa trên sự phân biệt chữ hoa/thường.
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

<a id="mục-lục"></a>
## Mục Lục

- [Phần 1: Chuẩn Hóa Biến Boolean & Danh Từ Số Ít / Số Nhiều (Cơ Bản)](#phần-1-chuẩn-hóa-biến-boolean-danh-từ-số-ít-số-nhiều-cơ-bản)
  - [Bài 1.1: Refactor biến Boolean sang dạng câu hỏi Yes/No](#bài-1-1-refactor-biến-boolean-sang-dạng-câu-hỏi-yes-no)
  - [Bài 1.2: Chuẩn hóa danh từ số ít, số nhiều & Vòng lặp](#bài-1-2-chuẩn-hóa-danh-từ-số-ít-số-nhiều-vòng-lặp)
- [Phần 2: Chuẩn Hóa Tên Hàm, Class & Hằng Số (Trung Bình)](#phần-2-chuẩn-hóa-tên-hàm-class-hằng-số-trung-bình)
  - [Bài 2.1: Chuẩn hóa tên hàm theo cấu trúc Động từ + Tân ngữ](#bài-2-1-chuẩn-hóa-tên-hàm-theo-cấu-trúc-động-từ-tân-ngữ)
  - [Bài 2.2: Phân loại hằng số UPPER_SNAKE_CASE vs camelCase](#bài-2-2-phân-loại-hằng-số-uppersnakecase-vs-camelcase)
  - [Bài 2.3: Thiết kế Class và Thuộc tính Private](#bài-2-3-thiết-kế-class-và-thuộc-tính-private)
- [Phần 3: Thử Thách Code Review & Refactoring Thực Chiến (Nâng Cao)](#phần-3-thử-thách-code-review-refactoring-thực-chiến-nâng-cao)
  - [Bài 3.1: Dọn rác mã nguồn (Refactor Legacy Code)](#bài-3-1-dọn-rác-mã-nguồn-refactor-legacy-code)
  - [Bài 3.2: Xây dựng Module BankAccount chuẩn Clean Code](#bài-3-2-xây-dựng-module-bankaccount-chuẩn-clean-code)

---

<a id="phần-1-chuẩn-hóa-biến-boolean-danh-từ-số-ít-số-nhiều-cơ-bản"></a>
## Phần 1: Chuẩn Hóa Biến Boolean & Danh Từ Số Ít / Số Nhiều (Cơ Bản)

<a id="bài-1-1-refactor-biến-boolean-sang-dạng-câu-hỏi-yes-no"></a>
### Bài 1.1: Refactor biến Boolean sang dạng câu hỏi Yes/No
Cho các khai báo biến sau đang vi phạm quy ước đặt tên:
```javascript
let login = true;          // Người dùng đã đăng nhập hay chưa?
let notAvailable = false;  // Sản phẩm này có còn hàng hay không?
let edit = true;           // Người dùng có quyền chỉnh sửa hay không?
let coupon = false;        // Đơn hàng có áp dụng mã giảm giá không?
```

- **Yêu cầu:**
  1. Hãy đổi tên 4 biến trên sang tên chuẩn mực bắt đầu bằng `is`, `has`, hoặc `can`.
  2. Lưu ý đặc biệt đối với `notAvailable`: Loại bỏ logic phủ định để tránh cạm bẫy phủ định kép khi kiểm tra điều kiện `if`.

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-1-2-chuẩn-hóa-danh-từ-số-ít-số-nhiều-vòng-lặp"></a>
### Bài 1.2: Chuẩn hóa danh từ số ít, số nhiều & Vòng lặp
Cho danh sách điểm số của các sinh viên:
```javascript
const student_score = [8.5, 9.0, 7.5, 6.0];
```
- **Yêu cầu:**
  1. Đổi tên mảng trên theo quy chuẩn `camelCase` và sử dụng danh từ số nhiều (plural).
  2. Viết một vòng lặp `for...of` duyệt qua mảng trên, sử dụng biến lặp là danh từ số ít (singular) tương ứng để in ra từng điểm số kèm thông báo: `"Điểm thành phần: <điểm>"`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-2-chuẩn-hóa-tên-hàm-class-hằng-số-trung-bình"></a>
## Phần 2: Chuẩn Hóa Tên Hàm, Class & Hằng Số (Trung Bình)

<a id="bài-2-1-chuẩn-hóa-tên-hàm-theo-cấu-trúc-động-từ-tân-ngữ"></a>
### Bài 2.1: Chuẩn hóa tên hàm theo cấu trúc Động từ + Tân ngữ
Các hàm sau đây đang có tên rất mơ hồ hoặc không tuân thủ cấu trúc `Động từ + Đối tượng`:
```javascript
// Hàm 1: Nhận vào id và tải thông tin người dùng từ máy chủ
function user(id) { ... }

// Hàm 2: Kiểm tra xem người dùng có phải là Admin hay không (trả về boolean)
function checkAdmin(user) { ... }

// Hàm 3: Tính toán tổng tiền của giỏ hàng sau khi áp thuế
function total(cart) { ... }

// Hàm 4: Xóa toàn bộ dữ liệu tạm thời của form về trạng thái ban đầu
function form() { ... }
```
- **Yêu cầu:** Hãy đặt lại tên cho 4 hàm trên sao cho tự giải thích (self-documenting), sử dụng các động từ chuẩn mực (`fetch`, `is`, `calculate`, `reset`).

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-2-2-phân-loại-hằng-số-uppersnakecase-vs-camelcase"></a>
### Bài 2.2: Phân loại hằng số UPPER_SNAKE_CASE vs camelCase
Cho danh sách các biến khai báo bằng `const` dưới đây:
```javascript
const max_file_size = 10485760; // 10MB - giới hạn upload cố định của server
const current_user = getCurrentLoggedInUser(); // lấy thông tin user hiện tại
const api_timeout = 5000; // 5 giây - timeout mạng cố định
const user_input_tags = ["javascript", "coding"]; // mảng tags người dùng vừa nhập
```
- **Yêu cầu:**
  1. Xác định biến nào là **Hằng số bất biến toàn cục** $\rightarrow$ đổi tên thành `UPPER_SNAKE_CASE`.
  2. Xác định biến nào là **Biến runtime thông thường** $\rightarrow$ đổi tên thành `lowerCamelCase`.

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-2-3-thiết-kế-class-và-thuộc-tính-private"></a>
### Bài 2.3: Thiết kế Class và Thuộc tính Private
- **Yêu cầu:**
  1. Định nghĩa một Class đại diện cho một sản phẩm trong cửa hàng theo chuẩn `PascalCase`.
  2. Class có constructor nhận vào `name`, `price`.
  3. Class có một trường thực sự riêng tư (private field với `#`) lưu trữ mã nhập kho nội bộ `#warehouseCode` (tự sinh ngẫu nhiên số nguyên).
  4. Class có một phương thức `isExpensive()` trả về `true` nếu `price > 1000000`, ngược lại trả về `false`.
  5. Tạo một đối tượng mẫu từ class này và kiểm tra hoạt động của phương thức `isExpensive()`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-3-thử-thách-code-review-refactoring-thực-chiến-nâng-cao"></a>
## Phần 3: Thử Thách Code Review & Refactoring Thực Chiến (Nâng Cao)

<a id="bài-3-1-dọn-rác-mã-nguồn-refactor-legacy-code"></a>
### Bài 3.1: Dọn rác mã nguồn (Refactor Legacy Code)
Dưới đây là một đoạn code xử lý đơn hàng do một lập trình viên mới viết, mắc phải hầu hết các lỗi cấm kỵ (tiếng Việt, viết tắt, Hungarian notation, phủ định, sai casing):

```javascript
// Mã nguồn cần refactor:
const arr_ds_hang = [
    { ten_sp: "Chuột không dây", gia: 250000, b_het_hang: false },
    { ten_sp: "Bàn phím cơ", gia: 1500000, b_het_hang: true },
];

function proc(a) {
    let tot = 0;
    for (let i = 0; i < a.length; i++) {
        if (!a[i].b_het_hang) {
            tot += a[i].gia;
        }
    }
    return tot;
}

console.log("Tong tien:", proc(arr_ds_hang));
```

- **Yêu cầu:**
  1. Liệt kê ít nhất 4 lỗi đặt tên trong đoạn code trên.
  2. Viết lại toàn bộ đoạn code trên bằng **100% tiếng Anh chuẩn mực**, áp dụng camelCase, số ít/số nhiều, boolean dạng câu hỏi, và tên hàm rõ nghĩa.

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-3-2-xây-dựng-module-bankaccount-chuẩn-clean-code"></a>
### Bài 3.2: Xây dựng Module BankAccount chuẩn Clean Code
Hãy xây dựng một lớp `BankAccount` hoàn chỉnh tuân thủ tuyệt đối các quy ước đặt tên:
- Hằng số cấu hình: `MIN_BALANCE = 50000` (số dư tối thiểu).
- Thuộc tính private: `#balance` (số dư tài khoản).
- Constructor nhận vào: `accountNumber` và `initialDeposit`.
- Các phương thức:
  - `deposit(amount)`: Nạp thêm tiền (kiểm tra `amount > 0`).
  - `withdraw(amount)`: Rút tiền (kiểm tra số dư sau rút không được thấp hơn `MIN_BALANCE`).
  - `hasSufficientBalance(amount)`: Kiểm tra có đủ tiền để rút hay không (trả về boolean).
  - `getBalance()`: Trả về số dư hiện tại.
- Chạy thử các phương thức và in kết quả kiểm chứng ra console.

[⬆️ Quay lại Mục lục](#mục-lục)
