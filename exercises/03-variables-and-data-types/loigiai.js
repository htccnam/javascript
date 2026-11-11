// ============================================
// BÀI TẬP 03: TỪ KHÓA KHAI BÁO (VAR, LET, CONST) & KIỂU DỮ LIỆU
// LỜI GIẢI CHI TIẾT & PHÂN TÍCH BẢN CHẤT
// Chạy file bằng lệnh: npm run solution:variables
// ============================================

// ============================================
// PHẦN 1: PHẠM VI (SCOPE) & TÁI KHAI BÁO
// ============================================
console.group("=== PHẦN 1: PHẠM VI (SCOPE) & TÁI KHAI BÁO ===");

// 1.1. Kiểm chứng Block Scope vs Function Scope
{
    var bienVar = "Tôi là var (Function Scope)";
    let bienLet = "Tôi là let (Block Scope)";
    const bienConst = "Tôi là const (Block Scope)";
}

// In ra bên ngoài khối lệnh {}:
console.log("1. In bienVar bên ngoài block {}:", bienVar); // Thành công!

try {
    console.log("2. In bienLet bên ngoài block {}:", bienLet);
} catch (error) {
    console.log("❌ Bắt được lỗi khi gọi bienLet ngoài block:", error.name, "-", error.message);
    console.log("💡 Giải thích: 'let' có Block Scope. Biến sẽ bị hủy khỏi bộ nhớ ngay khi khối {} kết thúc.");
}

try {
    console.log("3. In bienConst bên ngoài block {}:", bienConst);
} catch (error) {
    console.log("❌ Bắt được lỗi khi gọi bienConst ngoài block:", error.name, "-", error.message);
    console.log("💡 Giải thích: 'const' cũng có Block Scope giống 'let'.");
}

// 1.2. Khai báo lại (Re-declaration)
var x = 10;
var x = 20; // JavaScript cho phép var ghi đè thoải mái!
console.log("\nGiá trị của var x sau khi khai báo đè:", x); // 20
console.log("💡 Nguy cơ: 'var' cho phép khai báo lại không giới hạn -> Rất dễ vô tình ghi đè biến quan trọng mà không có cảnh báo.");

// Với let và const, nếu khai báo lại trong cùng phạm vi sẽ bị SyntaxError ngay lập tức!
console.log("💡 Trong cùng một scope: 'let' và 'const' cấm hoàn toàn việc khai báo lại trùng tên.");

console.groupEnd();

// ============================================
// PHẦN 2: BẢN CHẤT CỦA CONST VỚI PRIMITIVE VS MẢNG/OBJECT
// ============================================
console.group("\n=== PHẦN 2: CONST VỚI PRIMITIVE VS MẢNG/OBJECT ===");

// 2.1. Thử gán lại biến nguyên thủy (Primitive)
const score = 100;
console.log("Điểm ban đầu (Primitive Number):", score);

try {
    score = 150; // Thử gán lại
} catch (error) {
    console.log("❌ Lỗi khi gán lại score:", error.name, "-", error.message);
    console.log("💡 Bản chất: Với kiểu nguyên thủy, giá trị được lưu trực tiếp tại biến. const cấm gán lại biến -> Đóng băng hoàn toàn.");
}

// 2.2. Thao tác với mảng friend (Reference Type)
const friend = ["An", "Bình"];
console.log("\nMảng ban đầu:", friend);

// a. Thêm "Cường" vào cuối (push)
friend.push("Cường");
console.log("a. Sau khi push('Cường'):", friend);

// b. Thêm "Dũng" vào đầu (unshift)
friend.unshift("Dũng");
console.log("b. Sau khi unshift('Dũng'):", friend);

// c. Sửa phần tử đầu tiên thành "Minh"
friend[0] = "Minh";
console.log("c. Sau khi sửa friend[0] = 'Minh':", friend);

// d. Xóa phần tử đầu tiên (shift)
const firstRemoved = friend.shift();
console.log(`d. Sau khi shift() (đã xóa '${firstRemoved}'):`, friend);

// e. Xóa phần tử cuối cùng (pop)
const lastRemoved = friend.pop();
console.log(`e. Sau khi pop() (đã xóa '${lastRemoved}'):`, friend);

// f. Xóa 1 phần tử tại index 1 bằng splice
friend.splice(1, 1);
console.log("f. Sau khi splice(1, 1):", friend);

// g. Thử gán lại biến friend sang một mảng mới
try {
    friend = ["Nam", "Lan"];
} catch (error) {
    console.log("❌ Lỗi khi gán lại biến friend:", error.name, "-", error.message);
    console.log("🎯 CÂU CHỐT CẦN NHỚ: 'const' khóa CÁI TÊN BIẾN (địa chỉ trỏ đến mảng), KHÔNG KHÓA NỘI DUNG bên trong mảng!");
}

console.groupEnd();

// ============================================
// PHẦN 3: 4 CẠM BẪY PHỔ BIẾN KHI DÙNG CONST
// ============================================
console.group("\n=== PHẦN 3: CẠM BẪY THƯỜNG GẶP VỚI CONST ===");

// 3.1. Bẫy số 1: Nghĩ rằng const làm mảng bất biến
const numbers = [1, 2, 3];
numbers.push(4); // Hoàn toàn hợp lệ!
console.log("1. Mảng const sau khi push(4):", numbers);
console.log("   -> const không làm mảng bất biến! Muốn đóng băng nội dung cần dùng Object.freeze().");

// 3.2. Bẫy số 2: Gán lại biến const
try {
    const PI = 3.14;
    PI = 3.14159;
} catch (error) {
    console.log("2. Lỗi khi gán lại biến const:", error.name, "-", error.message);
}

// 3.3. Bẫy số 3: Khai báo const mà không khởi tạo giá trị
console.log("3. Khai báo 'const x;' không có giá trị sẽ ném cú pháp lỗi: SyntaxError: Missing initializer in const declaration");

// 3.4. Bẫy số 4: Nhầm lẫn typeof với Mảng
console.log("4. Kiểm tra typeof numbers:", typeof numbers); // 'object'
console.log("   -> typeof mảng là 'object' (vì Array kế thừa từ Object).");
console.log("   ✅ Cách kiểm tra mảng chuẩn xác 100%: Array.isArray(numbers) =", Array.isArray(numbers));

console.groupEnd();

// ============================================
// PHẦN 4: 7 KIỂU DỮ LIỆU NGUYÊN THỦY (PRIMITIVE TYPES)
// ============================================
console.group("\n=== PHẦN 4: 7 KIỂU DỮ LIỆU NGUYÊN THỦY ===");

const age = 22;                          // 1. Number
const fullName = "Nguyễn Văn Huy";        // 2. String
const isActive = true;                    // 3. Boolean
let unassignedVar;                        // 4. Undefined
const emptyData = null;                   // 5. Null
const bigNumber = 9007199254740991n;      // 6. BigInt
const uniqueId = Symbol("user_id");       // 7. Symbol

console.log("1. Number   :", age, "| typeof:", typeof age);
console.log("2. String   :", fullName, "| typeof:", typeof fullName);
console.log("3. Boolean  :", isActive, "| typeof:", typeof isActive);
console.log("4. Undefined:", unassignedVar, "| typeof:", typeof unassignedVar);
console.log("5. Null     :", emptyData, "| typeof:", typeof emptyData);
console.log("   💡 Lưu ý: typeof null ra 'object' là lỗi thiết kế lịch sử từ năm 1995 của JS, nhưng được giữ lại để tương thích ngược.");
console.log("6. BigInt   :", bigNumber, "| typeof:", typeof bigNumber);
console.log("7. Symbol   :", uniqueId.toString(), "| typeof:", typeof uniqueId);

// Kiểm chứng tính bất biến (Immutability) của Primitive
let greeting = "hello";
greeting[0] = "H"; // Thử sửa chữ 'h' thành 'H'
console.log("\nChuỗi sau khi cố gán greeting[0] = 'H':", greeting); // Vẫn là "hello"!
console.log("💡 Giải thích: Kiểu nguyên thủy là BẤT BIẾN (Immutable). Bạn không thể thay đổi từng phần tử trong ruột của nó!");

console.groupEnd();
