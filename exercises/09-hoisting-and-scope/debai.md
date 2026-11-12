# Bài Tập 09: Làm Chủ Cơ Chế Hoisting & Scope Trong JavaScript

> **Mục tiêu thực hành:**
> - Hiểu sâu bản chất 2 pha thực thi của JavaScript Engine: Creation Phase (cấp phát bộ nhớ) và Execution Phase (thực thi code).
> - Phân biệt chính xác cách thức hoisting của `var` vs `let` / `const` (khái niệm Temporal Dead Zone - TDZ).
> - Nắm rõ cơ chế Hoisting toàn phần của Function Declaration so với Function Expression.
> - Phân biệt rành rọt 2 loại lỗi kinh điển: `TypeError` vs `ReferenceError`.
> - Hiểu rõ khái niệm "đầu phạm vi" (Global Scope vs Function Scope) khi lồng hàm.

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết Trước Khi Làm Bài Tập
> * **Lý thuyết bài này:** Đọc kỹ [09 - Hoisting & Scope Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/09-hoisting-and-scope.md).
> * **Kiến thức bài trước bắt buộc:**
>   1. **Function Declaration vs Function Expression** tại [08 - 3 Loại Hàm Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/08-function-types.md):
>      - *Vì sao bắt buộc?* Giải thích sự khác biệt khi gọi hàm trước dòng định nghĩa.
>   2. **Block Scope vs Function Scope** tại [03 - Khai Báo Biến & Kiểu Dữ Liệu (Mục 3)](file:///d:/github/studyProgram/javascript/docs/03-variables-and-data-types.md#3-bản-chất-toàn-diện-về-phạm-vi-scope-trong-javascript-xóa-bỏ-hoàn-toàn-nhầm-lẫn):
>      - *Vì sao bắt buộc?* Hiểu cơ chế tìm biến trong Scope Chain và TDZ của `let`/`const`.
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

<a id="mục-lục"></a>
## Mục Lục

- [Phần 1: Khám Phá Hoisting Với Biến (Cơ Bản)](#phần-1-khám-phá-hoisting-với-biến-cơ-bản)
  - [Bài 1.1: Cơ chế Hoisting của `var`](#bài-1-1-cơ-chế-hoisting-của-var)
  - [Bài 1.2: Vùng chết tạm thời (TDZ) với `let` và `const`](#bài-1-2-vùng-chết-tạm-thời-tdz-với-let-và-const)
- [Phần 2: Function Declaration vs Function Expression (Trung Bình)](#phần-2-function-declaration-vs-function-expression-trung-bình)
  - [Bài 2.1: Gọi Function Declaration trước định nghĩa](#bài-2-1-gọi-function-declaration-trước-định-nghĩa)
  - [Bài 2.2: Gọi Function Expression với `var`](#bài-2-2-gọi-function-expression-với-var)
  - [Bài 2.3: Gọi Function Expression với `const` (Arrow Function)](#bài-2-3-gọi-function-expression-với-const-arrow-function)
- [Phần 3: Phạm Vi Hoisting & Thử Thách Thực Chiến (Nâng Cao)](#phần-3-phạm-vi-hoisting-thử-thách-thực-chiến-nâng-cao)
  - [Bài 3.1: Hoisting trong phạm vi hàm ("Đầu phạm vi")](#bài-3-1-hoisting-trong-phạm-vi-hàm-đầu-phạm-vi)
  - [Bài 3.2: Thử thách "Tư duy như JS Engine" (Mô phỏng sắp xếp bộ nhớ)](#bài-3-2-thử-thách-tư-duy-như-js-engine-mô-phỏng-sắp-xếp-bộ-nhớ)

---

<a id="phần-1-khám-phá-hoisting-với-biến-cơ-bản"></a>
## Phần 1: Khám Phá Hoisting Với Biến (Cơ Bản)

<a id="bài-1-1-cơ-chế-hoisting-của-var"></a>
### Bài 1.1: Cơ chế Hoisting của `var`
1. Cho đoạn code sau:
   ```javascript
   console.log(soThuNhat);
   var soThuNhat = 100;
   console.log(soThuNhat);
   ```
   - **Yêu cầu:** Hãy dự đoán giá trị in ra ở 2 lệnh `console.log`.
   - Viết lại đoạn code trên theo đúng cách mà JavaScript Engine tổ chức lại bộ nhớ trong thực tế.

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-1-2-vùng-chết-tạm-thời-tdz-với-let-và-const"></a>
### Bài 1.2: Vùng chết tạm thời (TDZ) với `let` và `const`
1. Hãy thử truy cập biến `soThuHai` (khai báo bằng `let`) và `soThuBa` (khai báo bằng `const`) trước dòng khai báo của chúng trong một khối `try...catch`.
2. Quan sát và trả lời:
   - Tên lỗi ném ra là gì (`err.name`)?
   - Thông điệp lỗi chi tiết là gì (`err.message`)?
   - Vùng chết tạm thời (TDZ) của biến bắt đầu từ đâu và kết thúc khi nào?

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-2-function-declaration-vs-function-expression-trung-bình"></a>
## Phần 2: Function Declaration vs Function Expression (Trung Bình)

<a id="bài-2-1-gọi-function-declaration-trước-định-nghĩa"></a>
### Bài 2.1: Gọi Function Declaration trước định nghĩa
1. Định nghĩa hàm `chaoMung(ten)` bằng cú pháp **Function Declaration** (in ra chuỗi `"Xin chào, " + ten`).
2. Gọi hàm này **TRƯỚC** khi dòng định nghĩa xuất hiện.
3. Giải thích tại sao hàm vẫn chạy thành công mà không gặp bất kỳ lỗi nào.

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-2-2-gọi-function-expression-với-var"></a>
### Bài 2.2: Gọi Function Expression với `var`
1. Gán một hàm ẩn danh vào biến `var tamBiet = function() { ... }`.
2. Thử gọi `tamBiet()` **TRƯỚC** dòng gán đó bên trong khối `try...catch`.
3. Trả lời:
   - Lỗi ném ra là `TypeError` hay `ReferenceError`?
   - Tại sao lại ném ra lỗi đó? Biến `tamBiet` lúc đó mang giá trị là gì?

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-2-3-gọi-function-expression-với-const-arrow-function"></a>
### Bài 2.3: Gọi Function Expression với `const` (Arrow Function)
1. Gán một Arrow Function vào biến `const henGapLai = () => { ... }`.
2. Thử gọi `henGapLai()` **TRƯỚC** dòng gán bên trong khối `try...catch`.
3. So sánh loại lỗi bắt được ở bài 2.3 với bài 2.2 và giải thích sự khác biệt.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-3-phạm-vi-hoisting-thử-thách-thực-chiến-nâng-cao"></a>
## Phần 3: Phạm Vi Hoisting & Thử Thách Thực Chiến (Nâng Cao)

<a id="bài-3-1-hoisting-trong-phạm-vi-hàm-đầu-phạm-vi"></a>
### Bài 3.1: Hoisting trong phạm vi hàm ("Đầu phạm vi")
Cho cấu trúc hàm `chayUngDung()` như sau:
```javascript
function chayUngDung() {
    console.log("=== Bắt đầu chạy ứng dụng ===");
    
    // Gọi thử hàm noiBo() ở đây:
    noiBo();

    function noiBo() {
        console.log("✅ Hàm nội bộ được thực thi an toàn!");
    }
}
```
1. Gọi hàm `chayUngDung()` và kiểm chứng xem `noiBo()` có chạy thành công bên trong nó không.
2. Thử gọi trực tiếp `noiBo()` ở bên ngoài phạm vi hàm `chayUngDung()` và bọc trong `try...catch`.
3. Giải thích nguyên lý: Tại sao `noiBo()` được hoist nhưng bên ngoài lại không gọi được? Khái niệm "đầu phạm vi nơi nó được khai báo" có ý nghĩa gì ở đây?

[⬆️ Quay lại Mục lục](#mục-lục)

<a id="bài-3-2-thử-thách-tư-duy-như-js-engine-mô-phỏng-sắp-xếp-bộ-nhớ"></a>
### Bài 3.2: Thử thách "Tư duy như JS Engine" (Mô phỏng sắp xếp bộ nhớ)
Cho đoạn code lộn xộn sau:
```javascript
console.log(diemSo);
var diemSo = 8.5;

thongBao();

function thongBao() {
    console.log("Điểm của bạn là:", diemSo);
}

var diemSo = 10;
thongBao();
```
- **Yêu cầu:** Hãy tự mình viết lại đoạn code tương đương theo đúng cách mà JavaScript Engine diễn giải trong 2 pha:
  - **Pha 1 (Creation Phase):** Gom tất cả phần khai báo `function` và `var` lên đầu.
  - **Pha 2 (Execution Phase):** Thực thi từng dòng lệnh còn lại theo tuần tự.
- Đối chiếu output dự đoán với output chạy thực tế trên máy.

[⬆️ Quay lại Mục lục](#mục-lục)
