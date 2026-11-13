# Bài Tập 08: Ép Kiểu & Các Cấu Trúc Vòng Lặp Trong JavaScript (Type Coercion & Loops)

<a id="mục-lục"></a>
## Mục Lục

- [Phần 1: Cấp Độ Cơ Bản (Ép Kiểu & Toán Tử Tăng Giảm)](#phần-1-cấp-độ-cơ-bản-ép-kiểu--toán-tử-tăng-giảm)
  - [Bài 1.1: Ép kiểu tường minh vs Ép kiểu ngầm định](#bài-11-ép-kiểu-tường-minh-vs-ép-kiểu-ngầm-định)
  - [Bài 1.2: Giải mã biểu thức Prefix (++a) vs Postfix (a++)](#bài-12-giải-mã-biểu-thức-prefix-a-vs-postfix-a)
- [Phần 2: Cấp Độ Trung Bình (Làm Chủ For, While & Do-While)](#phần-2-cấp-độ-trung-bình-làm-chủ-for-while--do-while)
  - [Bài 2.1: Vòng lặp For & 3 Dạng Statement (Tính tổng với Empty Statement)](#bài-21-vòng-lặp-for--3-dạng-statement-tính-tổng-với-empty-statement)
  - [Bài 2.2: Điều khiển luồng lặp với Break & Continue](#bài-22-điều-khiển-luồng-lặp-với-break--continue)
  - [Bài 2.3: Mô phỏng giao dịch tài khoản với vòng lặp While](#bài-23-mô-phỏng-giao-dịch-tài-khoản-với-vòng-lặp-while)
  - [Bài 2.4: Vòng lặp Do-While & Trò chơi tung xúc xắc](#bài-24-vòng-lặp-do-while--trò-chơi-tung-xúc-xắc)
- [Phần 3: Cấp Độ Nâng Cao / Thực Chiến (Giải Thuật & Label)](#phần-3-cấp-độ-nâng-cao--thực-chiến-giải-thuật--label)
  - [Bài 3.1: Quét tọa độ ma trận với Nhãn điều khiển (Labelled Loops)](#bài-31-quét-tọa-độ-ma-trận-với-nhãn-điều-khiển-labelled-loops)
  - [Bài 3.2: Bộ xử lý chuỗi nhập liệu bẩn (Sanitizer & Calculator)](#bài-32-bộ-xử-lý-chuỗi-nhập-liệu-bẩn-sanitizer--calculator)

---

> **Mục tiêu thực hành:**
> - Làm chủ kỹ thuật ép kiểu tường minh (`String`, `Number`, `Boolean`, `parseInt`, `+`) và phòng tránh các cạm bẫy ép kiểu ngầm định của JavaScript.
> - Phân biệt chính xác cách hoạt động và giá trị trả về của toán tử tiền tố (Prefix `++a`) và hậu tố (Postfix `a++`).
> - Nắm vững cú pháp, 4 bước vận hành và 3 dạng Statement (Single, Block, Empty) của vòng lặp `for`.
> - Ứng dụng linh hoạt vòng lặp `while` và `do...while` cho các bài toán chưa biết trước số lần lặp.
> - Thành thạo điều khiển luồng lặp nâng cao với `break`, `continue` và Nhãn lặp lồng nhau (Labelled Statements `outer`/`inner`).

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết Trước Khi Làm Bài Tập
> * **Lý thuyết bài này:** Đọc kỹ [08 - Ép Kiểu & Các Cấu Trúc Vòng Lặp Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/08-loops-and-type-coercion.md).
> * **Kiến thức bài trước bắt buộc:**
>   1. **Block Scope của `let`** tại [03 - Khai Báo Biến & Kiểu Dữ Liệu](file:///d:/github/studyProgram/javascript/docs/03-variables-and-data-types.md):
>      - *Vì sao bắt buộc?* Biến đếm `let i` trong vòng `for` chỉ tồn tại trong phạm vi vòng lặp, hiểu cơ chế này để không bị nhầm lẫn với `var`.
>   2. **Toán tử so sánh & Rẽ nhánh điều kiện** tại [05 - Rẽ Nhánh & Hệ Thống Toán Tử](file:///d:/github/studyProgram/javascript/docs/05-conditionals-and-operators.md):
>      - *Vì sao bắt buộc?* Mọi điều kiện dừng của `for`, `while`, `do...while` đều dùng toán tử so sánh.
>   3. **Cơ chế Truthy & Falsy** tại [07 - Truthy & Falsy](file:///d:/github/studyProgram/javascript/docs/07-truthy-falsy.md):
>      - *Vì sao bắt buộc?* Điều kiện dừng của vòng lặp tự động ép kiểu ngầm định sang boolean.
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

<a id="phần-1-cấp-độ-cơ-bản-ép-kiểu--toán-tử-tăng-giảm"></a>
## Phần 1: Cấp Độ Cơ Bản (Ép Kiểu & Toán Tử Tăng Giảm)

<a id="bài-11-ép-kiểu-tường-minh-vs-ép-kiểu-ngầm-định"></a>
### Bài 1.1: Ép kiểu tường minh vs Ép kiểu ngầm định

Cho danh sách các giá trị thô nhận về từ form người dùng và API:
```javascript
const rawAge = "25";
const rawHeight = "175.5cm";
const rawIsVip = 1;
const rawEmpty = "";
const rawNull = null;
const rawUndefined = undefined;
```

**Yêu cầu:**
1. Hãy chủ động ép kiểu tường minh:
   - Chuyển `rawAge` sang Number bằng 2 cách khác nhau: Dùng hàm `Number()` và dùng toán tử Unary Plus `+`.
   - Chuyển `rawHeight` sang Number dạng số thực bằng `parseFloat()`, đồng thời thử dùng `Number()` để so sánh sự khác biệt.
   - Chuyển `rawIsVip` sang Boolean bằng hàm `Boolean()` và bằng toán tử Double NOT `!!`.
   - Ép `rawNull` và `rawUndefined` sang Number để kiểm chứng kết quả khác nhau giữa số `0` và `NaN`.
2. Dự đoán và ghi chú kết quả in ra của các phép ép kiểu ngầm định sau:
   - `"10" + 20`
   - `"10" - 5`
   - `"10" * "2"`
   - `true + 1`
   - `false + "5"`

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-12-giải-mã-biểu-thức-prefix-a-vs-postfix-a"></a>
### Bài 1.2: Giải mã biểu thức Prefix (++a) vs Postfix (a++)

Cho hai biến ban đầu:
```javascript
let x = 10;
let y = 10;
```

**Yêu cầu:**
1. Thực hiện:
   - `let res1 = ++x;` $\rightarrow$ In ra giá trị của `res1` và `x`. Giải thích cơ chế tiền tố.
   - `let res2 = y++;` $\rightarrow$ In ra giá trị của `res2` và `y`. Giải thích cơ chế hậu tố.
2. Cho biểu thức sau, hãy tính toán từng bước và kiểm chứng bằng code:
   ```javascript
   let n = 4;
   let total = n++ + ++n - --n + n--;
   ```
   In ra giá trị của `total` và giá trị cuối cùng của biến `n`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-2-cấp-độ-trung-bình-làm-chủ-for-while--do-while"></a>
## Phần 2: Cấp Độ Trung Bình (Làm Chủ For, While & Do-While)

<a id="bài-21-vòng-lặp-for--3-dạng-statement-tính-tổng-với-empty-statement"></a>
### Bài 2.1: Vòng lặp For & 3 Dạng Statement (Tính tổng với Empty Statement)

**Yêu cầu:**
1. Viết một vòng lặp `for` (dạng Block Statement) in ra dãy số chẵn từ 2 đến 10.
2. Viết một vòng lặp `for` (dạng Single Statement không dùng `{}`) in ra bảng cửu chương 5 từ $5 \times 1$ đến $5 \times 5$.
3. Sử dụng kỹ thuật **Empty Statement** (toàn bộ logic nằm ở `initialization` và `afterthought`, phần thân chỉ là dấu chấm phẩy `;`) để tính tổng các số từ 1 đến 100:
   - Kết quả mong đợi: `5050`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-22-điều-khiển-luồng-lặp-với-break--continue"></a>
### Bài 2.2: Điều khiển luồng lặp với Break & Continue

Cho danh sách số nguyên:
```javascript
const numbers = [12, 5, 8, -3, 19, 0, 44, -7, 26];
```

**Yêu cầu:**
1. Dùng vòng lặp `for` và từ khóa `continue`: Hãy in ra và tính tổng của **chỉ các số dương lớn hơn 0** (bỏ qua mọi số âm hoặc bằng 0).
2. Dùng vòng lặp `for` và từ khóa `break`: Hãy tìm **số chẵn đầu tiên lớn hơn 20** trong danh sách. Khi tìm thấy, lập tức in ra màn hình và ngắt vòng lặp ngay, không kiểm tra các số còn lại.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-23-mô-phỏng-giao-dịch-tài-khoản-với-vòng-lặp-while"></a>
### Bài 2.3: Mô phỏng giao dịch tài khoản với vòng lặp While

Giả sử tài khoản của một khách hàng có số dư ban đầu là `500.000 VNĐ`. Mỗi ngày hệ thống tự động trừ tiền phí duy trì dịch vụ là `75.000 VNĐ`.

**Yêu cầu:**
1. Sử dụng vòng lặp `while` để mô phỏng việc trừ phí qua từng ngày cho đến khi số dư không còn đủ để trả tiếp.
2. Với mỗi ngày lặp, in ra thông báo: `Ngày X: Đã trừ 75.000 VNĐ, số dư còn lại: Y VNĐ`.
3. Khi vòng lặp kết thúc, in ra tổng số ngày duy trì được và số tiền dư còn sót lại trong tài khoản.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-24-vòng-lặp-do-while--trò-chơi-tung-xúc-xắc"></a>
### Bài 2.4: Vòng lặp Do-While & Trò chơi tung xúc xắc

**Yêu cầu:**
1. Hãy mô phỏng trò chơi tung xúc xắc 6 mặt (tạo số nguyên ngẫu nhiên từ 1 đến 6 bằng `Math.floor(Math.random() * 6) + 1`).
2. Sử dụng vòng lặp `do...while` để tung xúc xắc liên tục cho đến khi xuất hiện mặt số 6 thì dừng lại.
3. Đảm bảo thân vòng lặp luôn được thực hiện ít nhất 1 lần đầu tiên. Đếm và in ra tổng số lần đã tung cho đến khi thành công.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="phần-3-cấp-độ-nâng-cao--thực-chiến-giải-thuật--label"></a>
## Phần 3: Cấp Độ Nâng Cao / Thực Chiến (Giải Thuật & Label)

<a id="bài-31-quét-tọa-độ-ma-trận-với-nhãn-điều-khiển-labelled-loops"></a>
### Bài 3.1: Quét tọa độ ma trận với Nhãn điều khiển (Labelled Loops)

Cho một bản đồ ma trận $3 \times 3$ biểu diễn lưới tọa độ trò chơi:
```javascript
const mapGrid = [
    ["Đất", "Đất", "Rừng"],
    ["Đất", "KHO BÁU", "Đất"],
    ["Núi", "Đất", "Hồ nước"]
];
```

**Yêu cầu:**
1. Viết 2 vòng lặp lồng nhau duyệt qua từng hàng (`row`) và từng cột (`col`).
2. Gắn nhãn `matrixScanner:` cho vòng lặp ngoài.
3. Khi tìm thấy ô có giá trị `"KHO BÁU"`, hãy:
   - In ra thông báo: `🎉 Đã tìm thấy KHO BÁU tại tọa độ hàng X, cột Y!`.
   - Sử dụng `break matrixScanner;` để lập tức thoát hoàn toàn khỏi cả 2 vòng lặp mà không quét thêm bất kỳ ô nào phía sau.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-32-bộ-xử-lý-chuỗi-nhập-liệu-bẩn-sanitizer--calculator"></a>
### Bài 3.2: Bộ xử lý chuỗi nhập liệu bẩn (Sanitizer & Calculator)

Trong thực tế, dữ liệu người dùng nhập từ trường textarea có thể chứa nhiều định dạng lộn xộn:
```javascript
const dirtyInputs = [" 150 ", "abc", "250.50px", "0", "-40", "   ", "90đ", null, undefined, "100"];
```

**Yêu cầu:**
Viết một hàm hoặc đoạn code sử dụng vòng lặp và các kỹ thuật ép kiểu đã học để:
1. Duyệt qua từng phần tử trong danh sách `dirtyInputs`.
2. Lọc bỏ các giá trị không hợp lệ (chuỗi rỗng, chữ cái không chứa số, `null`, `undefined`).
3. Dùng `parseFloat()` hoặc kỹ thuật trích xuất để chuyển các giá trị có chứa số (như `" 150 "`, `"250.50px"`, `"90đ"`, `"100"`) thành số thực hợp lệ.
4. Bỏ qua các số âm (dùng `continue`).
5. Tính tổng doanh thu hợp lệ và in ra bảng thống kê chi tiết các giá trị đã được làm sạch.

[⬆️ Quay lại Mục lục](#mục-lục)

---
*Tài liệu thực hành được biên soạn độc quyền cho hệ thống JavaScript Study Program.*
