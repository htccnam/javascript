// =================================================================
// BÀI TẬP VỀ CHUỖI, NỐI CHUỖI & TEMPLATE LITERALS - LỜI GIẢI CHI TIẾT
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: KHAI BÁO CHUỖI & KÝ TỰ THOÁT (ESCAPE CHARACTERS)
// -----------------------------------------------------------------
console.group("=== PHẦN 1: KHAI BÁO & KÝ TỰ THOÁT ===");

// Bài 1.1: Trích dẫn lồng nhau
// Cách 1: Dùng nháy đơn bao ngoài -> Nháy kép bên trong không cần escape
const quoteSingle = 'Bác Hồ từng nói: "Không có gì quý hơn độc lập, tự do!"';
console.log("1.1a. Dùng nháy đơn:", quoteSingle);

// Cách 2: Dùng nháy kép bao ngoài -> Phải dùng \" để escape nháy kép bên trong
const quoteDouble = "Bác Hồ từng nói: \"Không có gì quý hơn độc lập, tự do!\"";
console.log("1.1b. Dùng nháy kép (escape \\”):", quoteDouble);

// Cách 3: Dùng backticks -> Chứa cả nháy đơn lẫn nháy kép thoải mái
const quoteBacktick = `Bác Hồ từng nói: "Không có gì quý hơn độc lập, tự do!"`;
console.log("1.1c. Dùng backticks:", quoteBacktick);

// Bài 1.2: In đường dẫn Windows
// Dùng \\ để in ra một ký tự gạch chéo ngược \
const windowsPath = "C:\\Users\\Admin\\Documents\\Javascript\\Project";
console.log("\n1.2. Đường dẫn Windows:", windowsPath);

// Bài 1.3: Định dạng văn bản với \n (xuống dòng) và \t (thụt lề tab)
const formattedText = "Danh sách môn học:\n\t1. JavaScript Cơ Bản\n\t2. HTML & CSS";
console.log("\n1.3. Văn bản định dạng với \\n và \\t:\n" + formattedText);

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: TOÁN TỬ NỐI CHUỖI & CẠM BẪY CỘNG SỐ
// -----------------------------------------------------------------
console.group("\n=== PHẦN 2: NỐI CHUỖI & ÉP KIỂU TỰ ĐỘNG ===");

// Bài 2.1: Dự đoán kết quả
console.log("--- 2.1. Phân tích kết quả ép kiểu ---");

// 1. 10 + 20 + "30"
// Chạy từ trái qua phải: 10 + 20 = 30 (cộng số), sau đó 30 + "30" = "3030" (nối chuỗi)
console.log('10 + 20 + "30"      =', 10 + 20 + "30"); // "3030"

// 2. "10" + 20 + 30
// "10" + 20 = "1020" (nối chuỗi), sau đó "1020" + 30 = "102030" (nối chuỗi tiếp)
console.log('"10" + 20 + 30      =', "10" + 20 + 30); // "102030"

// 3. "10" + (20 + 30)
// Ngoặc tròn ưu tiên tính trước: 20 + 30 = 50, sau đó "10" + 50 = "1050"
console.log('"10" + (20 + 30)    =', "10" + (20 + 30)); // "1050"

// 4. "100" - 20
// Toán tử trừ (-) KHÔNG có chức năng nối chuỗi, nên JS tự ép chuỗi "100" sang số 100: 100 - 20 = 80
console.log('"100" - 20          =', "100" - 20); // 80

// 5. "100" + -20
// Toán tử + gặp chuỗi "100" nên thực hiện nối chuỗi với số âm (-20) thành "100-20"
console.log('"100" + -20         =', "100" + -20); // "100-20"

// Bài 2.2: Sửa lỗi tính giỏ hàng
console.log("\n--- 2.2. Sửa lỗi tính tiền giỏ hàng ---");
let price = "150000"; // chuỗi từ input
let shippingFee = 30000;
let discount = 20000;

// Phân tích lỗi cũ:
// price + shippingFee = "150000" + 30000 = "15000030000" (nối chuỗi!)
// Sau đó "15000030000" - 20000 = 15000010000 (trừ số!)
console.log("❌ Kết quả sai ban đầu:", price + shippingFee - discount); // 15000010000

// Cách sửa: Chủ động ép kiểu `price` sang số (dùng Number(price) hoặc dấu +price)
let correctPrice = Number(price);
let total = correctPrice + shippingFee - discount;
console.log("✅ Kết quả đúng sau khi ép kiểu:", total.toLocaleString("vi-VN"), "VNĐ"); // 160.000 VNĐ

console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: TEMPLATE LITERALS & NỘI SUY CHUỖI
// -----------------------------------------------------------------
console.group("\n=== PHẦN 3: TEMPLATE LITERALS THỰC CHIẾN ===");

// Bài 3.1: Thẻ thông tin người dùng (User Card HTML)
const user = {
    fullName: "Nguyễn Văn Huy",
    age: 22,
    role: "Admin",
    isActive: true,
};

// Dùng Template Literals viết HTML nhiều dòng sạch sẽ, nhúng biểu thức ba ngôi
const userCardHtml = `
<div class="user-card">
    <h2>${user.fullName} (${user.age} tuổi)</h2>
    <p>Chức vụ: ${user.role}</p>
    <p>Trạng thái: ${user.isActive ? "Đang hoạt động" : "Tạm khóa"}</p>
</div>
`.trim();

console.log("3.1. User Card HTML sinh ra:\n" + userCardHtml);

// Bài 3.2: Tạo hóa đơn thanh toán chuyên nghiệp
const customerName = "Linh";
const productName = "Bàn phím cơ AKKO";
const unitPrice = 1200000;
const quantity = 2;
const vatPercent = 10;

// Tính toán các giá trị trước khi đưa vào template
const subTotal = unitPrice * quantity; // Tạm tính
const vatAmount = (subTotal * vatPercent) / 100; // Tiền thuế
const grandTotal = subTotal + vatAmount; // Tổng cộng

// Hàm phụ trợ format tiền tệ VNĐ
const formatVND = (amount) => amount.toLocaleString("vi-VN") + " VNĐ";

const invoice = `
========================================
           HÓA ĐƠN THANH TOÁN
========================================
Khách hàng: ${customerName}
Sản phẩm: ${productName}
Đơn giá: ${formatVND(unitPrice)}
Số lượng: ${quantity}
Tạm tính: ${formatVND(subTotal)}
Thuế VAT (${vatPercent}%): ${formatVND(vatAmount)}
----------------------------------------
TỔNG CỘNG: ${formatVND(grandTotal)}
========================================
Cảm ơn quý khách ${customerName} đã mua hàng!
`.trim();

console.log("\n3.2. Hóa đơn thanh toán:\n" + invoice);

console.groupEnd();
