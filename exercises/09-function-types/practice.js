// =================================================================
// BÀI TẬP 03: 3 LOẠI HÀM TRONG JAVASCRIPT
// File này dành cho bạn tự thực hành từ đầu.
// Hãy đọc yêu cầu trong "debai.md" và viết code vào các phần TODO bên dưới.
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: KHAI BÁO HÀM & RÚT GỌN CÚ PHÁP
// -----------------------------------------------------------------
console.group("=== PHẦN 1: KHAI BÁO & RÚT GỌN CÚ PHÁP ===");

// TODO 1.1: Định nghĩa tinhTong(a, b) bằng Function Declaration
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// TODO 1.2: Định nghĩa tinhHieu(a, b) bằng Function Expression (gán vào const)
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// TODO 1.3: Chuyển đổi sang Arrow Function rút gọn tối đa:
// a. tinhTich(a, b) -> bỏ {} và return:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// b. gapDoi(n) -> bỏ cả cặp ngoặc tròn () của tham số và return:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// c. taoUser(id, username) -> implicit return bọc trong ({ ... }):
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: KIỂM CHỨNG HOISTING & VÙNG CHẾT TẠM THỜI (TDZ)
// -----------------------------------------------------------------
console.group("\n=== PHẦN 2: HOISTING & TDZ ===");

// TODO 2.1: Gọi các hàm trước khi khai báo để kiểm chứng kết quả
// (Đã bọc sẵn try...catch để chương trình của bạn không bị dừng đột ngột)

console.log("--- 1. Kiểm tra chayThu1 (Declaration) ---");
try {
  // VIẾT CODE GỌI HÀM chayThu1() Ở ĐÂY:
} catch (err) {
  console.error("Lỗi:", err.name, "-", err.message);
}

function chayThu1() {
  console.log("✅ Thực thi hàm 1: Hoisted thành công!");
}

console.log("\n--- 2. Kiểm tra chayThu2 (Expression với var) ---");
try {
  // VIẾT CODE GỌI HÀM chayThu2() Ở ĐÂY:
} catch (err) {
  console.error("Lỗi:", err.name, "-", err.message);
  // TODO: Giải thích tại sao lại ném ra lỗi TypeError?
}

var chayThu2 = function () {
  console.log("Thực thi hàm 2");
};

console.log("\n--- 3. Kiểm tra chayThu3 (Arrow với const / TDZ) ---");
try {
  // VIẾT CODE GỌI HÀM chayThu3() Ở ĐÂY:
} catch (err) {
  console.error("Lỗi:", err.name, "-", err.message);
  // TODO: Giải thích tại sao lại ném ra lỗi ReferenceError?
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

console.log("Danh sách học sinh gốc:", students);

// TODO 3.1: Dùng .filter() + Arrow Function lọc học sinh đạt điểm đỗ (score >= 5.0)
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// TODO 3.2: Dùng .map() + Arrow Function tạo mảng tên viết hoa từ danh sách đỗ ở trên
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// TODO 3.3: Dùng .reduce() + Arrow Function 1 dòng tính tổng điểm cả lớp
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

console.groupEnd();
