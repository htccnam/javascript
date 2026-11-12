// ============================================
// TRUTHY & FALSY - LỜI GIẢI CHI TIẾT
// ============================================

console.group("=== PHẦN 1: XÁC ĐỊNH TRUTHY / FALSY ===");

const values = [
    false,
    true,
    0,
    -0,
    0n, // BigInt zero
    1,
    -1,
    "",
    "hello",
    "0",
    "false",
    null,
    undefined,
    NaN,
    [],
    {},
    function () {},
    new Date(),
    // document.createElement("div") // Chỉ chạy trong browser, bỏ qua cho Node.js
];

console.log(
    "Duyệt qua từng giá trị, in: giá trị | typeof | Boolean(value) | Phân loại",
);
console.log(
    "-------------------------------------------------------------------",
);

values.forEach((val, index) => {
    const type = typeof val;
    const boolVal = Boolean(val);
    const classification = boolVal ? "TRUTHY ✅" : "FALSY ❌";

    // Format hiển thị giá trị đẹp hơn
    let displayVal;
    if (val === null) displayVal = "null";
    else if (val === undefined) displayVal = "undefined";
    else if (typeof val === "string") displayVal = `"${val}"`;
    else if (typeof val === "function") displayVal = "function() {}";
    else if (val instanceof Date) displayVal = "new Date()";
    else if (Array.isArray(val)) displayVal = "[]";
    else if (typeof val === "object" && val !== null) displayVal = "{}";
    else if (typeof val === "bigint") displayVal = "0n";
    else displayVal = String(val);

    console.log(
        `${index + 1}. ${displayVal.padEnd(20)} | ${type.padEnd(8)} | ${String(boolVal).padEnd(5)} | ${classification}`,
    );
});

console.log("\n📋 TỔNG KẾT 8 GIÁ TRỊ FALSY DUY NHẤT TRONG JS:");
console.log("1. false          - Boolean false");
console.log("2. 0              - Số 0 (kể cả -0, 0n)");
console.log('3. ""             - Chuỗi rỗng');
console.log("4. null           - Giá trị null");
console.log("5. undefined      - Giá trị undefined");
console.log("6. NaN            - Not a Number");
console.log("7. 0n             - BigInt zero");
console.log("8. document.all   - (Legacy, chỉ trong browser)");

console.log(
    "\n✅ TẤT CẢ GIÁ TRỊ KHÁC LÀ TRUTHY (kể cả [], {}, function, new Date())",
);
console.groupEnd();

// ============================================
// PHẦN 2: ÉP KIỂU NGẦM TRONG ĐIỀU KIỆN
// ============================================
console.group("=== PHẦN 2: ÉP KIỂU NGẦM (IMPLICIT COERCION) ===");

const testCases = [
    { code: '"hello"', val: "hello" },
    { code: "0", val: 0 },
    { code: "[]", val: [] },
    { code: "{}", val: {} },
    { code: "null", val: null },
    { code: "undefined", val: undefined },
    { code: "NaN", val: NaN },
    { code: '"0"', val: "0" },
    { code: '"false"', val: "false" },
    { code: "new Date()", val: new Date() },
];

testCases.forEach(({ code, val }) => {
    const result = val ? "Truthy" : "Falsy";
    const boolVal = Boolean(val);
    console.log(
        `if (${code.padEnd(12)}) → ${result.padEnd(6)} | Boolean() = ${boolVal} | Giải thích: ${getExplanation(val)}`,
    );
});

function getExplanation(val) {
    if (val === null) return "null là falsy";
    if (val === undefined) return "undefined là falsy";
    if (val === false) return "false là falsy";
    if (val === 0 || val === -0 || val === 0n)
        return "Số 0 (kể cả BigInt) là falsy";
    if (val === "") return "Chuỗi rỗng là falsy";
    if (val !== val) return "NaN là falsy (NaN !== NaN)"; // NaN check
    if (Array.isArray(val)) return "Mảng (kể cả rỗng) là object → truthy";
    if (typeof val === "object" && val !== null)
        return "Object (kể cả rỗng) là truthy";
    if (typeof val === "function") return "Function là object → truthy";
    if (val instanceof Date) return "Date object là truthy";
    if (typeof val === "string") return `Chuỗi không rỗng "${val}" là truthy`;
    if (typeof val === "number") return `Số khác 0 (${val}) là truthy`;
    if (typeof val === "bigint") return `BigInt khác 0 (${val}) là truthy`;
    return "Giá trị truthy";
}

console.groupEnd();

// ============================================
// PHẦN 3: TOÁN TỬ LOGIC &&, ||, !!
// ============================================
console.group("=== PHẦN 3: TOÁN TỬ LOGIC &&, ||, !! ===");

// 3.1
const a = "hello" && "world";
console.log(`3.1: "hello" && "world" = "${a}"`);
// Giải thích: && trả về giá trị cuối cùng nếu tất cả truthy

// 3.2
const b = "hello" && "";
console.log(`3.2: "hello" && "" = "${b}"`);
// Giải thích: && dừng ở giá trị falsy đầu tiên (""), trả về ""

// 3.3
const c = 0 && "world";
console.log(`3.3: 0 && "world" = ${c}`);
// Giải thích: 0 là falsy, && trả về ngay 0 (không evaluate "world")

// 3.4
const d = "" || "default";
console.log(`3.4: "" || "default" = "${d}"`);
// Giải thích: || trả về giá trị truthy đầu tiên ("default")

// 3.5
const e = "hello" || "default";
console.log(`3.5: "hello" || "default" = "${e}"`);
// Giải thích: "hello" truthy, || trả về ngay "hello" (short-circuit)

// 3.6
const f = null || undefined || "fallback";
console.log(`3.6: null || undefined || "fallback" = "${f}"`);
// Giải thích: null, undefined đều falsy, trả về "fallback"

// 3.7
const g = !!"hello";
console.log(`3.7: !! "hello" = ${g}`);
// Giải thích: ! "hello" = false, !! "hello" = true (ép kiểu thành boolean)

// 3.8
const h = !!0;
console.log(`3.8: !! 0 = ${h}`);
// Giải thích: ! 0 = true, !! 0 = false

// 3.9
const i = !![];
console.log(`3.9: !! [] = ${i}`);
// Giải thích: [] truthy, !! [] = true

// 3.10
const j = !!{};
console.log(`3.10: !! {} = ${j}`);
// Giải thích: {} truthy, !! {} = true

console.log("\n📖 GIẢI THÍCH CƠ CHẾ:");
console.log(
    "&& (AND): Trả về giá trị falsy đầu tiên, HOẶC giá trị cuối cùng nếu tất cả truthy",
);
console.log(
    "|| (OR) : Trả về giá trị truthy đầu tiên, HOẶC giá trị cuối cùng nếu tất cả falsy",
);
console.log("!! (Double NOT): Ép kiểu thành boolean primitive (true/false)");
console.log("   - !value: đảo ngược truthy/falsy → boolean");
console.log(
    "   - !!value: đảo ngược 2 lần → boolean gốc (true nếu truthy, false nếu falsy)",
);
console.groupEnd();

// ============================================
// PHẦN 4: ỨNG DỤNG THỰC TẾ
// ============================================
console.group("=== PHẦN 4: ỨNG DỤNG THỰC TẾ ===");

// 4.1: Hàm kiểm tra dữ liệu hợp lệ
function isValidInput(value) {
    // Kiểm tra: không phải null, undefined, NaN, chuỗi rỗng
    // Lưu ý: 0 coi là không hợp lệ theo yêu cầu bài toán
    if (value === null || value === undefined) return false;
    if (typeof value === "number" && (value === 0 || Number.isNaN(value)))
        return false;
    if (typeof value === "string" && value === "") return false;
    if (typeof value === "bigint" && value === 0n) return false;
    return true;
}

console.log("4.1: isValidInput()");
console.log(`  isValidInput("hello")  = ${isValidInput("hello")}  // true`);
console.log(`  isValidInput("")       = ${isValidInput("")}       // false`);
console.log(
    `  isValidInput(0)        = ${isValidInput(0)}        // false (0 coi là không hợp lệ)`,
);
console.log(`  isValidInput(42)       = ${isValidInput(42)}       // true`);
console.log(`  isValidInput(null)     = ${isValidInput(null)}     // false`);
console.log(`  isValidInput(undefined)= ${isValidInput(undefined)}// false`);
console.log(`  isValidInput(NaN)      = ${isValidInput(NaN)}      // false`);
console.log(
    `  isValidInput([])       = ${isValidInput([])}       // true (mảng rỗng là object)`,
);
console.log(`  isValidInput({})       = ${isValidInput({})}       // true`);

// 4.2: Gán giá trị mặc định với || và ??
console.log("\n4.2: Default values với || và ??");

const config = {
    theme: "dark",
    // language: "vi",  // thiếu
    // notifications: true, // thiếu
    // debug: false // thiếu
};

// Sử dụng ?? (nullish coalescing) - chỉ fallback khi null/undefined
// Giữ nguyên 0, "", false nếu có
const finalConfig = {
    theme: config.theme,
    language: config.language ?? "en",
    notifications: config.notifications ?? false,
    debug: config.debug ?? false,
};

console.log("config gốc:", config);
console.log("finalConfig:", finalConfig);

// So sánh || vs ??
console.log("\n📝 So sánh || vs ?? :");
const testVal = "";
console.log(
    `  "" || "default" = "${testVal || "default"}"  (|| coi "" là falsy → fallback)`,
);
console.log(
    `  "" ?? "default" = "${testVal ?? "default"}"  (??" coi "" là giá trị hợp lệ → giữ "")`,
);

const testVal2 = 0;
console.log(`  0 || 10 = ${testVal2 || 10}  (|| coi 0 là falsy → fallback)`);
console.log(
    `  0 ?? 10 = ${testVal2 ?? 10}  (??" coi 0 là giá trị hợp lệ → giữ 0)`,
);

// 4.3: Short-circuit evaluation trong render
console.log("\n4.3: Short-circuit render");

const user = { name: "An", isLoggedIn: true };
// const user = null; // Uncomment để test case 2

const message =
    user && user.isLoggedIn ? `Welcome ${user.name}` : "Please login";
console.log(`user = ${JSON.stringify(user)}`);
console.log(`message = "${message}"`);

// Test case 2: user = null
const user2 = null;
const message2 =
    user2 && user2.isLoggedIn ? `Welcome ${user2.name}` : "Please login";
console.log(`\nuser = null`);
console.log(`message = "${message2}"`);

console.groupEnd();

// ============================================
// PHẦN 5: SO SÁNH == VS ===
// ============================================
console.group("=== PHẦN 5: SO SÁNH == VS === (TYPE COERCION) ===");

const comparisons = [
    { expr: "0 == false", result: 0 == false },
    { expr: '"" == false', result: "" == false },
    { expr: '"0" == false', result: "0" == false },
    { expr: "null == undefined", result: null == undefined },
    { expr: "null == false", result: null == false },
    { expr: "undefined == false", result: undefined == false },
    { expr: "NaN == NaN", result: NaN == NaN },
    { expr: "[] == false", result: [] == false },
    { expr: '[] == ""', result: [] == "" },
    { expr: "{} == true", result: {} == true },
    // Strict equality
    { expr: "0 === false", result: 0 === false },
    { expr: '"" === false', result: "" === false },
    { expr: "null === undefined", result: null === undefined },
];

comparisons.forEach(({ expr, result }) => {
    console.log(`${expr.padEnd(20)} = ${result}`);
});

console.log("\n📖 GIẢI THÍCH:");
console.log(
    "== (Loose equality): Thực hiện TYPE COERCION (ép kiểu) trước khi so sánh",
);
console.log("  - false → 0, true → 1");
console.log('  - "" → 0, "0" → 0');
console.log("  - null == undefined → true (quy tắc đặc biệt)");
console.log("  - NaN == bất kỳ thứ gì → false (kể cả NaN == NaN)");
console.log('  - [] → "" → 0, {} → "[object Object]" → NaN');
console.log("");
console.log(
    "=== (Strict equality): KHÔNG ép kiểu, so sánh cả kiểu LÀN giá trị",
);
console.log("  - 0 === false → false (number !== boolean)");
console.log("  - null === undefined → false (null !== undefined)");
console.log("");
console.log(
    "⚠️  KHUYẾN NGHỊ: LUÔN DÙNG === TRỪ KHI CÓ LÝ DO RÕ RÀNG ĐỂ DÙNG ==",
);
console.log(
    "   Dùng == null / != null để check cả null VÀ undefined (idiom phổ biến)",
);
console.groupEnd();

// ============================================
// PHẦN 6: EDGE CASES & BEST PRACTICES
// ============================================
console.group("=== PHẦN 6: EDGE CASES & BEST PRACTICES ===");

// 6.1: Kiểm tra mảng rỗng
console.log("6.1: Kiểm tra mảng rỗng");
const arr1 = [];
const arr2 = [1, 2, 3];

console.log("arr1 = []");
console.log(
    `  arr1.length === 0     = ${arr1.length === 0}     // ✅ An toàn, rõ ràng`,
);
console.log(
    `  !arr1.length          = ${!arr1.length}          // ✅ An toàn, ngắn gọn (0 → false → !false = true)`,
);
console.log(
    `  arr1.length == 0      = ${arr1.length == 0}      // ⚠️ Dùng ==, nhưng length luôn là number → OK`,
);
console.log(
    `  Boolean(arr1.length)  = ${Boolean(arr1.length) === false}  // ✅ Đúng nhưng dài dòng`,
);

console.log("\narr2 = [1,2,3]");
console.log(`  arr2.length === 0     = ${arr2.length === 0}`);
console.log(`  !arr2.length          = ${!arr2.length}`);

console.log(
    "\n🏆 KẾT LUẬN: Cách 1 (length === 0) hoặc Cách 2 (!length) là tốt nhất",
);
// Cách 2 (!length) tận dụng: 0 → falsy → !0 = true, số > 0 → truthy → !true = false

// 6.2: Kiểm tra object rỗng
console.log("\n6.2: Kiểm tra object rỗng");
const obj1 = {};
const obj2 = { a: 1 };

console.log("obj1 = {}");
console.log(
    `  Object.keys(obj1).length === 0 = ${Object.keys(obj1).length === 0}  // ✅ Chuẩn, an toàn`,
);
console.log(
    `  JSON.stringify(obj1) === "{}"  = ${JSON.stringify(obj1) === "{}"}  // ⚠️ Chậm, phụ thuộc format`,
);
console.log(
    `  !Object.keys(obj1).length      = ${!Object.keys(obj1).length}      // ✅ Ngắn gọn`,
);

console.log("\nobj2 = {a:1}");
console.log(
    `  Object.keys(obj2).length === 0 = ${Object.keys(obj2).length === 0}`,
);
console.log(
    `  JSON.stringify(obj2) === "{}"  = ${JSON.stringify(obj2) === "{}"}`,
);
console.log(`  !Object.keys(obj2).length      = ${!Object.keys(obj2).length}`);

console.log(
    "\n🏆 KẾT LUẬN: Object.keys(obj).length === 0 hoặc !Object.keys(obj).length",
);

// 6.3: Boolean() vs !! vs new Boolean()
console.log("\n6.3: Boolean() vs !! vs new Boolean()");
const val = "hello";

console.log(
    `Boolean("${val}")     = ${Boolean(val)}     // typeof: ${typeof Boolean(val)} ✅ Boolean primitive`,
);
console.log(
    `!!"${val}"            = ${!!val}            // typeof: ${typeof !!val} ✅ Boolean primitive`,
);
console.log(
    `new Boolean("${val}") = ${new Boolean(val)} // typeof: ${typeof new Boolean(val)} ❌ OBJECT WRAPPER!`,
);
console.log(
    `new Boolean("${val}").valueOf() = ${new Boolean(val).valueOf()} // Cần .valueOf() để lấy primitive`,
);

console.log(
    "\n⚠️  QUAN TRỌNG: new Boolean() tạo OBJECT WRAPPER, không phải primitive!",
);
console.log(
    "   - typeof new Boolean(true) === 'object' (KHÔNG PHẢI 'boolean')",
);
console.log("   - new Boolean(false) trong if() vẫn là TRUTHY (vì object)!");
console.log("   - LUÔN DÙNG Boolean() HOẶC !! ĐỂ ÉP KIỂU");
console.groupEnd();

// ============================================
// PHẦN 7: THỬ THÁCH - HÀM TIỆN ÍCH
// ============================================
console.group("=== PHẦN 7: THỬ THÁCH - HÀM TIỆN ÍCH ===");

// 1. toBoolean(value) - chuyển thành boolean primitive
function toBoolean(value) {
    return !!value; // Hoặc Boolean(value)
}

// 2. getFirstTruthy(...args) - truthy đầu tiên
function getFirstTruthy(...args) {
    for (const arg of args) {
        if (arg) return arg; // Tận dụng truthy check
    }
    return null;
}

// 3. getLastTruthy(...args) - truthy cuối cùng
function getLastTruthy(...args) {
    let result = null;
    for (const arg of args) {
        if (arg) result = arg; // Ghi đè liên tục, cuối cùng giữ truthy cuối
    }
    return result;
}

// 4. coalesce(...args) - giống ?? nhưng dùng || (cho phép 0, "", false)
function coalesce(...args) {
    for (const arg of args) {
        if (arg !== null && arg !== undefined) return arg;
    }
    return null;
}

// TEST
console.log("7.1: toBoolean()");
console.log(`  toBoolean("hello") = ${toBoolean("hello")}  // true`);
console.log(`  toBoolean(0)       = ${toBoolean(0)}       // false`);
console.log(`  toBoolean([])      = ${toBoolean([])}      // true`);
console.log(`  toBoolean({})      = ${toBoolean({})}      // true`);
console.log(`  toBoolean(null)    = ${toBoolean(null)}    // false`);

console.log("\n7.2: getFirstTruthy()");
console.log(
    `  getFirstTruthy(null, 0, "", "hello", 42) = "${getFirstTruthy(null, 0, "", "hello", 42)}"  // "hello"`,
);

console.log("\n7.3: getLastTruthy()");
console.log(
    `  getLastTruthy(null, 0, "", "hello", 42) = ${getLastTruthy(null, 0, "", "hello", 42)}  // 42`,
);

console.log("\n7.4: coalesce() - giống ?? nhưng dùng logic ||");
console.log(
    `  coalesce(null, undefined, 0, "", "fallback") = ${coalesce(null, undefined, 0, "", "fallback")}  // 0 (giữ 0, "", false)`,
);
console.log(
    `  coalesce(null, undefined, "hello") = "${coalesce(null, undefined, "hello")}"  // "hello"`,
);
console.log(
    `  coalesce(null, undefined) = ${coalesce(null, undefined)}  // null`,
);

console.log("\n📖 GIẢI THÍCH CÁC HÀM:");
console.log(
    "toBoolean: !!value - ngắn gọn, hiệu quả, trả về boolean primitive",
);
console.log(
    "getFirstTruthy: Dùng for...of + if(arg) - tận dụng truthy check, dừng sớm (short-circuit)",
);
console.log(
    "getLastTruthy: Duyệt hết, ghi đè result khi truthy - cuối cùng giữ truthy cuối",
);
console.log(
    'coalesce: Check !== null && !== undefined - giống ?? operator, cho phép 0, "", false',
);
console.groupEnd();

console.log("\n============================================");
console.log("✅ HOÀN THÀNH TẤT CẢ 7 PHẦN TRUTHY/FALSY");
console.log("============================================");
