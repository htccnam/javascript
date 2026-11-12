# 06 - Toán Tử Logical Trong JavaScript (Bản Chất, Kết Hợp & Cạm Bẫy)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng một buổi chiều bạn cùng mẹ chuẩn bị cho bữa tối gia đình:
> - **Toán tử AND (`&&`) - Bữa cơm cá kho:** Mẹ quyết định: *"Nếu hôm nay mua được **cá tươi** VÀ có **rau xanh**, nhà mình sẽ làm món cá kho ăn kèm canh rau"*. Bữa cơm chuẩn chỉ diễn ra khi **CẢ HAI** điều kiện (cá VÀ rau) đều được đáp ứng đầy đủ. Thiếu bất kỳ thứ nào $\rightarrow$ Kế hoạch thất bại!
> - **Toán tử OR (`||`) - Món canh giải nhiệt:** Mẹ nói thêm: *"Chỉ cần có **bí đỏ** HOẶC có **rau muống**, mẹ sẽ nấu được một nồi canh ngon"*. Bữa ăn vẫn trọn vẹn chỉ cần **ÍT NHẤT MỘT TRONG HAI** nguyên liệu sẵn sàng!
> - **Toán tử NOT (`!`) - Người kén ăn:** Em bạn không ăn được cay (`!isSpicyLover`). Mẹ phải kiểm tra để loại bỏ ớt ra khỏi đĩa thức ăn.

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết (Prerequisites)
> Để hiểu sâu bản chất toán tử logic, cơ chế đoản mạch và các cạm bẫy trong bài này, bạn bắt buộc phải nắm vững:
> 1. **Khái niệm cơ bản về Short-Circuit (Ngắn mạch)** tại [05 - Rẽ Nhánh & Hệ Thống Toán Tử (Mục 7)](file:///d:/github/studyProgram/javascript/docs/05-conditionals-and-operators.md#7-toán-tử-logic-cơ-bản-đoản-mạch-short-circuit):
>    - *Vì sao bắt buộc?* Bài 06 đào sâu cơ chế `&&` và `||` không chỉ trả về boolean mà trả về **chính giá trị của toán hạng dừng lại**. Nếu chưa nắm khái niệm cơ bản ở Bài 05, bạn sẽ bị bất ngờ khi thấy `1 && "hello"` trả về `"hello"`.
> 2. **Toán tử `??` vs `||`** tại [05 - Rẽ Nhánh & Hệ Thống Toán Tử (Mục 8.2)](file:///d:/github/studyProgram/javascript/docs/05-conditionals-and-operators.md#82-nullish-coalescing-operator-):
>    - *Vì sao bắt buộc?* Bài 06 phân tích cạm bẫy cú pháp: Bắt buộc dùng dấu ngoặc đơn `()` khi kết hợp `??` với `&&`/`||` để tránh lỗi cú pháp `SyntaxError`.
> 3. **Độ ưu tiên toán tử (Operator Precedence)** tại [05 - Rẽ Nhánh & Hệ Thống Toán Tử (Mục 9)](file:///d:/github/studyProgram/javascript/docs/05-conditionals-and-operators.md#9-bảng-độ-ưu-tiên-toán-tử-operator-precedence):
>    - *Vì sao bắt buộc?* Giúp xác định thứ tự chạy của biểu thức phức tạp kết hợp giữa `!`, `&&`, `||` và toán tử so sánh.
> * **Đích đến tiếp theo:** Khái niệm toán tử `!` và `!!` ở bài này là chìa khóa mở ra [07 - Truthy & Falsy Trong JavaScript](file:///d:/github/studyProgram/javascript/docs/07-truthy-falsy.md).
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

## Mục Lục
<a id="mục-lục"></a>

1. [Toán Tử Logical Là Gì?](#1-toán-tử-logical-là-gì)
2. [Toán Tử AND (&&) — Tất Cả Phải Cùng Đúng](#2-toán-tử-and-tất-cả-phải-cùng-đúng)
3. [Toán Tử OR (||) — Chỉ Cần Một Điều Kiện Đúng](#3-toán-tử-or-chỉ-cần-một-điều-kiện-đúng)
4. [Toán Tử NOT (!) & Kỹ Thuật Double NOT (!!)](#4-toán-tử-not-kỹ-thuật-double-not)
5. [Kết Hợp Nhiều Toán Tử Logical](#5-kết-hợp-nhiều-toán-tử-logical)
   - [5.1. Kết hợp nhiều toán tử AND (&&)](#5-1-kết-hợp-nhiều-toán-tử-and)
   - [5.2. Kết hợp nhiều toán tử OR (||)](#5-2-kết-hợp-nhiều-toán-tử-or)
   - [5.3. Kết hợp đan xen AND và OR](#5-3-kết-hợp-đan-xen-and-và-or)
6. [Thứ Tự Ưu Tiên Của Các Toán Tử Logic](#6-thứ-tự-ưu-tiên-của-các-toán-tử-logic)
7. [Bản Chất Cơ Chế Đoản Mạch (Short-Circuit Evaluation)](#7-bản-chất-cơ-chế-đoản-mạch-short-circuit-evaluation)
   - [7.1. Cơ chế đoản mạch là gì?](#71-cơ-chế-đoản-mạch-là-gì)
   - [7.2. Giá trị trả về thực tế của && và || (Không chỉ là true/false!)](#72-giá-trị-trả-về-thực-tế-của-toán-tử)
   - [7.3. Ứng dụng thực tế kinh điển (Guarding, React Rendering, Fallback)](#73-ứng-dụng-thực-tế-kinh-điển)
8. [Toán Tử Nullish Coalescing (??) — Xử Lý Giá Trị Mặc Định ES2020](#8-toán-tử-nullish-coalescing-xử-lý-giá-trị-mặc-định-es2020)
   - [8.1. Khái niệm & Cú pháp cơ bản](#81-khái-niệm-cú-pháp-cơ-bản)
   - [8.2. Ví dụ sử dụng cơ bản](#82-ví-dụ-sử-dụng-cơ-bản)
   - [8.3. Tình huống thực tế: Vấn đề của toán tử || với giá trị Falsy trong mảng](#83-tình-huống-thực-tế-vấn-đề-của-toán-tử-với-giá-trị-falsy-trong-mảng)
   - [8.4. Cách khắc phục: if-else vs Toán tử 3 ngôi vs ??](#84-cách-khắc-phục-if-else-vs-toán-tử-3-ngôi-vs)
   - [8.5. So sánh toàn diện Nullish Coalescing (??) và OR (||)](#85-so-sánh-toàn-diện-nullish-coalescing-và-or)
   - [8.6. Cơ chế đoản mạch (Short-Circuit Evaluation) của ??](#86-cơ-chế-đoản-mạch-short-circuit-evaluation-của)
   - [8.7. Cạm bẫy cú pháp: Bắt buộc dùng dấu ngoặc đơn () khi kết hợp với AND/OR](#87-cạm-bẫy-cú-pháp-bắt-buộc-dùng-dấu-ngoặc-đơn-khi-kết-hợp-với-and-or)
9. [Các Cạm Bẫy Thường Gặp Nhất (Common Pitfalls)](#9-các-cạm-bẫy-thường-gặp-nhất-common-pitfalls)
   - [Bẫy 1: Dùng nhầm toán tử Bitwise & và | thay vì && và ||](#bẫy-1-dùng-nhầm-toán-tử-bitwise-và-thay-vì-và)
   - [Bẫy 2: Bỏ quên dấu ngoặc tròn khi kết hợp && và ||](#bẫy-2-bỏ-quên-dấu-ngoặc-tròn-khi-kết-hợp-và)
   - [Bẫy 3: Phép gán giá trị mặc định của || bị lỗi với số 0 và chuỗi rỗng](#bẫy-3-phép-gán-giá-trị-mặc-định-của-bị-lỗi-với-số-0-và-chuỗi-rỗng)
10. [Bảng So Sánh Tổng Kết Cốt Lõi](#10-bảng-so-sánh-tổng-kết-cốt-lõi)

---

<a id="1-toán-tử-logical-là-gì"></a>
## 1. Toán Tử Logical Là Gì?
Trong lập trình JavaScript, **toán tử logical (toán tử luận lý)** là các ký hiệu đặc biệt dùng để kết hợp hoặc biến đổi một hay nhiều biểu thức điều kiện. Kết quả của chúng giúp luồng chương trình đưa ra quyết định rẽ nhánh (`if...else`, vòng lặp) chính xác.

JavaScript cung cấp 4 toán tử logical chính:
- **`&&` (Logical AND):** Phép hội logic (VÀ).
- **`||` (Logical OR):** Phép tuyển logic (HOẶC).
- **`!` (Logical NOT):** Phép phủ định (KHÔNG / ĐẢO NGƯỢC).
- **`??` (Nullish Coalescing):** Phép gán giá trị mặc định an toàn cho `null` và `undefined` (từ ES2020).

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="2-toán-tử-and-tất-cả-phải-cùng-đúng"></a>
## 2. Toán Tử AND (&&) — Tất Cả Phải Cùng Đúng
Biểu thức `expr1 && expr2` trả về `true` **khi và chỉ khi CẢ HAI vế đều là `true`**. Nếu có bất kỳ vế nào là `false`, toàn bộ biểu thức lập tức trả về `false`.

### Bảng chân trị của phép AND:
| Vế trái (`A`) | Vế phải (`B`) | Kết quả (`A && B`) |
| :---: | :---: | :---: |
| `true` | `true` | **`true`** |
| `true` | `false` | **`false`** |
| `false` | `true` | **`false`** |
| `false` | `false` | **`false`** |

### Ví dụ thực tế: Kế hoạch đi dã ngoại cuối tuần
Để đi picnic, thời tiết phải ấm áp (trên $20^\circ\text{C}$) **VÀ** hôm nay phải là ngày nghỉ:

```javascript
let temperature = 25;  // Nhiệt độ 25 độ C
let dayOff = "Sunday"; // Ngày nghỉ là Chủ Nhật
let today = "Sunday";  // Hôm nay là Chủ Nhật

if (temperature > 20 && today === dayOff) {
    console.log("Đi picnic thôi!");
} else {
    console.log("Ở nhà nghỉ ngơi!");
}
// Kết quả: "Đi picnic thôi!"
```

### Kỹ thuật Clean Code: Tách biến mô tả ý nghĩa (Self-documenting code)
Thay vì viết một biểu thức điều kiện dài ngoằng trong `if`, hãy tách chúng thành các biến boolean có tên rõ nghĩa:

```javascript
const isWeatherGood = temperature > 20;
const isDayOff = today === dayOff;

if (isWeatherGood && isDayOff) {
    console.log("Đi picnic thôi!");
}
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="3-toán-tử-or-chỉ-cần-một-điều-kiện-đúng"></a>
## 3. Toán Tử OR (||) — Chỉ Cần Một Điều Kiện Đúng
Biểu thức `expr1 || expr2` trả về `true` **nếu ÍT NHẤT MỘT TRONG HAI vế là `true`**. Nó chỉ trả về `false` khi toàn bộ các vế đều là `false`.

### Bảng chân trị của phép OR:
| Vế trái (`A`) | Vế phải (`B`) | Kết quả (`A || B`) |
| :---: | :---: | :---: |
| `true` | `true` | **`true`** |
| `true` | `false` | **`true`** |
| `false` | `true` | **`true`** |
| `false` | `false` | **`false`** |

### Ví dụ thực tế: Chọn phim giải trí
Bạn muốn xem phim cuối tuần. Chỉ cần rạp có chiếu phim hài **HOẶC** phim hành động là bạn sẽ xem:

```javascript
let isComedyAvailable = true;   // Có phim hài
let isActionAvailable = false;  // Không có phim hành động

if (isComedyAvailable || isActionAvailable) {
    console.log("Xem phim vui vẻ!");
} else {
    console.log("Chọn hoạt động khác!");
}
// Kết quả: "Xem phim vui vẻ!"
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="4-toán-tử-not-kỹ-thuật-double-not"></a>
## 4. Toán Tử NOT (!) & Kỹ Thuật Double NOT (!!)

### 4.1. Phủ định giá trị với `!`
Toán tử `!` đặt trước một biểu thức sẽ đảo ngược giá trị logic:
- `!true` $\rightarrow$ `false`
- `!false` $\rightarrow$ `true`

```javascript
let isCatLover = false;

if (!isCatLover) {
    console.log("Tôi không thích mèo!");
}
// Kết quả: "Tôi không thích mèo!"
```

### 4.2. Ép kiểu Boolean tường minh với `!!` (Double NOT)
Dấu `!` thứ nhất đảo giá trị thành boolean ngược. Dấu `!` thứ hai đảo ngược lại một lần nữa, giúp chuyển đổi bất kỳ giá trị nào thành kiểu `boolean` (`true`/`false`) chuẩn xác:

```javascript
console.log(!!"Hello"); // true (Chuỗi có ký tự là Truthy)
console.log(!!0);       // false (Số 0 là Falsy)
console.log(!!null);    // false
console.log(!!{});      // true (Object là Truthy)
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="5-kết-hợp-nhiều-toán-tử-logical"></a>
## 5. Kết Hợp Nhiều Toán Tử Logical

Trong các bài toán thực tế, một quyết định thường phụ thuộc vào nhiều điều kiện đan xen phức tạp.

<a id="5-1-kết-hợp-nhiều-toán-tử-and"></a>
### 5.1. Kết hợp nhiều toán tử AND (`&&`)
**Tình huống:** Đủ điều kiện đăng ký khóa học lập trình nâng cao khi thỏa mãn đồng thời:
1. Đủ từ 16 tuổi trở lên (`age >= 16`).
2. Có kỹ năng máy tính cơ bản (`hasBasicComputerSkills === true`).
3. Đã điền đơn đăng ký (`isRegistered === true`).

```javascript
let age = 17;
let hasBasicComputerSkills = true;
let isRegistered = true;

if (age >= 16 && hasBasicComputerSkills && isRegistered) {
    console.log("Đủ điều kiện tham gia khóa học!");
} else {
    console.log("Chưa đủ điều kiện tham gia.");
}
// Kết quả: "Đủ điều kiện tham gia khóa học!"
```

---

<a id="5-2-kết-hợp-nhiều-toán-tử-or"></a>
### 5.2. Kết hợp nhiều toán tử OR (`||`)
**Tình huống:** Một dịch vụ xem phim trực tuyến cho phép xem nội dung VIP nếu người dùng đáp ứng **ít nhất 1 trong 3** tiêu chuẩn:
1. Là thành viên VIP (`isVipMember`).
2. Sở hữu mã quà tặng khuyến mãi (`hasGiftCode`).
3. Đã thanh toán gói theo ngày (`hasPaidSubscription`).

```javascript
let isVipMember = false;
let hasGiftCode = true;
let hasPaidSubscription = false;

if (isVipMember || hasGiftCode || hasPaidSubscription) {
    console.log("Mời bạn thưởng thức nội dung VIP!");
} else {
    console.log("Vui lòng nâng cấp tài khoản để xem phim này.");
}
// Kết quả: "Mời bạn thưởng thức nội dung VIP!"
```

---

<a id="5-3-kết-hợp-đan-xen-and-và-or"></a>
### 5.3. Kết hợp đan xen AND và OR
**Tình huống:** Một sàn thương mại điện tử tặng quà đặc biệt cho khách hàng khi:
- (Khách hàng mới **HOẶC** là thành viên VIP) **VÀ** đơn hàng phải trên $500.000\text{ VNĐ}$.

```javascript
let isNewUser = true;
let isVipMember = false;
let purchaseAmount = 600000;

// Sử dụng dấu ngoặc tròn () để gom nhóm biểu thức OR:
if ((isNewUser || isVipMember) && purchaseAmount > 500000) {
    console.log("Chúc mừng! Đơn hàng đủ điều kiện nhận quà tặng.");
} else {
    console.log("Đơn hàng chưa đủ điều kiện nhận quà.");
}
// Kết quả: "Chúc mừng! Đơn hàng đủ điều kiện nhận quà tặng."
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="6-thứ-tự-ưu-tiên-của-các-toán-tử-logic"></a>
## 6. Thứ Tự Ưu Tiên Của Các Toán Tử Logic

Khi một dòng lệnh chứa nhiều toán tử khác nhau mà không có dấu ngoặc tròn, JavaScript thực thi theo bảng xếp hạng độ ưu tiên nghiêm ngặt từ cao xuống thấp:

$$\mathbf{!} \text{ (NOT - Cao nhất)} \quad \longrightarrow \quad \mathbf{\&\&} \text{ (AND - Thứ nhì)} \quad \longrightarrow \quad \mathbf{||} \text{ (OR - Thấp nhất)}$$

> [!IMPORTANT]
> **Toán tử `&&` luôn có độ ưu tiên cao hơn toán tử `||`!**
> Nó giống hệt như phép nhân ($\times$) có độ ưu tiên cao hơn phép cộng ($+$) trong toán học đại số:
> $A + B \times C = A + (B \times C)$.
> Tương tự: `A || B && C` tương đương với `A || (B && C)`.

### Phân tích biểu thức minh họa:
```javascript
const result = !false || false && false;

// Bước 1: Toán tử NOT (!) có độ ưu tiên cao nhất:
// !false -> true
// Biểu thức trở thành: true || false && false

// Bước 2: Toán tử AND (&&) có độ ưu tiên cao hơn OR (||):
// false && false -> false
// Biểu thức trở thành: true || false

// Bước 3: Toán tử OR (||) thực thi sau cùng:
// true || false -> true

console.log(result); // true
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="7-bản-chất-cơ-chế-đoản-mạch-short-circuit-evaluation"></a>
## 7. Bản Chất Cơ Chế Đoản Mạch (Short-Circuit Evaluation)

<a id="71-cơ-chế-đoản-mạch-là-gì"></a>
### 7.1. Cơ chế đoản mạch là gì?

JavaScript thực thi các biểu thức logic từ **trái sang phải** và sở hữu cơ chế tối ưu hóa hiệu năng gọi là **Đoản mạch (Short-circuit)**: Khi kết quả của toàn bộ biểu thức đã được ngã ngũ ngay từ vế đầu tiên, JavaScript **sẽ dừng lại ngay lập tức và không tính toán vế còn lại nữa**.

- **Với toán tử `&&`:** Chỉ cần gặp một vế là **Falsy**, cả biểu thức chắc chắn không thể thỏa mãn $\rightarrow$ **Dừng ngay lập tức**.
- **Với toán tử `||`:** Chỉ cần gặp một vế là **Truthy**, cả biểu thức chắc chắn đã thỏa mãn $\rightarrow$ **Dừng ngay lập tức**.

```javascript
function sendEmailNotification() {
    console.log("Đang gửi email thông báo...");
    return true;
}

// Vế trái là false -> Đoản mạch! Hàm sendEmailNotification KHÔNG BAO GIỜ bị gọi:
const shouldNotify = false && sendEmailNotification();
console.log(shouldNotify); // false (Không có thông báo nào được gửi)
```

---

<a id="72-giá-trị-trả-về-thực-tế-của-toán-tử"></a>
### 7.2. Giá trị trả về thực tế của && và || (Không chỉ là true/false!)

> [!IMPORTANT]
> **Điểm đặc biệt nhất trong JavaScript:**
> Trong nhiều ngôn ngữ khác (C, C++, Java), toán tử `&&` và `||` luôn ép kết quả về boolean `true` hoặc `false`.
> Nhưng trong JavaScript, các toán tử này hoạt động như một **bộ chọn giá trị (Value Selector)**: **Chúng trả về chính xác giá trị thực tế của toán hạng dừng lại**, chứ không hề ép kiểu về `true` hay `false`!

#### 1. Cơ chế trả về của `A && B`:
- Nếu `A` là **Falsy**: JS dừng lại ngay lập tức và **trả về chính giá trị của `A`**!
- Nếu `A` là **Truthy**: JS đi tiếp sang `B` và **trả về chính giá trị của `B`** (bất kể `B` là gì)!

```javascript
// A là Truthy -> Trả về giá trị của B:
console.log(true && "Hello");       // "Hello"
console.log("Nam" && 100);          // 100
console.log("Nam" && false);        // false
console.log("Nam" && null);         // null
console.log("Nam" && { id: 1 });    // { id: 1 }

// A là Falsy -> Dừng ngay, trả về chính giá trị của A:
console.log(false && "Hello");      // false
console.log(0 && "Hello");          // 0 (Không phải false, mà là số 0!)
console.log("" && "Hello");         // "" (Chuỗi rỗng)
console.log(null && "Hello");       // null
console.log(undefined && "Hello");  // undefined
```

#### 2. Cơ chế trả về của `A || B`:
- Nếu `A` là **Truthy**: JS dừng lại ngay lập tức và **trả về chính giá trị của `A`**!
- Nếu `A` là **Falsy**: JS đi tiếp sang `B` và **trả về chính giá trị của `B`**!

```javascript
// A là Truthy -> Dừng ngay, trả về chính giá trị của A:
console.log("Nam" || "Khách");      // "Nam"
console.log(123 || "Fallback");     // 123
console.log(true || "Fallback");    // true

// A là Falsy -> Đi tiếp, trả về giá trị của B:
console.log("" || "Khách");         // "Khách"
console.log(null || "Khách");       // "Khách"
console.log(undefined || 500);      // 500
console.log(false || "Fallback");   // "Fallback"
```

---

<a id="73-ứng-dụng-thực-tế-kinh-điển"></a>
### 7.3. Ứng dụng thực tế kinh điển (Guarding, React Rendering, Fallback)

Chính nhờ cơ chế trả về giá trị thực tế kết hợp với đoản mạch, lập trình viên JavaScript sử dụng `&&` và `||` trong thực tế dự án vô cùng rộng rãi:

#### Ứng dụng 1: Kỹ thuật Guarding (Phòng thủ truy cập thuộc tính an toàn)
Trước khi chuẩn ES2020 ra mắt toán tử Optional Chaining (`?.`), lập trình viên luôn dùng `&&` để tránh lỗi sập ứng dụng kinh điển `TypeError: Cannot read property of undefined`:

```javascript
const user = null; // Giả sử chưa load xong user từ API

// ❌ NGUY HIỂM: Gây sập app ngay lập tức!
// console.log(user.profile.name); // Uncaught TypeError: Cannot read property of null

// ✅ AN TOÀN: Dùng && để guard (nếu user là null -> dừng ngay, trả về null)
const userName = user && user.profile && user.profile.name;
console.log(userName); // null (App chạy êm ru, không hề bị crash!)
```

#### Ứng dụng 2: Conditional Rendering trong React / UI
Trong thư viện React, cú pháp `{condition && <Component />}` xuất hiện ở mọi dự án:

```jsx
// Nếu isLoggedIn là true -> Trả về <UserProfile /> để React vẽ lên màn hình
// Nếu isLoggedIn là false -> Trả về false (React tự bỏ qua, không vẽ gì)
function Header({ isLoggedIn, user }) {
    return (
        <nav>
            <h1>My Website</h1>
            {isLoggedIn && <UserProfile name={user.name} />}
        </nav>
    );
}
```

#### Ứng dụng 3: Fallback giá trị mặc định với `||`
```javascript
function getWelcomeMessage(customGreeting) {
    // Nếu truyền chuỗi -> Lấy customGreeting; nếu truyền undefined/rỗng -> Lấy "Xin chào"
    const greeting = customGreeting || "Xin chào";
    return `${greeting}, chúc bạn một ngày tốt lành!`;
}

console.log(getWelcomeMessage("Chào buổi sáng")); // "Chào buổi sáng, chúc bạn..."
console.log(getWelcomeMessage(""));               // "Xin chào, chúc bạn..."
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="8-toán-tử-nullish-coalescing-xử-lý-giá-trị-mặc-định-es2020"></a>
## 8. Toán Tử Nullish Coalescing (??) — Xử Lý Giá Trị Mặc Định ES2020

<a id="81-khái-niệm-cú-pháp-cơ-bản"></a>
### 8.1. Khái niệm & Cú pháp cơ bản

**Toán tử Nullish Coalescing (`??`)** là một toán tử logical trả về **toán hạng bên phải** khi toán hạng bên trái là `null` hoặc `undefined`. Ngược lại, nó sẽ trả về **toán hạng bên trái**.

Được giới thiệu chính thức từ chuẩn **ECMAScript 2020 (ES11)**, toán tử `??` cung cấp giải pháp tiện lợi và chuẩn xác nhất để xử lý các giá trị `null` và `undefined` mà **không làm mất** các giá trị Falsy hợp lệ khác như số `0`, chuỗi rỗng `""`, hay `false`.

#### Cú pháp sử dụng:
```javascript
let kết_quả = biến ?? giá_trị_mặc_định;
```
* **`biến`:** Giá trị bạn muốn kiểm tra.
* **`giá_trị_mặc_định`:** Giá trị sẽ được sử dụng nếu `biến` là `null` hoặc `undefined`.
* Nếu `biến` có **bất kỳ giá trị nào khác** ngoài `null` và `undefined` (kể cả `0`, `""`, `false`), giá trị của `biến` sẽ được giữ nguyên và sử dụng.

---

<a id="82-ví-dụ-sử-dụng-cơ-bản"></a>
### 8.2. Ví dụ sử dụng cơ bản

#### Ví dụ 1: Đặt giá trị mặc định khi `tenNguoiDung` là `null`
```javascript
let tenNguoiDung = null; // Giả sử tên người dùng trống
let macDinh = "Khách";

let tenHienThi = tenNguoiDung ?? macDinh;
console.log(tenHienThi); // "Khách"
// Ở đây, tenNguoiDung là null -> tenHienThi nhận giá trị "Khách" từ macDinh.
```

#### Ví dụ 2: Đặt giá trị mặc định khi `tenNguoiDung` là `undefined`
```javascript
let tenNguoiDung; // Biến chưa khởi tạo giá trị (undefined)
let macDinh = "Khách";

let tenHienThi = tenNguoiDung ?? macDinh;
console.log(tenHienThi); // "Khách"
// tenNguoiDung là undefined -> tenHienThi nhận giá trị "Khách" từ macDinh.
```

#### Ví dụ 3: Trường hợp người dùng có tên hợp lệ
```javascript
let tenNguoiDung = "Nguyễn Văn A";
let macDinh = "Khách";

let tenHienThi = tenNguoiDung ?? macDinh;
console.log(tenHienThi); // "Nguyễn Văn A"
// tenNguoiDung khác null và undefined -> lấy chính xác "Nguyễn Văn A".
```

---

<a id="83-tình-huống-thực-tế-vấn-đề-của-toán-tử-với-giá-trị-falsy-trong-mảng"></a>
### 8.3. Tình huống thực tế: Vấn đề của toán tử || với giá trị Falsy trong mảng

Hãy xem xét một bài toán thực tế thường gặp: Xây dựng hàm `getElement(array, index, defaultValue)` để lấy phần tử trong mảng theo chỉ số `index`. Nếu phần tử đó không tồn tại (`undefined`) hoặc là `null`, hàm sẽ trả về `defaultValue`.

#### Thử nghiệm 1: Sử dụng toán tử OR `||`
```javascript
function getElement(array, index, defaultValue) {
    return array[index] || defaultValue;
}

let colors = ["Red", "Green", "Blue"];

console.log(getElement(colors, 0, "Empty")); // "Red"
console.log(getElement(colors, 1, "Empty")); // "Green"
console.log(getElement(colors, 2, "Empty")); // "Blue"
console.log(getElement(colors, 3, "Empty")); // "Empty" (index 3 không tồn tại -> undefined -> lấy "Empty" -> đúng!)
```
Ban đầu, kết quả có vẻ hoàn toàn như mong đợi!

#### Thử nghiệm 2: Lỗi phát sinh khi mảng chứa số 0 (Falsy)
```javascript
let numbers = [1, 5, 0];

console.log(getElement(numbers, 0, "Empty")); // 1
console.log(getElement(numbers, 1, "Empty")); // 5
console.log(getElement(numbers, 2, "Empty")); // "Empty" (❌ SAI LOGIC!)
```
> [!WARNING]
> Tại vị trí `index = 2`, giá trị hợp lệ trong mảng là số `0`. Nhưng vì `0` là một giá trị **Falsy**, toán tử `||` coi đó là "không hợp lệ" và bỏ qua để lấy `defaultValue` $\rightarrow$ Kết quả in ra `"Empty"` thay vì `0`!

#### Thử nghiệm 3: Lỗi phát sinh khi mảng chứa chuỗi rỗng `""` (Falsy)
```javascript
let strings = ["Hello", ""];

console.log(getElement(strings, 0, "Empty")); // "Hello"
console.log(getElement(strings, 1, "Empty")); // "Empty" (❌ SAI LOGIC!)
```
Phần tử tại `index = 1` là chuỗi rỗng `""`. Chuỗi rỗng là một giá trị hợp lệ của người dùng nhập, nhưng vì `""` là **Falsy**, toán tử `||` nhảy sang lấy `"Empty"`.

---

<a id="84-cách-khắc-phục-if-else-vs-toán-tử-3-ngôi-vs"></a>
### 8.4. Cách khắc phục: if-else vs Toán tử 3 ngôi vs ??

Để chỉ kiểm tra đúng `null` và `undefined` mà không ảnh hưởng tới `0` hay `""`:

#### Cách 1: Dùng câu lệnh `if...else` truyền thống
```javascript
function getElement(array, index, defaultValue) {
    const value = array[index];
    if (value !== null && value !== undefined) {
        return value;
    }
    return defaultValue;
}
```

#### Cách 2: Dùng toán tử 3 ngôi (Ternary Operator)
```javascript
function getElement(array, index, defaultValue) {
    const value = array[index];
    const hasValue = value !== null && value !== undefined;
    return hasValue ? value : defaultValue;
}
```
Cả hai cách trên đều cho kết quả chính xác:
```javascript
console.log(getElement(["Hello", ""], 1, "Empty")); // "" (Chính xác!)
console.log(getElement([1, 2, 0], 2, "Empty"));      // 0  (Chính xác!)
```
Tuy nhiên, code phải viết dài dòng và lặp lại điều kiện `!== null && !== undefined`.

#### Cách 3: Sử dụng toán tử Nullish Coalescing `??` (Tối ưu tuyệt đối)
```javascript
function getElement(array, index, defaultValue) {
    return array[index] ?? defaultValue;
}

let strings = ["Hello", ""];
console.log(getElement(strings, 0, "Empty")); // "Hello"
console.log(getElement(strings, 1, "Empty")); // "" (Giữ nguyên chuỗi rỗng!)
console.log(getElement(strings, 2, "Empty")); // "Empty" (undefined -> fallback)

let numbers = [2, 0];
console.log(getElement(numbers, 0, "Empty")); // 2
console.log(getElement(numbers, 1, "Empty")); // 0 (Giữ nguyên số 0!)
console.log(getElement(numbers, 2, "Empty")); // "Empty" (undefined -> fallback)
```
Code trở nên ngắn gọn, thanh thoát, dễ đọc và thể hiện đúng 100% ý đồ logic của lập trình viên!

---

<a id="85-so-sánh-toàn-diện-nullish-coalescing-và-or"></a>
### 8.5. So sánh toàn diện Nullish Coalescing (??) và OR (||)

| Tiêu chí | Toán tử OR (`\|\|`) | Toán tử Nullish Coalescing (`??`) |
| :--- | :--- | :--- |
| **Quy tắc kích hoạt Fallback** | Kích hoạt khi vế trái là **bất kỳ giá trị Falsy nào** | **Chỉ kích hoạt** khi vế trái là `null` hoặc `undefined` |
| **Hành vi với số `0`** | ❌ Bị coi là Falsy $\rightarrow$ Nhảy sang vế phải | ✅ Coi là giá trị hợp lệ $\rightarrow$ Giữ nguyên `0` |
| **Hành vi với chuỗi rỗng `""`** | ❌ Bị coi là Falsy $\rightarrow$ Nhảy sang vế phải | ✅ Coi là giá trị hợp lệ $\rightarrow$ Giữ nguyên `""` |
| **Hành vi với `false`** | ❌ Bị coi là Falsy $\rightarrow$ Nhảy sang vế phải | ✅ Coi là giá trị hợp lệ $\rightarrow$ Giữ nguyên `false` |
| **Hành vi với `NaN`** | ❌ Bị coi là Falsy $\rightarrow$ Nhảy sang vế phải | ✅ Coi là giá trị hợp lệ $\rightarrow$ Giữ nguyên `NaN` |
| **Khi nào nên sử dụng?** | Khi muốn giá trị hợp lệ **bắt buộc phải mang tính Truthy** | Khi xử lý dữ liệu cấu trúc (mảng, object, API) mà các giá trị `0`, `""`, `false` là dữ liệu thực tế |

---

<a id="86-cơ-chế-đoản-mạch-short-circuit-evaluation-của"></a>
### 8.6. Cơ chế đoản mạch (Short-Circuit Evaluation) của ??

Tương tự như `&&` và `||`, toán tử `??` cũng sở hữu tính chất **Đoản mạch (Short-circuit)**:
* Toán tử `??` **chỉ tính toán vế thứ hai nếu vế thứ nhất là `null` hoặc `undefined`**.
* Nếu vế thứ nhất có giá trị khác `null` và `undefined`, JavaScript sẽ trả về ngay giá trị đó mà **không thèm đụng tới vế thứ hai**.

```javascript
let message = null;
// message là null -> Đi tiếp sang vế phải -> gọi hàm alert / console.log
message ?? console.log("Không có message!"); // In ra: "Không có message!"

let activeTitle = "Trang chủ";
function computeDefaultTitle() {
    console.log("Hàm tính toán tiêu đề phức tạp...");
    return "Tiêu đề mặc định";
}

// activeTitle đã có giá trị hợp lệ -> Dừng ngay lập tức!
// Hàm computeDefaultTitle() KHÔNG BAO GIỜ bị gọi:
const finalTitle = activeTitle ?? computeDefaultTitle();
console.log(finalTitle); // "Trang chủ"
```

---

<a id="87-cạm-bẫy-cú-pháp-bắt-buộc-dùng-dấu-ngoặc-đơn-khi-kết-hợp-với-and-or"></a>
### 8.7. Cạm bẫy cú pháp: Bắt buộc dùng dấu ngoặc đơn () khi kết hợp với AND/OR

> [!CAUTION]
> **Lỗi cú pháp (SyntaxError) phổ biến:**
> Trong JavaScript, bạn **KHÔNG ĐƯỢC PHÉP** dùng trực tiếp toán tử `??` chung với `&&` hoặc `||` mà không có dấu ngoặc đơn `()`:
> ```javascript
> // ❌ LỖI CÚ PHÁP NGAY LẬP TỨC:
> let result1 = value1 ?? value2 && value3; // SyntaxError: Cannot use '??' unparenthesized within '||' and '&&' expressions
> let result2 = value1 || value2 ?? value3; // SyntaxError
> ```

#### Cách khắc phục: Luôn dùng dấu ngoặc đơn `()` để định rõ độ ưu tiên
```javascript
// ✅ Cách 1: Ưu tiên gom nhóm ?? trước:
let result1 = (value1 ?? value2) && value3;

// ✅ Cách 2: Ưu tiên gom nhóm && trước:
let result2 = value1 ?? (value2 && value3);
```

#### Tại sao JavaScript lại đưa ra quy tắc cấm này?
Quy tắc này được đặt ra để **bảo vệ lập trình viên tránh các lỗi logic ngầm**:
* Cả `&&`, `||` và `??` đều có tính chất đoản mạch.
* Nếu JS tự ý quy định độ ưu tiên giữa `??` và `||`/`&&`, người đọc code sẽ rất dễ nhầm lẫn về thứ tự thực thi của biểu thức.
* Ép buộc lập trình viên phải đặt dấu ngoặc đơn `()` giúp code luôn **tường minh, dễ đọc và dễ bảo trì**.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="9-các-cạm-bẫy-thường-gặp-nhất-common-pitfalls"></a>
## 9. Các Cạm Bẫy Thường Gặp Nhất (Common Pitfalls)

<a id="bẫy-1-dùng-nhầm-toán-tử-bitwise-và-thay-vì-và"></a>
### Bẫy 1: Dùng nhầm toán tử Bitwise `&` và `|` thay vì `&&` và `||`
Đây là lỗi cực kỳ phổ biến của người mới bắt đầu lập trình:
- `&&` và `||` là **toán tử logic (Boolean logic)**: Làm việc với điều kiện đúng/sai và có tính đoản mạch.
- `&` và `|` là **toán tử bitwise (Mức độ bit nhị phân)**: Thực hiện phép tính trên từng bit số nhị phân và **KHÔNG CÓ TÍNH ĐOẢN MẠCH**!

```javascript
let count = 0;
function tangDem() {
    count++;
    return true;
}

// DÙNG && (Đoản mạch an toàn):
if (false && tangDem()) {}
console.log(count); // 0 (Hàm tangDem không bị gọi)

// DÙNG NHẦM & (Bitwise không đoản mạch):
if (false & tangDem()) {}
console.log(count); // 1 (NGUY HIỂM: tangDem vẫn bị ép chạy, gây tác dụng phụ ngoài ý muốn!)
```

---

<a id="bẫy-2-bỏ-quên-dấu-ngoặc-tròn-khi-kết-hợp-và"></a>
### Bẫy 2: Bỏ quên dấu ngoặc tròn khi kết hợp `&&` và `||`
Xem xét trường hợp tặng quà ở mục 5.3:
```javascript
let isNewUser = false;
let isVipMember = true;
let purchaseAmount = 200000; // Mua dưới 500k, KHÔNG được nhận quà!

// ❌ SAI LẦM: Quên ngoặc tròn!
// Do && được ưu tiên trước, JS hiểu là: isNewUser || (isVipMember && purchaseAmount > 500000)
if (isNewUser || isVipMember && purchaseAmount > 500000) {
    console.log("Được nhận quà"); // KHÔNG IN
}

// Giờ đổi isNewUser = true nhưng mua chỉ 200k:
isNewUser = true;
if (isNewUser || isVipMember && purchaseAmount > 500000) {
    console.log("Được nhận quà!"); // ❌ BUG NGHIÊM TRỌNG: Mua 200k vẫn được quà vì isNewUser là true!
}

// ✅ ĐÚNG: Luôn dùng dấu ngoặc tròn để nhóm logic OR:
if ((isNewUser || isVipMember) && purchaseAmount > 500000) {
    // Chỉ chạy khi mua trên 500k!
}
```

---

<a id="bẫy-3-phép-gán-giá-trị-mặc-định-của-bị-lỗi-với-số-0-và-chuỗi-rỗng"></a>
### Bẫy 3: Phép gán giá trị mặc định của `||` bị lỗi với số 0 và chuỗi rỗng
Toán tử `||` thường được dùng để tạo fallback value:
```javascript
let userScore = 0; // Điểm thực tế của người chơi là 0
let finalScore = userScore || 10;
console.log(finalScore); // 10 (SAI LOGIC! Vì số 0 là Falsy nên || nhảy sang 10)

// ✅ Khắc phục trong ES2020: Dùng toán tử Nullish Coalescing (??)
let fixedScore = userScore ?? 10;
console.log(fixedScore); // 0 (Chính xác! ?? chỉ bỏ qua null và undefined)
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="10-bảng-so-sánh-tổng-kết-cốt-lõi"></a>
## 10. Bảng So Sánh Tổng Kết Cốt Lõi

| Toán tử | Tên gọi | Điều kiện kích hoạt / Trả về `true` | Hành vi đoản mạch (Short-circuit) | Khi nào nên sử dụng? |
| :---: | :--- | :--- | :--- | :--- |
| **`&&`** | Logical AND (VÀ) | Khi **tất cả** các biểu thức đều đúng (`true`) | Gặp Falsy đầu tiên $\rightarrow$ Dừng ngay | Kiểm tra điều kiện bắt buộc đồng thời, guarding. |
| **`||`** | Logical OR (HOẶC) | Khi **ít nhất một** biểu thức đúng (`true`) | Gặp Truthy đầu tiên $\rightarrow$ Dừng ngay | Kiểm tra điều kiện thỏa hiệp một trong nhiều, fallback đơn giản. |
| **`!`** | Logical NOT (PHỦ ĐỊNH) | Đảo ngược giá trị logic (`!false === true`) | Không áp dụng (toán tử 1 ngôi) | Đảo cờ trạng thái, kiểm tra tính rỗng/phủ định. |
| **`??`** | Nullish Coalescing | Trả về vế trái nếu khác `null`/`undefined` | Vế trái khác `null`/`undefined` $\rightarrow$ Dừng ngay | **Gán giá trị mặc định chuẩn xác**, bảo toàn số `0`, chuỗi rỗng `""`, `false`. |
| **`()`** | Dấu ngoặc tròn gom nhóm | Ép độ ưu tiên cao nhất trong biểu thức | Không áp dụng | **Bắt buộc dùng** khi kết hợp đan xen giữa `&&`, `||` và `??`. |

[⬆️ Quay lại Mục lục](#mục-lục)
