# Bài Tập 03: Từ Khóa Khai Báo (var, let, const), Phạm Vi (Scope) & Kiểu Dữ Liệu Trong JavaScript

## Mục Lục
<a id="mục-lục"></a>

1. [Lý Thuyết Cốt Lõi Cần Nhớ](#lý-thuyết-cốt-lõi-cần-nhớ)
2. [Cấp Độ 1 — Cơ Bản](#cấp-độ-1--cơ-bản)
   - [Bài 1: Kiểm chứng Phạm vi (Scope) & Tái khai báo (var vs let vs const)](#bài-1-kiểm-chứng-phạm-vi-scope--tái-khai-báo-var-vs-let-vs-const)
   - [Bài 2: Bản chất của const với Kiểu Primitive vs Mảng/Object](#bài-2-bản-chất-của-const-với-kiểu-primitive-vs-mảngobject)
   - [Bài 3: Nhận diện 8 Kiểu dữ liệu & Quy ước đặt tên biến chuẩn](#bài-3-nhận-diện-8-kiểu-dữ-liệu--quy-ước-đặt-tên-biến-chuẩn)
3. [Cấp Độ 2 — Trung Bình](#cấp-độ-2--trung-bình)
   - [Bài 4: Giải mã 5 tình huống kinh điển giá trị "undefined" xuất hiện](#bài-4-giải-mã-5-tình-huống-kinh-điển-giá-trị-undefined-xuất-hiện)
   - [Bài 5: Phân biệt thực tế Null vs Undefined (Hệ thống Giỏ hàng & Khuyến mãi)](#bài-5-phân-biệt-thực-tế-null-vs-undefined-hệ-thống-giỏ-hàng--khuyến-mãi)
   - [Bài 6: Cạm bẫy ép kiểu ngầm định giữa String và Number](#bài-6-cạm-bẫy-ép-kiểu-ngầm-định-giữa-string-và-number)
4. [Cấp Độ 3 — Thực Chiến / Nâng Cao](#cấp-độ-3--thực-chiến--nâng-cao)
   - [Bài 7: Phòng khám Dr. JavaScript — Bộ chẩn đoán kiểu dữ liệu toàn diện (4 Ca Bệnh Khó)](#bài-7-xây-dựng-hàm-kiểm-tra-kiểu-chuẩn-xác-100-getexacttype)
   - [Bài 8: Hàm xử lý dữ liệu phòng thủ có kiểm tra kiểu dữ liệu an toàn](#bài-8-hàm-xử-lý-dữ-liệu-phòng-thủ-có-kiểm-tra-kiểu-dữ-liệu-an-toàn)

---

<a id="lý-thuyết-cốt-lõi-cần-nhớ"></a>
## 1. Lý Thuyết Cốt Lõi Cần Nhớ

```text
1. Khai báo biến:
   - var   : Function Scope, cho phép khai báo lại, hoisting với undefined (CẤM DÙNG)
   - let   : Block Scope, cho phép gán lại, nằm trong TDZ (Dùng khi giá trị cần thay đổi)
   - const : Block Scope, KHÔNG cho phép gán lại nhãn biến, nằm trong TDZ (ƯU TIÊN 100%)

2. 8 Kiểu dữ liệu JavaScript:
   - 7 Kiểu nguyên thủy (Primitive): String, Number, BigInt, Boolean, Undefined, Null, Symbol
   - 1 Kiểu tham chiếu (Reference): Object (chứa Array, Function, Map, Set...)

3. Bẫy typeof kinh điển:
   - typeof null === "object"     (Bug lịch sử từ 1995 -> Dùng value === null để kiểm tra)
   - typeof [] === "object"       (Array là Object -> Dùng Array.isArray() để kiểm tra)
   - typeof NaN === "number"      (NaN là kiểu số nhưng không hợp lệ -> Dùng Number.isNaN())
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="cấp-độ-1--cơ-bản"></a>
## 2. Cấp Độ 1 — Cơ Bản

<a id="bài-1-kiểm-chứng-phạm-vi-scope--tái-khai-báo-var-vs-let-vs-const"></a>
### Bài 1: Kiểm chứng Phạm vi (Scope) & Tái khai báo (var vs let vs const)

**Mô tả:**
Kiểm tra khả năng truy cập biến bên ngoài khối lệnh `{}` và tính chất tái khai báo của các từ khóa.

**Yêu cầu:**
1. Khởi tạo một khối lệnh `{}` chứa:
   ```javascript
   {
       var bienVar = "Tôi là var";
       let bienLet = "Tôi là let";
       const bienConst = "Tôi là const";
   }
   ```
2. Ra ngoài khối lệnh `{}`, in lần lượt 3 biến này. Bọc các câu lệnh in `bienLet` và `bienConst` trong khối `try...catch` để chương trình không bị dừng đột ngột khi gặp lỗi `ReferenceError`.
3. Khai báo `var x = 10;` rồi viết tiếp `var x = 20;` trong cùng phạm vi. So sánh với `let`/`const` và giải thích lý do `var` bị cấm dùng.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-2-bản-chất-của-const-với-kiểu-primitive-vs-mảngobject"></a>
### Bài 2: Bản chất của const với Kiểu Primitive vs Mảng/Object

**Mô tả:**
Hiểu rõ nguyên lý: `const` khóa chiếc nhãn biến (địa chỉ tham chiếu) chứ **không khóa ruột** của mảng hoặc đối tượng.

**Yêu cầu:**
1. Khai báo `const score = 100;`. Dùng `try...catch` để thử gán lại `score = 150;` và bắt lỗi `TypeError`.
2. Cho mảng ban đầu:
   ```javascript
   const friend = ["An", "Bình"];
   ```
   Thực hiện tuần tự:
   - Thêm `"Cường"` vào cuối mảng (`push`).
   - Thêm `"Dũng"` vào đầu mảng (`unshift`).
   - Sửa phần tử đầu tiên thành `"Minh"`.
   - Xóa phần tử đầu mảng (`shift`) và cuối mảng (`pop`).
   - Xóa 1 phần tử tại vị trí index 1 (`splice`).
   - Thử gán lại `friend = ["Nam", "Lan"]` trong `try...catch` để quan sát lỗi.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-3-nhận-diện-8-kiểu-dữ-liệu--quy-ước-đặt-tên-biến-chuẩn"></a>
### Bài 3: Nhận diện 8 Kiểu dữ liệu & Quy ước đặt tên biến chuẩn

**Mô tả:**
Khởi tạo các biến đại diện cho 8 kiểu dữ liệu trong JavaScript và áp dụng quy ước đặt tên chuẩn Clean Code quốc tế.

**Yêu cầu:**
1. Khai báo 8 biến chứa 8 kiểu dữ liệu khác nhau:
   - `String`: tên người dùng
   - `Number`: tuổi hoặc đơn giá
   - `BigInt`: số nguyên lớn có đuôi `n` (ví dụ `9007199254740991n`)
   - `Boolean`: trạng thái tài khoản kích hoạt (bắt đầu bằng `is`, `has`, `can`)
   - `Undefined`: biến khai báo chưa gán giá trị
   - `Null`: biến chủ động gán `null`
   - `Symbol`: mã định danh độc bản duy nhất `Symbol("id")`
   - `Object`: đối tượng người dùng `{ name: "...", age: ... }`
2. In ra giá trị và `typeof` của từng biến.
3. Sửa lại các biến sai quy ước đặt tên sau đây theo chuẩn Clean Code:
   ```javascript
   let login = true;              // ❌ Boolean
   let friends = { name: "An" }; // ❌ Object đơn lẻ nhưng đặt số nhiều
   let item = ["Áo", "Quần"];    // ❌ Mảng nhiều món nhưng đặt số ít
   let calc = function() {};      // ❌ Hàm đặt tên viết tắt cụt lủn
   ```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="cấp-độ-2--trung-bình"></a>
## 3. Cấp Độ 2 — Trung Bình

<a id="bài-4-giải-mã-5-tình-huống-kinh-điển-giá-trị-undefined-xuất-hiện"></a>
### Bài 4: Giải mã 5 tình huống kinh điển giá trị "undefined" xuất hiện

**Mô tả:**
`undefined` là giá trị đặc trưng xuất hiện tự động trong JavaScript. Hãy viết code tái hiện và giải thích 5 tình huống:

**Yêu cầu tái hiện:**
1. **Tình huống 1:** Biến được khai báo bằng `let` nhưng chưa được gán giá trị khởi tạo.
2. **Tình huống 2:** Một hàm thực hiện tính toán nhưng không có lệnh `return` (hoặc `return;` trống).
3. **Tình huống 3:** Gọi hàm tính giảm giá `calculateDiscount(price, discountRate)` nhưng truyền thiếu đối số `discountRate`.
4. **Tình huống 4:** Truy cập vào thuộc tính không tồn tại trên một đối tượng:
   ```javascript
   let product = { name: "iPhone 15", price: 25000000 };
   console.log(product.color); // In ra gì?
   ```
5. **Tình huống 5:** Truy cập phần tử tại chỉ số không tồn tại trong mảng:
   ```javascript
   let colors = ["Đỏ", "Xanh", "Vàng"];
   console.log(colors[10]); // In ra gì?
   console.log(colors[-1]); // In ra gì trong JS?
   ```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-5-phân-biệt-thực-tế-null-vs-undefined-hệ-thống-giỏ-hàng--khuyến-mãi"></a>
### Bài 5: Phân biệt thực tế Null vs Undefined (Hệ thống Giỏ hàng & Khuyến mãi)

**Mô tả:**
Xây dựng logic phân biệt rạch ròi giữa trạng thái `null` (chủ động để rỗng) và `undefined` (chưa xác định) trong ứng dụng thương mại điện tử.

**Yêu cầu:**
1. Viết hàm `checkCartStatus(cart)`:
   - Nếu `cart === null`: Trả về `"🛒 Giỏ hàng chưa được khởi tạo (null)"`
   - Nếu `cart === undefined`: Trả về `"❓ Trạng thái giỏ hàng không xác định (undefined)"`
   - Nếu `cart` là object có mảng rỗng `items: []`: Trả về `"📭 Giỏ hàng đang trống"`
   - Nếu có sản phẩm: Trả về `"🛍️ Giỏ hàng có X sản phẩm"`
2. Viết hàm `applyCoupon(price, couponCode)`:
   - Nếu `couponCode == null` (bắt cả `null` và `undefined`): Trả về nguyên giá `price` (không áp mã).
   - Nếu `couponCode === "GIAM10"`: Giảm 10%.
   - Nếu mã không tồn tại: Báo lỗi mã không hợp lệ.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-6-cạm-bẫy-ép-kiểu-ngầm-định-giữa-string-và-number"></a>
### Bài 6: Cạm bẫy ép kiểu ngầm định giữa String và Number

**Mô tả:**
Phân tích hiện tượng Type Coercion giữa phép cộng `+` (ghép chuỗi) và các phép toán số học khác (`-`, `*`, `/`).

**Yêu cầu:**
1. Dự đoán và kiểm chứng kết quả của các biểu thức sau:
   ```javascript
   console.log("5" + 3);       // Kết quả?
   console.log("5" + 3 + 2);   // Kết quả?
   console.log(5 + 3 + "2");   // Kết quả?
   console.log("10" - 3);      // Kết quả?
   console.log("10" * 2);      // Kết quả?
   console.log("abc" - 1);     // Kết quả?
   ```
2. So sánh `null == undefined` vs `null === undefined` và giải thích bản chất khác biệt.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="cấp-độ-3--thực-chiến--nâng-cao"></a>
## 4. Cấp Độ 3 — Thực Chiến / Nâng Cao

<a id="bài-7-xây-dựng-hàm-kiểm-tra-kiểu-chuẩn-xác-100-getexacttype"></a>
### Bài 7: Phòng Khám Dr. JavaScript — Bộ Chẩn Đoán Kiểu Dữ Liệu Toàn Diện (4 Ca Bệnh Khó)

**Mô tả:**
Tại phòng khám của **Dr. JavaScript**, mỗi giá trị là một "bệnh nhân" cần được xác định danh tính. Bạn hãy viết bộ công cụ chẩn đoán giúp giải quyết triệt để **"4 Ca Bệnh Khó Lường"** mà `typeof` không thể phân biệt:
1. **Ca 1 (Number):** `typeof NaN === "number"` $\rightarrow$ Cần loại trừ `NaN`.
2. **Ca 2 (Null):** `typeof null === "object"` $\rightarrow$ Cần so sánh trực tiếp `=== null`.
3. **Ca 3 (Array):** `typeof [] === "object"` $\rightarrow$ Cần dùng `Array.isArray()`.
4. **Ca 4 (Plain Object):** Trùng cả `null` lẫn `Array` $\rightarrow$ Cần loại trừ cả hai.

**Yêu cầu 1: Viết 4 hàm chẩn đoán chuyên dụng (Type Predicates):**
- `isRealNumber(val)`: Trả về `true` nếu là số hợp lệ (loại trừ `NaN` và `Infinity` bằng `Number.isFinite`).
- `isPureNull(val)`: Trả về `true` nếu đúng là `null`.
- `isTrueArray(val)`: Trả về `true` nếu là Mảng (`Array.isArray`).
- `isPureObject(val)`: Trả về `true` nếu là Đối tượng thuần túy (`{}`) — không phải `null` và không phải `Array`.

**Yêu cầu 2: Viết hàm `diagnosePatient(patient)` trả về hồ sơ bệnh án chi tiết:**
- Nhận vào bất kỳ giá trị nào và trả về tên kiểu chuẩn xác 100%: `"string"`, `"number"`, `"nan"`, `"infinity"`, `"boolean"`, `"undefined"`, `"null"`, `"array"`, `"object"`, `"function"`, `"bigint"`, `"symbol"`.
- Thử nghiệm với danh sách bệnh nhân mẫu:
  ```javascript
  const patients = [
    "Dr. JavaScript", 42, NaN, Infinity, true,
    undefined, null, [1, 2, 3], { name: "John", age: 30 },
    function greet() {}, 9007199254740991n, Symbol("patient_id")
  ];
  ```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="bài-8-hàm-xử-lý-dữ-liệu-phòng-thủ-có-kiểm-tra-kiểu-dữ-liệu-an-toàn"></a>
### Bài 8: Hàm xử lý dữ liệu phòng thủ có kiểm tra kiểu dữ liệu an toàn

**Mô tả:**
Viết hàm tính tuổi `calculateAge(currentYear, birthYear)` theo phong cách Clean Code phòng thủ (Defensive Programming), loại bỏ triệt để lỗi `NaN`.

**Yêu cầu:**
1. Kiểm tra cả 2 tham số phải có kiểu là `number`.
2. Kiểm tra các số phải là số hữu hạn (`Number.isFinite`), không được là `NaN` hoặc `Infinity`.
3. Kiểm tra logic: `birthYear > 0`, `currentYear >= birthYear`.
4. Nếu hợp lệ: Trả về số tuổi chính xác.
5. Nếu không hợp lệ: Trả về thông báo lỗi chi tiết, không để chương trình ném ra `NaN`.

[⬆️ Quay lại Mục lục](#mục-lục)
