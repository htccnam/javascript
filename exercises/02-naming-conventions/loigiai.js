// =================================================================
// BÀI TẬP 05: QUY ƯỚC ĐẶT TÊN TRONG JAVASCRIPT - LỜI GIẢI CHI TIẾT
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: CHUẨN HÓA BIẾN BOOLEAN & DANH TỪ SỐ ÍT / SỐ NHIỀU
// -----------------------------------------------------------------
console.group("=== PHẦN 1: BIẾN BOOLEAN & DANH TỪ SỐ ÍT / SỐ NHIỀU ===");

// 1.1. Chuẩn hóa biến Boolean:
// - Đặt dưới dạng câu hỏi Yes/No với tiền tố is, has, can, should.
// - Tránh phủ định kép: Thay vì `notAvailable` (dễ gây nhầm lẫn khi if (!notAvailable)),
//   hãy đổi sang khẳng định `isAvailable` hoặc `isOutOfStock`.
console.log("--- 1.1. Chuẩn hóa biến Boolean ---");
const isLoggedIn = true; // Người dùng đã đăng nhập chưa?
const isAvailable = true; // Sản phẩm có sẵn để mua không? (thay thế notAvailable)
const canEdit = true; // Người dùng có quyền sửa không?
const hasCoupon = false; // Có mã giảm giá hay không?

console.log("Trạng thái đăng nhập:", isLoggedIn);
console.log("Còn hàng:", isAvailable);
console.log("Quyền chỉnh sửa:", canEdit);
console.log("Có áp dụng coupon:", hasCoupon);

// 1.2. Danh từ số ít, số nhiều và vòng lặp for...of:
// - Tên mảng dùng danh từ số nhiều (plural): studentScores
// - Từng phần tử trong vòng lặp dùng danh từ số ít (singular): score
console.log("\n--- 1.2. Danh từ số ít, số nhiều & Vòng lặp ---");
const studentScores = [8.5, 9.0, 7.5, 6.0];

for (const score of studentScores) {
    console.log("Điểm thành phần:", score);
}

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: CHUẨN HÓA TÊN HÀM, CLASS & HẰNG SỐ
// -----------------------------------------------------------------
console.group("\n=== PHẦN 2: TÊN HÀM, CLASS & HẰNG SỐ ===");

// 2.1. Cấu trúc Động từ + Tân ngữ (Verb + Noun) cho hàm:
// 1. fetchUserData(userId): Dùng fetch khi lấy dữ liệu từ server/API
function fetchUserData(userId) {
    return { id: userId, username: "nam_nguyen", role: "admin" };
}

// 2. isAdmin(user): Hàm kiểm tra trả về boolean nên bắt đầu bằng is/has
function isAdmin(user) {
    return user.role === "admin";
}

// 3. calculateCartTotal(cart): Dùng calculate cho các phép tính toán nghiệp vụ
function calculateCartTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.price, 0);
}

// 4. resetForm(): Dùng reset khi đưa trạng thái về ban đầu
function resetForm() {
    console.log("✅ Đã xóa dữ liệu form về mặc định!");
}

console.log("--- 2.1. Kiểm tra các hàm đã chuẩn hóa ---");
const user = fetchUserData(101);
console.log("Thông tin user tải về:", user);
console.log("User có phải là Admin không?:", isAdmin(user));
resetForm();

// 2.2. Phân loại hằng số (UPPER_SNAKE_CASE vs camelCase):
// - UPPER_SNAKE_CASE: Dành cho giá trị cấu hình cố định bất biến toàn cục.
// - camelCase: Dành cho biến const nhưng giá trị phụ thuộc vào runtime hoặc object có thể thay đổi.
console.log("\n--- 2.2. Phân loại hằng số ---");
const MAX_FILE_SIZE = 10485760; // 10MB - Cố định toàn cục
const API_TIMEOUT_MS = 5000; // 5000ms - Cố định toàn cục
const currentUser = { name: "Nam", role: "Developer" }; // Runtime object
const userInputTags = ["javascript", "coding"]; // Dữ liệu runtime

console.log("Giới hạn dung lượng upload (bytes):", MAX_FILE_SIZE);
console.log("Thời gian timeout mạng (ms):", API_TIMEOUT_MS);
console.log("User hiện tại:", currentUser.name);

// 2.3. Thiết kế Class Product và trường Private (#):
console.log("\n--- 2.3. Class Product và Private Field ---");

class Product {
    // Thuộc tính private thực thụ theo chuẩn ES2020+
    #warehouseCode;

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.#warehouseCode = Math.floor(Math.random() * 900000) + 100000;
    }

    // Phương thức trả về boolean
    isExpensive() {
        return this.price > 1000000;
    }

    // Getter an toàn để xem thông tin nội bộ (nếu cần)
    getWarehouseCode() {
        return `WH-${this.#warehouseCode}`;
    }
}

const keyboard = new Product("Bàn phím cơ AKKO", 1500000);
console.log("Tên sản phẩm:", keyboard.name);
console.log("Giá tiền:", keyboard.price.toLocaleString("vi-VN"), "VNĐ");
console.log("Có phải hàng cao cấp (>1tr)?:", keyboard.isExpensive());
console.log("Mã kho (qua getter):", keyboard.getWarehouseCode());

// Thử truy cập trực tiếp trường private bên ngoài class:
try {
    // Đoạn code dưới đây sẽ gây lỗi cú pháp nếu không dùng eval để test runtime
    eval("keyboard.#warehouseCode");
} catch (err) {
    console.log("🔒 Bảo mật thành công! Không thể truy cập #warehouseCode từ bên ngoài.");
}

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: THỬ THÁCH CODE REVIEW & REFACTORING THỰC CHIẾN
// -----------------------------------------------------------------
console.group("\n=== PHẦN 3: CODE REVIEW & REFACTORING THỰC CHIẾN ===");

// 3.1. Dọn rác mã nguồn:
// 4 Lỗi phát hiện từ đoạn code cũ:
// 1. Dùng tiếng Việt không dấu lẫn lộn: arr_ds_hang, ten_sp, gia, b_het_hang
// 2. Dùng tiền tố Hungarian Notation lỗi thời: arr_, b_
// 3. Đặt tên hàm vô nghĩa: proc(a) -> không ai hiểu hàm làm gì
// 4. Biến lặp và biến tích lũy tối nghĩa: tot, a
console.log("--- 3.1. Đoạn code sau khi Refactor Clean Code 100% ---");

const products = [
    { name: "Chuột không dây", price: 250000, isAvailable: true },
    { name: "Bàn phím cơ", price: 1500000, isAvailable: false },
];

function calculateAvailableTotal(items) {
    return items
        .filter(item => item.isAvailable)
        .reduce((total, item) => total + item.price, 0);
}

const totalAvailableAmount = calculateAvailableTotal(products);
console.log("Tổng tiền hàng có sẵn:", totalAvailableAmount.toLocaleString("vi-VN"), "VNĐ");

// 3.2. Module BankAccount chuẩn Clean Code:
console.log("\n--- 3.2. Module BankAccount Clean Code ---");

const MIN_BALANCE = 50000; // Hằng số toàn cục quy định số dư tối thiểu

class BankAccount {
    #balance;

    constructor(accountNumber, initialDeposit = 0) {
        this.accountNumber = accountNumber;
        this.#balance = Math.max(initialDeposit, 0);
    }

    // Kiểm tra tài khoản có đủ khả năng rút số tiền mong muốn không
    hasSufficientBalance(amount) {
        return this.#balance - amount >= MIN_BALANCE;
    }

    // Nạp tiền
    deposit(amount) {
        if (amount <= 0) {
            console.error("❌ Số tiền nạp phải lớn hơn 0!");
            return false;
        }
        this.#balance += amount;
        console.log(`✅ Nạp thành công: +${amount.toLocaleString("vi-VN")} VNĐ`);
        return true;
    }

    // Rút tiền
    withdraw(amount) {
        if (amount <= 0) {
            console.error("❌ Số tiền rút không hợp lệ!");
            return false;
        }
        if (!this.hasSufficientBalance(amount)) {
            console.error(`❌ Giao dịch thất bại! Số dư không được thấp hơn ${MIN_BALANCE.toLocaleString("vi-VN")} VNĐ`);
            return false;
        }
        this.#balance -= amount;
        console.log(`✅ Rút thành công: -${amount.toLocaleString("vi-VN")} VNĐ`);
        return true;
    }

    // Lấy số dư an toàn
    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount("VIB-88889999", 200000);
console.log("Số dư ban đầu:", myAccount.getBalance().toLocaleString("vi-VN"), "VNĐ");

myAccount.deposit(500000);
console.log("Số dư sau nạp:", myAccount.getBalance().toLocaleString("vi-VN"), "VNĐ");

myAccount.withdraw(620000); // Còn 80,000 >= 50,000 -> Hợp lệ
console.log("Số dư sau rút:", myAccount.getBalance().toLocaleString("vi-VN"), "VNĐ");

myAccount.withdraw(40000); // Thử rút quá hạn mức số dư tối thiểu (còn 40,000 < 50,000 -> Bị chặn)

console.groupEnd();
