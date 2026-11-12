# Bài Tập 05: Câu Lệnh Rẽ Nhánh & Toán Tử Logic Trong JavaScript

## Mục Lục
<a id="mục-lục"></a>

1. [Phần 1: Cấp Độ Cơ Bản (if...else, switch...case, so sánh nghiêm ngặt)](#phần-1-cấp-độ-cơ-bản-ifelse-switchcase-so-sánh-nghiêm-ngặt)
   - [Bài 1.1: Chào hỏi theo khung giờ trong ngày](#bài-11-chào-hỏi-theo-khung-giờ-trong-ngày)
   - [Bài 1.2: Tra cứu lịch làm việc trong tuần với switch...case](#bài-12-tra-cứu-lịch-làm-việc-trong-tuần-với-switchcase)
   - [Bài 1.3: So sánh nghiêm ngặt (===) vs lỏng lẻo (==)](#bài-13-so-sánh-nghiêm-ngặt--vs-lỏng-lẻo-)
2. [Phần 2: Cấp Độ Trung Bình (Ternary, Fall-Through, Short-Circuit)](#phần-2-cấp-độ-trung-bình-ternary-fall-through-short-circuit)
   - [Bài 2.1: Rút gọn trạng thái đơn hàng bằng Toán tử ba ngôi](#bài-21-rút-gọn-trạng-thái-đơn-hàng-bằng-toán-tử-ba-ngôi)
   - [Bài 2.2: Kỹ thuật Fall-through và gom nhóm case trong switch](#bài-22-kỹ-thuật-fall-through-và-gom-nhóm-case-trong-switch)
   - [Bài 2.3: Đoản mạch (Short-Circuit) với &&, || và !](#bài-23-đoản-mạch-short-circuit-với---và-)
3. [Phần 3: Cấp Độ Thực Chiến (Role Checker & Tính Cước Vận Chuyển)](#phần-3-cấp-độ-thực-chiến-role-checker--tính-cước-vận-chuyển)
   - [Bài 3.1: Hệ thống kiểm soát quyền truy cập đa tầng](#bài-31-hệ-thống-kiểm-soát-quyền-truy-cập-đa-tầng)
   - [Bài 3.2: Máy tính tính cước phí vận chuyển (Shipping Calculator)](#bài-32-máy-tính-tính-cước-phí-vận-chuyển-shipping-calculator)

---

## Phần 1: Cấp Độ Cơ Bản (if...else, switch...case, so sánh nghiêm ngặt)

### Bài 1.1: Chào hỏi theo khung giờ trong ngày
Cho biến lưu thời gian hiện tại:
```javascript
const hour = 14; // Giờ trong ngày (0 đến 23)
```
**Yêu cầu:** Sử dụng cấu trúc `if...else if...else` để in ra lời chào:
- Nếu `hour < 12`: In ra `"Chào buổi sáng!"`
- Nếu `hour < 18`: In ra `"Chào buổi chiều!"`
- Trường hợp còn lại: In ra `"Chào buổi tối!"`

[⬆️ Quay lại Mục lục](#mục-lục)

---

### Bài 1.2: Tra cứu lịch làm việc trong tuần với switch...case
Cho biến lưu tên ngày trong tuần:
```javascript
const day = "Wednesday";
```
**Yêu cầu:** Dùng `switch...case` để hiển thị lịch làm việc:
- `"Monday"`: `"Đầu tuần: Họp giao ban toàn công ty."`
- `"Wednesday"`: `"Giữa tuần: Review tiến độ dự án."`
- `"Friday"`: `"Cuối tuần: Tổng kết công việc và release sản phẩm."`
- Các ngày khác (`default`): `"Ngày làm việc tập trung thông thường."`
*(Lưu ý: Nhớ thêm lệnh `break` sau mỗi case).*

[⬆️ Quay lại Mục lục](#mục-lục)

---

### Bài 1.3: So sánh nghiêm ngặt (===) vs lỏng lẻo (==)
Hãy dự đoán và in ra màn hình kết quả boolean của các phép so sánh sau, đồng thời giải thích ngắn gọn nguyên nhân:
1. `5 === "5"`
2. `5 == "5"`
3. `0 == false`
4. `0 === false`
5. `null == undefined`
6. `null === undefined`

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 2: Cấp Độ Trung Bình (Ternary, Fall-Through, Short-Circuit)

### Bài 2.1: Rút gọn trạng thái đơn hàng bằng Toán tử ba ngôi
Cho thông tin trạng thái đơn hàng:
```javascript
const isPaid = true;
const totalAmount = 250000;
```
**Yêu cầu:**
- Sử dụng Toán tử ba ngôi (`? :`) để tạo chuỗi `orderStatus`: nếu `isPaid === true` thì ghi `"Đã thanh toán (250.000 VNĐ)"`, ngược lại ghi `"Chờ thanh toán"`.
- In kết quả `orderStatus` ra màn hình.

[⬆️ Quay lại Mục lục](#mục-lục)

---

### Bài 2.2: Kỹ thuật Fall-through và gom nhóm case trong switch
Cho biến lưu số tháng trong năm:
```javascript
const month = 8; // Tháng 8
```
**Yêu cầu:**
- Dùng `switch...case` gom nhóm nhiều case không dùng `break` để xác định tháng đó thuộc **Quý mấy trong năm**:
  - Tháng 1, 2, 3: `"Quý 1 - Mùa Xuân"`
  - Tháng 4, 5, 6: `"Quý 2 - Mùa Hạ"`
  - Tháng 7, 8, 9: `"Quý 3 - Mùa Thu"`
  - Tháng 10, 11, 12: `"Quý 4 - Mùa Đông"`
  - Mặc định: `"Tháng không hợp lệ"`
- In kết quả mùa và quý ra màn hình.

[⬆️ Quay lại Mục lục](#mục-lục)

---

### Bài 2.3: Đoản mạch (Short-Circuit) với &&, || và !
Dự đoán giá trị trả về thực tế của JavaScript khi chạy các dòng lệnh sau (không chỉ trả về boolean):
```javascript
const a = 0 && "JavaScript";
const b = 100 && "ReactJS";
const c = 0 || "NodeJS";
const d = "VueJS" || "Angular";
const e = !0;
const f = !"hello";
const g = !false || false && false; // Chú ý độ ưu tiên ! > && > ||
```
**Yêu cầu:** In giá trị của `a, b, c, d, e, f, g` ra màn hình và giải thích cơ chế đoản mạch đã diễn ra ở từng phép tính.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 3: Cấp Độ Thực Chiến (Role Checker & Tính Cước Vận Chuyển)

### Bài 3.1: Hệ thống kiểm soát quyền truy cập đa tầng
Cho thông tin tài khoản người dùng:
```javascript
const currentUser = {
    username: "nam_dev",
    role: "editor",      // "admin", "manager", "editor", "viewer"
    isActive: true,      // Tài khoản đã kích hoạt email
    isBanned: false      // Không bị khóa tài khoản
};
```
**Quy tắc nghiệp vụ bảo mật:**
Người dùng được cấp quyền truy cập vào trang Quản Trị Hệ Thống (`canAccessAdminPanel = true`) khi và chỉ khi thỏa mãn **toàn bộ** các điều kiện sau:
1. `role` phải là `"admin"` HOẶC `"manager"`.
2. Tài khoản phải ở trạng thái kích hoạt (`isActive === true`).
3. Tài khoản KHÔNG bị cấm (`!isBanned`).

**Yêu cầu:**
- Viết một biểu thức logic duy nhất kết hợp `!`, `&&`, `||` và cặp ngoặc tròn `()` để tính giá trị `canAccessAdminPanel`.
- Dùng cấu trúc `if...else` thông báo kết quả: nếu được phép thì in `"Chào mừng [username] truy cập trang quản trị!"`, nếu bị từ chối thì in `"Truy cập bị từ chối: Quyền hạn không đủ hoặc tài khoản không hợp lệ!"`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

### Bài 3.2: Máy tính tính cước phí vận chuyển (Shipping Calculator)
Cho thông tin đơn hàng:
```javascript
const order = {
    distanceKm: 4.5,     // Khoảng cách giao hàng (km)
    subtotal: 600000,    // Giá trị đơn hàng (VNĐ)
    isVip: true          // Khách hàng thân thiết VIP
};
```
**Bảng giá cước vận chuyển chuẩn theo khoảng cách:**
- Dưới 3 km: `15.000 VNĐ`
- Từ 3 km đến 10 km: `30.000 VNĐ`
- Trên 10 km: `50.000 VNĐ`

**Chính sách ưu đãi và giảm giá:**
1. **Freeship toàn phần (0 VNĐ):** Áp dụng nếu giá trị đơn hàng `subtotal >= 500.000 VNĐ` VÀ khoảng cách `distanceKm <= 5 km`.
2. **Ưu đãi thành viên VIP:** Nếu không thuộc diện Freeship toàn phần, nhưng khách hàng là `isVip === true`, khách hàng được **giảm 50%** giá cước chuẩn.

**Yêu cầu:**
- Viết code tính toán chính xác số tiền `shippingFee` cuối cùng.
- In ra bảng tóm tắt chi tiết hóa đơn vận chuyển gồm: Khoảng cách, Tạm tính đơn hàng, Cước vận chuyển và Tổng tiền thanh toán (`subtotal + shippingFee`).

[⬆️ Quay lại Mục lục](#mục-lục)
