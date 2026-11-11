# Bài Tập 12: JSON & Xử Lý Lỗi (Error Handling với try...catch) trong JavaScript

## Mục Lục
<a id="mục-lục"></a>

1. [Phần 1: JSON (JavaScript Object Notation)](#phần-1-json-javascript-object-notation)
2. [Phần 2: Xử Lý Lỗi Cơ Bản Với try...catch](#phần-2-xử-lý-lỗi-cơ-bản-với-trycatch)
3. [Phần 3: Luồng Chạy Khi Có Lỗi (Exception Throwing)](#phần-3-luồng-chạy-khi-có-lỗi-exception-throwing)
4. [Phần 4: Khối finally & Quy Tắc Return Ghi Đè (Override)](#phần-4-khối-finally--quy-tắc-return-ghi-đè-override)
5. [Phần 5: Bài Tập Ứng Dụng Thực Tế (Safe JSON Parsing)](#phần-5-bài-tập-ứng-dụng-thực-tế-safe-json-parsing)

---

## Phần 1: JSON (JavaScript Object Notation)
Cho object sau:
```javascript
const product1 = {
  name: "điện thoại",
  price: 15000000,
  quantity: 100,
  inStock: true
};
```
1. Hãy chuyển đổi object `product1` thành chuỗi JSON và in ra kiểm tra kiểu dữ liệu (`typeof`).
2. Định dạng chuỗi JSON đẹp mắt (thêm tham số thụt lề 2 spaces trong `JSON.stringify(product1, null, 2)`).
3. Chuyển ngược chuỗi JSON vừa tạo về thành Object JavaScript (`JSON.parse`) và in ra màn hình.
4. Thử parse chuỗi `"{ invalidJson }"` và bọc trong khối `try...catch` để tránh làm sập chương trình.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 2: Xử Lý Lỗi Cơ Bản Với try...catch
Dự đoán thứ tự log in ra màn hình khi chạy đoạn code sau:
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

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 3: Luồng Chạy Khi Có Lỗi (Exception Throwing)
Nếu trong khối `try` có câu lệnh ném lỗi:
```javascript
throw new Error("Lỗi giả lập kết nối cơ sở dữ liệu");
```
Hãy cho biết:
1. Đoạn code phía sau lệnh `throw` trong `try` có được thực thi không?
2. Khối `catch` nhận được thông tin gì từ đối tượng lỗi (`err.name`, `err.message`)?
3. Khối `finally` có luôn luôn chạy hay không?

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 4: Khối finally & Quy Tắc Return Ghi Đè (Override)
Dự đoán giá trị trả về của hàm sau và giải thích cặn kẽ vì sao:
```javascript
function checkReturnFlow() {
  try {
    return "Kết quả từ try";
  } catch (err) {
    return "Kết quả từ catch";
  } finally {
    return "Kết quả từ finally";
  }
}
console.log(checkReturnFlow());
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 5: Bài Tập Ứng Dụng Thực Tế (Safe JSON Parsing)
Viết một hàm tiện ích an toàn `safeJsonParse(jsonString, defaultValue = null)`:
- Nhận vào một chuỗi `jsonString` và giá trị mặc định `defaultValue`.
- Nếu parse thành công, trả về Object JavaScript.
- Nếu chuỗi JSON bị lỗi cú pháp, bắt lỗi bằng `try...catch`, in cảnh báo `console.warn` và trả về `defaultValue` một cách an toàn mà không làm crash ứng dụng.

[⬆️ Quay lại Mục lục](#mục-lục)
