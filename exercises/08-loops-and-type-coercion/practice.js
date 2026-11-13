/**
 * BÀI TẬP 08: ÉP KIỂU & CÁC CẤU TRÚC VÒNG LẶP TRONG JAVASCRIPT
 * File: practice.js - Dành cho bạn tự thực hành gõ code
 * 
 * Hướng dẫn chạy file:
 * - Chạy bằng Node.js: node exercises/08-loops-and-type-coercion/practice.js
 * - Chạy bằng lệnh npm: npm run test:loops
 */

// =========================================================================
// PHẦN 1: CẤP ĐỘ CƠ BẢN (ÉP KIỂU & TOÁN TỬ TĂNG GIẢM)
// =========================================================================

console.group("=== BÀI 1.1: ÉP KIỂU TƯỜNG MINH VS ÉP KIỂU NGẦM ĐỊNH ===");
{
    const rawAge = "25";
    const rawHeight = "175.5cm";
    const rawIsVip = 1;
    const rawEmpty = "";
    const rawNull = null;
    const rawUndefined = undefined;

    // TODO 1: Ép kiểu tường minh các biến trên theo yêu cầu đề bài
    // - Chuyển rawAge sang Number bằng Number() và bằng toán tử '+'
    // - Chuyển rawHeight sang Number bằng parseFloat() và Number()
    // - Chuyển rawIsVip sang Boolean bằng Boolean() và '!!'
    // - Ép rawNull và rawUndefined sang Number
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



    // TODO 2: In ra kết quả của các phép tính ép kiểu ngầm định:
    // "10" + 20, "10" - 5, "10" * "2", true + 1, false + "5"
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


}
console.groupEnd();

console.group("=== BÀI 1.2: PREFIX (++a) VS POSTFIX (a++) ===");
{
    let x = 10;
    let y = 10;

    // TODO 1: Thử nghiệm ++x (Prefix) và y++ (Postfix)
    // Gán let res1 = ++x; let res2 = y++; và in ra kết quả
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



    // TODO 2: Tính toán biểu thức phức tạp:
    // let n = 4;
    // let total = n++ + ++n - --n + n--;
    // In ra giá trị total và giá trị n cuối cùng
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


}
console.groupEnd();

// =========================================================================
// PHẦN 2: CẤP ĐỘ TRUNG BÌNH (LÀM CHỦ FOR, WHILE & DO-WHILE)
// =========================================================================

console.group("=== BÀI 2.1: VÒNG LẶP FOR & 3 DẠNG STATEMENT ===");
{
    // TODO 1: Viết vòng for (Block Statement) in các số chẵn từ 2 đến 10
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



    // TODO 2: Viết vòng for (Single Statement) in bảng cửu chương 5 x 1 đến 5 x 5
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



    // TODO 3: Dùng Empty Statement tính tổng từ 1 đến 100
    // let sum = 0;
    // for (...; ...; ...);
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


}
console.groupEnd();

console.group("=== BÀI 2.2: ĐIỀU KHIỂN LUỒNG VỚI BREAK & CONTINUE ===");
{
    const numbers = [12, 5, 8, -3, 19, 0, 44, -7, 26];

    // TODO 1: Dùng vòng for và continue tính tổng các số dương (> 0)
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



    // TODO 2: Dùng vòng for và break tìm số chẵn đầu tiên > 20
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


}
console.groupEnd();

console.group("=== BÀI 2.3: VÒNG LẶP WHILE - MÔ PHỎNG GIAO DỊCH ===");
{
    let balance = 500000;
    const feePerDay = 75000;
    let dayCount = 0;

    // TODO: Dùng vòng lặp while trừ phí từng ngày cho đến khi không đủ tiền
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


}
console.groupEnd();

console.group("=== BÀI 2.4: VÒNG LẶP DO-WHILE - TUNG XÚC XẮC ===");
{
    // TODO: Dùng vòng lặp do...while tung xúc xắc (1 đến 6) cho đến khi ra số 6
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


}
console.groupEnd();

// =========================================================================
// PHẦN 3: CẤP ĐỘ NÂNG CAO / THỰC CHIẾN (GIẢI THUẬT & LABEL)
// =========================================================================

console.group("=== BÀI 3.1: NHÃN ĐIỀU KHIỂN (LABELLED STATEMENTS) TRONG MA TRẬN ===");
{
    const mapGrid = [
        ["Đất", "Đất", "Rừng"],
        ["Đất", "KHO BÁU", "Đất"],
        ["Núi", "Đất", "Hồ nước"]
    ];

    // TODO: Dùng nhãn matrixScanner để thoát cả 2 vòng lặp khi gặp "KHO BÁU"
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


}
console.groupEnd();

console.group("=== BÀI 3.2: BỘ XỬ LÝ CHUỖI NHẬP LIỆU BẨN (SANITIZER & CALCULATOR) ===");
{
    const dirtyInputs = [" 150 ", "abc", "250.50px", "0", "-40", "   ", "90đ", null, undefined, "100"];

    // TODO: Lọc, ép kiểu sang số thực hợp lệ, bỏ qua số <= 0 và tính tổng
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


}
console.groupEnd();
