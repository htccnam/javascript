// =================================================================
// BÀI TẬP 06: TỔNG QUAN VỀ JAVASCRIPT & CÁC CÁCH VIẾT CODE - LỜI GIẢI CHI TIẾT
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: ĐẶC TÍNH ĐỘNG (DYNAMIC TYPING) & CASE SENSITIVITY
// -----------------------------------------------------------------
console.group("=== PHẦN 1: DYNAMIC TYPING & CASE SENSITIVITY ===");

// 1.1. Dynamic Typing với biến bienDong:
// Trong JavaScript, biến không gắn chặt với kiểu dữ liệu cố định.
// Kiểu dữ liệu thay đổi linh hoạt theo giá trị được gán lúc runtime.
console.log("--- 1.1. Dynamic Typing với biến bienDong ---");
let bienDong = 100;
console.log("Gán số nguyên:", bienDong, "| Kiểu dữ liệu:", typeof bienDong); // number

bienDong = "JavaScript không cần định kiểu trước";
console.log("Gán chuỗi text:", `"${bienDong}"`, "| Kiểu dữ liệu:", typeof bienDong); // string

bienDong = true;
console.log("Gán boolean:", bienDong, "| Kiểu dữ liệu:", typeof bienDong); // boolean

bienDong = { name: "Học JS", version: "ES6+" };
console.log("Gán object:", bienDong, "| Kiểu dữ liệu:", typeof bienDong); // object

bienDong = null;
console.log("Gán null:", bienDong, "| Kiểu dữ liệu:", typeof bienDong); // object
console.log("💡 Giải thích về typeof null: Kết quả in ra 'object' là một lỗi thiết kế lịch sử (bug) từ năm 1995 của JS. Tuy nhiên, nó không được sửa để đảm bảo tính tương thích ngược (backward compatibility) với hàng triệu trang web cũ.");

// 1.2. Phân biệt chữ hoa - chữ thường (Case Sensitivity):
console.log("\n--- 1.2. Phân biệt hoa - thường trong JavaScript ---");
let userName = "Alice";
let Username = "Bob";
let USERNAME = "Charlie";

console.log("userName (camelCase):", userName);
console.log("Username (PascalCase):", Username);
console.log("USERNAME (UPPERCASE):", USERNAME);

try {
    // Biến username (viết thường toàn bộ) chưa từng được khai báo
    console.log(username);
} catch (err) {
    console.error("❌ Bắt được lỗi:", err.name, "-", err.message);
    console.log("💡 Bản chất: Do JS phân biệt hoa - thường, 'username' là một định danh hoàn toàn xa lạ với 3 biến trên -> Ném ReferenceError vì biến chưa tồn tại trong bộ nhớ.");
}

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: CẠM BẪY ÉP KIỂU & PHÂN TÍCH 5 CÁCH VIẾT JS
// -----------------------------------------------------------------
console.group("\n=== PHẦN 2: ÉP KIỂU & PHÂN TÍCH 5 CÁCH VIẾT JS ===");

// 2.1. Kiểm chứng Type Coercion (Ép kiểu ngầm định):
console.log("--- 2.1. Kiểm chứng Type Coercion ---");

const ketQua1 = 10 + "20";
console.log("1. 10 + '20' =", `"${ketQua1}"`, "| Kiểu:", typeof ketQua1);
console.log("   👉 Giải thích: Toán tử + khi gặp một toán hạng chuỗi sẽ ưu tiên ép số 10 thành chuỗi '10' rồi nối chuỗi.");

const ketQua2 = "50" - 10;
console.log("2. '50' - 10 =", ketQua2, "| Kiểu:", typeof ketQua2);
console.log("   👉 Giải thích: Toán tử - chỉ dùng cho số học, nên chuỗi '50' bị ép ngầm về số 50 trước khi trừ.");

const ketQua3 = "abc" * 2;
console.log("3. 'abc' * 2 =", ketQua3, "| Kiểu:", typeof ketQua3);
console.log("   👉 Giải thích: JS cố ép 'abc' về số nhưng thất bại, trả về NaN (Not-a-Number). NaN vẫn thuộc kiểu 'number'!");

const ketQua4 = true + 5;
console.log("4. true + 5 =", ketQua4, "| Kiểu:", typeof ketQua4);
console.log("   👉 Giải thích: Giá trị boolean true được ép ngầm về số 1 (1 + 5 = 6). false sẽ là số 0.");

const ketQua5 = null + 10;
console.log("5. null + 10 =", ketQua5, "| Kiểu:", typeof ketQua5);
console.log("   👉 Giải thích: null được ép ngầm về giá trị số 0 trong phép tính số học (0 + 10 = 10).");

// 2.2. Phân tích 3 tình huống nhúng JS:
console.log("\n--- 2.2. Phân tích 3 tình huống nhúng JS ---");
console.log("1. Tình huống A (Website lớn 20 trang):");
console.log("   ✅ Giải pháp: Dùng FILE JAVASCRIPT RIÊNG BIỆT (.js External).");
console.log("   🎯 Lý do: Tách biệt hoàn toàn tầng Logic và Giao diện, tái sử dụng code giữa các trang và tận dụng tối đa Browser Cache để tải trang nhanh.");

console.log("\n2. Tình huống B (Debug lỗi nhanh trên trình duyệt):");
console.log("   ✅ Giải pháp: Dùng CONSOLE TRÌNH DUYỆT (DevTools F12).");
console.log("   🎯 Lý do: Cho phép gõ lệnh tương tác trực tiếp với DOM hiện tại, kiểm tra giá trị biến mà không cần sửa hay lưu lại file mã nguồn.");

console.log("\n3. Tình huống C (50 nút bấm dùng inline onclick):");
console.log("   ❌ Nhược điểm: Trộn lẫn mã HTML và JS, vi phạm nguyên tắc tách biệt trách nhiệm. Khi muốn thay đổi thông điệp alert, bạn phải sửa thủ công ở cả 50 chỗ, cực kỳ dễ sai sót và khó bảo trì.");

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: THỬ THÁCH THỰC CHIẾN & CHẨN ĐOÁN MÔI TRƯỜNG
// -----------------------------------------------------------------
console.group("\n=== PHẦN 3: THỰC CHIẾN & CHẨN ĐOÁN MÔI TRƯỜNG ===");

// 3.1. Xây dựng hàm detectEnvironment():
console.log("--- 3.1. Chẩn đoán môi trường thực thi ---");

function detectEnvironment() {
    // Dùng typeof để kiểm tra an toàn, không bị ReferenceError nếu biến toàn cục không tồn tại
    const hasWindow = typeof window !== "undefined";
    const hasDocument = typeof document !== "undefined";
    const hasProcess = typeof process !== "undefined";

    let environmentName = "Unknown (Không xác định)";

    if (hasWindow && hasDocument) {
        environmentName = "Browser (Trình duyệt Web)";
    } else if (hasProcess && process.versions && process.versions.node) {
        environmentName = `Node.js (Server/Terminal - v${process.versions.node})`;
    }

    return {
        environmentName,
        hasWindow,
        hasDocument,
        hasProcess,
    };
}

const envInfo = detectEnvironment();
console.log("Kết quả chẩn đoán môi trường:", envInfo);
console.log(`✅ Code đang chạy trên môi trường: ${envInfo.environmentName}`);

// 3.2. Refactor mô hình Event Listener chuẩn mực (chống spam click):
console.log("\n--- 3.2. Mô hình Event Listener chuẩn mực ---");

/**
 * Mô phỏng hàm thiết lập nút bấm an toàn và tách rời logic
 * @param {string} buttonName - Tên nút bấm
 * @param {Function} onSaveAction - Hàm callback thực hiện lưu
 */
function createSafeButtonHandler(buttonName, onSaveAction) {
    let isProcessing = false; // Cờ trạng thái chống spam click liên tục

    return function triggerClick() {
        if (isProcessing) {
            console.warn(`⏳ [${buttonName}] Đang xử lý yêu cầu trước đó, vui lòng đợi!`);
            return false;
        }

        isProcessing = true;
        console.log(`🚀 [${buttonName}] Bắt đầu thực thi lưu dữ liệu...`);

        // Thực thi logic
        onSaveAction();

        // Giả lập hoàn thành sau một khoảng thời gian
        isProcessing = false;
        console.log(`✅ [${buttonName}] Hoàn thành thành công!`);
        return true;
    };
}

// Chạy thử nghiệm mô hình:
const handleSave = createSafeButtonHandler("Nút Lưu", () => {
    console.log("   💾 [Database] Dữ liệu người dùng đã được ghi thành công vào bộ nhớ!");
});

handleSave();

console.groupEnd();
