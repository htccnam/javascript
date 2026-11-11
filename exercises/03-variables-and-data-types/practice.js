// ============================================
// BÀI TẬP 03: TỪ KHÓA KHAI BÁO (VAR, LET, CONST) & KIỂU DỮ LIỆU
// Đọc yêu cầu trong "debai.md" và làm vào các phần TODO bên dưới
// Chạy file bằng lệnh: npm run test:variables
// ============================================

// ============================================
// PHẦN 1: PHẠM VI (SCOPE) & TÁI KHAI BÁO
// ============================================
console.group("=== PHẦN 1: PHẠM VI (SCOPE) & TÁI KHAI BÁO ===");

// TODO 1.1: Tạo một khối lệnh {} chứa 3 biến:
// - var bienVar = "Tôi là var"
// - let bienLet = "Tôi là let"
// - const bienConst = "Tôi là const"
// Sau đó ra ngoài khối {}, in lần lượt 3 biến này.
// Bọc việc in bienLet và bienConst trong try...catch để không làm dừng chương trình khi gặp lỗi ReferenceError!
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 1.2: Kiểm chứng khai báo lại:
// - Khai báo var x = 10, rồi viết tiếp var x = 20 ngay sau đó và in ra x.
// - Viết dòng giải thích ngắn gọn bằng console.log vì sao let/const cấm khai báo lại.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();

// ============================================
// PHẦN 2: BẢN CHẤT CỦA CONST VỚI PRIMITIVE VS MẢNG/OBJECT
// ============================================
console.group("\n=== PHẦN 2: CONST VỚI PRIMITIVE VS MẢNG/OBJECT ===");

// TODO 2.1: Thử thách gán lại biến nguyên thủy (Primitive):
// - Khai báo const score = 100;
// - Dùng khối try...catch để thử gán score = 150 (hoặc score++) và in lỗi TypeError bắt được.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 2.2: Thao tác với mảng friend:
// Khai báo mảng ban đầu:
const friend = ["An", "Bình"];
console.log("Mảng ban đầu:", friend);

// a. Thêm "Cường" vào cuối mảng (dùng push):

// b. Thêm "Dũng" vào đầu mảng (dùng unshift):

// c. Sửa phần tử đầu tiên thành "Minh" (friend[0] = "Minh"):

// d. Xóa phần tử đầu tiên (dùng shift):

// e. Xóa phần tử cuối cùng (dùng pop):

// f. Xóa 1 phần tử tại vị trí index 1 (dùng splice):

// g. Bọc trong try...catch: Thử gán lại friend = ["Nam", "Lan"] để xem lỗi gì xảy ra:


console.groupEnd();

// ============================================
// PHẦN 3: 4 CẠM BẪY PHỔ BIẾN KHI DÙNG CONST
// ============================================
console.group("\n=== PHẦN 3: CẠM BẪY THƯỜNG GẶP VỚI CONST ===");

// TODO 3.1: Chứng minh const không làm mảng bất biến:
// Tạo const numbers = [1, 2, 3]; thêm số 4 vào mảng và in ra mảng sau khi thêm.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 3.2: Kiểm tra kiểu dữ liệu của Mảng:
// In ra typeof numbers (xem có phải 'object' không).
// In ra kết quả kiểm tra chuẩn bằng Array.isArray(numbers).
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();

// ============================================
// PHẦN 4: 7 KIỂU DỮ LIỆU NGUYÊN THỦY (PRIMITIVE TYPES)
// ============================================
console.group("\n=== PHẦN 4: 7 KIỂU DỮ LIỆU NGUYÊN THỦY ===");

// TODO 4.1: Khai báo 7 biến đại diện cho 7 kiểu nguyên thủy:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt (thêm đuôi n, vd: 1000n)
// 7. Symbol (dùng Symbol("id"))
// In ra giá trị và typeof của từng biến bằng console.log.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 4.2: Kiểm chứng tính bất biến (Immutability) của chuỗi:
// let greeting = "hello";
// Thử gán greeting[0] = "H";
// In greeting ra xem chuỗi có bị thay đổi không.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();
