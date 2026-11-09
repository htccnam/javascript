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
