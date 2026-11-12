# Bài Tập 06: Toán Tử Logical Trong JavaScript (&&, ||, !)

## Mục Lục
<a id="mục-lục"></a>

1. [Phần 1: Cấp Độ Cơ Bản (AND, OR, NOT & Kỹ Thuật Tách Biến)](#phần-1-cấp-độ-cơ-bản-and-or-not-kỹ-thuật-tách-biến)
   - [Bài 1.1: Kế hoạch dã ngoại với toán tử AND (&&)](#bài-11-kế-hoạch-dã-ngoại-với-toán-tử-and-)
   - [Bài 1.2: Chọn phim giải trí cuối tuần với toán tử OR (||)](#bài-12-chọn-phim-giải-trí-cuối-tuần-với-toán-tử-or-)
   - [Bài 1.3: Đảo ngược trạng thái với toán tử NOT (!) & Ép kiểu với (!!)](#bài-13-đảo-ngược-trạng-thái-với-toán-tử-not-ép-kiểu-với-)
2. [Phần 2: Cấp Độ Trung Bình (Kết Hợp Đa Điều Kiện & Độ Ưu Tiên)](#phần-2-cấp-độ-trung-bình-kết-hợp-đa-điều-kiện-độ-ưu-tiên)
   - [Bài 2.1: Thẩm định điều kiện nhập học khóa lập trình (Nhiều &&)](#bài-21-thẩm-định-điều-kiện-nhập-học-khóa-lập-trình-nhiều-)
   - [Bài 2.2: Hệ thống phân quyền xem phim VIP Streaming (Nhiều ||)](#bài-22-hệ-thống-phân-quyền-xem-phim-vip-streaming-nhiều-)
   - [Bài 2.3: Chiến dịch tặng quà tri ân đơn hàng (Đan xen && và || có ngoặc)](#bài-23-chiến-dịch-tặng-quà-tri-ân-đơn-hàng-đan-xen-và-có-ngoặc)
3. [Phần 3: Cấp Độ Thực Chiến (Đoản Mạch & Bẫy Bitwise vs Logic)](#phần-3-cấp-độ-thực-chiến-đoản-mạch-bẫy-bitwise-vs-logic)
   - [Bài 3.1: Vạch trần sự khác biệt giữa Toán tử Logic (&&, ||) và Bitwise (&, |)](#bài-31-vạch-trần-sự-khác-biệt-giữa-toán-tử-logic-và-bitwise-)
   - [Bài 3.2: Ứng dụng Guarding & Fallback trong dự án thực tế](#bài-32-ứng-dụng-guarding-fallback-trong-dự-án-thực-tế)

---

## Phần 1: Cấp Độ Cơ Bản (AND, OR, NOT & Kỹ Thuật Tách Biến)

### Bài 1.1: Kế hoạch dã ngoại với toán tử AND (&&)
Cho thông tin dự báo thời tiết và lịch trình như sau:
```javascript
let temperature = 25;  // Nhiệt độ hiện tại (độ C)
let dayOff = "Sunday"; // Ngày nghỉ trong tuần
let today = "Sunday";  // Ngày hôm nay
```
**Yêu cầu:**
1. Viết câu lệnh `if...else` sử dụng toán tử `&&` để kiểm tra điều kiện đi dã ngoại: **Nhiệt độ phải $> 20$ độ C VÀ ngày hôm nay phải trùng với ngày nghỉ**. Nếu đúng in `"Đi picnic!"`, ngược lại in `"Ở nhà!"`.
2. Áp dụng kỹ thuật **Clean Code (Self-documenting code)**: Tạo 2 biến boolean `isWeatherGood` và `hasFreeTime`, sau đó dùng 2 biến này trong câu lệnh `if`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

### Bài 1.2: Chọn phim giải trí cuối tuần với toán tử OR (||)
Cho danh sách thể loại phim đang chiếu tại rạp:
```javascript
let isComedyAvailable = true;   // Có phim hài đang chiếu
let isActionAvailable = false;  // Không có phim hành động
```
**Yêu cầu:**
- Sử dụng toán tử `||` để kiểm tra: Chỉ cần rạp có chiếu phim hài **HOẶC** phim hành động thì in ra `"Xem phim vui vẻ!"`.
- Nếu cả hai thể loại đều không có, in ra `"Chọn hoạt động khác!"`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

### Bài 1.3: Đảo ngược trạng thái với toán tử NOT (!) & Ép kiểu với (!!)
Cho biến biểu thị sở thích:
```javascript
let isCatLover = false; // Không thích mèo
```
**Yêu cầu:**
1. Sử dụng toán tử phủ định `!` để kiểm tra: Nếu người dùng không thích mèo, hãy in ra `"Không thích mèo!"`.
2. Sử dụng toán tử `!!` (Double NOT) để ép kiểu các giá trị sau thành boolean và in kết quả ra console:
   - Chuỗi rỗng: `""`
   - Chuỗi có ký tự: `"JavaScript"`
   - Số không: `0`
   - Số nguyên: `42`
   - `null` và `undefined`

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 2: Cấp Độ Trung Bình (Kết Hợp Đa Điều Kiện & Độ Ưu Tiên)

### Bài 2.1: Thẩm định điều kiện nhập học khóa lập trình (Nhiều &&)
Một học viên muốn tham gia khóa học lập trình nâng cao cần thỏa mãn **đồng thời cả 3 điều kiện**:
1. Đủ từ 16 tuổi trở lên (`age > 16`).
2. Có kỹ năng tin học cơ bản (`hasBasicComputerSkills === true`).
3. Đã nộp hồ sơ đăng ký trước hạn (`isRegistered === true`).

Cho dữ liệu mẫu:
```javascript
let age = 17;
let hasBasicComputerSkills = true;
let isRegistered = true;
```
**Yêu cầu:**
- Viết điều kiện kết hợp cả 3 tiêu chí bằng toán tử `&&`.
- In thông báo `"Đủ điều kiện tham gia khóa học"` hoặc `"Không đủ điều kiện"`.
- Thử đổi `hasBasicComputerSkills = false` để kiểm chứng kết quả.

[⬆️ Quay lại Mục lục](#mục-lục)

---

### Bài 2.2: Hệ thống phân quyền xem phim VIP Streaming (Nhiều ||)
Một ứng dụng chiếu phim trực tuyến cho phép xem nội dung đặc biệt nếu người dùng thỏa mãn **ít nhất 1 trong 3 điều kiện**:
1. Tài khoản đăng ký gói VIP (`isVipMember`).
2. Đang có mã quà tặng khuyến mãi hợp lệ (`hasGiftCode`).
3. Đã thanh toán lượt xem đơn lẻ (`hasPaidSubscription`).

Cho dữ liệu mẫu:
```javascript
let isVipMember = false;
let hasGiftCode = true;
let hasPaidSubscription = false;
```
**Yêu cầu:**
- Kết hợp 3 điều kiện bằng toán tử `||`.
- In ra `"Truy cập nội dung VIP"` nếu thỏa mãn, hoặc `"Không thể truy cập nội dung VIP"`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

### Bài 2.3: Chiến dịch tặng quà tri ân đơn hàng (Đan xen && và || có ngoặc)
Một sàn thương mại điện tử triển khai chương trình tặng quà tri ân:
- **Điều kiện nhận quà:** Khách hàng phải là **Người dùng mới đăng ký** (`isNewUser`) **HOẶC** là **Thành viên VIP** (`isVipMember`), **VÀ** tổng giá trị đơn hàng hiện tại (`purchaseAmount`) phải **trên 500.000 VNĐ**.

Cho dữ liệu mẫu:
```javascript
let isNewUser = true;
let isVipMember = false;
let purchaseAmount = 600000;
```
**Yêu cầu:**
1. Viết biểu thức chuẩn có sử dụng dấu ngoặc đơn `()` để gom nhóm: `((isNewUser || isVipMember) && purchaseAmount > 500000)`.
2. Hãy giải thích điều gì sẽ xảy ra nếu lập trình viên **bỏ quên dấu ngoặc tròn** `()` và viết thành: `isNewUser || isVipMember && purchaseAmount > 500000`? Trường hợp test case nào sẽ phát sinh bug nghiêm trọng?

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 3: Cấp Độ Thực Chiến (Đoản Mạch & Bẫy Bitwise vs Logic)

### Bài 3.1: Vạch trần sự khác biệt giữa Toán tử Logic (&&, ||) và Bitwise (&, |)
Người mới học rất hay gõ nhầm một dấu `&` hoặc `|` thay vì `&&` hoặc `||`.
Cho hàm thực hiện gửi email thông báo (có tác dụng phụ - side effect):
```javascript
let emailSentCount = 0;
function sendNotificationEmail() {
    emailSentCount++;
    return true;
}
```
**Yêu cầu:**
1. Viết câu lệnh `if (false && sendNotificationEmail())` $\rightarrow$ Quan sát xem hàm `sendNotificationEmail()` có bị gọi không? `emailSentCount` bằng bao nhiêu? Giải thích cơ chế đoản mạch (Short-circuit).
2. Reset `emailSentCount = 0` và viết câu lệnh `if (false & sendNotificationEmail())` $\rightarrow$ Quan sát xem `emailSentCount` bằng bao nhiêu? Giải thích tại sao toán tử bitwise `&` lại gây ra tác dụng phụ nguy hiểm.

[⬆️ Quay lại Mục lục](#mục-lục)

---

### Bài 3.2: Ứng dụng Guarding & Fallback trong dự án thực tế
Trong lập trình thực tế, toán tử `&&` và `||` thường được dùng để thay thế các câu lệnh `if` rườm rà:
1. **Guarding với `&&`:** Chỉ gọi hàm gửi thông báo khi đối tượng `user` tồn tại và đã đăng nhập:
   ```javascript
   const currentUser = { id: 101, name: "Hoàng Nam", isLoggedIn: true };
   ```
   Dùng `&&` để kiểm tra `currentUser && currentUser.isLoggedIn && inThongBao(currentUser.name)`.
2. **Fallback Value với `||` và `??`:**
   Lấy tên hiển thị của người dùng từ `inputNickname`:
   - Nếu `inputNickname` rỗng `""` hoặc `null`, lấy giá trị mặc định `"Khách vãng lai"`.
   - Phân tích trường hợp người chơi có số điểm `score = 0`: Tại sao dùng `score || 10` lại bị sai logic, và toán tử `score ?? 10` đã khắc phục như thế nào?

[⬆️ Quay lại Mục lục](#mục-lục)
