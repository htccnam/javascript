// =================================================================
// BÀI TẬP 03: 3 LOẠI HÀM TRONG JAVASCRIPT - LỜI GIẢI CHI TIẾT
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: KHAI BÁO HÀM & RÚT GỌN CÚ PHÁP
// -----------------------------------------------------------------
console.group("=== PHẦN 1: KHAI BÁO & RÚT GỌN CÚ PHÁP ===");

// 1.1. Function Declaration (Hàm khai báo)
function tinhTong(a, b) {
    return a + b;
}
console.log("1.1a. Tinh tong 5 + 3 =", tinhTong(5, 3)); // 8

// 1.2. Function Expression (Hàm biểu thức)
const tinhHieu = function (a, b) {
    return a - b;
};
console.log("1.2a. Tinh hieu 5 - 3 =", tinhHieu(5, 3)); // 2

// 1.3. Arrow Function rút gọn tối đa:
// a. Bỏ {} và từ khóa return (Implicit Return)
const tinhTich = (a, b) => a * b;
console.log("1.3a. Tinh tich 5 * 3 =", tinhTich(5, 3)); // 15

// b. Bỏ cả cặp ngoặc tròn () khi chỉ có 1 tham số duy nhất
const gapDoi = n => n * 2;
console.log("1.3b. Gap doi so 4 =", gapDoi(4)); // 8

// c. Implicit Return một Object Literal (Bắt buộc bọc trong cặp ngoặc tròn `({ })`)
const taoUser = (id, username) => ({ id, username });
console.log("1.3c. Tao object user:", taoUser(101, "nam_nguyen"));
console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: KIỂM CHỨNG HOISTING & VÙNG CHẾT TẠM THỜI (TDZ)
// -----------------------------------------------------------------
console.group("\n=== PHẦN 2: HOISTING & TDZ ===");

// 2.1. chayThu1 là Function Declaration:
// Trình thông dịch JS 'hoist' toàn bộ định nghĩa hàm lên đầu phạm vi trước khi chạy.
console.log("--- 1. Kiểm tra chayThu1 (Declaration) ---");
try {
    chayThu1(); // ✅ Gọi thành công trước dòng khai báo!
} catch (err) {
    console.error("Lỗi:", err.name, "-", err.message);
}

function chayThu1() {
    console.log("✅ Thực thi hàm 1: Hoisted hoàn toàn thành công!");
}

// 2.2. chayThu2 là Function Expression khai báo bằng `var`:
// Biến `var chayThu2` được hoisted lên đầu nhưng giá trị khởi tạo là `undefined`.
// Thân hàm chưa được gán cho tới khi chạy tới dòng `var chayThu2 = ...`.
// Do đó, gọi `undefined()` sẽ văng lỗi TypeError: chayThu2 is not a function.
console.log("\n--- 2. Kiểm tra chayThu2 (Expression với var) ---");
try {
    chayThu2();
} catch (err) {
    console.error("❌ Bắt được lỗi:", err.name, "-", err.message);
    console.log(
        "💡 Giải thích: Biến `var` được hoisted với giá trị `undefined`. Gọi `undefined()` ném ra TypeError: chayThu2 is not a function.",
    );
}

var chayThu2 = function () {
    console.log("Thực thi hàm 2");
};

// 2.3. chayThu3 là Arrow Function khai báo bằng `const`:
// Biến `const chayThu3` nằm trong Vùng chết tạm thời (TDZ - Temporal Dead Zone).
// Bất kỳ hành động truy cập nào vào biến trước dòng khởi tạo đều ném ReferenceError.
console.log("\n--- 3. Kiểm tra chayThu3 (Arrow với const / TDZ) ---");
try {
    chayThu3();
} catch (err) {
    console.error("❌ Bắt được lỗi:", err.name, "-", err.message);
    console.log(
        "💡 Giải thích: `const/let` nằm trong TDZ trước khi dòng gán chạy. Truy cập trước ném ReferenceError: Cannot access before initialization.",
    );
}

const chayThu3 = () => {
    console.log("Thực thi hàm 3");
};

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: ỨNG DỤNG THỰC CHIẾN LÀM CALLBACK
// -----------------------------------------------------------------
console.group("\n=== PHẦN 3: CALLBACK VỚI ARROW FUNCTION ===");

const students = [
    { name: "An", score: 8.5 },
    { name: "Bình", score: 4.0 },
    { name: "Cường", score: 9.0 },
    { name: "Dũng", score: 5.5 },
];

// 3.1. Dùng .filter() lọc học sinh đạt điểm đỗ (score >= 5.0)
const passedStudents = students.filter(student => student.score >= 5.0);
console.log("3.1. Danh sách học sinh đỗ:", passedStudents);

// 3.2. Dùng .map() tạo mảng tên viết hoa từ danh sách đỗ
const upperNames = passedStudents.map(student => student.name.toUpperCase());
console.log("3.2. Tên học sinh đỗ (In hoa):", upperNames); // ["AN", "CƯỜNG", "DŨNG"]

// 3.3. Dùng .reduce() tính tổng điểm cả lớp chỉ với 1 dòng code
const totalScore = students.reduce((sum, s) => sum + s.score, 0);
console.log("3.3. Tổng điểm cả lớp:", totalScore); // 27
console.log("Điểm trung bình:", (totalScore / students.length).toFixed(2)); // 6.75

console.groupEnd();
