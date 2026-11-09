// ============================================
// JSON & ERROR HANDLING - LỜI GIẢI CHI TIẾT
// ============================================

// --------------------------------------------
// PHẦN 1: JSON (JavaScript Object Notation)
// --------------------------------------------
console.group("=== PHẦN 1: THAO TÁC VỚI JSON ===");

// Khai báo một Plain Object (không phải mảng)
const product1 = {
    name: "điện thoại",
    price: 15000000,
    quantity: 100,
    inStock: true,
};
console.log("1. Object gốc:", product1);
console.log("Kiểu dữ liệu của product1:", typeof product1); // object

// 1. Chuyển đổi Object thành chuỗi JSON
const jsonString = JSON.stringify(product1);
console.log("\n2. Chuỗi JSON (JSON.stringify):", jsonString);
console.log("Kiểu dữ liệu sau khi stringify:", typeof jsonString); // string

// 2. Chuyển đổi kèm định dạng đẹp mắt (indent = 2 spaces)
const prettyJson = JSON.stringify(product1, null, 2);
console.log("\n3. Chuỗi JSON format đẹp (indent 2 spaces):\n" + prettyJson);

// 3. Chuyển ngược chuỗi JSON thành JavaScript Object
const parsedObject = JSON.parse(jsonString);
console.log("\n4. Parse ngược lại thành Object (JSON.parse):", parsedObject);
console.log("Kiểu dữ liệu sau khi parse:", typeof parsedObject); // object
console.log("Truy cập thuộc tính name:", parsedObject.name);

// 4. Bắt lỗi khi parse chuỗi JSON không hợp lệ
console.log("\n5. Thử parse chuỗi JSON không hợp lệ:");
const malformedJson = "{ invalidJson: true }"; // Thiếu dấu ngoặc kép ở key
try {
    JSON.parse(malformedJson);
} catch (error) {
    console.error("❌ Bắt được lỗi khi parse JSON:", error.name, "-", error.message);
    console.log("💡 Luôn luôn bọc JSON.parse() trong try...catch khi dữ liệu đến từ bên ngoài!");
}
console.groupEnd();

// --------------------------------------------
// PHẦN 2: XỬ LÝ LỖI VỚI TRY...CATCH...FINALLY
// --------------------------------------------
console.group("\n=== PHẦN 2: TRY...CATCH...FINALLY ===");

// 2.1. Luồng chạy cơ bản khi không có lỗi
console.log("--- 2.1. Luồng chạy bình thường (không có lỗi) ---");
function testBasic() {
    console.log("1. Bắt đầu hàm");
    try {
        console.log("2. Trong khối try");
    } catch (err) {
        console.log("3. Trong khối catch (sẽ KHÔNG chạy)");
    } finally {
        console.log("4. Trong khối finally (luôn luôn chạy)");
    }
    console.log("5. Kết thúc hàm");
}
testBasic();

// 2.2. Luồng chạy khi xảy ra ngoại lệ (Exception)
console.log("\n--- 2.2. Luồng chạy khi có lỗi (throw Error) ---");
function testWithError() {
    console.log("1. Bắt đầu hàm");
    try {
        console.log("2. Trong khối try: chuẩn bị ném lỗi");
        throw new Error("Lỗi kết nối CSDL giả lập!");
        // Dòng code dưới đây sẽ không bao giờ được thực thi
        console.log("Dòng này bị bỏ qua");
    } catch (err) {
        console.log("3. Trong khối catch: đã bắt được lỗi ->", err.message);
    } finally {
        console.log("4. Trong khối finally: dọn dẹp tài nguyên (luôn chạy)");
    }
    console.log("5. Kết thúc hàm an toàn, chương trình không bị crash");
}
testWithError();

// 2.3. Return trong finally ghi đè kết quả
console.log("\n--- 2.3. Return trong finally ghi đè kết quả ---");
function checkReturnOverride() {
    try {
        return "Kết quả từ TRY";
    } catch (err) {
        return "Kết quả từ CATCH";
    } finally {
        // CẢNH BÁO: Không nên return trong finally trong thực tế!
        return "Kết quả từ FINALLY (ghi đè toàn bộ return trước đó)";
    }
}
console.log("Giá trị hàm trả về:", checkReturnOverride());
console.groupEnd();
