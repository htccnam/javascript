// ============================================================
// BÀI TẬP 03: TỪ KHÓA KHAI BÁO (VAR, LET, CONST) & KIỂU DỮ LIỆU
// ============================================================
// Đọc yêu cầu chi tiết trong "debai.md" và làm vào các phần TODO bên dưới.
// Chạy file bằng lệnh: npm run test:variables
// hoặc: node exercises/03-variables-and-data-types/practice.js
// ============================================================

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CẤP ĐỘ 1 — CƠ BẢN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.group("=== BÀI 1: PHẠM VI (SCOPE) & TÁI KHAI BÁO ===");

// TODO 1.1: Tạo một khối lệnh {} chứa 3 biến:
// - var bienVar = "Tôi là var"
// - let bienLet = "Tôi là let"
// - const bienConst = "Tôi là const"
// Ra ngoài khối {}, in lần lượt 3 biến này.
// Bọc việc in bienLet và bienConst trong try...catch để không làm dừng chương trình khi gặp lỗi ReferenceError!
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 1.2: Kiểm chứng khai báo lại:
// - Khai báo var x = 10, rồi viết tiếp var x = 20 ngay sau đó và in ra x.
// - Viết dòng giải thích ngắn gọn vì sao let/const cấm khai báo lại.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();
console.log();

// ─────────────────────────────────────────────────────────────

console.group("=== BÀI 2: CONST VỚI PRIMITIVE VS MẢNG/OBJECT ===");

// TODO 2.1: Thử thách gán lại biến nguyên thủy (Primitive):
// - Khai báo const score = 100;
// - Dùng khối try...catch để thử gán score = 150 (hoặc score++) và in lỗi TypeError bắt được.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 2.2: Thao tác với mảng friend:
const friend = ["An", "Bình"];
console.log("Mảng ban đầu:", friend);

// a. Thêm "Cường" vào cuối mảng (dùng push):
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// b. Thêm "Dũng" vào đầu mảng (dùng unshift):
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// c. Sửa phần tử đầu tiên thành "Minh" (friend[0] = "Minh"):
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// d. Xóa phần tử đầu tiên (dùng shift):
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// e. Xóa phần tử cuối cùng (dùng pop):
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// f. Xóa 1 phần tử tại vị trí index 1 (dùng splice):
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

// g. Bọc trong try...catch: Thử gán lại friend = ["Nam", "Lan"] để xem lỗi gì xảy ra:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();
console.log();

// ─────────────────────────────────────────────────────────────

console.group("=== BÀI 3: NHẬN DIỆN 8 KIỂU DỮ LIỆU & QUY ƯỚC ĐẶT TÊN ===");

// TODO 3.1: Khai báo 8 biến đại diện cho 8 kiểu dữ liệu:
// 1. String, 2. Number, 3. BigInt, 4. Boolean,
// 5. Undefined, 6. Null, 7. Symbol, 8. Object
// In ra giá trị và typeof của từng biến.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 3.2: Chuẩn hóa lại các biến sai quy ước đặt tên:
// let login = true;              -> Đổi thành: ???
// let friends = { name: "An" }; -> Đổi thành: ???
// let item = ["Áo", "Quần"];    -> Đổi thành: ???
// let calc = function() {};      -> Đổi thành: ???
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();
console.log();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CẤP ĐỘ 2 — TRUNG BÌNH
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.group("=== BÀI 4: 5 TÌNH HUỐNG GIÁ TRỊ UNDEFINED XUẤT HIỆN ===");

// TODO 4: Tái hiện và kiểm chứng 5 tình huống xuất hiện undefined:
// Tình huống 1: Biến khai báo chưa gán giá trị
// Tình huống 2: Hàm không có return
// Tình huống 3: Gọi hàm thiếu đối số
// Tình huống 4: Truy cập thuộc tính không tồn tại trong Object
// Tình huống 5: Truy cập index mảng không tồn tại
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();
console.log();

// ─────────────────────────────────────────────────────────────

console.group("=== BÀI 5: NULL VS UNDEFINED THỰC TẾ (GIỎ HÀNG) ===");

// TODO 5.1: Viết hàm checkCartStatus(cart)
// - null      -> "🛒 Giỏ hàng chưa được khởi tạo (null)"
// - undefined -> "❓ Trạng thái giỏ hàng không xác định (undefined)"
// - rỗng {}   -> "📭 Giỏ hàng đang trống"
// - có items  -> "🛍️ Giỏ hàng có X sản phẩm"
function checkCartStatus(cart) {
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

}

// TODO 5.2: Viết hàm applyCoupon(price, couponCode)
// - couponCode là null hoặc undefined -> không giảm giá, trả về price
// - "GIAM10" -> giảm 10%
// - khác -> thông báo mã không hợp lệ
function applyCoupon(price, couponCode) {
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

}

// Test (bỏ comment để thử):
// console.log(checkCartStatus(null));
// console.log(checkCartStatus(undefined));
// console.log(checkCartStatus({ items: [] }));
// console.log(checkCartStatus({ items: ["iPhone", "AirPods"] }));
// console.log("Áp mã GIAM10:", applyCoupon(100000, "GIAM10"));
// console.log("Áp mã null  :", applyCoupon(100000, null));

console.groupEnd();
console.log();

// ─────────────────────────────────────────────────────────────

console.group("=== BÀI 6: CẠM BẪY ÉP KIỂU STRING VS NUMBER ===");

// TODO 6: Dự đoán kết quả rồi bỏ comment để kiểm chứng:
// console.log('"5" + 3      =', "5" + 3);
// console.log('"5" + 3 + 2  =', "5" + 3 + 2);
// console.log('5 + 3 + "2"  =', 5 + 3 + "2");
// console.log('"10" - 3     =', "10" - 3);
// console.log('"10" * 2     =', "10" * 2);
// console.log('"abc" - 1    =', "abc" - 1);
// console.log('null == undefined  :', null == undefined);
// console.log('null === undefined :', null === undefined);

console.groupEnd();
console.log();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CẤP ĐỘ 3 — THỰC CHIẾN / NÂNG CAO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.group("=== BÀI 7: PHÒNG KHÁM DR. JAVASCRIPT — CHẨN ĐOÁN 4 CA BỆNH KHÓ ===");

// TODO 7.1: Viết 4 hàm chẩn đoán chuyên dụng cho Dr. JavaScript:

// Ca 1: Số hợp lệ (loại trừ cả NaN và Infinity)
function isRealNumber(val) {
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:
  // Gợi ý: typeof val === "number" && Number.isFinite(val)
}

// Ca 2: Null thuần túy (không dùng typeof vì bị bug ra "object")
function isPureNull(val) {
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:
  // Gợi ý: val === null
}

// Ca 3: Mảng danh sách (không dùng typeof vì bị ra "object")
function isTrueArray(val) {
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:
  // Gợi ý: Array.isArray(val)
}

// Ca 4: Đối tượng thuần túy (Plain Object - loại trừ cả null và Array)
function isPureObject(val) {
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:
  // Gợi ý: typeof val === "object" && val !== null && !Array.isArray(val)
}

// TODO 7.2: Viết hàm diagnosePatient(patient) trả về kết quả chẩn đoán chính xác:
function diagnosePatient(patient) {
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:
  // Sử dụng 4 hàm trên kết hợp typeof để chẩn đoán chính xác:
  // "string", "number", "nan", "infinity", "boolean", "undefined",
  // "null", "array", "object", "function", "bigint", "symbol"
}

// Danh sách các bệnh nhân tại phòng khám:
const patients = [
  "Dr. JavaScript", 42, NaN, Infinity, true,
  undefined, null, [1, 2, 3], { name: "John", age: 30 },
  function greet() {}, 9007199254740991n, Symbol("patient_id")
];

// Test chẩn đoán (bỏ comment để chạy):
// patients.forEach((p, idx) => {
//   console.log(`Bệnh nhân ${idx + 1}:`, p, "-> Chẩn đoán:", diagnosePatient(p));
// });

console.groupEnd();
console.log();

// ─────────────────────────────────────────────────────────────

console.group("=== BÀI 8: HÀM XỬ LÝ DỮ LIỆU PHÒNG THỦ CALCULATEAGE() ===");

// TODO 8: Viết hàm calculateAge(currentYear, birthYear) an toàn phòng thủ:
// - Kiểm tra cả 2 tham số phải là number hợp lệ (dùng typeof và Number.isFinite)
// - Kiểm tra logic birthYear > 0 và currentYear >= birthYear
// - Trả về số tuổi nếu hợp lệ, trả về thông báo lỗi cụ thể nếu không hợp lệ
function calculateAge(currentYear, birthYear) {
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

}

// Test (bỏ comment để kiểm tra):
// console.log("Tính tuổi hợp lệ (2024, 1995) :", calculateAge(2024, 1995));
// console.log("Tính tuổi sai kiểu (2024, 'ABC'):", calculateAge(2024, "ABC"));
// console.log("Tính tuổi sai logic (2024, 2030):", calculateAge(2024, 2030));

console.groupEnd();
