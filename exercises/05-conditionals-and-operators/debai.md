# Bài Tập 05: Câu Lệnh Rẽ Nhánh & Toán Tử Logic Trong JavaScript

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết Trước Khi Làm Bài Tập
> * **Lý thuyết bài này:** Đọc kỹ [05 - Câu Lệnh Rẽ Nhánh & Hệ Thống Toán Tử](file:///d:/github/studyProgram/javascript/docs/05-conditionals-and-operators.md).
> * **Kiến thức bài trước bắt buộc:**
>   1. **Kiểu dữ liệu Boolean** tại [03 - Khai Báo Biến & Kiểu Dữ Liệu (Mục 11.4)](file:///d:/github/studyProgram/javascript/docs/03-variables-and-data-types.md#114-boolean-đúng--sai):
>      - *Vì sao bắt buộc?* Mọi biểu thức `if...else`, `switch...case`, toán tử ba ngôi `? :` đều dựa trên điều kiện `true`/`false`.
>   2. **Phân biệt `null` vs `undefined`** tại [03 - Khai Báo Biến & Kiểu Dữ Liệu (Mục 11.9.2)](file:///d:/github/studyProgram/javascript/docs/03-variables-and-data-types.md#cạm-bẫy-2-không-hiểu-rõ-sự-khác-biệt-giữa-null-và-undefined):
>      - *Vì sao bắt buộc?* Dùng cho Bài 2.4 về toán tử `void 0` bảo vệ undefined an toàn và toán tử `??`.
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

## Mục Lục
<a id="mục-lục"></a>

1. [Phần 1: Cấp Độ Cơ Bản (if...else, switch...case, so sánh nghiêm ngặt)](#phần-1-cấp-độ-cơ-bản-if-else-switch-case-so-sánh-nghiêm-ngặt)
   - [Bài 1.1: Chào hỏi theo khung giờ trong ngày](#bài-1-1-chào-hỏi-theo-khung-giờ-trong-ngày)
   - [Bài 1.2: Tra cứu lịch làm việc trong tuần với switch...case](#bài-1-2-tra-cứu-lịch-làm-việc-trong-tuần-với-switch-case)
   - [Bài 1.3: So sánh nghiêm ngặt (===) vs lỏng lẻo (==)](#bài-1-3-so-sánh-nghiêm-ngặt-vs-lỏng-lẻo)
2. [Phần 2: Cấp Độ Trung Bình (Ternary, Fall-Through, Short-Circuit, Toán Tử void)](#phần-2-cấp-độ-trung-bình-ternary-fall-through-short-circuit)
   - [Bài 2.1: Rút gọn trạng thái đơn hàng bằng Toán tử ba ngôi](#bài-2-1-rút-gọn-trạng-thái-đơn-hàng-bằng-toán-tử-ba-ngôi)
   - [Bài 2.2: Kỹ thuật Fall-through và gom nhóm case trong switch](#bài-2-2-kỹ-thuật-fall-through-và-gom-nhóm-case-trong-switch)
   - [Bài 2.3: Đoản mạch (Short-Circuit) với &&, || và !](#bài-2-3-đoản-mạch-short-circuit-với-và)
   - [Bài 2.4: Bảo Vệ Biến Undefined & Giải Mã Toán Tử void 0](#bài-2-4-bảo-vệ-biến-undefined--giải-mã-toán-tử-void-0)
3. [Phần 3: Cấp Độ Thực Chiến (Role Checker & Tính Cước Vận Chuyển)](#phần-3-cấp-độ-thực-chiến-role-checker-tính-cước-vận-chuyển)
   - [Bài 3.1: Hệ thống kiểm soát quyền truy cập đa tầng](#bài-3-1-hệ-thống-kiểm-soát-quyền-truy-cập-đa-tầng)
   - [Bài 3.2: Máy tính tính cước phí vận chuyển (Shipping Calculator)](#bài-3-2-máy-tính-tính-cước-phí-vận-chuyển-shipping-calculator)

---

<a id="phần-1-cấp-độ-cơ-bản-if-else-switch-case-so-sánh-nghiêm-ngặt"></a>
## Phần 1: Cấp Độ Cơ Bản (if...else, switch...case, so sánh nghiêm ngặt)

<a id="bài-1-1-chào-hỏi-theo-khung-giờ-trong-ngày"></a>
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

<a id="bài-1-2-tra-cứu-lịch-làm-việc-trong-tuần-với-switch-case"></a>
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

<a id="bài-1-3-so-sánh-nghiêm-ngặt-vs-lỏng-lẻo"></a>
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

<a id="phần-2-cấp-độ-trung-bình-ternary-fall-through-short-circuit"></a>
## Phần 2: Cấp Độ Trung Bình (Ternary, Fall-Through, Short-Circuit)

<a id="bài-2-1-rút-gọn-trạng-thái-đơn-hàng-bằng-toán-tử-ba-ngôi"></a>
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

<a id="bài-2-2-kỹ-thuật-fall-through-và-gom-nhóm-case-trong-switch"></a>
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

<a id="bài-2-3-đoản-mạch-short-circuit-với-và"></a>
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

<a id="bài-2-4-bảo-vệ-biến-undefined--giải-mã-toán-tử-void-0"></a>
### Bài 2.4: Bảo Vệ Biến Undefined & Giải Mã Toán Tử void 0

**Mô tả:**
Toán tử `void` là một toán tử một ngôi độc đáo trong JavaScript, luôn đánh giá biểu thức và trả về `undefined`. Bài tập này giúp bạn làm chủ cơ chế của `void` và hiểu vì sao `void 0` được sử dụng rộng rãi trong các thư viện lớn.

**Yêu cầu thực hiện:**
1. **Thử nghiệm biểu thức `void`:**
   - In ra kết quả của `void 0`, `void (2 + 2)`.
   - Viết hàm `sum(a, b) { return a + b; }`. In ra kết quả của `void sum(5, 10)` và giải thích giá trị nhận được.
2. **Tái hiện cạm bẫy Variable Shadowing với `undefined`:**
   - Viết hàm `isSafeUndefined(val)`:
     ```javascript
     function isSafeUndefined(val) {
         // Cố tình tạo một biến cục bộ trùng tên undefined:
         let undefined = "hacked";
         
         // 1. So sánh val với biến 'undefined' cục bộ:
         const unsafeCheck = (val === undefined);
         
         // 2. So sánh val với 'void 0':
         const safeCheck = (val === void 0);
         
         return { unsafeCheck, safeCheck };
     }
     ```
   - Thử nghiệm gọi hàm với một mảng có index không tồn tại:
     ```javascript
     const colors = ["red"];
     const result = isSafeUndefined(colors[9]);
     ```
   - In ra kết quả và giải thích vì sao `unsafeCheck` ra `false` trong khi `safeCheck` ra `true`.
3. **Phân tích thực tế:**
   - Trả lời: Tại sao các công cụ minify code (như Webpack, Terser, Vite) lại tự động chuyển từ khóa `undefined` thành `void 0`?
   - Trả lời: Trong thẻ HTML `<a>`, đoạn mã `href="javascript:void(0);"` có tác dụng gì và giải pháp hiện đại thay thế nó là gì?

[⬆️ Quay lại Mục lục](#mục-lục)
## Phần 3: Cấp Độ Thực Chiến (Role Checker & Tính Cước Vận Chuyển)

<a id="bài-3-1-hệ-thống-kiểm-soát-quyền-truy-cập-đa-tầng"></a>
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

<a id="bài-3-2-máy-tính-tính-cước-phí-vận-chuyển-shipping-calculator"></a>
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
