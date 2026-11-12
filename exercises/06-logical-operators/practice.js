/**
 * BÀI TẬP 06: TOÁN TỬ LOGICAL TRONG JAVASCRIPT (&&, ||, !)
 * File thực hành dành cho người học tự gõ code.
 * 
 * Hướng dẫn:
 * - Đọc yêu cầu tại mỗi phần // TODO:
 * - Viết code của bạn vào vị trí // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:
 * - Chạy kiểm tra bằng lệnh: npm run test:logical-operators (hoặc node exercises/06-logical-operators/practice.js)
 */

console.log("=== BÀI TẬP 06: TOÁN TỬ LOGICAL (PRACTICE) ===");

// =============================================================================
// PHẦN 1: CẤP ĐỘ CƠ BẢN (AND, OR, NOT & KỸ THUẬT TÁCH BIẾN)
// =============================================================================
console.group("\n--- PHẦN 1: CẤP ĐỘ CƠ BẢN ---");

// Bài 1.1: Kế hoạch dã ngoại với toán tử AND (&&)
console.group("Bài 1.1: Kế hoạch dã ngoại (&&)");
let temperature = 25;  // Nhiệt độ hiện tại (độ C)
let dayOff = "Sunday"; // Ngày nghỉ trong tuần
let today = "Sunday";  // Ngày hôm nay

// TODO 1.1.a: Viết if...else trực tiếp kiểm tra: temperature > 20 VÀ today === dayOff
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// TODO 1.1.b: Tách thành 2 biến boolean isWeatherGood và hasFreeTime, sau đó dùng if
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// Bài 1.2: Chọn phim giải trí cuối tuần với toán tử OR (||)
console.group("\nBài 1.2: Chọn phim giải trí (||)");
let isComedyAvailable = true;   // Có phim hài đang chiếu
let isActionAvailable = false;  // Không có phim hành động

// TODO 1.2: Dùng toán tử || kiểm tra: chỉ cần isComedyAvailable HOẶC isActionAvailable là true
// thì in "Xem phim vui vẻ!", ngược lại in "Chọn hoạt động khác!"
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// Bài 1.3: Đảo ngược trạng thái với NOT (!) & Ép kiểu với (!!)
console.group("\nBài 1.3: Toán tử NOT (!) & Ép kiểu Boolean (!!)");
let isCatLover = false;

// TODO 1.3.a: Dùng ! kiểm tra nếu !isCatLover thì in "Tôi không thích mèo!"
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// TODO 1.3.b: Dùng !! ép kiểu các giá trị sau và in ra: "", "JavaScript", 0, 42, null, undefined
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


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

// TODO 2.1: Viết điều kiện kết hợp cả 3 tiêu chí: age > 16 VÀ hasBasicComputerSkills VÀ isRegistered
// In "Đủ điều kiện tham gia khóa học" hoặc "Không đủ điều kiện"
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// Bài 2.2: Hệ thống phân quyền xem phim VIP Streaming (Nhiều ||)
console.group("\nBài 2.2: Phân quyền VIP Streaming (Nhiều ||)");
let isVipMember = false;
let hasGiftCode = true;
let hasPaidSubscription = false;

// TODO 2.2: Dùng || kết hợp 3 điều kiện: isVipMember HOẶC hasGiftCode HOẶC hasPaidSubscription
// In "Truy cập nội dung VIP" hoặc "Không thể truy cập nội dung VIP"
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// Bài 2.3: Chiến dịch tặng quà tri ân đơn hàng (Đan xen && và ||)
console.group("\nBài 2.3: Tặng quà tri ân đơn hàng (Đan xen && và || có ngoặc)");
let isNewUser = true;
let isVipMemberUser = false;
let purchaseAmount = 600000;

// TODO 2.3: Viết biểu thức chuẩn dùng ngoặc: ((isNewUser || isVipMemberUser) && purchaseAmount > 500000)
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


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

// TODO 3.1:
// 1. Thử nghiệm với &&: if (false && sendEmail()) {} -> In emailCount (Mong đợi: 0)
// 2. Thử nghiệm với &: if (false & sendEmail()) {} -> In emailCount (Mong đợi: 1)
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// Bài 3.2: Ứng dụng Guarding & Fallback trong thực tế
console.group("\nBài 3.2: Guarding & Fallback");
const currentUser = { id: 101, name: "Hoàng Nam", isLoggedIn: true };
let inputNickname = ""; // Người dùng để trống nickname
let userScore = 0;      // Người chơi được 0 điểm

// TODO 3.2.a: Dùng && để guard: currentUser && currentUser.isLoggedIn && in lời chào kèm name
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// TODO 3.2.b: Dùng || để fallback cho inputNickname ("Khách vãng lai")
// Và so sánh kết quả userScore || 10 vs userScore ?? 10
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();
console.groupEnd();

console.log("\n🎉 Bạn đã xem qua toàn bộ đề bài! Hãy hoàn thiện code và chạy lại file để kiểm tra.");
