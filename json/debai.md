# JSON & Xử lý lỗi (Error Handling với try...catch)

## Phần 1: JSON (JavaScript Object Notation)

Cho object sau:

```javascript
const product1 = {
    name: "điện thoại",
    price: 15000000,
    quantity: 100,
    inStock: true,
};
```

1. Hãy chuyển đổi object `product1` thành chuỗi JSON và in ra kiểm tra kiểu dữ liệu (`typeof`).
2. Định dạng chuỗi JSON đẹp mắt (thêm tham số thụt lề 2 spaces trong `JSON.stringify`).
3. Chuyển ngược chuỗi JSON vừa tạo về thành Object JavaScript (`JSON.parse`) và in ra màn hình.
4. Điều gì xảy ra nếu cố parse một chuỗi JSON không hợp lệ? Thử parse chuỗi `"{ invalidJson }"` và bọc trong khối `try...catch`.

---

## Phần 2: Xử lý lỗi với try...catch...finally

### 📌 Lý thuyết cốt lõi
- **`try`**: Chứa đoạn mã có nguy cơ bắn ra lỗi (throw error).
- **`catch`**: Chỉ chạy khi và chỉ khi khối `try` xảy ra lỗi. Biến `error` nhận đối tượng lỗi (`error.name`, `error.message`).
- **`finally`**: Luôn luôn chạy cho dù khối `try` thành công hay xảy ra lỗi (ngay cả khi trong `try` hoặc `catch` có lệnh `return`).
- **Mối quan hệ return & finally**: Nếu khối `finally` chứa câu lệnh `return`, nó sẽ ghi đè (override) toàn bộ kết quả `return` hoặc lỗi bắn ra từ `try`/`catch`.

### 2.1. Dự đoán luồng chạy cơ bản

```javascript
function testBasic() {
    console.log("1. Bắt đầu hàm");
    try {
        console.log("2. Trong try");
    } catch (err) {
        console.log("3. Trong catch");
    } finally {
        console.log("4. Trong finally");
    }
    console.log("5. Kết thúc hàm");
}

testBasic();
```

### 2.2. Dự đoán luồng chạy khi có lỗi (Exception)
Nếu trong `try` có dòng ném lỗi `throw new Error("Lỗi giả lập")`, thứ tự log sẽ in ra như thế nào?

### 2.3. Return trong Finally ghi đè kết quả

```javascript
function checkReturnOverride() {
    try {
        return "Kết quả từ TRY";
    } catch (err) {
        return "Kết quả từ CATCH";
    } finally {
        return "Kết quả từ FINALLY"; // Ghi đè!
    }
}
console.log(checkReturnOverride());
```
Hãy giải thích vì sao kết quả lại là `"Kết quả từ FINALLY"`.
