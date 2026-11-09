// ============================================
// SET TRONG JAVASCRIPT - BÀI LÀM CỦA BẠN
// Đọc yêu cầu trong "kienthuc.md" và làm vào các phần TODO bên dưới
// ============================================

// TODO 1: THAO TÁC CƠ BẢN VỚI SET (CRUD)
console.group("=== BÀI 1: CRUD VỚI SET ===");

// 1.1. Tạo Set rỗng tên tags:

// 1.2. Thêm các tag: "javascript", "react", "nodejs", "javascript" (thêm 2 lần để quan sát):

// 1.3. In ra kích thước của Set (.size):

// 1.4. Kiểm tra xem "react" và "python" có nằm trong Set không (.has()):

// 1.5. Xóa tag "nodejs" bằng .delete():

// 1.6. Xóa sạch Set bằng .clear():

console.groupEnd();

// TODO 2: LỌC TRÙNG LẶP MẢNG (USE CASE THỰC TẾ)
console.group("\n=== BÀI 2: LỌC TRÙNG LẶP MẢNG ===");
const visitorIds = [101, 102, 103, 101, 104, 102, 105, 101];

// 2.1. Dùng new Set() và toán tử Spread (...) tạo mảng uniqueVisitorIds loại bỏ trùng lặp:

// 2.2. Đếm số lượng người dùng thực tế đã truy cập:

console.groupEnd();

// TODO 3: CÁC PHÉP TOÁN TẬP HỢP (HỢP, GIAO, HIỆU)
console.group("\n=== BÀI 3: PHÉP TOÁN TẬP HỢP ===");
const teamFrontend = new Set(["HTML", "CSS", "JavaScript", "React"]);
const teamBackend = new Set(["NodeJS", "JavaScript", "SQL", "Docker"]);

// 3.1. Phép Hợp (Union): Tập hợp tất cả các kỹ năng của 2 team (không trùng lặp):

// 3.2. Phép Giao (Intersection): Kỹ năng chung mà cả 2 team đều có:

// 3.3. Phép Hiệu (Difference): Kỹ năng CHỈ team Frontend có mà Backend không có:

console.groupEnd();
