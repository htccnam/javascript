/**
 * BÀI TẬP 06: TOÁN TỬ LOGICAL TRONG JAVASCRIPT (&&, ||, !)
 * File lời giải chuẩn mực & phân tích bản chất cơ chế hoạt động.
 * 
 * Chạy file này bằng lệnh: npm run solution:logical-operators (hoặc node exercises/06-logical-operators/loigiai.js)
 */

console.log("=== BÀI TẬP 06: TOÁN TỬ LOGICAL (SOLUTION) ===\n");

// =============================================================================
// PHẦN 1: CẤP ĐỘ CƠ BẢN (AND, OR, NOT & KỸ THUẬT TÁCH BIẾN)
// =============================================================================
console.group("--- PHẦN 1: CẤP ĐỘ CƠ BẢN ---");

// Bài 1.1: Kế hoạch dã ngoại với toán tử AND (&&)
console.group("Bài 1.1: Kế hoạch dã ngoại (&&)");
let temperature = 25;  // Nhiệt độ hiện tại (độ C)
let dayOff = "Sunday"; // Ngày nghỉ trong tuần
let today = "Sunday";  // Ngày hôm nay

// Cách 1: Viết trực tiếp trong if
console.log("👉 Cách 1 (Viết trực tiếp):");
if (temperature > 20 && today === dayOff) {
    console.log("  Đi picnic!");
} else {
    console.log("  Ở nhà!");
}

// Cách 2: Áp dụng Clean Code - Tách biến boolean có nghĩa (Self-documenting)
console.log("👉 Cách 2 (Tách biến Clean Code):");
let isWeatherGood = temperature > 20;
let hasFreeTime = today === dayOff;

if (isWeatherGood && hasFreeTime) {
    console.log("  Đi picnic!");
} else {
    console.log("  Ở nhà!");
}
console.log("  💡 Phân tích: && chỉ trả về true khi CẢ HAI vế đều đúng.");
console.groupEnd();

// Bài 1.2: Chọn phim giải trí cuối tuần với toán tử OR (||)
console.group("\nBài 1.2: Chọn phim giải trí (||)");
let isComedyAvailable = true;   // Có phim hài
let isActionAvailable = false;  // Không có phim hành động

if (isComedyAvailable || isActionAvailable) {
    console.log("  Xem phim vui vẻ!");
} else {
    console.log("  Chọn hoạt động khác!");
}
console.log("  💡 Phân tích: || trả về true ngay khi có ít nhất một vế đúng (isComedyAvailable = true).");
console.groupEnd();

// Bài 1.3: Đảo ngược trạng thái với NOT (!) & Ép kiểu với (!!)
console.group("\nBài 1.3: Toán tử NOT (!) & Ép kiểu Boolean (!!)");
let isCatLover = false;

if (!isCatLover) {
    console.log("  Không thích mèo!");
}

console.log("\n  Ép kiểu với Double NOT (!!):");
console.log('  !!""          :', !!"", "(Chuỗi rỗng là Falsy)");
console.log('  !!"JavaScript":', !!"JavaScript", "(Chuỗi có ký tự là Truthy)");
console.log('  !!0           :', !!0, "(Số 0 là Falsy)");
console.log('  !!42          :', !!42, "(Số khác 0 là Truthy)");
console.log('  !!null        :', !!null, "(null là Falsy)");
console.log('  !!undefined   :', !!undefined, "(undefined là Falsy)");
console.groupEnd();

console.groupEnd();

// =============================================================================
// PHẦN 2: CẤP ĐỘ TRUNG BÌNH (KẾT HỢP ĐA ĐIỀU KIỆN & ĐỘ ƯU TIÊN)
// =============================================================================
console.group("\n--- PHẦN 2: CẤP ĐỘ TRUNG BÌNH ---");

// Bài 2.1: Thẩm định điều kiện nhập học khóa lập trình (Nhiều &&)
console.group("Bài 2.1: Điều kiện nhập học (Nhiều &&)");
let age = 17;
let hasBasicComputerSkills = true;
let isRegistered = true;

if (age > 16 && hasBasicComputerSkills && isRegistered) {
    console.log("  Đủ điều kiện tham gia khóa học");
} else {
    console.log("  Không đủ điều kiện");
}

// Thử nghiệm trường hợp thiếu kỹ năng:
let testSkills = false;
console.log("  Thử nghiệm khi hasBasicComputerSkills = false:");
if (age > 16 && testSkills && isRegistered) {
    console.log("  Đủ điều kiện tham gia khóa học");
} else {
    console.log("  -> Không đủ điều kiện (Chính xác!)");
}
console.groupEnd();

// Bài 2.2: Hệ thống phân quyền xem phim VIP Streaming (Nhiều ||)
console.group("\nBài 2.2: Phân quyền VIP Streaming (Nhiều ||)");
let isVipMember = false;
let hasGiftCode = true;
let hasPaidSubscription = false;

if (isVipMember || hasGiftCode || hasPaidSubscription) {
    console.log("  Truy cập nội dung VIP");
} else {
    console.log("  Không thể truy cập nội dung VIP");
}
console.log("  💡 Phân tích: hasGiftCode = true nên toàn bộ chuỗi || nhận giá trị true.");
console.groupEnd();

// Bài 2.3: Chiến dịch tặng quà tri ân đơn hàng (Đan xen && và ||)
console.group("\nBài 2.3: Tặng quà tri ân đơn hàng (Đan xen && và || có ngoặc)");
let isNewUser = true;
let isVipMemberUser = false;
let purchaseAmount = 600000;

console.log("👉 Trường hợp 1: Có dùng dấu ngoặc đơn ()");
if ((isNewUser || isVipMemberUser) && purchaseAmount > 500000) {
    console.log("  Đủ điều kiện nhận quà");
} else {
    console.log("  Không đủ điều kiện");
}

console.log("\n👉 Phân tích cạm bẫy: Khi BỎ QUÊN dấu ngoặc tròn:");
console.log("  Giả sử: isNewUser = true, nhưng đơn hàng chỉ mua purchaseAmount = 200.000 VNĐ:");
let fakeNewUser = true;
let fakeVip = false;
let smallAmount = 200000;

// Sai lầm: isNewUser || isVipMemberUser && purchaseAmount > 500000
// Do && ưu tiên cao hơn, JS hiểu là: isNewUser || (isVipMemberUser && purchaseAmount > 500000)
// Vế trái isNewUser = true -> Đoản mạch, toàn bộ biểu thức thành TRUE!
if (fakeNewUser || fakeVip && smallAmount > 500000) {
    console.log("  ❌ BUG: Khách mua 200k vẫn được nhận quà vì isNewUser là true!");
}
console.log("  ✅ Bài học: Luôn bọc cặp điều kiện OR trong ngoặc tròn: (A || B) && C.");
console.groupEnd();

console.groupEnd();

// =============================================================================
// PHẦN 3: CẤP ĐỘ THỰC CHIẾN (ĐOẢN MẠCH & BẪY BITWISE VS LOGIC)
// =============================================================================
console.group("\n--- PHẦN 3: CẤP ĐỘ THỰC CHIẾN ---");

// Bài 3.1: So sánh Logic (&&) vs Bitwise (&) khi có Side-effect
console.group("Bài 3.1: Bẫy Bitwise vs Logic");
let emailCount = 0;
function sendEmail() {
    emailCount++;
    return true;
}

// Thử nghiệm 1: Với toán tử logic && (Có đoản mạch Short-circuit)
if (false && sendEmail()) {
    // Không chạy vào đây
}
console.log("  Sau phép tính (false && sendEmail()): emailCount =", emailCount);
console.log("  -> Hàm sendEmail() KHÔNG bị gọi nhờ cơ chế đoản mạch!");

// Thử nghiệm 2: Với toán tử bitwise & (Không đoản mạch)
emailCount = 0; // reset
if (false & sendEmail()) {
    // Không chạy vào đây
}
console.log("  Sau phép tính (false & sendEmail()): emailCount =", emailCount);
console.log("  -> NGUY HIỂM! Toán tử Bitwise & ép chạy sendEmail(), tạo ra side-effect ngoài ý muốn!");
console.groupEnd();

// Bài 3.2: Ứng dụng Guarding & Fallback trong thực tế
console.group("\nBài 3.2: Guarding & Fallback");
const currentUser = { id: 101, name: "Hoàng Nam", isLoggedIn: true };

// Kỹ thuật Guarding với &&:
console.log("👉 Kỹ thuật Guarding (Bảo vệ tránh lỗi crash):");
currentUser && currentUser.isLoggedIn && console.log(`  Xin chào ${currentUser.name}! Bạn đã đăng nhập.`);

// Kỹ thuật Fallback với ||:
console.log("\n👉 Kỹ thuật Fallback giá trị mặc định:");
let inputNickname = ""; // Để trống
const displayName = inputNickname || "Khách vãng lai";
console.log("  Tên hiển thị:", displayName);

// So sánh || vs ?? với số 0:
let userScore = 0; // Điểm thực tế là 0
const scoreWithOr = userScore || 10;
const scoreWithNullish = userScore ?? 10;
console.log("  userScore || 10:", scoreWithOr, "(Lỗi logic! 0 bị coi là Falsy)");
console.log("  userScore ?? 10:", scoreWithNullish, "(Chuẩn xác! ?? giữ lại số 0)");
console.groupEnd();

console.groupEnd();

console.log("\n🎯 CHÚC MỪNG BẠN ĐÃ LÀM CHỦ TOÀN BỘ TOÁN TỬ LOGICAL TRONG JAVASCRIPT!");
