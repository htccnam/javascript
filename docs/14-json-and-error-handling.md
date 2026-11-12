# 14 - JSON & Xử Lý Lỗi Trong JavaScript (JSON & Exception Handling)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng một **hệ thống vận chuyển hàng hóa quốc tế**:
> - Hai quốc gia (ví dụ: trình duyệt Frontend viết bằng JS và máy chủ Backend viết bằng Java hoặc Python) không thể trực tiếp dùng chung biến nội bộ của nhau.
> - **JSON (JavaScript Object Notation)** chính là **container đóng gói tiêu chuẩn quốc tế**: Dữ liệu được "đóng hộp" thành văn bản thuần túy theo định dạng phổ quát (`JSON.stringify`), vượt đại dương qua mạng Internet, rồi được Backend "mở hộp" ra sử dụng (`JSON.parse`).
> - Nhưng nếu container bị hư hỏng (dữ liệu rách, sai cú pháp), thay vì để con tàu phát nổ (chương trình sập / crash), khối **`try...catch`** chính là **hệ thống phao cứu sinh an toàn**: Bắt lấy sự cố, kích hoạt phương án dự phòng (`catch`), và luôn luôn dọn dẹp sạch sẽ bến bãi (`finally`) trước khi tiếp tục hành trình!

---

## Mục Lục
<a id="mục-lục"></a>

1. [Định Dạng Dữ Liệu JSON](#1-định-dạng-dữ-liệu-json)
2. [Phương Thức JSON.stringify & JSON.parse](#2-phương-thức-json-stringify-json-parse)
3. [Cơ Chế Bắt Lỗi Với try...catch](#3-cơ-chế-bắt-lỗi-với-try-catch)
4. [Khối finally & Cạm Bẫy Return Ghi Đè (Override)](#4-khối-finally-cạm-bẫy-return-ghi-đè-override)
5. [Tự Tạo Và Bắn Lỗi Với throw new Error](#5-tự-tạo-và-bắn-lỗi-với-throw-new-error)
6. [Mô Hình Safe JSON Parsing Trong Thực Tế](#6-mô-hình-safe-json-parsing-trong-thực-tế)

---

<a id="1-định-dạng-dữ-liệu-json"></a>
## 1. Định Dạng Dữ Liệu JSON
JSON là định dạng văn bản dựa trên cú pháp Object của JavaScript:
- Key bắt buộc phải đặt trong dấu ngoặc kép `"key"`.
- Value chỉ có thể là: `string`, `number`, `boolean`, `null`, `array` hoặc `object`.
- **Không hỗ trợ:** `undefined`, `Function`, `Symbol`, `Date` (Date sẽ bị đổi thành chuỗi ISO string).

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="2-phương-thức-json-stringify-json-parse"></a>
## 2. Phương Thức JSON.stringify & JSON.parse

### 2.1. `JSON.stringify(value, replacer, space)`
Chuyển đổi JavaScript Object thành chuỗi JSON:
```javascript
const user = { name: "An", age: 20, isAdmin: false };

// Format thụt lề 2 spaces giúp dễ đọc
const jsonString = JSON.stringify(user, null, 2);
console.log(jsonString);
```

### 2.2. `JSON.parse(text)`
Chuyển đổi chuỗi JSON về lại JavaScript Object:
```javascript
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // "An"
```

> [!WARNING]
> Nếu chuỗi truyền vào `JSON.parse` không đúng cú pháp JSON hợp lệ, JS Engine sẽ lập tức ném ra ngoại lệ `SyntaxError` làm dừng toàn bộ chương trình nếu không được bọc trong `try...catch`!

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="3-cơ-chế-bắt-lỗi-với-try-catch"></a>
## 3. Cơ Chế Bắt Lỗi Với try...catch

```javascript
try {
  // Đoạn mã có nguy cơ bắn lỗi
  const data = JSON.parse("{ invalid json }");
  console.log("Dòng này sẽ bị bỏ qua nếu có lỗi ở trên!");
} catch (error) {
  // Chỉ chạy khi khối try xảy ra lỗi
  console.error("Đã bắt được lỗi:", error.name, error.message);
}
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="4-khối-finally-cạm-bẫy-return-ghi-đè-override"></a>
## 4. Khối finally & Cạm Bẫy Return Ghi Đè (Override)

Khối `finally` luôn luôn được thực thi trong mọi kịch bản:
- Dù `try` thành công.
- Dù `try` bị lỗi và nhảy vào `catch`.
- Dù trong `try` hoặc `catch` có lệnh `return`.

```javascript
function testFlow() {
  try {
    return "Từ Try";
  } catch (err) {
    return "Từ Catch";
  } finally {
    return "Từ Finally"; // Ghi đè toàn bộ return phía trước!
  }
}

console.log(testFlow()); // "Từ Finally"
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="5-tự-tạo-và-bắn-lỗi-với-throw-new-error"></a>
## 5. Tự Tạo Và Bắn Lỗi Với throw new Error
Bạn có thể chủ động ném ra ngoại lệ khi dữ liệu không hợp lệ:

```javascript
function checkAge(age) {
  if (age < 0) {
    throw new Error("Tuổi không thể là số âm!");
  }
  return `Tuổi hợp lệ: ${age}`;
}
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="6-mô-hình-safe-json-parsing-trong-thực-tế"></a>
## 6. Mô Hình Safe JSON Parsing Trong Thực Tế
Trong các ứng dụng production, lập trình viên thường viết một hàm tiện ích an toàn (Safe Parser) để không bao giờ làm crash ứng dụng:

```javascript
function safeJsonParse(str, fallbackValue = null) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.warn("Cảnh báo: Chuỗi JSON không hợp lệ, dùng giá trị dự phòng:", error.message);
    return fallbackValue;
  }
}

const config = safeJsonParse(localStorage.getItem("settings"), { theme: "light" });
```

[⬆️ Quay lại Mục lục](#mục-lục)
