// ============================================
// BÀI TẬP 05: CÂU LỆNH RẼ NHÁNH & TOÁN TỬ LOGIC
// Đọc yêu cầu trong "debai.md" và hoàn thiện các phần TODO bên dưới
// Chạy file bằng lệnh: npm run test:conditionals
// ============================================

// ============================================
// PHẦN 1: CẤP ĐỘ CƠ BẢN
// ============================================
console.group("=== PHẦN 1: CẤP ĐỘ CƠ BẢN ===");

// TODO 1.1: Chào hỏi theo khung giờ
// Cho biến hour, hãy dùng if...else if...else:
// - hour < 12: in "Chào buổi sáng!"
// - hour < 18: in "Chào buổi chiều!"
// - còn lại: in "Chào buổi tối!"
const hour = 14;
console.log("Giờ hiện tại:", hour);
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 1.2: Tra cứu lịch làm việc với switch...case
// Cho biến day = "Wednesday", dùng switch...case:
// - "Monday": "Đầu tuần: Họp giao ban toàn công ty."
// - "Wednesday": "Giữa tuần: Review tiến độ dự án."
// - "Friday": "Cuối tuần: Tổng kết công việc và release sản phẩm."
// - default: "Ngày làm việc tập trung thông thường."
const day = "Wednesday";
console.log("\nNgày kiểm tra:", day);
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 1.3: So sánh nghiêm ngặt (===) vs lỏng lẻo (==)
// In kết quả và tự quan sát sự khác nhau giữa === và ==:
// 1. 5 === "5"
// 2. 5 == "5"
// 3. 0 == false
// 4. 0 === false
// 5. null == undefined
// 6. null === undefined
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();

// ============================================
// PHẦN 2: CẤP ĐỘ TRUNG BÌNH
// ============================================
console.group("\n=== PHẦN 2: CẤP ĐỘ TRUNG BÌNH ===");

// TODO 2.1: Toán tử ba ngôi (Ternary Operator)
// Cho isPaid và totalAmount, dùng toán tử ba ngôi để gán orderStatus:
// Nếu isPaid là true -> "Đã thanh toán (250.000 VNĐ)", ngược lại -> "Chờ thanh toán"
const isPaid = true;
const totalAmount = 250000;
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 2.2: Kỹ thuật Fall-through trong switch (Gom nhóm case)
// Cho month = 8, hãy dùng switch...case gom nhóm không dùng break để xác định Quý:
// - Tháng 1, 2, 3: "Quý 1 - Mùa Xuân"
// - Tháng 4, 5, 6: "Quý 2 - Mùa Hạ"
// - Tháng 7, 8, 9: "Quý 3 - Mùa Thu"
// - Tháng 10, 11, 12: "Quý 4 - Mùa Đông"
// - default: "Tháng không hợp lệ"
const month = 8;
console.log("\nTháng cần kiểm tra:", month);
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 2.3: Đoản mạch (Short-circuit) và độ ưu tiên toán tử
// Hãy dự đoán giá trị và in ra kết quả của:
// a = 0 && "JavaScript"
// b = 100 && "ReactJS"
// c = 0 || "NodeJS"
// d = "VueJS" || "Angular"
// e = !0
// f = !"hello"
// g = !false || false && false
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();

// ============================================
// PHẦN 3: CẤP ĐỘ THỰC CHIẾN
// ============================================
console.group("\n=== PHẦN 3: CẤP ĐỘ THỰC CHIẾN ===");

// TODO 3.1: Hệ thống kiểm soát quyền truy cập đa tầng (Role Checker)
const currentUser = {
    username: "nam_dev",
    role: "editor",      // "admin", "manager", "editor", "viewer"
    isActive: true,
    isBanned: false
};

// Viết một biểu thức logic duy nhất tính canAccessAdminPanel:
// Điều kiện: (role là "admin" HOẶC "manager") VÀ (isActive là true) VÀ (isBanned là false)
// Dùng if...else thông báo truy cập thành công hay bị từ chối.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 3.2: Máy tính cước vận chuyển (Shipping Fee Calculator)
const order = {
    distanceKm: 4.5,
    subtotal: 600000,
    isVip: true
};

// Quy tắc:
// 1. Phí chuẩn: < 3km: 15.000; 3km - 10km: 30.000; > 10km: 50.000
// 2. Miễn phí (0đ): nếu subtotal >= 500.000 VÀ distanceKm <= 5
// 3. Giảm 50% phí chuẩn: nếu không được freeship nhưng isVip === true
// In ra: Cước vận chuyển và Tổng tiền thanh toán.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();
