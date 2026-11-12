# 01 - Tổng Quan Về JavaScript & Các Cách Viết JavaScript

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng một trang web giống như một **vở kịch trên sân khấu lớn**:
> - **HTML** là bộ khung xương, đạo cụ và danh sách nhân vật cố định trên sân khấu.
> - **CSS** là ánh sáng rực rỡ, trang phục lộng lẫy và tông màu trang trí bắt mắt.
> - **JavaScript** chính là **hành động và linh hồn sống động của các diễn viên**: Diễn viên biết cất lời thoại khi khán giả tương tác, biết thay đổi diện mạo tức thì mà không cần hạ màn làm lại từ đầu (**Không cần tải lại trang**), và phản hồi linh hoạt với mọi sự kiện diễn ra.
> 
> Ra đời từ năm 1995 (do Brendan Eich tạo ra chỉ trong 10 ngày), JavaScript từ một công cụ đơn sơ dùng để kiểm tra form và tạo tuyết rơi nay đã vươn lên trở thành ngôn ngữ lập trình phổ biến nhất hành tinh: Chạy trên trình duyệt (Client), điều hành máy chủ (Node.js), xây dựng ứng dụng di động (React Native) và ứng dụng máy tính (Electron).

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết (Prerequisites)
> * **Kiến thức bắt buộc:** *Không có.* Đây là vạch xuất phát khởi đầu cho toàn bộ lộ trình học JavaScript.
> * **Hành trang khuyến nghị:** Khái niệm cơ bản về lập trình hoặc HTML/CSS căn bản (giúp hình dung vai trò của JS đối với cấu trúc HTML và giao diện CSS).
> * **Đích đến tiếp theo:** Sau khi nắm bài này, bạn sẽ đủ điều kiện tiến sang [02 - Quy Ước Đặt Tên (Clean Code)](file:///d:/github/studyProgram/javascript/docs/02-naming-conventions.md) và [03 - Khai Báo Biến & Kiểu Dữ Liệu](file:///d:/github/studyProgram/javascript/docs/03-variables-and-data-types.md).
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

<a id="mục-lục"></a>
## Mục Lục

- [1. JavaScript Là Gì? Bản Chất Đa Mô Hình (Multi-Paradigm)](#1-javascript-là-gì-bản-chất-đa-mô-hình-multi-paradigm)
- [2. Đặc Điểm Cốt Lõi Của JavaScript](#2-đặc-điểm-cốt-lõi-của-javascript)
  - [2.1. Ngôn ngữ thông dịch (Interpreted) & Cơ chế JIT Compilation](#2-1-ngôn-ngữ-thông-dịch-interpreted-cơ-chế-jit-compilation)
  - [2.2. Ngôn ngữ kịch bản phía Client (Client-Side Scripting)](#2-2-ngôn-ngữ-kịch-bản-phía-client-client-side-scripting)
  - [2.3. Ngôn ngữ định kiểu động (Dynamic Typing)](#2-3-ngôn-ngữ-định-kiểu-động-dynamic-typing)
  - [2.4. Phân biệt chữ hoa - chữ thường (Case Sensitivity)](#2-4-phân-biệt-chữ-hoa---chữ-thường-case-sensitivity)
- [3. Điểm Mạnh Vượt Trội Của JavaScript](#3-điểm-mạnh-vượt-trội-của-javascript)
- [4. Những Hạn Chế & Thách Thức Cần Biết](#4-những-hạn-chế-thách-thức-cần-biết)
- [5. 5 Cách Viết & Nhúng JavaScript Vào Ứng Dụng](#5-5-cách-viết-nhúng-javascript-vào-ứng-dụng)
  - [5.1. Thẻ `<script>` nội tuyến trong HTML](#5-1-thẻ-nội-tuyến-trong-html)
  - [5.2. Trong file JavaScript riêng biệt (`.js` External)](#5-2-trong-file-javascript-riêng-biệt-js-external)
  - [5.3. Trong Console trình duyệt (DevTools)](#5-3-trong-console-trình-duyệt-devtools)
  - [5.4. Trong URL trình duyệt (JavaScript URI) & Cảnh báo an ninh](#5-4-trong-url-trình-duyệt-javascript-uri-cảnh-báo-an-ninh)
  - [5.5. Trong các thuộc tính xử lý sự kiện HTML (Inline Event Handlers)](#5-5-trong-các-thuộc-tính-xử-lý-sự-kiện-html-inline-event-handlers)
- [6. Cạm Bẫy Thường Gặp & Lỗi Ngầm Định (Common Pitfalls)](#6-cạm-bẫy-thường-gặp-lỗi-ngầm-định-common-pitfalls)
- [7. Bảng Tổng Kết So Sánh 5 Cách Viết JavaScript](#7-bảng-tổng-kết-so-sánh-5-cách-viết-javascript)
- [8. Lời Khuyên Thực Chiến Dành Cho Lập Trình Viên](#8-lời-khuyên-thực-chiến-dành-cho-lập-trình-viên)

---

<a id="1-javascript-là-gì-bản-chất-đa-mô-hình-multi-paradigm"></a>
## 1. JavaScript Là Gì? Bản Chất Đa Mô Hình (Multi-Paradigm)

**JavaScript (JS)** là một ngôn ngữ lập trình **bậc cao (high-level)**, **thông dịch (interpreted)** và có tính tương thích tuyệt đối trên 100% các trình duyệt web hiện đại.

### Ngôn ngữ đa mô hình (Multi-paradigm Programming Language):
JavaScript không gò ép lập trình viên vào một khuôn mẫu cứng nhắc duy nhất, mà hỗ trợ linh hoạt 3 mô hình lập trình chủ đạo:
1. **Lập trình hướng đối tượng (OOP - Object-Oriented Programming):** Sử dụng cơ chế nguyên mẫu (Prototype-based inheritance) và cú pháp `class` (từ ES6) để đóng gói dữ liệu và phương thức.
2. **Lập trình hướng sự kiện (Event-Driven Programming):** Hệ thống "lắng nghe" và phản hồi lại các sự kiện (click chuột, gõ phím, tải trang, nhận dữ liệu mạng) thông qua Event Loop và Callback functions.
3. **Lập trình hàm (Functional Programming):** Coi hàm là "công dân hạng nhất" (First-Class Citizens) — hàm có thể được gán vào biến, truyền vào làm tham số, hoặc trả về từ một hàm khác (`map`, `filter`, `reduce`, closures).

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="2-đặc-điểm-cốt-lõi-của-javascript"></a>
## 2. Đặc Điểm Cốt Lõi Của JavaScript

<a id="2-1-ngôn-ngữ-thông-dịch-interpreted-cơ-chế-jit-compilation"></a>
### 2.1. Ngôn ngữ thông dịch (Interpreted) & Cơ chế JIT Compilation
- **Bản chất truyền thống:** Các ngôn ngữ như C/C++ cần trình biên dịch (Compiler) dịch toàn bộ mã nguồn sang mã máy nhị phân (`.exe` hoặc binary) trước khi chạy. Ngược lại, JavaScript được trình duyệt đọc và **thực thi trực tiếp từng dòng một**.
- **Động cơ hiện đại (V8, SpiderMonkey):** Ngày nay, trình duyệt sử dụng cơ chế **Biên dịch tức thời (JIT - Just-In-Time Compilation)**: Vừa thông dịch nhanh vừa âm thầm biên dịch các đoạn code thường xuyên lặp lại thành mã máy tối ưu cao trong bộ nhớ để đạt tốc độ cực nhanh.

<a id="2-2-ngôn-ngữ-kịch-bản-phía-client-client-side-scripting"></a>
### 2.2. Ngôn ngữ kịch bản phía Client (Client-Side Scripting)
- Chạy trực tiếp trên thiết bị của người dùng (trình duyệt web), giúp can thiệp vào cây DOM, xử lý tính toán, gửi yêu cầu API ngầm (**AJAX / Fetch**) mà **không cần làm tải lại (reload) toàn bộ trang web**.

<a id="2-3-ngôn-ngữ-định-kiểu-động-dynamic-typing"></a>
### 2.3. Ngôn ngữ định kiểu động (Dynamic Typing)
- Trong JavaScript, bạn **không cần và không thể khai báo kiểu dữ liệu cố định** cho một biến (`int`, `float`, `string` như C/Java).
- Kiểu dữ liệu gắn liền với **giá trị** mà biến đang nắm giữ tại thời điểm runtime, chứ không gắn liền với bản thân biến đó:

```javascript
let data = 42;          // data là kiểu Number
data = "Xin chào!";     // data tự động đổi thành kiểu String
data = { isAdmin: true }; // data đổi thành kiểu Object
```

<a id="2-4-phân-biệt-chữ-hoa---chữ-thường-case-sensitivity"></a>
### 2.4. Phân biệt chữ hoa - chữ thường (Case Sensitivity)
- JavaScript phân biệt tuyệt đối giữa chữ in hoa và chữ thường:
```javascript
let myScore = 100;
let Myscore = 80;
let MYSCORE = 50;

console.log(myScore); // 100 - Ba biến trên hoàn toàn độc lập và lưu trữ 3 ô nhớ khác nhau!
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="3-điểm-mạnh-vượt-trội-của-javascript"></a>
## 3. Điểm Mạnh Vượt Trội Của JavaScript

1. **Ngôn ngữ phổ biến nhất thế giới:** Hơn 98% trang web trên toàn cầu sử dụng JavaScript ở frontend. Được hỗ trợ sẵn trên mọi trình duyệt mà không cần cài thêm plugin.
2. **Cực kỳ linh hoạt (Full-Stack Capability):** Chỉ với một ngôn ngữ duy nhất, bạn có thể:
   - Viết giao diện Frontend (React, Vue, Angular).
   - Viết Backend Server và RESTful API (Node.js, Express, NestJS).
   - Viết App điện thoại đa nền tảng (React Native, Flutter wrapper).
   - Viết App desktop (Electron, Tauri).
3. **Cộng đồng khổng lồ & Hệ sinh thái phong phú:** Kho lưu trữ thư viện **npm** là kho mã nguồn mở lớn nhất thế giới với hàng triệu gói thư viện miễn phí, sẵn sàng giải quyết mọi bài toán kỹ thuật.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="4-những-hạn-chế-thách-thức-cần-biết"></a>
## 4. Những Hạn Chế & Thách Thức Cần Biết

Bên cạnh sức mạnh to lớn, JavaScript cũng có những điểm yếu cố hữu xuất phát từ lịch sử phát triển:

> [!WARNING]
> **Các hạn chế cốt lõi cần lưu ý:**
> 1. **Định kiểu yếu (Weak / Loose Typing):** Do ép kiểu ngầm định (Type Coercion), các lỗi sai kiểu chỉ bộc lộ khi người dùng đang chạy code (Runtime Error) chứ không báo trước lúc gõ code. *(Đây là lý do TypeScript ra đời để bổ sung lớp bảo vệ tĩnh cho JS)*.
> 2. **Xử lý bất đồng bộ phức tạp:** Trước ES6, việc lồng quá nhiều hàm callback dẫn đến thảm họa "Callback Hell" (Kim tự tháp địa ngục). Dù ngày nay đã có `Promise` và cú pháp `async/await`, việc kiểm soát race condition và lỗi luồng dữ liệu bất đồng bộ vẫn đòi hỏi tư duy vững chắc.
> 3. **Phân mảnh giữa các trình duyệt (Browser Inconsistency):** Cùng một đoạn code nhưng có thể hoạt động khác nhau giữa Chrome, Safari, Firefox hoặc các thiết bị di động cũ, buộc lập trình viên phải dùng các công cụ chuyển đổi như Babel / Polyfills.
> 4. **Nguy cơ rò rỉ bộ nhớ (Memory Leak):** Dù có cơ chế tự động dọn rác (Garbage Collector), các biến toàn cục không giải phóng, bộ lắng nghe sự kiện (`addEventListener`) quên gỡ bỏ (`removeEventListener`), hoặc Closure giữ tham chiếu thừa vẫn có thể làm máy khách bị treo cứng (lag/crash).

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="5-5-cách-viết-nhúng-javascript-vào-ứng-dụng"></a>
## 5. 5 Cách Viết & Nhúng JavaScript Vào Ứng Dụng

<a id="5-1-thẻ-nội-tuyến-trong-html"></a>
### 5.1. Thẻ `<script>` nội tuyến trong HTML

Đoạn code JavaScript được đặt trực tiếp bên trong cặp thẻ `<script> ... </script>` của trang HTML:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Demo Inline Script</title>
</head>
<body>
    <h1>Chào mừng bạn!</h1>

    <!-- Đặt thẻ script ở cuối body để đảm bảo HTML đã vẽ xong -->
    <script>
        console.log("Trang web đã tải xong!");
        document.querySelector("h1").style.color = "blue";
    </script>
</body>
</html>
```

- **Ưu điểm:** Tiện lợi, chạy ngay lập tức, không cần tạo thêm file phụ, phù hợp cho bài tập nhỏ hoặc mã nhúng cấu hình ban đầu.
- **Nhược điểm:** Trộn lẫn mã giao diện (HTML) và logic (JS), khó bảo trì khi code dài, **không tận dụng được bộ nhớ đệm (Cache)** của trình duyệt.

---

<a id="5-2-trong-file-javascript-riêng-biệt-js-external"></a>
### 5.2. Trong file JavaScript riêng biệt (`.js` External)

Tách toàn bộ mã nguồn sang một file đuôi `.js` độc lập và liên kết vào HTML qua thuộc tính `src`:

```html
<!-- Trong file index.html -->
<script src="./js/app.js" defer></script>
```

```javascript
// Trong file ./js/app.js
console.log("Xin chào từ file JavaScript độc lập!");
```

- **Ưu điểm (Chuẩn mực thực tế):**
  - Tách biệt hoàn toàn giữa Tầng hiển thị (Markup) và Tầng hành vi (Logic).
  - **Tận dụng tối đa Browser Cache:** Trình duyệt tải file `.js` về và lưu lại, các lần mở trang sau không cần tải lại file này nữa $\rightarrow$ Tăng tốc tải trang vượt trội.
  - Tái sử dụng cùng một file `.js` trên hàng trăm trang HTML khác nhau.
- **Nhược điểm:** Tốn thêm 1 request HTTP tải file (tuy nhiên trong thực tế được giải quyết triệt để nhờ HTTP/2 và các công cụ đóng gói Vite / Webpack).

---

<a id="5-3-trong-console-trình-duyệt-devtools"></a>
### 5.3. Trong Console trình duyệt (DevTools)

Nhấn phím **F12** (hoặc `Ctrl + Shift + I` / `Cmd + Option + I`), chuyển sang tab **Console** và gõ trực tiếp lệnh:

```javascript
console.log("Đang thử nghiệm trực tiếp trên Console!");
alert("Hello from DevTools!");
```

- **Ưu điểm:** Thử nghiệm nhanh các biểu thức, kiểm tra biến, gỡ lỗi (debug) và tương tác với DOM trang web đang mở mà không cần lưu file.
- **Nhược điểm:** Mã nguồn sẽ mất sạch ngay khi tải lại trang (chỉ dùng cho phát triển và debug, không phải nơi lưu trữ sản phẩm).

---

<a id="5-4-trong-url-trình-duyệt-javascript-uri-cảnh-báo-an-ninh"></a>
### 5.4. Trong URL trình duyệt (JavaScript URI) & Cảnh báo an ninh

Gõ trực tiếp vào thanh địa chỉ của trình duyệt hoặc trong thẻ `<a>`:

```html
<!-- ⚠️ KHÔNG NÊN DÙNG TRONG THỰC TẾ -->
<a href="javascript:alert('Hello World!');">Bấm vào đây!</a>
```

> [!CAUTION]
> **Cảnh báo an ninh nghiêm trọng:**
> Cách viết này tiềm ẩn nguy cơ bảo mật cực lớn (**Lỗ hổng tấn công Cross-Site Scripting - XSS**). Kẻ tấn công có thể chèn các đoạn script độc hại đánh cắp Cookie, Token tài khoản của người dùng. Hầu hết các trình duyệt hiện đại đều chặn hoặc cảnh báo gắt gao cách này.

---

<a id="5-5-trong-các-thuộc-tính-xử-lý-sự-kiện-html-inline-event-handlers"></a>
### 5.5. Trong các thuộc tính xử lý sự kiện HTML (Inline Event Handlers)

Gắn code trực tiếp vào các thuộc tính sự kiện của thẻ HTML như `onclick`, `onmouseover`, `onkeydown`:

```html
<!-- ⚠️ Cách viết cổ điển, hạn chế tối đa sử dụng -->
<button onclick="alert('Xin chào!');">Nhấn vào đây!</button>
<a href="#" onmouseover="this.style.color='red'" onmouseout="this.style.color='blue'">Di chuột qua tôi!</a>
```

- **Ưu điểm:** Nhanh gọn cho người mới học, thấy ngay sự liên kết giữa nút bấm và hành vi.
- **Nhược điểm:**
  - Vi phạm nguyên tắc phân tách trách nhiệm (Separation of Concerns).
  - Khó bảo trì, khi có 100 nút bấm giống nhau bạn phải sửa ở cả 100 nơi.
  - Dễ gặp lỗi cú pháp khi chuỗi chứa nhiều dấu nháy đơn và nháy kép lồng nhau.
  - **Giải pháp chuẩn hiện đại:** Luôn dùng phương thức **`addEventListener`** trong file JS độc lập!

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="6-cạm-bẫy-thường-gặp-lỗi-ngầm-định-common-pitfalls"></a>
## 6. Cạm Bẫy Thường Gặp & Lỗi Ngầm Định (Common Pitfalls)

### Cạm bẫy 1: Quên tính chất phân biệt hoa thường (Case-Sensitivity)
```javascript
let currentScore = 100;
// Lỗi typo gõ sai chữ hoa:
console.log(currentscore); // ❌ ReferenceError: currentscore is not defined!
```

### Cạm bẫy 2: Ép kiểu ngầm định tai hại của ngôn ngữ Dynamic Typing
```javascript
let total = 5 + "5";   // Kết quả: "55" (Chuỗi, do ưu tiên nối chuỗi)
let diff = "10" - 2;   // Kết quả: 8 (Số, do toán tử trừ ép chuỗi về số)
let logic = true + 1;  // Kết quả: 2 (Do true được ép ngầm thành số 1)
```

### Cạm bẫy 3: Đặt thẻ `<script>` ở đầu trang khiến DOM bị chặn (Render-blocking)
- Nếu đặt `<script src="app.js"></script>` trong thẻ `<head>` mà **không có** thuộc tính `defer` hoặc `async`, trình duyệt sẽ dừng hoàn toàn việc dựng hình ảnh (render HTML) lại để đợi tải và chạy xong file JS. Người dùng sẽ thấy màn hình trắng xóa!
- **Khắc phục:** Luôn thêm thuộc tính **`defer`** vào thẻ script trong `<head>`, hoặc đặt thẻ `<script>` ở sát đáy thẻ `</body>`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="7-bảng-tổng-kết-so-sánh-5-cách-viết-javascript"></a>
## 7. Bảng Tổng Kết So Sánh 5 Cách Viết JavaScript

| Tiêu chí | File độc lập (`.js`) | Thẻ `<script>` nội tuyến | Console DevTools | Inline Event (`onclick`) | JavaScript URI |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Vị trí viết** | File riêng bên ngoài | Bên trong file HTML | Tab Console của trình duyệt | Thuộc tính của thẻ HTML | Thanh địa chỉ URL |
| **Tách biệt Logic/UI** | ✅ **Tuyệt đối** | ❌ Không | Chỉ để test | ❌ Không | ❌ Không |
| **Tận dụng Cache** | ✅ **Rất tốt** | ❌ Không | Không áp dụng | ❌ Không | ❌ Không |
| **Dễ bảo trì** | ✅ **Rất cao** | ⚠️ Thấp khi code lớn | Chỉ tạm thời | ❌ Rất kém | ❌ Rất kém |
| **Mức độ an toàn** | ✅ **Cao** | ⚠️ Trung bình | An toàn cục bộ | ⚠️ Dễ dính XSS | ❌ **Cực kỳ nguy hiểm** |
| **Khuyến nghị dùng** | 🌟 **Mặc định dự án** | Dùng cho config nhỏ | Dùng để Debug | **Tránh dùng** | **Cấm dùng** |

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="8-lời-khuyên-thực-chiến-dành-cho-lập-trình-viên"></a>
## 8. Lời Khuyên Thực Chiến Dành Cho Lập Trình Viên

1. **Luôn tách biệt file JS độc lập (`.js`):** Giữ file HTML sạch đẹp, chỉ chứa thẻ biểu diễn cấu trúc. Toàn bộ logic tương tác phải đặt trong file `.js`.
2. **Khai thác sức mạnh của `addEventListener`:** Tuyệt đối không dùng `onclick="..."` trên thẻ HTML. Hãy dùng `element.addEventListener("click", handler)` để code linh hoạt, gắn được nhiều sự kiện và dễ gỡ bỏ.
3. **Thành thạo Console F12:** Hãy coi Console là một cuốn sổ tay nháp quyền lực để kiểm chứng nhanh các đoạn code ngắn trước khi ghi vào file chính thức.

[⬆️ Quay lại Mục lục](#mục-lục)
