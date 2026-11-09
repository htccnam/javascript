// ============================================
// HÀM (FUNCTIONS) - LỜI GIẢI CHI TIẾT
// ============================================

console.group("=== PHẦN 1: KHAI BÁO HÀM & ARROW FUNCTION ===");

// 1.1. Chuyển đổi sang Arrow Function ngắn gọn
// Khi hàm chỉ có 1 tham số, có thể bỏ ngoặc đơn ()
// Khi thân hàm chỉ có 1 biểu thức trả về, có thể bỏ ngoặc nhọn {} và từ khóa return (implicit return)
const tinhBinhPhuong = (n) => n * n;
console.log("1.1. Bình phương của 4 là:", tinhBinhPhuong(4)); // 16

// 1.2. Default Parameters
const chaoHoi = (name, greeting = "Xin chào") => `${greeting}, ${name}!`;
console.log("1.2a. Gọi đủ tham số:", chaoHoi("Nam", "Chào buổi sáng"));
console.log("1.2b. Dùng giá trị mặc định:", chaoHoi("An"));
console.groupEnd();

// ============================================
// PHẦN 2: HOISTING & SCOPE
// ============================================
console.group("\n=== PHẦN 2: HOISTING VỚI FUNCTION ===");

// 2.1. Phân tích kết quả Hoisting giữa Declaration và Expression
console.log("--- Phân tích 2.1: chayThu1() vs chayThu2() ---");

// chayThu1() là Function Declaration:
// Trình thông dịch JS 'hoist' toàn bộ định nghĩa hàm lên đầu scope trước khi chạy code.
// => Có thể gọi hàm TRƯỚC khi định nghĩa.
chayThu1(); // Chạy thành công: "Thực thi hàm 1"

function chayThu1() {
    console.log("Thực thi hàm 1 (Function Declaration - Hoisted hoàn toàn)");
}

// chayThu2 là Function Expression khai báo bằng `var`:
// `var chayThu2` được hoist lên đầu với giá trị khởi tạo ban đầu là `undefined`.
// Bản thân hàm ẩn danh gán cho nó CHƯA được gán cho đến khi chạy tới dòng gán.
// Do đó, tại thời điểm gọi chayThu2(), giá trị của biến là undefined => gọi undefined() sẽ văng lỗi TypeError!
try {
    chayThu2();
} catch (error) {
    console.error("Lỗi khi gọi chayThu2():", error.name, "-", error.message);
    console.log(
        "💡 Giải thích: Biến `var chayThu2` được hoisted nhưng giá trị là `undefined`. Gọi `undefined()` ném ra TypeError: chayThu2 is not a function.",
    );
}

var chayThu2 = function () {
    console.log("Thực thi hàm 2");
};

// 2.2. Hoisting với let / const (TDZ - Temporal Dead Zone)
console.log("\n--- Phân tích 2.2: Function Expression với const ---");
try {
    // chayThu3 được khai báo bằng const => nằm trong TDZ cho đến khi dòng khai báo được thực thi.
    // Truy cập trước khi khai báo sẽ ném ra ReferenceError thay vì TypeError!
    // @ts-ignore
    chayThu3();
} catch (error) {
    console.error("Lỗi khi gọi chayThu3():", error.name, "-", error.message);
    console.log(
        "💡 Giải thích: `const/let` nằm trong Temporal Dead Zone (TDZ). Truy cập trước khi khai báo văng ReferenceError: Cannot access 'chayThu3' before initialization.",
    );
}

const chayThu3 = function () {
    console.log("Thực thi hàm 3");
};

console.groupEnd();
