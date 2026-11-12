// ============================================================
// BÀI TẬP 03: TỪ KHÓA KHAI BÁO (VAR, LET, CONST) & KIỂU DỮ LIỆU
// ============================================================
// Lời giải mẫu chuẩn mực và giải thích chi tiết cơ chế hoạt động
// Chạy file bằng lệnh: npm run solution:variables
// hoặc: node exercises/03-variables-and-data-types/loigiai.js
// ============================================================

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CẤP ĐỘ 1 — CƠ BẢN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.group("=== BÀI 1: PHẠM VI (SCOPE) & TÁI KHAI BÁO ===");

// 1.1. Kiểm chứng Block Scope vs Function Scope
{
    var bienVar = "Tôi là var";
    let bienLet = "Tôi là let";
    const bienConst = "Tôi là const";
}

console.log("1. In biến var ngoài khối {}:", bienVar); // In thành công: "Tôi là var"
console.log("   💡 Giải thích: var chỉ có Function Scope, hoàn toàn KHÔNG có Block Scope ({}) nên bị rò rỉ ra ngoài!");

try {
    console.log("2. In biến let ngoài khối {}:", bienLet);
} catch (error) {
    console.log("   ❌ Bắt lỗi khi in biến let:", error.name, "-", error.message);
    console.log("   💡 Giải thích: let có Block Scope, biến tự động bị giải phóng khi thoát khỏi cặp ngoặc {}.");
}

try {
    console.log("3. In biến const ngoài khối {}:", bienConst);
} catch (error) {
    console.log("   ❌ Bắt lỗi khi in biến const:", error.name, "-", error.message);
    console.log("   💡 Giải thích: const cũng có Block Scope giống như let.");
}

// 1.2. Kiểm chứng việc Khai Báo Lại (Re-declaration)
var x = 10;
var x = 20; // Hợp lệ với var (rất nguy hiểm!)
console.log("\n4. Khai báo lại var x:", x); // 20
console.log("   💡 var cho phép khai báo lại vô tội vạ, dễ dẫn đến việc ghi đè biến trùng tên mà không hề có cảnh báo.");
console.log("   ✅ let và const cấm khai báo lại trong cùng một scope (ném ra SyntaxError ngay tại pha biên dịch).");

console.groupEnd();
console.log();

// ─────────────────────────────────────────────────────────────

console.group("=== BÀI 2: CONST VỚI PRIMITIVE VS MẢNG/OBJECT ===");

// 2.1. Thử thách với biến nguyên thủy
const score = 100;
try {
    score = 150; // Cố gắng gán lại biến const
} catch (error) {
    console.log("1. Lỗi khi gán lại biến const:", error.name, "-", error.message);
    console.log("   💡 Giải thích: Kiểu nguyên thủy (Number) lưu trực tiếp giá trị trong Stack. 'const' khóa chết giá trị này!");
}

// 2.2. Thao tác với mảng friend
const friend = ["An", "Bình"];
console.log("\n2. Mảng ban đầu:", friend);

// a. Thêm "Cường" vào cuối mảng
friend.push("Cường");
console.log("   a. push('Cường')        ->", friend);

// b. Thêm "Dũng" vào đầu mảng
friend.unshift("Dũng");
console.log("   b. unshift('Dũng')      ->", friend);

// c. Sửa phần tử đầu tiên thành "Minh"
friend[0] = "Minh";
console.log("   c. friend[0] = 'Minh'   ->", friend);

// d. Xóa phần tử đầu mảng
const removedFirst = friend.shift();
console.log(`   d. shift() (xóa '${removedFirst}')   ->`, friend);

// e. Xóa phần tử cuối cùng
const removedLast = friend.pop();
console.log(`   e. pop() (xóa '${removedLast}')       ->`, friend);

// f. Xóa 1 phần tử tại vị trí index 1
const spliced = friend.splice(1, 1);
console.log(`   f. splice(1, 1) (xóa '${spliced}') ->`, friend);

// g. Thử gán lại friend
try {
    friend = ["Nam", "Lan"];
} catch (error) {
    console.log("   g. ❌ Thử gán lại friend = [...]:", error.name, "-", error.message);
    console.log("   💡 Giải thích: const khóa địa chỉ tham chiếu (con trỏ) của mảng, chứ KHÔNG khóa các phần tử bên trong mảng!");
}

console.groupEnd();
console.log();

// ─────────────────────────────────────────────────────────────

console.group("=== BÀI 3: NHẬN DIỆN 8 KIỂU DỮ LIỆU & QUY ƯỚC ĐẶT TÊN ===");

// 3.1. Khai báo 8 biến đại diện cho 8 kiểu dữ liệu
const userName = "Nguyễn Văn Huy";             // 1. String
const userAge = 24;                            // 2. Number
const largeBalance = 9007199254740991n;        // 3. BigInt
const isAccountActive = true;                  // 4. Boolean
let uninitializedData;                         // 5. Undefined
const emptySlot = null;                        // 6. Null
const secretToken = Symbol("app_secret");      // 7. Symbol
const userProfile = { id: 1, role: "admin" };  // 8. Object

console.log("1. String    :", userName, "| typeof:", typeof userName);
console.log("2. Number    :", userAge, "| typeof:", typeof userAge);
console.log("3. BigInt    :", largeBalance.toString() + "n", "| typeof:", typeof largeBalance);
console.log("4. Boolean   :", isAccountActive, "| typeof:", typeof isAccountActive);
console.log("5. Undefined :", uninitializedData, "| typeof:", typeof uninitializedData);
console.log("6. Null      :", emptySlot, "| typeof:", typeof emptySlot);
console.log("   ⚠️ Lưu ý: typeof null ra 'object' là lỗi thiết kế lịch sử từ năm 1995!");
console.log("7. Symbol    :", secretToken.toString(), "| typeof:", typeof secretToken);
console.log("8. Object    :", JSON.stringify(userProfile), "| typeof:", typeof userProfile);

// 3.2. Chuẩn hóa quy ước đặt tên Clean Code
console.log("\nChuẩn hóa quy ước đặt tên:");
console.log("  ❌ let login = true;              -> ✅ let isLoggedIn = true; (Boolean nên bắt đầu bằng is/has/can)");
console.log("  ❌ let friends = { name: 'An' }; -> ✅ let friend = { name: 'An' }; (Object là một thực thể đơn -> dùng danh từ số ít)");
console.log("  ❌ let item = ['Áo', 'Quần'];    -> ✅ let items = ['Áo', 'Quần']; (Mảng chứa danh sách -> dùng danh từ số nhiều)");
console.log("  ❌ let calc = function() {};      -> ✅ let calculateTax = function() {}; (Hàm nên bắt đầu bằng động từ rõ nghĩa)");

console.groupEnd();
console.log();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CẤP ĐỘ 2 — TRUNG BÌNH
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.group("=== BÀI 4: 5 TÌNH HUỐNG GIÁ TRỊ UNDEFINED XUẤT HIỆN ===");

// Tình huống 1: Biến khai báo chưa gán giá trị
let unassignedVariable;
console.log("1. Biến khai báo chưa gán:", unassignedVariable);

// Tình huống 2: Hàm không có lệnh return
function calculateNoReturn(a, b) {
    const sum = a + b;
    // Quên return!
}
console.log("2. Hàm không có lệnh return:", calculateNoReturn(5, 10));

// Tình huống 3: Gọi hàm thiếu đối số
function calculateDiscount(price, discountRate) {
    return price * (1 - discountRate);
}
console.log("3. Gọi hàm thiếu đối số:", calculateDiscount(100000)); 
console.log("   💡 discountRate nhận giá trị undefined -> 1 - undefined = NaN -> phép tính ra NaN!");

// Tình huống 4: Truy cập thuộc tính không tồn tại trong Object
const laptop = { brand: "Dell", price: 20000000 };
console.log("4. Thuộc tính không tồn tại trong Object (laptop.color):", laptop.color);

// Tình huống 5: Truy cập index mảng không tồn tại
const fruitList = ["Táo", "Cam", "Xoài"];
console.log("5. Index không tồn tại trong mảng (fruitList[10]):", fruitList[10]);
console.log("   Index âm trong JavaScript (fruitList[-1]):", fruitList[-1]);
console.log("   💡 Khác với Python, JS không hỗ trợ cú pháp arr[-1] trực tiếp (hãy dùng fruitList.at(-1) nếu muốn lấy từ cuối).");

console.groupEnd();
console.log();

// ─────────────────────────────────────────────────────────────

console.group("=== BÀI 5: NULL VS UNDEFINED THỰC TẾ (GIỎ HÀNG) ===");

function checkCartStatus(cart) {
    if (cart === null) {
        return "🛒 Giỏ hàng chưa được khởi tạo (null — lập trình viên chủ động đánh dấu)";
    }
    if (cart === undefined) {
        return "❓ Trạng thái giỏ hàng không xác định (undefined — lỗi khởi tạo hoặc chưa truyền tham số)";
    }
    if (!cart.items || cart.items.length === 0) {
        return "📭 Giỏ hàng đang trống";
    }
    return `🛍️ Giỏ hàng có ${cart.items.length} sản phẩm: [${cart.items.join(", ")}]`;
}

function applyCoupon(price, couponCode) {
    // Dùng couponCode == null để bắt đồng thời cả null lẫn undefined một cách ngắn gọn
    if (couponCode == null) {
        return price; // Không áp mã, giữ nguyên giá
    }
    if (couponCode === "GIAM10") {
        return price * 0.9;
    }
    return `Mã '${couponCode}' không hợp lệ!`;
}

console.log(checkCartStatus(null));
console.log(checkCartStatus(undefined));
console.log(checkCartStatus({ items: [] }));
console.log(checkCartStatus({ items: ["iPhone 15", "Tai nghe Sony"] }));

console.log("\nÁp mã giảm giá:");
console.log("  - Giá 500.000 áp mã 'GIAM10' :", applyCoupon(500000, "GIAM10"), "VNĐ");
console.log("  - Giá 500.000 không truyền mã :", applyCoupon(500000, null), "VNĐ");
console.log("  - Giá 500.000 mã không hợp lệ:", applyCoupon(500000, "SALE99"));

console.groupEnd();
console.log();

// ─────────────────────────────────────────────────────────────

console.group("=== BÀI 6: CẠM BẪY ÉP KIỂU STRING VS NUMBER ===");

console.log("1. Phép cộng '+' có dính chuỗi (ghép chuỗi):");
console.log('   "5" + 3       =', "5" + 3);         // "53"
console.log('   "5" + 3 + 2   =', "5" + 3 + 2);     // "532" (đánh giá từ trái sang phải: "53" + 2)
console.log('   5 + 3 + "2"   =', 5 + 3 + "2");     // "82"  (5 + 3 = 8, 8 + "2" = "82")

console.log("\n2. Các phép tính số học khác ('-', '*', '/') tự ép sang Number:");
console.log('   "10" - 3      =', "10" - 3);        // 7
console.log('   "10" * 2      =', "10" * 2);        // 20
console.log('   "abc" - 1     =', "abc" - 1);       // NaN ("abc" không chuyển thành số hợp lệ được)

console.log("\n3. So sánh null vs undefined:");
console.log("   null == undefined  :", null == undefined);  // true  (So sánh lỏng lẻo coi cả 2 là đại diện cho rỗng)
console.log("   null === undefined :", null === undefined); // false (So sánh nghiêm ngặt: khác kiểu dữ liệu!)

console.groupEnd();
console.log();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CẤP ĐỘ 3 — THỰC CHIẾN / NÂNG CAO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.group("=== BÀI 7: PHÒNG KHÁM DR. JAVASCRIPT — CHẨN ĐOÁN 4 CA BỆNH KHÓ ===");

// 7.1. Bốn hàm chẩn đoán chuyên dụng của Dr. JavaScript
// Ca 1: Số hợp lệ (loại trừ cả NaN và Infinity)
function isRealNumber(val) {
    return typeof val === "number" && Number.isFinite(val);
}

// Ca 2: Null thuần túy (không dùng typeof vì bị bug ra "object")
function isPureNull(val) {
    return val === null;
}

// Ca 3: Mảng danh sách (không dùng typeof vì bị ra "object")
function isTrueArray(val) {
    return Array.isArray(val);
}

// Ca 4: Đối tượng thuần túy (Plain Object - loại trừ cả null và Array)
function isPureObject(val) {
    return typeof val === "object" && val !== null && !Array.isArray(val);
}

// 7.2. Hàm chẩn đoán toàn diện hồ sơ bệnh án
function diagnosePatient(patient) {
    if (isPureNull(patient)) return "null";
    if (isTrueArray(patient)) return "array";
    if (typeof patient === "number") {
        if (Number.isNaN(patient)) return "nan";
        if (!isFinite(patient)) return "infinity";
        return "number";
    }
    if (isPureObject(patient)) return "object";
    return typeof patient;
}

// Giữ getExactType làm alias tương thích
const getExactType = diagnosePatient;

// Danh sách các "bệnh nhân" tại phòng khám của Dr. JavaScript
const patients = [
    "Dr. JavaScript", 42, NaN, Infinity, true,
    undefined, null, [1, 2, 3], { name: "John", age: 30 },
    function greet() {}, 9007199254740991n, Symbol("patient_id")
];

console.log("🩺 KẾT QUẢ CHẨN ĐOÁN 4 CA BỆNH KHÓ:");
console.log("  1. Ca Number hợp lệ (42)     :", isRealNumber(42), "| (NaN):", isRealNumber(NaN));
console.log("  2. Ca Null (null)            :", isPureNull(null), "| ({}):", isPureNull({}));
console.log("  3. Ca Array ([1,2,3])        :", isTrueArray([1, 2, 3]), "| ({}):", isTrueArray({}));
console.log("  4. Ca Plain Object ({})      :", isPureObject({ a: 1 }), "| (null):", isPureObject(null), "| ([]):", isPureObject([]));

console.log("\n📋 HỒ SƠ BỆNH ÁN CỦA DR. JAVASCRIPT:");
patients.forEach((p, idx) => {
    let display = typeof p === "symbol" ? p.toString() : 
                  typeof p === "bigint" ? p.toString() + "n" :
                  typeof p === "number" ? String(p) :
                  typeof p === "function" ? "function(){}" : 
                  JSON.stringify(p) ?? String(p);
    console.log(`  Bệnh nhân ${String(idx + 1).padStart(2)}: ${display.padEnd(20)} -> Chẩn đoán: [${diagnosePatient(p)}]`);
});

console.groupEnd();
console.log();

// ─────────────────────────────────────────────────────────────

console.group("=== BÀI 8: HÀM XỬ LÝ DỮ LIỆU PHÒNG THỦ CALCULATEAGE() ===");

/**
 * Tính số tuổi phòng thủ (Defensive Programming).
 * Ngăn chặn tuyệt đối kết quả NaN và dữ liệu phi lý.
 */
function calculateAge(currentYear, birthYear) {
    // 1. Kiểm tra kiểu dữ liệu đầu vào
    if (typeof currentYear !== "number" || typeof birthYear !== "number") {
        return "Lỗi: Cả năm hiện tại và năm sinh đều phải là kiểu number!";
    }

    // 2. Kiểm tra tính hữu hạn (loại bỏ NaN và Infinity)
    if (!Number.isFinite(currentYear) || !Number.isFinite(birthYear)) {
        return "Lỗi: Giá trị truyền vào không được là NaN hoặc Infinity!";
    }

    // 3. Kiểm tra logic thực tế
    if (birthYear <= 0 || !Number.isInteger(birthYear)) {
        return "Lỗi: Năm sinh phải là số nguyên dương hợp lệ!";
    }
    if (currentYear < birthYear) {
        return `Lỗi: Năm hiện tại (${currentYear}) không thể nhỏ hơn năm sinh (${birthYear})!`;
    }

    // 4. Tính toán và trả về kết quả
    return currentYear - birthYear;
}

console.log("1. Trường hợp chuẩn (2024, 1995) :", calculateAge(2024, 1995), "tuổi");
console.log("2. Truyền chuỗi 'ABC' (2024, 'ABC'):", calculateAge(2024, "ABC"));
console.log("3. Truyền NaN (2024, NaN)          :", calculateAge(2024, NaN));
console.log("4. Năm sinh lớn hơn (2024, 2030)   :", calculateAge(2024, 2030));

console.groupEnd();
