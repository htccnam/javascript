// =================================================================
// BÀI TẬP 04: CƠ CHẾ HOISTING TRONG JAVASCRIPT - LỜI GIẢI CHI TIẾT
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: KHÁM PHÁ HOISTING VỚI BIẾN (var, let, const)
// -----------------------------------------------------------------
console.group("=== PHẦN 1: HOISTING VỚI BIẾN ===");

// 1.1. Hoisting với var:
// Trong Pha 1 (Creation Phase), biến var soThuNhat được hoist lên đầu và gán undefined.
// Đến Pha 2 (Execution Phase), khi chạy tới dòng `var soThuNhat = 100`, giá trị mới là 100.
console.log("--- 1.1. Hoisting với var ---");
console.log("Giá trị soThuNhat trước khi gán:", soThuNhat); // undefined
var soThuNhat = 100;
console.log("Giá trị soThuNhat sau khi gán:", soThuNhat); // 100

// 1.2. Temporal Dead Zone (TDZ) với let và const:
// let và const CÓ được hoisted, nhưng chúng nằm trong Vùng Chết Tạm Thời (TDZ).
// Bất kỳ thao tác đọc/ghi nào trước dòng khai báo đều ném lỗi ReferenceError.
console.log("\n--- 1.2. Temporal Dead Zone (TDZ) với let và const ---");
try {
    console.log(soThuHai);
    let soThuHai = 200;
} catch (err) {
    console.error("❌ Bắt được lỗi let:", err.name, "-", err.message);
    console.log("💡 Bản chất: let nằm trong TDZ, không thể truy cập trước dòng khởi tạo.");
}

try {
    console.log(soThuBa);
    const soThuBa = 300;
} catch (err) {
    console.error("❌ Bắt được lỗi const:", err.name, "-", err.message);
    console.log("💡 Bản chất: const cũng nằm trong TDZ tương tự let.");
}

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: FUNCTION DECLARATION VS FUNCTION EXPRESSION
// -----------------------------------------------------------------
console.group("\n=== PHẦN 2: FUNCTION DECLARATION VS EXPRESSION ===");

// 2.1. Function Declaration được hoisted toàn phần (cả tên và thân hàm)
console.log("--- 2.1. Gọi Function Declaration trước định nghĩa ---");
chaoMung("Nam"); // ✅ Chạy thành công: "Xin chào, Nam"

function chaoMung(ten) {
    console.log("✅ Xin chào,", ten);
}

// 2.2. Function Expression gán vào var:
// Biến tamBiet được hoist với giá trị undefined.
// Gọi `tamBiet()` tương đương `undefined()` -> ném lỗi TypeError!
console.log("\n--- 2.2. Gọi Function Expression với var ---");
try {
    tamBiet();
} catch (err) {
    console.error("❌ Bắt được lỗi:", err.name, "-", err.message);
    console.log("💡 Bản chất: Biến `tamBiet` mang giá trị `undefined`. Không thể thực thi `undefined()` như một hàm.");
}

var tamBiet = function () {
    console.log("Tạm biệt và hẹn gặp lại!");
};

// 2.3. Function Expression gán vào const (Arrow Function):
// Biến henGapLai nằm trong TDZ trước dòng khai báo -> ném lỗi ReferenceError!
console.log("\n--- 2.3. Gọi Function Expression với const ---");
try {
    henGapLai();
} catch (err) {
    console.error("❌ Bắt được lỗi:", err.name, "-", err.message);
    console.log("💡 Bản chất: Khai báo bằng const nằm trong TDZ -> Ném ReferenceError chứ chưa kịp xét kiểu hàm (TypeError).");
}

const henGapLai = () => {
    console.log("Hẹn gặp lại bạn vào ngày mai!");
};

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: PHẠM VI HOISTING & THỬ THÁCH THỰC CHIẾN
// -----------------------------------------------------------------
console.group("\n=== PHẦN 3: PHẠM VI HOISTING & THỰC CHIẾN ===");

// 3.1. Hoisting trong phạm vi hàm (Function Scope):
// Hàm noiBo() được khai báo bên trong chayUngDung, nên nó CHỈ được hoist lên đầu hàm chayUngDung.
console.log("--- 3.1. Hoisting trong phạm vi hàm (Function Scope) ---");

function chayUngDung() {
    console.log("=== Bắt đầu chạy ứng dụng ===");

    // Gọi hàm con TRƯỚC khi khai báo trong phạm vi hàm cha:
    noiBo(); // ✅ Thành công vì được hoist lên đầu phạm vi hàm chayUngDung

    function noiBo() {
        console.log("✅ Hàm nội bộ được thực thi an toàn bên trong chayUngDung!");
    }
}

// Gọi hàm ngoài phạm vi toàn cục:
chayUngDung();

// Thử gọi noiBo() từ bên ngoài phạm vi hàm chayUngDung:
try {
    noiBo(); // ❌ Lỗi ReferenceError: noiBo is not defined
} catch (err) {
    console.error("❌ Lỗi khi gọi noiBo() từ bên ngoài:", err.name, "-", err.message);
    console.log("💡 Giải thích: Hoisting chỉ đưa khai báo lên ĐẦU PHẠM VI CỦA NÓ (hàm chayUngDung). Bên ngoài không thể truy cập.");
}

// 3.2. Mô phỏng cách JS Engine tổ chức bộ nhớ (Thử thách tư duy)
console.log("\n--- 3.2. Mô phỏng cách JS Engine sắp xếp bộ nhớ (Pha 1 & Pha 2) ---");

// Cách viết gốc:
//   console.log(diemSo);
//   var diemSo = 8.5;
//   thongBao();
//   function thongBao() { console.log("Điểm của bạn là:", diemSo); }
//   var diemSo = 10;
//   thongBao();

// Cách JS Engine diễn giải tương đương:
// --- PHA 1: CREATION PHASE (Cấp phát bộ nhớ) ---
// 1. Function declaration thongBao được đưa lên đầu toàn phần
function moPhongThongBao() {
    console.log("Điểm mô phỏng là:", moPhongDiemSo);
}
// 2. Biến var moPhongDiemSo được cấp phát với undefined (khai báo trùng tên bị bỏ qua)
var moPhongDiemSo;

// --- PHA 2: EXECUTION PHASE (Thực thi từng dòng) ---
console.log("Mô phỏng 1 (trước khi gán):", moPhongDiemSo); // undefined
moPhongDiemSo = 8.5;
moPhongThongBao(); // In ra: 8.5
moPhongDiemSo = 10;
moPhongThongBao(); // In ra: 10

console.groupEnd();
