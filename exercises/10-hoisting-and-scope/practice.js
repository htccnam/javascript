// =================================================================
// BÀI TẬP 04: CƠ CHẾ HOISTING TRONG JAVASCRIPT
// File này dành cho bạn tự thực hành từ đầu.
// Hãy đọc yêu cầu trong "debai.md" và viết code vào các phần TODO bên dưới.
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: KHÁM PHÁ HOISTING VỚI BIẾN (var, let, const)
// -----------------------------------------------------------------
console.group("=== PHẦN 1: HOISTING VỚI BIẾN ===");

// TODO 1.1: Dự đoán và kiểm chứng giá trị của biến var trước khi gán
console.log("--- 1.1. Hoisting với var ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY (In soThuNhat trước và sau khi gán = 100):



// TODO 1.2: Kiểm chứng Vùng chết tạm thời (TDZ) với let và const
console.log("\n--- 1.2. Temporal Dead Zone (TDZ) với let và const ---");
try {
    // VIẾT CODE THỬ TRUY CẬP soThuHai (khai báo bằng let) Ở ĐÂY:

    let soThuHai = 200;
} catch (err) {
    console.error("Lỗi bắt được khi truy cập let:", err.name, "-", err.message);
}

try {
    // VIẾT CODE THỬ TRUY CẬP soThuBa (khai báo bằng const) Ở ĐÂY:

    const soThuBa = 300;
} catch (err) {
    console.error("Lỗi bắt được khi truy cập const:", err.name, "-", err.message);
}

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: FUNCTION DECLARATION VS FUNCTION EXPRESSION
// -----------------------------------------------------------------
console.group("\n=== PHẦN 2: FUNCTION DECLARATION VS EXPRESSION ===");

// TODO 2.1: Gọi Function Declaration trước dòng định nghĩa
console.log("--- 2.1. Gọi Function Declaration trước định nghĩa ---");
// VIẾT CODE GỌI HÀM chaoMung("Nam") Ở ĐÂY:


function chaoMung(ten) {
    console.log("Xin chào,", ten);
}

// TODO 2.2: Gọi Function Expression với var trước dòng gán
console.log("\n--- 2.2. Gọi Function Expression với var ---");
try {
    // VIẾT CODE GỌI HÀM tamBiet() Ở ĐÂY:

} catch (err) {
    console.error("Lỗi bắt được:", err.name, "-", err.message);
    // TODO: Giải thích tại sao ném ra lỗi TypeError?
}

var tamBiet = function () {
    console.log("Tạm biệt và hẹn gặp lại!");
};

// TODO 2.3: Gọi Function Expression với const (Arrow Function)
console.log("\n--- 2.3. Gọi Function Expression với const ---");
try {
    // VIẾT CODE GỌI HÀM henGapLai() Ở ĐÂY:

} catch (err) {
    console.error("Lỗi bắt được:", err.name, "-", err.message);
    // TODO: Giải thích tại sao ném ra lỗi ReferenceError?
}

const henGapLai = () => {
    console.log("Hẹn gặp lại bạn vào ngày mai!");
};

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: PHẠM VI HOISTING & THỬ THÁCH THỰC CHIẾN
// -----------------------------------------------------------------
console.group("\n=== PHẦN 3: PHẠM VI HOISTING & THỰC CHIẾN ===");

// TODO 3.1: Kiểm chứng "Đầu phạm vi" giữa Function Scope và Global Scope
console.log("--- 3.1. Hoisting trong phạm vi hàm (Function Scope) ---");

function chayUngDung() {
    console.log("=== Bắt đầu chạy ứng dụng ===");

    // TODO: Gọi hàm noiBo() bên trong hàm chayUngDung trước khi khai báo
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


    function noiBo() {
        console.log("✅ Hàm nội bộ được thực thi an toàn bên trong chayUngDung!");
    }
}

// Gọi hàm chayUngDung:
chayUngDung();

// Thử gọi noiBo() từ bên ngoài phạm vi hàm chayUngDung:
try {
    // VIẾT CODE THỬ GỌI noiBo() Ở ĐÂY:

} catch (err) {
    console.error("Lỗi khi gọi noiBo() từ bên ngoài:", err.name, "-", err.message);
}

// TODO 3.2: Thử thách "Tư duy như JS Engine"
// Đoạn code gốc:
//   console.log(diemSo);
//   var diemSo = 8.5;
//   thongBao();
//   function thongBao() { console.log("Điểm của bạn là:", diemSo); }
//   var diemSo = 10;
//   thongBao();
console.log("\n--- 3.2. Mô phỏng cách JS Engine sắp xếp bộ nhớ (Pha 1 & Pha 2) ---");
// VIẾT LẠI ĐOẠN CODE THEO TƯ DUY JS ENGINE DƯỚI ĐÂY:



console.groupEnd();
