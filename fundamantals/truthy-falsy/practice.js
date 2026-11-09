// ============================================
// TRUTHY & FALSY - BÀI LÀM CỦA BẠN
// Đọc yêu cầu trong "truthy-falsy.md" và làm vào các phần TODO bên dưới
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
];

// TODO 1: Duyệt qua mảng `values` và in ra:
// - Giá trị
// - Kiểu dữ liệu (typeof)
// - Kết quả Boolean(value)
// - Phân loại (TRUTHY hay FALSY)
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();

// ============================================
// PHẦN 2: ÉP KIỂU NGẦM TRONG ĐIỀU KIỆN
// ============================================
console.group("\n=== PHẦN 2: ÉP KIỂU NGẦM TRONG ĐIỀU KIỆN ===");

// TODO 2: Hãy tự suy đoán kết quả (Truthy hay Falsy) rồi viết khối if/else để kiểm tra:
// 2.1. "hello"
// 2.2. 0
// 2.3. []
// 2.4. {}
// 2.5. null
// 2.6. undefined
// 2.7. NaN
// 2.8. "0"
// 2.9. "false"
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();
