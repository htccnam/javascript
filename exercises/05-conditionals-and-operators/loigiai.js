// ============================================
// BÀI TẬP 05: CÂU LỆNH RẼ NHÁNH & TOÁN TỬ LOGIC
// LỜI GIẢI MẪU CHI TIẾT & GIẢI THÍCH BẢN CHẤT
// Chạy file bằng lệnh: npm run solution:conditionals
// ============================================

// ============================================
// PHẦN 1: CẤP ĐỘ CƠ BẢN
// ============================================
console.group("=== PHẦN 1: CẤP ĐỘ CƠ BẢN ===");

// 1.1. Chào hỏi theo khung giờ trong ngày
const hour = 14;
console.log("Giờ hiện tại:", hour);

if (hour < 12) {
    console.log("👉 Lời chào: Chào buổi sáng!");
} else if (hour < 18) {
    console.log("👉 Lời chào: Chào buổi chiều!"); // Chạy vào nhánh này vì 14 < 18
} else {
    console.log("👉 Lời chào: Chào buổi tối!");
}

// 1.2. Tra cứu lịch làm việc với switch...case
const day = "Wednesday";
console.log("\nNgày kiểm tra:", day);

switch (day) {
    case "Monday":
        console.log("👉 Lịch làm việc: Đầu tuần - Họp giao ban toàn công ty.");
        break;
    case "Wednesday":
        console.log("👉 Lịch làm việc: Giữa tuần - Review tiến độ dự án.");
        break;
    case "Friday":
        console.log("👉 Lịch làm việc: Cuối tuần - Tổng kết công việc và release sản phẩm.");
        break;
    default:
        console.log("👉 Lịch làm việc: Ngày làm việc tập trung thông thường.");
}

// 1.3. So sánh nghiêm ngặt (===) vs lỏng lẻo (==)
console.log("\n--- Kiểm chứng so sánh === vs == ---");
console.log("1. 5 === '5'        :", 5 === "5");        // false (number !== string)
console.log("2. 5 == '5'         :", 5 == "5");         // true  (chuỗi '5' bị ép ngầm về số 5)
console.log("3. 0 == false       :", 0 == false);       // true  (cả 2 cùng bị ép về 0)
console.log("4. 0 === false      :", 0 === false);      // false (number !== boolean)
console.log("5. null == undefined:", null == undefined); // true  (quy tắc đặc biệt của JS)
console.log("6. null === undefined:", null === undefined); // false (object !== undefined)
console.log("💡 Bài học: Luôn dùng === và !== để tránh các lỗi ép kiểu quái dị!");

console.groupEnd();

// ============================================
// PHẦN 2: CẤP ĐỘ TRUNG BÌNH
// ============================================
console.group("\n=== PHẦN 2: CẤP ĐỘ TRUNG BÌNH ===");

// 2.1. Toán tử ba ngôi (Ternary Operator)
const isPaid = true;
const totalAmount = 250000;

// Sử dụng cú pháp rút gọn điều_kiện ? nếu_true : nếu_false
const orderStatus = isPaid
    ? `Đã thanh toán (${totalAmount.toLocaleString("vi-VN")} VNĐ)`
    : "Chờ thanh toán";

console.log("Trạng thái đơn hàng:", orderStatus);

// 2.2. Kỹ thuật Fall-through trong switch (Gom nhóm case)
const month = 8;
let seasonInfo = "";

switch (month) {
    case 1:
    case 2:
    case 3:
        seasonInfo = "Quý 1 - Mùa Xuân";
        break;
    case 4:
    case 5:
    case 6:
        seasonInfo = "Quý 2 - Mùa Hạ";
        break;
    case 7:
    case 8:
    case 9:
        // month = 8 sẽ nhảy vào case 8, không có break nên rơi tiếp xuống case 9 và dừng
        seasonInfo = "Quý 3 - Mùa Thu";
        break;
    case 10:
    case 11:
    case 12:
        seasonInfo = "Quý 4 - Mùa Đông";
        break;
    default:
        seasonInfo = "Tháng không hợp lệ (phải từ 1 đến 12)";
}
console.log(`Tháng ${month} thuộc: ${seasonInfo}`);

// 2.3. Đoản mạch (Short-Circuit) và độ ưu tiên toán tử
console.log("\n--- Kiểm chứng cơ chế Short-Circuit ---");
const a = 0 && "JavaScript";
console.log("a (0 && 'JavaScript')      :", a); // 0 (dừng ở falsy đầu tiên)

const b = 100 && "ReactJS";
console.log("b (100 && 'ReactJS')        :", b); // "ReactJS" (cả 2 truthy -> lấy vế cuối)

const c = 0 || "NodeJS";
console.log("c (0 || 'NodeJS')           :", c); // "NodeJS" (trả về truthy đầu tiên)

const d = "VueJS" || "Angular";
console.log("d ('VueJS' || 'Angular')    :", d); // "VueJS" (dừng ở truthy đầu tiên)

const e = !0;
console.log("e (!0)                      :", e); // true (0 là falsy -> phủ định thành true)

const f = !"hello";
console.log("f (!'hello')                :", f); // false ('hello' là truthy -> phủ định thành false)

const g = !false || false && false;
console.log("g (!false || false && false):", g); // true
console.log("   👉 Phân tích bước chạy của g:");
console.log("      1. NOT chạy trước    : !false -> true");
console.log("      2. AND chạy tiếp theo: false && false -> false");
console.log("      3. OR chạy cuối cùng : true || false -> true");

// 2.4. Bảo Vệ Biến Undefined & Giải Mã Toán Tử void 0
console.log("\n--- Kiểm chứng Toán tử void & void 0 ---");

// a. Biểu thức void luôn trả về undefined
console.log("void 0              :", void 0);             // undefined
console.log("void (2 + 2)        :", void (2 + 2));       // undefined

function sum(a, b) {
    return a + b;
}
console.log("void sum(5, 10)     :", void sum(5, 10));     // undefined
console.log("   💡 Giải thích: Toán tử void đánh giá biểu thức (hàm sum vẫn tính ra 15), nhưng nuốt kết quả và luôn trả về undefined.");

// b. Cạm bẫy Variable Shadowing với biến undefined trong hàm
function isSafeUndefined(val) {
    // ⚠️ Mô phỏng tình huống nguy hiểm: vô tình khai báo biến cục bộ tên là undefined
    let undefined = "hacked";

    const unsafeCheck = (val === undefined);
    const safeCheck = (val === void 0);

    return { unsafeCheck, safeCheck, localUndefined: undefined };
}

const colors = ["red"];
const targetValue = colors[9]; // undefined thực sự
const testCheck = isSafeUndefined(targetValue);

console.log("\nKiểm tra giá trị colors[9] (vốn là undefined):");
console.log("  - So sánh thường (val === undefined):", testCheck.unsafeCheck, `❌ (Bị sai vì biến undefined đã bị gán thành '${testCheck.localUndefined}')`);
console.log("  - So sánh chuẩn (val === void 0)    :", testCheck.safeCheck, "✅ (Chính xác tuyệt đối!)");
console.log("   💡 Vì sao thư viện lớn & Webpack/Terser luôn dùng 'void 0' thay vì 'undefined':");
console.log("      1. 'void 0' bất biến 100%, không bao giờ bị Variable Shadowing ghi đè.");
console.log("      2. Giảm dung lượng khi minify code: 'void 0' (6 ký tự) ngắn hơn 'undefined' (9 ký tự).");

console.groupEnd();

// ============================================
// PHẦN 3: CẤP ĐỘ THỰC CHIẾN
// ============================================
console.group("\n=== PHẦN 3: CẤP ĐỘ THỰC CHIẾN ===");

// 3.1. Hệ thống kiểm soát quyền truy cập đa tầng (Role Checker)
const currentUser = {
    username: "nam_dev",
    role: "editor",      // Thử đổi sang "admin" để kiểm tra kết quả
    isActive: true,
    isBanned: false
};

// Biểu thức kiểm tra quyền an toàn:
// Gom nhóm role bằng ngoặc tròn: (role === "admin" || role === "manager")
const canAccessAdminPanel = (currentUser.role === "admin" || currentUser.role === "manager")
    && currentUser.isActive
    && !currentUser.isBanned;

console.log("Người dùng đang kiểm tra:", currentUser);
console.log("Được phép vào trang quản trị?:", canAccessAdminPanel);

if (canAccessAdminPanel) {
    console.log(`✅ Chào mừng ${currentUser.username} truy cập vào trang Quản Trị Hệ Thống!`);
} else {
    console.log(`❌ Truy cập bị từ chối: Quyền hạn không đủ hoặc tài khoản không hợp lệ!`);
}

// 3.2. Máy tính cước vận chuyển (Shipping Fee Calculator)
const order = {
    distanceKm: 4.5,
    subtotal: 600000,
    isVip: true
};

// Bước 1: Tính cước vận chuyển chuẩn theo khoảng cách
let baseShippingFee = 0;
if (order.distanceKm < 3) {
    baseShippingFee = 15000;
} else if (order.distanceKm <= 10) {
    baseShippingFee = 30000;
} else {
    baseShippingFee = 50000;
}

// Bước 2: Áp dụng chính sách ưu đãi
let finalShippingFee = baseShippingFee;

// Kiểm tra điều kiện Freeship toàn phần: Đơn hàng >= 500k VÀ khoảng cách <= 5km
const isEligibleForFreeShip = order.subtotal >= 500000 && order.distanceKm <= 5;

if (isEligibleForFreeShip) {
    finalShippingFee = 0; // Miễn phí hoàn toàn
} else if (order.isVip) {
    finalShippingFee = baseShippingFee * 0.5; // Giảm 50% cho khách VIP
}

const totalPayment = order.subtotal + finalShippingFee;

console.log("\n========================================");
console.log("         HÓA ĐƠN GIAO HÀNG (LOGISTICS)   ");
console.log("========================================");
console.log(`Khoảng cách giao hàng : ${order.distanceKm} km`);
console.log(`Tiền hàng (Subtotal)  : ${order.subtotal.toLocaleString("vi-VN")} VNĐ`);
console.log(`Cước chuẩn ban đầu    : ${baseShippingFee.toLocaleString("vi-VN")} VNĐ`);
console.log(`Freeship toàn phần?   : ${isEligibleForFreeShip ? "Đạt điều kiện (0 VNĐ)" : "Không"}`);
console.log(`Khách hàng thân thiết : ${order.isVip ? "VIP (Giảm 50% nếu không Freeship)" : "Thường"}`);
console.log("----------------------------------------");
console.log(`Cước vận chuyển thực  : ${finalShippingFee.toLocaleString("vi-VN")} VNĐ`);
console.log(`TỔNG CỘNG THANH TOÁN  : ${totalPayment.toLocaleString("vi-VN")} VNĐ`);
console.log("========================================");

console.groupEnd();
