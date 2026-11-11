// ============================================
// BÀI TẬP 09: CẤU TRÚC DỮ LIỆU MAP & SET - LỜI GIẢI CHI TIẾT
// ============================================

// === PHẦN 1 -> 3: CẤU TRÚC DỮ LIỆU MAP ===
// ============================================
// MAP TRONG JAVASCRIPT - LỜI GIẢI CHI TIẾT
// ============================================

// --------------------------------------------
// BÀI 1: KHỞI TẠO VÀ THAO TÁC CƠ BẢN (CRUD)
// --------------------------------------------
console.group("=== BÀI 1: THAO TÁC CƠ BẢN VỚI MAP ===");

// 1. Tạo Map rỗng
const userRoles = new Map();
console.log("1. Map rỗng ban đầu:", userRoles);

// 2. Thêm phần tử bằng .set(key, value)
// .set() có thể gọi nối chuỗi (chaining)
userRoles
    .set("admin", "Toàn quyền quản trị")
    .set("editor", "Chỉnh sửa bài viết")
    .set("viewer", "Chỉ xem nội dung");
console.log("2. Map sau khi thêm các quyền:", userRoles);

// 3. Lấy giá trị bằng .get(key)
const editorRole = userRoles.get("editor");
console.log("3. Quyền của editor:", editorRole);

// 4. Kiểm tra sự tồn tại bằng .has(key)
console.log("4a. 'editor' có tồn tại?:", userRoles.has("editor")); // true
console.log("4b. 'moderator' có tồn tại?:", userRoles.has("moderator")); // false

// 5. Kiểm tra kích thước bằng thuộc tính .size
console.log("5. Tổng số quyền hiện có:", userRoles.size); // 3

// 6. Xóa phần tử bằng .delete(key)
const isRoleDeleted = userRoles.delete("viewer");
console.log("6a. Xóa 'viewer' thành công?:", isRoleDeleted); // true
console.log("6b. Map sau khi xóa:", userRoles);
console.log("6c. Kích thước sau khi xóa:", userRoles.size); // 2
console.groupEnd();

// --------------------------------------------
// BÀI 2: DÙNG OBJECT LÀM KEY TRONG MAP
// --------------------------------------------
console.group("\n=== BÀI 2: OBJECT LÀM KEY (ĐẶC QUYỀN CỦA MAP) ===");

const userA = { name: "Huy" };
const userB = { name: "Linh" };

const userPreferences = new Map();
userPreferences.set(userA, { theme: "dark", lang: "vi" });
userPreferences.set(userB, { theme: "light", lang: "en" });

console.log("Cấu hình của Huy (userA):", userPreferences.get(userA));
console.log("Cấu hình của Linh (userB):", userPreferences.get(userB));

// GIẢI THÍCH:
// Với Plain Object ({}), nếu bạn gán obj[userA] = ..., key sẽ bị tự động ép kiểu thành chuỗi "[object Object]".
// Nếu gán tiếp obj[userB] = ..., nó cũng thành key "[object Object]" và ghi đè mất của userA!
// Map giải quyết triệt để vấn đề này vì nó lưu key theo tham chiếu (reference identity).
console.groupEnd();

// --------------------------------------------
// BÀI 3: DUYỆT QUA MAP
// --------------------------------------------
console.group("\n=== BÀI 3: DUYỆT QUA MAP ===");

const studentGrades = new Map([
    ["Toán", 9.0],
    ["Văn", 8.0],
    ["Anh", 8.5],
]);

// 1. Duyệt for...of với entries (mặc định)
console.log("1. Duyệt for...of:");
for (const [subject, grade] of studentGrades) {
    console.log(`- Môn ${subject}: ${grade} điểm`);
}

// 2. Lấy danh sách keys (.keys())
const subjects = [...studentGrades.keys()];
console.log("\n2. Danh sách các môn học:", subjects);

// 3. Tính điểm trung bình (.values())
const grades = [...studentGrades.values()];
const averageGrade =
    grades.reduce((sum, g) => sum + g, 0) / studentGrades.size;
console.log("3. Điểm trung bình tất cả các môn:", averageGrade.toFixed(2));
console.groupEnd();

// --------------------------------------------
// BÀI 4: CHUYỂN ĐỔI GIỮA MAP, ARRAY VÀ OBJECT
// --------------------------------------------
console.group("\n=== BÀI 4: CHUYỂN ĐỔI DỮ LIỆU ===");

// 1. Map -> Mảng 2 chiều [[key, value], ...]
const mapToArray = [...studentGrades];
console.log("1. Chuyển Map thành Array:", mapToArray);

// 2. Map -> Plain Object
const mapToObject = Object.fromEntries(studentGrades);
console.log("2. Chuyển Map thành Plain Object:", mapToObject);

// 3. Plain Object -> Map
const originalObj = { host: "localhost", port: 3000, secure: false };
const objectToMap = new Map(Object.entries(originalObj));
console.log("3. Chuyển Plain Object thành Map:", objectToMap);
console.groupEnd();


// === PHẦN 4 -> 6: CẤU TRÚC DỮ LIỆU SET ===
// ============================================
// CẤU TRÚC DỮ LIỆU SET - LỜI GIẢI CHI TIẾT
// ============================================

// --------------------------------------------
// BÀI 1: THAO TÁC CƠ BẢN VỚI SET (CRUD)
// --------------------------------------------
console.group("=== BÀI 1: THAO TÁC CƠ BẢN VỚI SET ===");

// 1. Tạo Set rỗng
const tags = new Set();
console.log("1. Set rỗng ban đầu:", tags);

// 2. Thêm phần tử bằng .add()
// Chú ý: "javascript" được thêm 2 lần
tags.add("javascript");
tags.add("react");
tags.add("nodejs");
tags.add("javascript"); // Giá trị trùng lặp -> Tự động bị bỏ qua!

console.log("2. Set sau khi thêm các tag (không có giá trị trùng):", tags);

// 3. Kiểm tra kích thước bằng thuộc tính .size
console.log("3. Kích thước của Set (tags.size):", tags.size); // 3

// 4. Kiểm tra sự tồn tại bằng .has()
console.log("4a. 'react' có nằm trong Set?:", tags.has("react")); // true
console.log("4b. 'python' có nằm trong Set?:", tags.has("python")); // false

// 5. Xóa phần tử bằng .delete()
const isTagDeleted = tags.delete("nodejs");
console.log("5a. Xóa 'nodejs' thành công?:", isTagDeleted); // true
console.log("5b. Set sau khi xóa 'nodejs':", tags);

// 6. Xóa toàn bộ Set bằng .clear()
tags.clear();
console.log("6. Set sau khi gọi .clear():", tags);
console.log("Kích thước sau khi clear:", tags.size); // 0
console.groupEnd();

// --------------------------------------------
// BÀI 2: LỌC TRÙNG LẶP MẢNG (USE CASE THỰC TẾ)
// --------------------------------------------
console.group("\n=== BÀI 2: LỌC TRÙNG LẶP MẢNG BẰNG SET ===");

const visitorIds = [101, 102, 103, 101, 104, 102, 105, 101];
console.log("Mảng gốc (có ID trùng lặp):", visitorIds);
console.log("Tổng số lượt truy cập:", visitorIds.length); // 8

// 1. Kết hợp new Set() và toán tử Spread (...) để lọc trùng và trả về mảng mới
const uniqueVisitorIds = [...new Set(visitorIds)];
console.log("1. Mảng sau khi lọc trùng:", uniqueVisitorIds); // [101, 102, 103, 104, 105]

// 2. Đếm số lượng người dùng thực tế
console.log("2. Số người dùng thực tế đã truy cập:", uniqueVisitorIds.length); // 5
console.groupEnd();

// --------------------------------------------
// BÀI 3: CÁC PHÉP TOÁN TẬP HỢP CƠ BẢN
// --------------------------------------------
console.group("\n=== BÀI 3: CÁC PHÉP TOÁN TẬP HỢP ===");

const teamFrontend = new Set(["HTML", "CSS", "JavaScript", "React"]);
const teamBackend = new Set(["NodeJS", "JavaScript", "SQL", "Docker"]);

console.log("Kỹ năng Frontend:", [...teamFrontend]);
console.log("Kỹ năng Backend:", [...teamBackend]);

// 1. Phép Hợp (Union): Gộp tất cả kỹ năng của 2 team (tự động loại bỏ trùng)
const unionSkills = new Set([...teamFrontend, ...teamBackend]);
console.log("\n1. Phép Hợp (Union - Tất cả kỹ năng):", [...unionSkills]);

// 2. Phép Giao (Intersection): Kỹ năng mà CẢ HAI team đều có
const intersectionSkills = new Set(
    [...teamFrontend].filter((skill) => teamBackend.has(skill)),
);
console.log("\n2. Phép Giao (Intersection - Kỹ năng chung):", [...intersectionSkills]); // ["JavaScript"]

// 3. Phép Hiệu (Difference): Kỹ năng CHỈ Frontend có mà Backend không có
const differenceSkills = new Set(
    [...teamFrontend].filter((skill) => !teamBackend.has(skill)),
);
console.log("\n3. Phép Hiệu (Difference - Chỉ Frontend có):", [...differenceSkills]); // ["HTML", "CSS", "React"]

console.groupEnd();

