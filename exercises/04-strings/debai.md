# Bài Tập 04: Chuỗi, Nối Chuỗi & Template Literals trong JavaScript

> **Mục tiêu:**
> - Nắm vững cách khai báo chuỗi bằng nháy đơn, nháy kép và backticks.
> - Thành thạo sử dụng ký tự thoát (Escape characters).
> - Tránh bẫy ngầm định khi kết hợp toán tử `+` giữa số và chuỗi.
> - Vận dụng Template Literals và nội suy `${...}` để tạo chuỗi nhiều dòng và thông điệp động.

---

<a id="mục-lục"></a>
## Mục Lục

- [Phần 1: Khai báo chuỗi & Ký tự thoát (Cơ bản)](#phần-1-khai-báo-chuỗi-ký-tự-thoát-cơ-bản)
  - [Bài 1.1: Trích dẫn lồng nhau](#bài-1-1-trích-dẫn-lồng-nhau)
  - [Bài 1.2: In đường dẫn Windows](#bài-1-2-in-đường-dẫn-windows)
  - [Bài 1.3: Định dạng văn bản với Escape Character](#bài-1-3-định-dạng-văn-bản-với-escape-character)
- [Phần 2: Toán tử nối chuỗi & Cạm bẫy cộng số (Trung bình)](#phần-2-toán-tử-nối-chuỗi-cạm-bẫy-cộng-số-trung-bình)
  - [Bài 2.1: Dự đoán kết quả (Type Coercion)](#bài-2-1-dự-đoán-kết-quả-type-coercion)
  - [Bài 2.2: Sửa lỗi tính tiền giỏ hàng (Bug Fix)](#bài-2-2-sửa-lỗi-tính-tiền-giỏ-hàng-bug-fix)
- [Phần 3: Template Literals & Nội suy chuỗi (Thực chiến)](#phần-3-template-literals-nội-suy-chuỗi-thực-chiến)
  - [Bài 3.1: Thẻ thông tin người dùng (User Card)](#bài-3-1-thẻ-thông-tin-người-dùng-user-card)
  - [Bài 3.2: Tạo hóa đơn thanh toán chuyên nghiệp](#bài-3-2-tạo-hóa-đơn-thanh-toán-chuyên-nghiệp)

---

<a id="phần-1-khai-báo-chuỗi-ký-tự-thoát-cơ-bản"></a>
## Phần 1: Khai báo chuỗi & Ký tự thoát (Cơ bản)

<a id="bài-1-1-trích-dẫn-lồng-nhau"></a>
### Bài 1.1: Trích dẫn lồng nhau
Tạo một biến `quote1` chứa nội dung sau mà **không gây ra lỗi cú pháp**:
> `Bác Hồ từng nói: "Không có gì quý hơn độc lập, tự do!"`
- **Yêu cầu 1:** Dùng dấu nháy đơn `' '` bao ngoài.
- **Yêu cầu 2:** Dùng dấu nháy kép `" "` bao ngoài (bắt buộc dùng ký tự thoát `\"`).
- **Yêu cầu 3:** Dùng backticks (`` ` ` ``).

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-1-2-in-đường-dẫn-windows"></a>
### Bài 1.2: In đường dẫn Windows
Tạo biến `windowsPath` chứa chính xác chuỗi đường dẫn sau:
```text
C:\Users\Admin\Documents\Javascript\Project
```
- **Yêu cầu:** Hãy in ra màn hình sao cho không bị mất dấu gạch chéo ngược `\` (sử dụng ký tự thoát `\\`).

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-1-3-định-dạng-văn-bản-với-escape-character"></a>
### Bài 1.3: Định dạng văn bản với Escape Character
In ra màn hình một đoạn thông báo gồm 3 dòng có thụt lề bằng cách sử dụng **chỉ một chuỗi nháy kép duy nhất** kết hợp với `\n` và `\t`:
```text
Danh sách môn học:
	1. JavaScript Cơ Bản
	2. HTML & CSS
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-2-toán-tử-nối-chuỗi-cạm-bẫy-cộng-số-trung-bình"></a>
## Phần 2: Toán tử nối chuỗi & Cạm bẫy cộng số (Trung bình)

<a id="bài-2-1-dự-đoán-kết-quả-type-coercion"></a>
### Bài 2.1: Dự đoán kết quả (Type Coercion)
Hãy **dự đoán kết quả** và **giải thích lý do** cho từng biểu thức sau trước khi chạy code:
```javascript
// 1.
console.log(10 + 20 + "30");

// 2.
console.log("10" + 20 + 30);

// 3.
console.log("10" + (20 + 30));

// 4.
console.log("100" - 20);

// 5.
console.log("100" + -20);
```

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-2-2-sửa-lỗi-tính-tiền-giỏ-hàng-bug-fix"></a>
### Bài 2.2: Sửa lỗi tính tiền giỏ hàng (Bug Fix)
Một bạn lập trình viên mới vào nghề viết hàm tính tổng hóa đơn giỏ hàng như sau:

```javascript
let price = "150000"; // Giá nhận từ input HTML (dạng chuỗi)
let shippingFee = 30000; // Phí ship (dạng số)
let discount = 20000; // Giảm giá (dạng số)

// Bạn ấy viết:
let total = price + shippingFee - discount;
console.log("Tổng thanh toán:", total);
```

- **Câu hỏi:**
  1. Kết quả `total` in ra màn hình là gì? Vì sao lại ra kết quả lạ như vậy?
  2. Hãy sửa lại code để in ra đúng số tiền thanh toán thực tế là `160000`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-3-template-literals-nội-suy-chuỗi-thực-chiến"></a>
## Phần 3: Template Literals & Nội suy chuỗi (Thực chiến)

<a id="bài-3-1-thẻ-thông-tin-người-dùng-user-card"></a>
### Bài 3.1: Thẻ thông tin người dùng (User Card)
Cho thông tin người dùng:
```javascript
const user = {
    fullName: "Nguyễn Văn Huy",
    age: 22,
    role: "Admin",
    isActive: true,
};
```
- **Yêu cầu:** Dùng **Template Literals** (backticks) để tạo một chuỗi HTML nhiều dòng `userCardHtml` có cấu trúc:
```html
<div class="user-card">
    <h2>Nguyễn Văn Huy (22 tuổi)</h2>
    <p>Chức vụ: Admin</p>
    <p>Trạng thái: Đang hoạt động</p>
</div>
```
*(Gợi ý: Dùng toán tử ba ngôi `user.isActive ? "Đang hoạt động" : "Tạm khóa"` trực tiếp bên trong `${...}`)*.

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-3-2-tạo-hóa-đơn-thanh-toán-chuyên-nghiệp"></a>
### Bài 3.2: Tạo hóa đơn thanh toán chuyên nghiệp
Cho danh sách thông tin đơn hàng:
```javascript
const customerName = "Linh";
const productName = "Bàn phím cơ AKKO";
const unitPrice = 1200000;
const quantity = 2;
const vatPercent = 10; // 10% VAT
```
- **Yêu cầu:** Viết đoạn code sử dụng Template Literals để tạo ra bức thư cảm ơn và hóa đơn gửi cho khách hàng `Linh` theo mẫu:

```text
========================================
           HÓA ĐƠN THANH TOÁN
========================================
Khách hàng: Linh
Sản phẩm: Bàn phím cơ AKKO
Đơn giá: 1,200,000 VNĐ
Số lượng: 2
Tạm tính: 2,400,000 VNĐ
Thuế VAT (10%): 240,000 VNĐ
----------------------------------------
TỔNG CỘNG: 2,640,000 VNĐ
========================================
Cảm ơn quý khách Linh đã mua hàng!
```
*(Gợi ý: Dùng `.toLocaleString('vi-VN')` để format số tiền có dấu phẩy ngăn cách hàng nghìn).*

[⬆️ Quay lại Mục lục](#mục-lục)
