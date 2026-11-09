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
const isDeleted = tags.delete("nodejs");
console.log("5a. Xóa 'nodejs' thành công?:", isDeleted); // true
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
