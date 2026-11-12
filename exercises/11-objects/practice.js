// ============================================
// ĐỐI TƯỢNG (OBJECT) - BÀI LÀM CỦA BẠN
// Đọc yêu cầu trong "debai.md" và làm vào các phần TODO bên dưới
// ============================================

// TODO 1: BÀI CAR (Dot & Bracket notation)
console.group("=== BÀI 1: CAR ===");
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
};
console.log("Car ban đầu:", car);

// 1.1. Thêm thuộc tính color: "Black" vào car bằng Dot notation:

// 1.2. Thêm thuộc tính warranty: 2 vào car bằng Bracket notation:

// 1.3. Cập nhật year thành 2024:

// 1.4. Xóa thuộc tính model khỏi car:

// 1.5. Dùng Bracket notation ([]) in thuộc tính brand ra màn hình:

console.groupEnd();

// TODO 2: BÀI RECTANGLE (Phương thức & từ khóa this)
console.group("\n=== BÀI 2: RECTANGLE & THIS ===");
// Tạo object rectangle có:
// - width: 10, height: 5
// - getArea(): trả về diện tích (width * height)
// - getPerimeter(): trả về chu vi ((width + height) * 2)
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// TODO 3: BÀI STUDENT SCORES (Object.keys, values, entries)
console.group("\n=== BÀI 3: STUDENT SCORES ===");
const studentScores = {
    math: 8.5,
    english: 7.5,
    physics: 9.0,
    chemistry: 8.0,
};

// 3.1. In ra mảng danh sách tất cả các môn học (Object.keys):

// 3.2. In ra mảng danh sách tất cả điểm số (Object.values):

// 3.3. Dùng reduce tính điểm trung bình (kết quả: 8.25):

// 3.4. In danh sách theo định dạng "Môn [Tên môn]: [Điểm] điểm" bằng 2 cách:
// - Cách 1: Vòng lặp for...of với Object.entries()

// - Cách 2: Phương thức forEach() của mảng

console.groupEnd();

// TODO 4: BÀI CONFIG (Chuyển đổi Object <-> Array)
console.group("\n=== BÀI 4: CONFIG ===");
const configArr = [
    ["theme", "dark"],
    ["language", "vi"],
    ["notifications", true],
];

// 4.1. Chuyển mảng configArr thành Object tên `config` (dùng Object.fromEntries):

// 4.2. Kiểm tra xem config có khóa "theme" không (dùng Object.hasOwn):

// 4.3. Thay đổi "theme" thành "light", sau đó chuyển config ngược lại thành Mảng (dùng Object.entries):

console.groupEnd();
