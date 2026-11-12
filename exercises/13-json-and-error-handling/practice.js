// ============================================
// JSON & XỬ LÝ LỖI - BÀI LÀM CỦA BẠN
// Đọc yêu cầu trong "debai.md" và làm vào các phần TODO bên dưới
// ============================================

console.group("=== PHẦN 1: THAO TÁC VỚI JSON ===");

const product1 = {
    name: "điện thoại",
    price: 15000000,
    quantity: 100,
    inStock: true,
};

// TODO 1.1: Chuyển product1 thành chuỗi JSON và in kiểu dữ liệu (typeof)
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 1.2: Định dạng chuỗi JSON đẹp mắt với tham số thụt lề 2 spaces
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 1.3: Chuyển chuỗi JSON ngược về Object và in thuộc tính name
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 1.4: Thử parse chuỗi JSON lỗi "{ invalid: true }" và bọc trong try...catch
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();

console.group("\n=== PHẦN 2: TRY...CATCH...FINALLY ===");

// TODO 2.1: Viết hàm testBasic() minh họa luồng chạy của try...catch...finally khi không có lỗi
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 2.2: Viết hàm testWithError() ném ra Error trong try và bắt ở catch
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 2.3: Viết hàm minh họa câu lệnh return trong finally ghi đè kết quả của try/catch
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



console.groupEnd();
