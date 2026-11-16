// =================================================================
// BÀI TẬP 14: ỨNG DỤNG TOÁN TỬ ++ TIỀN TỐ & HẬU TỐ - BÀI LÀM CỦA BẠN
// Đọc yêu cầu trong "debai.md" và hoàn thiện các phần TODO bên dưới
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: CƠ CHẾ TRẢ VỀ TIỀN TỐ VS HẬU TỐ
// -----------------------------------------------------------------
console.group("=== PHẦN 1: CƠ CHẾ TRẢ VỀ TIỀN TỐ VS HẬU TỐ ===");

// TODO 1.1: Dự đoán kết quả của các biến a, b, c, d
// Ghi đáp án dự đoán của bạn (thay null) TRƯỚC khi chạy code:
const answer_1_1 = { a: null, b: null, c: null, d: null };
let a = 10;
let b = ++a;

let c = 10;
let d = c++;

console.log("Giá trị a:", a); // TODO: Dự đoán giá trị a
console.log("Giá trị b:", b); // TODO: Dự đoán giá trị b
console.log("Giá trị c:", c); // TODO: Dự đoán giá trị c
console.log("Giá trị d:", d); // TODO: Dự đoán giá trị d

// TODO 1.2: Phân tích biểu thức phức tạp
// Ghi đáp án dự đoán: result = ?, x cuối cùng = ? (thay null)
const answer_1_2 = { result: null, x: null };
let x = 5;
let result = ++x + x++ + ++x;
console.log("Giá trị x cuối cùng:", x);
console.log("Giá trị result:", result);

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

// TODO 2.1: Khởi tạo biến trackNumber = 0, duyệt qua playlist bằng for...of
// và dùng ++trackNumber để in ra: "Track 1: Bohemian Rhapsody", v.v.
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: GỠ LỖI CẠM BẪY TĂNG BIẾN 2 LẦN TRONG VÒNG LẶP FOR
// -----------------------------------------------------------------
console.group("=== PHẦN 3: GỠ LỖI CẠM BẪY TĂNG BIẾN 2 LẦN ===");

const students = ["An", "Bình", "Cường", "Dũng", "Em"];

// Đoạn code bị lỗi ban đầu (bị nhảy cóc và in undefined):
// for (let i = 0; i < students.length; i++) {
//     console.log(`${++i}. ${students[i]}`);
// }

// TODO 3.1: Viết lại bằng vòng lặp for chuẩn (dùng phép tính an toàn i + 1)
console.log("--- Cách 1: Sửa lại trong vòng lặp for ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 3.2: Viết lại bằng vòng lặp for...of kết hợp ++counter
console.log("--- Cách 2: Chuyển sang vòng lặp for...of với ++counter ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 4: AUTO-INCREMENT GENERATOR & TWO POINTERS
// -----------------------------------------------------------------
console.group("=== PHẦN 4: AUTO-INCREMENT GENERATOR & TWO POINTERS ===");

// TODO 4.1: Xây dựng hàm createOrderManager(prefix) sinh mã đơn hàng ORD-001, ORD-002...
function createOrderManager(prefix = "ORD") {
    let count = 0;

    return {
        generateOrder(customerName) {
            // TODO: Dùng ++count để sinh mã đơn hàng, trả về object
            return null;
        },
        getTotalOrders() {
            // TODO: Trả về tổng số đơn hàng hiện tại
            return count;
        }
    };
}

const myOrderManager = createOrderManager("ORD");
// Thử gọi hàm:
// console.log(myOrderManager.generateOrder("Nguyễn Văn A"));
// console.log(myOrderManager.generateOrder("Trần Thị B"));
// console.log("Tổng đơn hàng:", myOrderManager.getTotalOrders());

// TODO 4.2: Thuật toán kiểm tra mảng đối xứng với Two Pointers
function isSymmetricArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    // TODO: Dùng vòng lặp while (left < right) kết hợp arr[left++] và arr[right--]
    return false;
}

console.log("Mảng [1, 2, 3, 2, 1] đối xứng?:", isSymmetricArray([1, 2, 3, 2, 1]));
console.log("Mảng ['a', 'b', 'c', 'd'] đối xứng?:", isSymmetricArray(["a", "b", "c", "d"]));

console.groupEnd();
