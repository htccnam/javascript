// =================================================================
// BÀI TẬP 06: TỔNG QUAN VỀ JAVASCRIPT & CÁC CÁCH VIẾT CODE
// File này dành cho bạn tự thực hành từ đầu.
// Hãy đọc yêu cầu trong "debai.md" và viết code vào các phần TODO bên dưới.
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: ĐẶC TÍNH ĐỘNG (DYNAMIC TYPING) & CASE SENSITIVITY
// -----------------------------------------------------------------
console.group("=== PHẦN 1: DYNAMIC TYPING & CASE SENSITIVITY ===");

// TODO 1.1: Trải nghiệm biến đổi kiểu dữ liệu động (Dynamic Typing)
console.log("--- 1.1. Dynamic Typing với biến bienDong ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY (Khai báo bienDong và gán đổi kiểu liên tục):




// TODO 1.2: Bẫy phân biệt hoa-thường (Case Sensitivity)
console.log("\n--- 1.2. Phân biệt hoa - thường trong JavaScript ---");
let userName = "Alice";
let Username = "Bob";
let USERNAME = "Charlie";

// In ra cả 3 biến:


// Thử truy cập biến username (viết thường hết) trong try...catch:
try {
    // VIẾT CODE TRUY CẬP username Ở ĐÂY:

} catch (err) {
    console.error("Lỗi bắt được:", err.name, "-", err.message);
    // TODO: Giải thích tại sao ném ra ReferenceError?
}

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: CẠM BẪY ÉP KIỂU & PHÂN TÍCH 5 CÁCH VIẾT JS
// -----------------------------------------------------------------
console.group("\n=== PHẦN 2: ÉP KIỂU & PHÂN TÍCH 5 CÁCH VIẾT JS ===");

// TODO 2.1: Kiểm chứng Type Coercion (Ép kiểu ngầm định)
console.log("--- 2.1. Kiểm chứng Type Coercion ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY (In giá trị và typeof của 5 biểu thức):




// TODO 2.2: Trả lời câu hỏi phân tích 3 tình huống nhúng JS
console.log("\n--- 2.2. Phân tích 3 tình huống nhúng JS ---");
// Tình huống A (Website 20 trang lớn): Nên dùng cách nào? Vì sao?
// Tình huống B (Debug nhanh lỗi trên trình duyệt): Nên dùng cách nào? Vì sao?
// Tình huống C (50 nút bấm dùng inline onclick): Nhược điểm lớn nhất là gì?


console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: THỬ THÁCH THỰC CHIẾN & CHẨN ĐOÁN MÔI TRƯỜNG
// -----------------------------------------------------------------
console.group("\n=== PHẦN 3: THỰC CHIẾN & CHẨN ĐOÁN MÔI TRƯỜNG ===");

// TODO 3.1: Xây dựng hàm detectEnvironment()
console.log("--- 3.1. Chẩn đoán môi trường thực thi ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY (Hàm detectEnvironment):




// TODO 3.2: Refactor mô hình xử lý sự kiện nút bấm từ Inline sang Event Listener
console.log("\n--- 3.2. Mô hình Event Listener chuẩn mực ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY (Mô phỏng hàm setupSaveButton):




console.groupEnd();
