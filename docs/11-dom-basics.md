# 11 - Thao Tác DOM & Sự Kiện (DOM Manipulation & Events) trong JavaScript

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng trang web của bạn giống như một **ngôi nhà thông minh**:
> - **HTML** là bộ khung xương (tường gạch, cửa sổ, các phòng).
> - **CSS** là lớp sơn trang trí, nội thất và rèm cửa.
> - **JavaScript & DOM** chính là **hệ thống điện tử thông minh**: Giúp ngôi nhà "lắng nghe" và "phản hồi" lại hành động của con người — khi chủ nhà bấm chuông thì nhạc reo, bấm công tắc thì đèn đổi màu, hoặc nhấn nút mở cửa thì danh sách khách mời tự động cập nhật!

---

<a id="mục-lục"></a>
## Mục Lục

- [1. Tìm hiểu về DOM](#1-tìm-hiểu-về-dom)
  - [1.1. DOM là gì?](#11-dom-là-gì)
- [2. Truy vấn phần tử (DOM Querying)](#2-truy-vấn-phần-tử-dom-querying)
- [3. Thao tác Nội Dung, Thuộc Tính & Giao Diện](#3-thao-tác-nội-dung-thuộc-tính--giao-diện)
  - [3.1. Thay đổi nội dung Text và HTML](#31-thay-đổi-nội-dung-text-và-html)
  - [3.2. Đọc và ghi giá trị ô nhập liệu (`<input>`)](#32-đọc-và-ghi-giá-trị-ô-nhập-liệu-input)
  - [3.3. Thao tác Class và Style (CSS)](#33-thao-tác-class-và-style-css)
- [4. Lắng nghe Sự Kiện (Event Handling)](#4-lắng-nghe-sự-kiện-event-handling)
- [5. Tạo mới & Xóa phần tử (Create & Remove Elements)](#5-tạo-mới--xóa-phần-tử-create--remove-elements)
- [6. Các lỗi thường gặp khi làm việc với DOM](#6-các-lỗi-thường-gặp-khi-làm-việc-với-dom)
- [7. Bảng tổng kết phương thức DOM cốt lõi](#7-bảng-tổng-kết-phương-thức-dom-cốt-lõi)

---

## 1. Tìm hiểu về DOM

### 1.1. DOM là gì?
**DOM (Document Object Model)** là mô hình hướng đối tượng đại diện cho toàn bộ tài liệu HTML của trang web:
- Khi trình duyệt tải xong một trang web, nó sẽ biên dịch toàn bộ mã HTML thành một **Cây phả hệ các đối tượng (DOM Tree)**.
- Mỗi thẻ HTML (`<div>`, `<h1>`, `<button>`) trở thành một **Nút (Node/Element)** trong cây DOM.
- Đối tượng toàn cục `document` là "gốc rễ" (root) giúp JavaScript có thể truy cập, thêm, sửa, xóa bất kỳ phần tử nào trên trang web.

```
       document
          │
        <html>
       /      \
    <head>    <body>
      │       /     \
   <title>  <h1>    <button>
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 2. Truy vấn phần tử (DOM Querying)

Để thao tác với một phần tử, bước đầu tiên là phải "tìm thấy" nó trên trang:

```javascript
// 1. Tìm một phần tử duy nhất bằng CSS Selector (Khuyên dùng nhất)
const title = document.querySelector("#main-title"); // Theo ID
const button = document.querySelector(".btn-submit"); // Theo Class

// 2. Tìm tất cả các phần tử khớp (trả về một NodeList)
const listItems = document.querySelectorAll(".todo-item");

// 3. Cách truyền thống (chỉ tìm theo ID hoặc Class)
const heading = document.getElementById("main-title");
const items = document.getElementsByClassName("item");
```

> [!TIP]
> Luôn ưu tiên dùng **`document.querySelector()`** và **`document.querySelectorAll()`** vì chúng hỗ trợ cú pháp CSS Selector cực kỳ linh hoạt và hiện đại.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 3. Thao tác Nội Dung, Thuộc Tính & Giao Diện

### 3.1. Thay đổi nội dung Text và HTML
```javascript
const box = document.querySelector("#box");

// Gán text thuần túy (an toàn, không sợ dính lỗi bảo mật XSS)
box.textContent = "Nội dung văn bản mới!";

// Gán cả thẻ HTML bên trong
box.innerHTML = "<strong>Nội dung in đậm</strong>";
```

### 3.2. Đọc và ghi giá trị ô nhập liệu (`<input>`)
```javascript
const input = document.querySelector("#username-input");

// Lấy giá trị người dùng đang gõ
console.log(input.value);

// Xóa trắng ô input
input.value = "";
```

### 3.3. Thao tác Class và Style (CSS)
```javascript
const card = document.querySelector(".card");

// Thao tác với class (khuyên dùng để tách biệt logic và style)
card.classList.add("highlight");    // Thêm class
card.classList.remove("hidden");    // Xóa class
card.classList.toggle("dark-mode"); // Đổi trạng thái (chưa có thì thêm, có rồi thì xóa)

// Can thiệp style trực tiếp (inline style)
card.style.backgroundColor = "#1e293b";
card.style.fontSize = "18px";
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 4. Lắng nghe Sự Kiện (Event Handling)

Sự kiện là những hành động xảy ra trên trang web (người dùng click chuột, gõ phím, cuộn trang, gửi form...).

### Cú pháp chuẩn với `addEventListener`:
```javascript
const btn = document.querySelector("#btn-submit");

btn.addEventListener("click", function (event) {
    console.log("Nút đã được click!");
    console.log("Phần tử kích hoạt:", event.target);
});
```

**Các sự kiện phổ biến nhất:**
- `click`: Nhấp chuột vào phần tử.
- `input`: Gõ văn bản vào ô input (kích hoạt liên tục mỗi khi đổi ký tự).
- `submit`: Nhấn gửi form (thường đi kèm `event.preventDefault()` để chặn trang bị reload).
- `keydown` / `keyup`: Nhấn hoặc nhả phím bàn phím.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 5. Tạo mới & Xóa phần tử (Create & Remove Elements)

```javascript
// 1. Tạo một phần tử <li> mới
const newItem = document.createElement("li");

// 2. Thiết lập nội dung và class
newItem.textContent = "Học JavaScript DOM";
newItem.classList.add("list-item");

// 3. Gắn phần tử vào danh sách <ul> trên trang
const todoList = document.querySelector("#todo-list");
todoList.appendChild(newItem); // hoặc todoList.append(newItem);

// 4. Xóa phần tử khỏi trang
newItem.remove();
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 6. Các lỗi thường gặp khi làm việc với DOM

1. **Chạy code JavaScript trước khi HTML tải xong:**
   - Nếu thẻ `<script>` đặt ở thẻ `<head>` mà không có thuộc tính `defer`, `document.querySelector` sẽ trả về `null` vì lúc đó thẻ HTML chưa được vẽ ra!
   - **Cách khắc phục:** Đặt thẻ `<script>` ở cuối thẻ `<body>`, hoặc thêm thuộc tính `defer` vào thẻ script trong `<head>`.
2. **Quên dấu `#` hoặc `.` trong `querySelector`:**
   - `document.querySelector("my-btn")` $\rightarrow$ Trình duyệt tìm thẻ `<my-btn>` (sai!).
   - Đúng: Dùng `#my-btn` cho ID hoặc `.my-btn` cho Class.
3. **Dùng `.textContent` thay vì `.value` cho thẻ `<input>`:**
   - Để lấy nội dung người dùng gõ trong ô input/textarea, bạn phải dùng **`element.value`**, không dùng `element.textContent`.
4. **Trang web bị tải lại (Reload) khi submit form:**
   - Thẻ `<form>` mặc định sẽ reload lại trang khi nhấn submit hoặc Enter. Hãy luôn gọi `event.preventDefault()` ở dòng đầu tiên của hàm xử lý sự kiện.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 7. Bảng tổng kết phương thức DOM cốt lõi

| Thao tác | Phương thức / Thuộc tính | Ví dụ minh họa |
| :--- | :--- | :--- |
| **Tìm 1 phần tử** | `document.querySelector(selector)` | `document.querySelector("#btn-save")` |
| **Tìm nhiều phần tử**| `document.querySelectorAll(selector)` | `document.querySelectorAll(".card")` |
| **Đổi chữ** | `element.textContent = text` | `h1.textContent = "Xin chào!"` |
| **Đổi giá trị ô nhập**| `input.value = val` | `input.value = ""` |
| **Thêm/bỏ Class** | `element.classList.toggle(name)` | `body.classList.toggle("dark")` |
| **Gắn sự kiện** | `element.addEventListener(type, fn)` | `btn.addEventListener("click", onClick)` |
| **Tạo phần tử mới**| `document.createElement(tag)` | `const li = document.createElement("li")` |
| **Chèn vào DOM** | `parent.appendChild(child)` | `list.appendChild(li)` |
| **Xóa khỏi DOM** | `element.remove()` | `li.remove()` |

[⬆️ Quay lại Mục lục](#mục-lục)
