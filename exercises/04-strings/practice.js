// =================================================================
// BÀI TẬP 01: CHUỖI, NỐI CHUỖI & TEMPLATE LITERALS
// File này dành cho bạn tự thực hành từ đầu.
// Hãy đọc yêu cầu trong file "debai.md" và viết code vào các phần TODO bên dưới.
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: KHAI BÁO CHUỖI & KÝ TỰ THOÁT (ESCAPE CHARACTERS)
// -----------------------------------------------------------------
console.group("=== PHẦN 1: KHAI BÁO & KÝ TỰ THOÁT ===");

// TODO 1.1: Trích dẫn lồng nhau
// Câu cần in: Bác Hồ từng nói: "Không có gì quý hơn độc lập, tự do!"
// Yêu cầu 1: Dùng dấu nháy đơn ' ' bao ngoài
// VIẾT CODE CỦA BẠN:


// Yêu cầu 2: Dùng dấu nháy kép " " bao ngoài (dùng escape \")
// VIẾT CODE CỦA BẠN:


// Yêu cầu 3: Dùng backticks ` `
// VIẾT CODE CỦA BẠN:



// TODO 1.2: In đường dẫn Windows: C:\Users\Admin\Documents\Javascript\Project
// Chú ý không để bị mất các dấu gạch chéo ngược \
// VIẾT CODE CỦA BẠN:



// TODO 1.3: In đoạn văn bản 3 dòng có thụt lề bằng 1 chuỗi duy nhất kết hợp \n và \t
// Danh sách môn học:
// 	1. JavaScript Cơ Bản
// 	2. HTML & CSS
// VIẾT CODE CỦA BẠN:


console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: TOÁN TỬ NỐI CHUỖI & CẠM BẪY CỘNG SỐ
// -----------------------------------------------------------------
console.group("\n=== PHẦN 2: NỐI CHUỖI & ÉP KIỂU TỰ ĐỘNG ===");

// TODO 2.1: Dự đoán kết quả (Hãy tự đoán trước rồi console.log để kiểm chứng)
// 1. 10 + 20 + "30"      -> Dự đoán: ?
// 2. "10" + 20 + 30      -> Dự đoán: ?
// 3. "10" + (20 + 30)    -> Dự đoán: ?
// 4. "100" - 20          -> Dự đoán: ?
// 5. "100" + -20         -> Dự đoán: ?
// VIẾT CODE CỦA BẠN:



// TODO 2.2: Sửa lỗi tính tiền giỏ hàng (Bug Fix)
let price = "150000"; // chuỗi từ input HTML
let shippingFee = 30000; // số
let discount = 20000; // số

// Đoạn code bị lỗi của lập trình viên cũ:
// let total = price + shippingFee - discount;

// HÃY SỬA LẠI ĐỂ RA KẾT QUẢ ĐÚNG LÀ 160.000 VNĐ:
// VIẾT CODE CỦA BẠN:



console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: TEMPLATE LITERALS & NỘI SUY CHUỖI (THỰC CHIẾN)
// -----------------------------------------------------------------
console.group("\n=== PHẦN 3: TEMPLATE LITERALS THỰC CHIẾN ===");

// TODO 3.1: Tạo thẻ HTML User Card nhiều dòng bằng Template Literals
const user = {
    fullName: "Nguyễn Văn Huy",
    age: 22,
    role: "Admin",
    isActive: true,
};

// Yêu cầu: Tạo chuỗi HTML có chứa tên, tuổi, chức vụ và trạng thái (dùng toán tử ba ngôi ? :)
// VIẾT CODE CỦA BẠN:



// TODO 3.2: Tạo hóa đơn thanh toán chuyên nghiệp
const customerName = "Linh";
const productName = "Bàn phím cơ AKKO";
const unitPrice = 1200000;
const quantity = 2;
const vatPercent = 10; // 10%

// Yêu cầu:
// 1. Tính subTotal, vatAmount, grandTotal
// 2. Dùng Template Literals in hóa đơn định dạng đúng theo mẫu trong debai.md
// VIẾT CODE CỦA BẠN:



console.groupEnd();
