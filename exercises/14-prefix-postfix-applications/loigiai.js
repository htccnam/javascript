// =================================================================
// BÀI TẬP 14: ỨNG DỤNG TOÁN TỬ ++ TIỀN TỐ & HẬU TỐ - LỜI GIẢI CHI TIẾT
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: CƠ CHẾ TRẢ VỀ TIỀN TỐ VS HẬU TỐ
// -----------------------------------------------------------------
console.group("=== PHẦN 1: CƠ CHẾ TRẢ VỀ TIỀN TỐ VS HẬU TỐ ===");

// 1.1. Phân tích kết quả biến a, b, c, d
let a = 10;
let b = ++a; // ++a tăng a lên 11 trước, sau đó trả về 11 gán cho b

let c = 10;
let d = c++; // c++ trả về giá trị hiện tại là 10 gán cho d, sau đó c mới tăng lên 11

console.log("Giá trị a sau ++a:", a); // 11
console.log("Giá trị b nhận được:", b); // 11 (nhận giá trị mới sau khi tăng)
console.log("Giá trị c sau c++:", c); // 11
console.log("Giá trị d nhận được:", d); // 10 (nhận giá trị cũ trước khi tăng)

// Giải thích:
// - Cả a và c đều kết thúc với giá trị là 11 (vì toán tử ++ đều tăng biến thêm 1).
// - Điểm khác biệt là biến b nhận giá trị 11 (do tiền tố ++a tăng trước rồi trả về),
//   còn biến d nhận giá trị 10 (do hậu tố c++ trả về giá trị cũ trước rồi mới tăng).

// 1.2. Phân tích biểu thức phức tạp nhiều bước:
let x = 5;
let result = ++x + x++ + ++x;

// Bảng phân tích chi tiết từng toán tử từ trái qua phải:
// 1. ++x:
//    - x đang là 5, tăng x lên 6 trước.
//    - Trả về giá trị mới: 6.
//    - Lúc này x trong RAM = 6.
// 2. x++:
//    - x đang là 6, toán tử hậu tố trả về giá trị hiện tại: 6.
//    - Sau đó x trong RAM âm thầm tăng lên 7.
//    - Lúc này x trong RAM = 7.
// 3. ++x:
//    - x đang là 7, gặp tiền tố ++x nên tăng ngay x lên 8.
//    - Trả về giá trị mới: 8.
//    - Lúc này x trong RAM = 8.
// Tổng biểu thức: result = 6 + 6 + 8 = 20.

console.log("Giá trị x cuối cùng:", x); // 8
console.log("Giá trị result:", result); // 20

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: ỨNG DỤNG ĐÁNH SỐ THỨ TỰ DANH SÁCH VỚI FOR...OF
// -----------------------------------------------------------------
console.group("=== PHẦN 2: ĐÁNH SỐ THỨ TỰ VỚI FOR...OF ===");

const playlist = [
    "Bohemian Rhapsody",
    "Stairway to Heaven",
    "Hotel California",
    "Imagine",
    "Smells Like Teen Spirit"
];

// 2.1. Đánh số thứ tự bắt đầu từ 1 với for...of và tiền tố ++trackNumber
let trackNumber = 0;

for (const song of playlist) {
    // ++trackNumber tăng biến từ 0 lên 1 ở vòng đầu tiên,
    // và trả về ngay con số 1 cho chuỗi template literals.
    console.log(`Track ${++trackNumber}: ${song}`);
}

// 2.2. Nhận xét lý do không dùng trackNumber++:
// Nếu dùng trackNumber++ khi khởi tạo = 0, vòng lặp đầu tiên sẽ in ra:
// "Track 0: Bohemian Rhapsody" (sai yêu cầu đánh số từ 1).
// Dùng ++trackNumber vừa đúng chuẩn 1-based, vừa giữ biến ban đầu ở mốc 0 tự nhiên.

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: GỠ LỖI CẠM BẪY TĂNG BIẾN 2 LẦN TRONG VÒNG LẶP FOR
// -----------------------------------------------------------------
console.group("=== PHẦN 3: GỠ LỖI CẠM BẪY TĂNG BIẾN 2 LẦN ===");

const students = ["An", "Bình", "Cường", "Dũng", "Em"];

// 3.1. Sửa lỗi Cách 1: Giữ nguyên for truyền thống
// Dùng phép tính an toàn (i + 1) để lấy số thứ tự hiển thị mà KHÔNG làm thay đổi biến i
console.log("--- Cách 1: Vòng lặp for với (i + 1) ---");
for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i]}`);
}

// 3.2. Sửa lỗi Cách 2: Chuyển sang vòng lặp for...of kết hợp ++counter
// Tự quản lý hoàn toàn biến đếm counter bên ngoài, loại bỏ hoàn toàn nguy cơ nhảy cóc chỉ mục mảng
console.log("--- Cách 2: Vòng lặp for...of với ++counter ---");
let studentOrder = 0;
for (const student of students) {
    console.log(`${++studentOrder}. ${student}`);
}

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 4: AUTO-INCREMENT GENERATOR & TWO POINTERS
// -----------------------------------------------------------------
console.group("=== PHẦN 4: AUTO-INCREMENT GENERATOR & TWO POINTERS ===");

// 4.1. Hàm tạo bộ quản lý đơn hàng tự tăng (Closure Pattern)
function createOrderManager(prefix = "ORD") {
    let count = 0; // Biến private nằm trong phạm vi Closure

    return {
        generateOrder(customerName) {
            // Dùng ++count để đơn hàng đầu tiên luôn nhận số 1 (ORD-001)
            const orderNumber = ++count;
            const formattedNumber = String(orderNumber).padStart(3, "0");
            const orderId = `${prefix}-${formattedNumber}`;

            return {
                orderId: orderId,
                customerName: customerName,
                orderNumber: orderNumber,
                createdAt: new Date().toLocaleTimeString()
            };
        },
        getTotalOrders() {
            return count;
        }
    };
}

const shopManager = createOrderManager("SHOP");
console.log("Đơn hàng 1:", shopManager.generateOrder("Nguyễn Văn A"));
console.log("Đơn hàng 2:", shopManager.generateOrder("Trần Thị B"));
console.log("Đơn hàng 3:", shopManager.generateOrder("Lê Hoàng C"));
console.log("Tổng số đơn hàng đã tạo:", shopManager.getTotalOrders()); // 3

// 4.2. Thuật toán kiểm tra mảng đối xứng (Two Pointers)
function isSymmetricArray(arr) {
    // Nếu mảng rỗng hoặc có 1 phần tử thì luôn đối xứng
    if (!Array.isArray(arr) || arr.length <= 1) return true;

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // arr[left++] đọc phần tử tại left trước, rồi tăng left lên 1
        // arr[right--] đọc phần tử tại right trước, rồi giảm right đi 1
        if (arr[left++] !== arr[right--]) {
            return false; // Phát hiện cặp không đối xứng, dừng thuật toán sớm
        }
    }

    return true; // Tất cả các cặp đều khớp nhau
}

console.log("Mảng [1, 2, 3, 2, 1] đối xứng?:", isSymmetricArray([1, 2, 3, 2, 1])); // true
console.log("Mảng ['a', 'b', 'b', 'a'] đối xứng?:", isSymmetricArray(["a", "b", "b", "a"])); // true
console.log("Mảng ['a', 'b', 'c', 'd'] đối xứng?:", isSymmetricArray(["a", "b", "c", "d"])); // false

console.groupEnd();
