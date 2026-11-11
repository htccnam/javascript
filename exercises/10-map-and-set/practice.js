// ============================================
// BÀI TẬP 09: CẤU TRÚC DỮ LIỆU MAP & SET - BÀI LÀM CỦA BẠN
// Đọc yêu cầu trong "debai.md" và làm vào các phần TODO bên dưới
// ============================================

// === PHẦN 1 -> 3: CẤU TRÚC DỮ LIỆU MAP ===
// ============================================
// MAP TRONG JAVASCRIPT - BÀI LÀM CỦA BẠN
// Đọc yêu cầu trong "debai.md" và làm vào các phần TODO bên dưới
// ============================================

// TODO 1: THAO TÁC CƠ BẢN VỚI MAP (CRUD)
console.group("=== BÀI 1: CRUD VỚI MAP ===");

// 1.1. Tạo Map rỗng tên userRoles:

// 1.2. Thêm các quyền: admin -> "Toàn quyền quản trị", editor -> "Chỉnh sửa bài viết", viewer -> "Chỉ xem nội dung":

// 1.3. Lấy ra quyền của "editor" bằng .get():

// 1.4. Kiểm tra quyền "moderator" có tồn tại không bằng .has():

// 1.5. In ra tổng số lượng quyền hiện có (.size):

// 1.6. Xóa quyền "viewer" bằng .delete():

console.groupEnd();

// TODO 2: OBJECT LÀM KEY TRONG MAP
console.group("\n=== BÀI 2: OBJECT LÀM KEY ===");
const userA = { name: "Huy" };
const userB = { name: "Linh" };

// 2.1. Tạo Map userPreferences
// Gán userA -> { theme: "dark", lang: "vi" }
// Gán userB -> { theme: "light", lang: "en" }

// 2.2. Lấy ra cấu hình của userA và userB thông qua chính object tham chiếu:

console.groupEnd();

// TODO 3: DUYỆT QUA MAP
console.group("\n=== BÀI 3: DUYỆT QUA MAP ===");
const studentGrades = new Map([
    ["Toán", 9.0],
    ["Văn", 8.0],
    ["Anh", 8.5],
]);

// 3.1. Dùng for...of in ra: "Môn [subject]: [grade] điểm"

// 3.2. Lấy danh sách toàn bộ các môn học (.keys()) thành mảng:

// 3.3. Dùng .values() tính điểm trung bình các môn:

console.groupEnd();

// TODO 4: CHUYỂN ĐỔI DỮ LIỆU
console.group("\n=== BÀI 4: CHUYỂN ĐỔI MAP <-> ARRAY <-> OBJECT ===");

// 4.1. Chuyển studentGrades thành Mảng 2 chiều [...map]:

// 4.2. Chuyển studentGrades thành Plain Object (Object.fromEntries):

// 4.3. Chuyển Plain Object { host: "localhost", port: 3000 } ngược lại thành Map:

console.groupEnd();


// === PHẦN 4 -> 6: CẤU TRÚC DỮ LIỆU SET ===
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

