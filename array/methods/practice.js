// ============================================
// PHƯƠNG THỨC XỬ LÝ MẢNG - BÀI LÀM CỦA BẠN
// Đọc yêu cầu trong "debai.md" và làm vào các phần TODO bên dưới
// ============================================

// TODO 1: BÀI FRIEND (push, pop, shift, unshift)
console.group("=== BÀI 1: FRIEND ===");
const friend = ["An", "Bình"];
console.log("Mảng ban đầu:", friend);

// 1.1. Thêm khách hàng "Cường" vào cuối hàng đợi:

// 1.2. Thêm khách hàng ưu tiên "Dũng" vào đầu hàng đợi:

// 1.3. Phục vụ khách hàng đầu tiên trong hàng (xóa khỏi hàng và in tên khách đó ra):

// 1.4. Xóa bạn ở cuối mảng và in tên bạn đó ra:

console.groupEnd();

// TODO 2: BÀI COLORS (splice)
console.group("\n=== BÀI 2: COLORS ===");
const colors = ["Red", "Green", "Blue", "Yellow"];
console.log("Mảng colors ban đầu:", colors);

// 2.1. Thay thế "Blue" bằng "Purple":

// 2.2. Chèn hai màu "Pink" và "Orange" vào giữa "Green" và "Purple":

console.groupEnd();

// TODO 3: BÀI PRODUCTS (filter, map)
console.group("\n=== BÀI 3: PRODUCTS ===");
const products = [
    { id: 1, name: "Laptop", price: 1500, category: "Tech" },
    { id: 2, name: "Phone", price: 800, category: "Tech" },
    { id: 3, name: "Shirt", price: 50, category: "Fashion" },
    { id: 4, name: "Headphone", price: 200, category: "Tech" },
];

// 3.1. Lọc ra danh sách sản phẩm thuộc category "Tech" có giá > 500:

// 3.2. Tạo mảng mới chỉ chứa tên các sản phẩm đã lọc ở trên dưới dạng in hoa (UPPERCASE):

console.groupEnd();

// TODO 4: BÀI CART (reduce)
console.group("\n=== BÀI 4: CART ===");
const cart = [
    { name: "Sách JS", price: 100, quantity: 2 },
    { name: "Bút", price: 10, quantity: 5 },
    { name: "Vở", price: 20, quantity: 3 },
];

// 4.1. Dùng reduce tính tổng giá trị hóa đơn (giá * số lượng) - Kết quả: 310:

// 4.2. Thống kê tổng số lượng mặt hàng trong giỏ (kết quả: 10):

console.groupEnd();

// TODO 5: KIỂM TRA ĐIỀU KIỆN DỮ LIỆU (some, every, includes)
console.group("\n=== BÀI 5: SCORES ===");
const scores = [8.5, 7.0, 9.2, 4.5, 6.8];

// 5.1. Kiểm tra xem có học sinh nào bị điểm khống (< 5.0) không? (kết quả: true)

// 5.2. Kiểm tra xem toàn bộ sinh viên có đạt >= 6.0 không? (kết quả: false)

// 5.3. Kiểm tra xem trong mảng có điểm 7.0 không? (kết quả: true)

console.groupEnd();

// TODO 6: LÀM PHẲNG MẢNG (flat)
console.group("\n=== BÀI 6: LÀM PHẲNG MẢNG ===");
const nested = [1, [2, [3, [4, 5]]]];

// Làm phẳng nested thành mảng 1 chiều [1, 2, 3, 4, 5]:

console.groupEnd();

// TODO 7: SẮP XẾP MẢNG SỐ (sort)
console.group("\n=== BÀI 7: SẮP XẾP SỐ ===");
const numbers = [40, 100, 1, 5, 25, 10];

// 7.1. Sắp xếp tăng dần:

// 7.2. Sắp xếp giảm dần:

console.groupEnd();
