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
const isDeleted = userRoles.delete("viewer");
console.log("6a. Xóa 'viewer' thành công?:", isDeleted); // true
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
