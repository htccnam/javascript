# 03 - Từ Khóa Khai Báo (var, let, const), Phạm Vi (Scope) & Kiểu Dữ Liệu Trong JavaScript

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng việc lập trình giống như bạn đang **quản lý đồ đạc trong một tòa nhà chung cư thông minh**:
> - **Sân chung tòa nhà (Global Scope):** Bất kỳ ai trong tòa nhà cũng thấy và dùng được đồ đạc đặt ở đây. Nhưng nếu ai cũng vứt đồ lung tung ra sân, sân sẽ bị ô nhiễm rác (Global Pollution) và đồ đạc dễ bị người khác cầm nhầm/ghi đè.
> - **Chiếc nhãn dán lỏng lẻo (`var`):** Bạn dán nhãn trong phòng ngủ nhỏ (Block Scope `{}`), nhưng gió thổi làm nhãn bay vèo ra tận phòng khách căn hộ (không có Block Scope, chỉ có Function Scope). Người ngoài phòng ngủ vẫn nhìn thấy và sửa được!
> - **Căn phòng riêng gắn thẻ (`let` & `const` - Block Scope):** Chiếc nhãn hiện đại chỉ có hiệu lực bên trong 4 bức tường của căn phòng nơi nó được dán. Bước chân ra khỏi cửa phòng (`}`), biến biến mất hoàn toàn!
> - **Nguyên tắc kính một chiều (Lexical Scope):** Đứng ở phòng nhỏ bên trong nhìn ra phòng khách và nhìn ra sân tòa nhà: thấy hết tất cả. Nhưng người ở ngoài sân hay ngoài phòng khách **tuyệt đối không thể nhìn trộm** vào phòng ngủ của bạn!
> - **`const` đóng đinh nhãn:** Chiếc nhãn dán được đóng đinh chết vào chiếc hộp (mảng/object). Bạn không được bóc nhãn sang hộp khác, nhưng vẫn thoải mái mở nắp hộp để thêm, bớt hoặc đổi đồ bên trong hộp!

---

> [!IMPORTANT]
> ### 🔗 Kiến Thức Tiên Quyết (Prerequisites)
> Để hiểu sâu bản chất biến, phạm vi bộ nhớ và 8 kiểu dữ liệu trong bài này, bạn bắt buộc phải nắm vững:
> 1. **Dynamic Typing (Kiểu dữ liệu động)** tại [01 - Tổng Quan Về JavaScript (Mục 2.3)](file:///d:/github/studyProgram/javascript/docs/01-javascript-overview.md#23-ngôn-ngữ-định-kiểu-động-dynamic-typing):
>    - *Vì sao bắt buộc?* Để hiểu tại sao từ khóa `let` cho phép gán lại biến sang một kiểu dữ liệu hoàn toàn khác, trong khi `const` ngăn chặn việc gán lại nhãn biến.
> 2. **Quy tắc đặt tên Clean Code** tại [02 - Quy Ước Đặt Tên (Mục 2 & 3)](file:///d:/github/studyProgram/javascript/docs/02-naming-conventions.md#2-quy-tắc-đặt-tên-biến-boolean-dạng-câu-hỏi-yesno):
>    - *Vì sao bắt buộc?* Bài 03 yêu cầu bạn đặt tên chuẩn cho 8 kiểu dữ liệu khác nhau (`is` cho boolean, danh từ số nhiều cho mảng, số ít cho object).
> * **Đích đến tiếp theo:** Bài 03 là nền móng của mọi cấu trúc dữ liệu! Bạn sẽ sử dụng trực tiếp các kiểu dữ liệu này trong [04 - Chuỗi](file:///d:/github/studyProgram/javascript/docs/04-strings.md), [05 - Rẽ Nhánh & Toán Tử](file:///d:/github/studyProgram/javascript/docs/05-conditionals-and-operators.md), [10 - Mảng](file:///d:/github/studyProgram/javascript/docs/10-arrays.md) và [11 - Đối Tượng](file:///d:/github/studyProgram/javascript/docs/11-objects.md).
> * 🗺️ *Xem bản đồ lộ trình tổng thể:* [Bản đồ liên kết kiến thức toàn dự án (agent.md)](file:///d:/github/studyProgram/javascript/agent.md).

---

## Mục Lục
<a id="mục-lục"></a>

1. [Từ Khóa Khai Báo Là Gì?](#1-từ-khóa-khai-báo-là-gì)
2. [Khác Biệt Cốt Lõi: Scope, Re-assign & Re-declaration (Bảng So Sánh var, let, const)](#2-khác-biệt-cốt-lõi-scope-re-assign-re-declaration-bảng-so-sánh-var-let-const)
3. [Bản Chất Toàn Diện Về Phạm Vi (Scope) Trong JavaScript — Xóa Bỏ Hoàn Toàn Nhầm Lẫn](#3-bản-chất-toàn-diện-về-phạm-vi-scope-trong-javascript-xóa-bỏ-hoàn-toàn-nhầm-lẫn)
   - [3.1. Scope (Phạm Vi) Thực Sự Là Gì?](#3-1-scope-phạm-vi-thực-sự-là-gì)
   - [3.2. Bốn Cấp Độ Scope Cốt Lõi Trong JavaScript](#3-2-bốn-cấp-độ-scope-cốt-lõi-trong-javascript)
   - [3.3. So Sánh Sinh Tử: Function Scope vs Block Scope (Nguồn Cơn Mọi Nhầm Lẫn)](#3-3-so-sánh-sinh-tử-function-scope-vs-block-scope-nguồn-cơn-mọi-nhầm-lẫn)
   - [3.4. Lexical Scope (Phạm Vi Tĩnh) & Ẩn Dụ "Kính Một Chiều"](#3-4-lexical-scope-phạm-vi-tĩnh-ẩn-dụ-kính-một-chiều)
   - [3.5. Chuỗi Phạm Vi (Scope Chain) & Cơ Chế Tìm Kiếm Biến](#3-5-chuỗi-phạm-vi-scope-chain-cơ-chế-tìm-kiếm-biến)
   - [3.6. Hiện Tượng Che Khuất Biến (Variable Shadowing)](#3-6-hiện-tượng-che-khuất-biến-variable-shadowing)
   - [3.7. 4 Tình Huống "Lú Lẫn" Kinh Điển Nhất Về Scope & Cách Tránh Bẫy](#3-7-4-tình-huống-lú-lẫn-kinh-điển-nhất-về-scope-cách-tránh-bẫy)
   - [3.8. Bảng "Cheat Sheet" Tổng Kết Toàn Diện Các Loại Scope](#3-8-bảng-cheat-sheet-tổng-kết-toàn-diện-các-loại-scope)
4. [Đi Sâu Vào const: Bản Chất Khóa Biến Chứ Không Khóa Giá Trị](#4-đi-sâu-vào-const-bản-chất-khóa-biến-chứ-không-khóa-giá-trị)
5. [Hai Nhóm Kiểu Dữ Liệu: Primitive (Nguyên Thủy) vs Reference (Tham Chiếu)](#5-hai-nhóm-kiểu-dữ-liệu-primitive-nguyên-thủy-vs-reference-tham-chiếu)
6. [const Với Kiểu Primitive vs const Với Mảng / Object](#6-const-với-kiểu-primitive-vs-const-với-mảng-object)
7. [Bảng So Sánh Chi Tiết: const vs let](#7-bảng-so-sánh-chi-tiết-const-vs-let)
8. [4 Lỗi Thường Gặp Nhất Khi Làm Việc Với const](#8-4-lỗi-thường-gặp-nhất-khi-làm-việc-với-const)
9. [Vì Sao Hiện Nay Không Ai Dùng var Nữa?](#9-vì-sao-hiện-nay-không-ai-dùng-var-nữa)
10. [Quy Tắc Vàng Khi Chọn Từ Khóa Khai Báo Biến](#10-quy-tắc-vàng-khi-chọn-từ-khóa-khai-báo-biến)
11. [Toàn Diện Về Kiểu Dữ Liệu Trong JavaScript (Data Types)](#11-toàn-diện-về-kiểu-dữ-liệu-trong-javascript-data-types)
    - [11.1. Ẩn Dụ: Bữa Tiệc Kiểu Dữ Liệu](#11-1-ẩn-dụ-bữa-tiệc-kiểu-dữ-liệu)
    - [11.2. Tổng Quan 8 Kiểu Dữ Liệu & Toán Tử typeof](#11-2-tổng-quan-8-kiểu-dữ-liệu--toán-tử-typeof)
    - [11.3. Chi Tiết Từng Kiểu Dữ Liệu & Quy Ước Đặt Tên](#11-3-chi-tiết-từng-kiểu-dữ-liệu--quy-ước-đặt-tên)
      - [String (Chuỗi)](#string-chuỗi)
      - [Number (Số) & Giới Hạn MAX_SAFE_INTEGER](#number-số--giới-hạn-max_safe_integer)
      - [BigInt (Số Nguyên Khổng Lồ)](#bigint-số-nguyên-khổng-lồ)
      - [Boolean (Đúng / Sai)](#boolean-đúng--sai)
      - [Undefined (Chưa Khởi Tạo)](#undefined-chưa-khởi-tạo)
      - [Null (Trống Rỗng Có Chủ Đích) & Bug typeof null](#null-trống-rỗng-có-chủ-đích--bug-typeof-null)
      - [Symbol (Định Danh Độc Bản Duy Nhất)](#symbol-định-danh-độc-bản-duy-nhất)
      - [Object (Đối Tượng Key-Value)](#object-đối-tượng-key-value)
    - [11.4. Dạng Đặc Biệt Của Object: Array & Function](#11-4-dạng-đặc-biệt-của-object-array--function)
    - [11.5. 5 Tình Huống Kinh Điển Giá Trị undefined Xuất Hiện](#11-5-5-tình-huống-kinh-điển-giá-trị-undefined-xuất-hiện)
    - [11.6. 3 Sai Lầm Thường Gặp (Common Pitfalls)](#11-6-3-sai-lầm-thường-gặp-common-pitfalls)
    - [11.7. Bảng Tra Cứu Toàn Diện 8 Kiểu Dữ Liệu](#11-7-bảng-tra-cứu-toàn-diện-8-kiểu-dữ-liệu)
    - [11.8. Phòng Khám Dr. JavaScript — Kỹ Thuật "Chẩn Đoán" Kiểu Dữ Liệu Chuẩn Xác (4 Ca Bệnh Khó)](#11-8-phòng-khám-dr-javascript--kỹ-thuật-chẩn-đoán-kiểu-dữ-liệu-chuẩn-xác-4-ca-bệnh-khó)

---

<a id="1-từ-khóa-khai-báo-là-gì"></a>
## 1. Từ Khóa Khai Báo Là Gì?
Trong JavaScript, **từ khóa khai báo (`var`, `let`, `const`)** quy định:
1. Cách thức một biến được cấp phát vào bộ nhớ trong quá trình khởi tạo.
2. **Phạm vi hoạt động (Scope):** Biến đó sống ở đâu, ai có quyền nhìn thấy và sử dụng nó.
3. Liệu giá trị lưu trữ trong biến có thể **gán lại (re-assign)** được hay không.
4. Liệu biến có thể **khai báo lại (re-declare)** trong cùng một phạm vi hay không.

```javascript
var oldWay = "Cách cũ từ ES5";
let modernCounter = 0;
const API_URL = "https://api.example.com";
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="2-khác-biệt-cốt-lõi-scope-re-assign-re-declaration-bảng-so-sánh-var-let-const"></a>
## 2. Khác Biệt Cốt Lõi: Scope, Re-assign & Re-declaration (Bảng So Sánh var, let, const)
Cả `let` và `var` đều cho phép gán lại giá trị, còn `const` thì không. Tuy nhiên, lý do lớn nhất khiến `var` bị loại bỏ trong lập trình hiện đại nằm ở **phạm vi hoạt động (scope)** và **cơ chế Hoisting**:

| Tiêu chí | `const` | `let` | `var` |
| :--- | :--- | :--- | :--- |
| **Gán lại giá trị (Re-assign)** | ❌ **Không** | ✅ **Có** | ✅ **Có** |
| **Phạm vi hoạt động (Scope)** | **Block Scope** (trong cặp `{}`) | **Block Scope** (trong cặp `{}`) | **Function Scope** (trong hàm) |
| **Khai báo lại trong cùng scope** | ❌ **Lỗi** (`SyntaxError`) | ❌ **Lỗi** (`SyntaxError`) | ✅ **Cho phép** (Dễ gây ghi đè trùng tên) |
| **Cơ chế Hoisting** | ✅ Có (nằm trong **TDZ** - gọi trước khi khai báo sẽ báo lỗi `ReferenceError`) | ✅ Có (nằm trong **TDZ** - gọi trước khi khai báo sẽ báo lỗi `ReferenceError`) | ✅ Có (hoisted lên đầu scope với `undefined`, dễ tạo lỗi ngầm) |

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="3-bản-chất-toàn-diện-về-phạm-vi-scope-trong-javascript-xóa-bỏ-hoàn-toàn-nhầm-lẫn"></a>
## 3. Bản Chất Toàn Diện Về Phạm Vi (Scope) Trong JavaScript — Xóa Bỏ Hoàn Toàn Nhầm Lẫn

> [!IMPORTANT]
> Hầu hết người mới học JavaScript hay bị nhầm lẫn Scope vì 2 nguyên nhân:
> 1. Nhầm giữa **Khối lệnh (`{}`)** và **Hàm (`function`)**.
> 2. Nhầm tưởng rằng vị trí **GỌI** hàm quyết định biến nào được dùng, thay vì vị trí **KHAI BÁO** hàm.

---

<a id="3-1-scope-phạm-vi-thực-sự-là-gì"></a>
### 3.1. Scope (Phạm Vi) Thực Sự Là Gì?
**Scope** (Phạm vi) là ranh giới không gian trong mã nguồn xác định:
- Nơi một biến/hàm được **sinh ra**.
- Nơi nó **tồn tại** và có thể được **truy cập**.
- Khi nào nó bị hủy và giải phóng khỏi bộ nhớ (Garbage Collection).

Nếu bạn cố tình truy cập một biến ở bên ngoài phạm vi cho phép của nó, JavaScript Engine sẽ lập tức ném ra lỗi:
`ReferenceError: <tên_biến> is not defined`.

---

<a id="3-2-bốn-cấp-độ-scope-cốt-lõi-trong-javascript"></a>
### 3.2. Bốn Cấp Độ Scope Cốt Lõi Trong JavaScript

JavaScript có **4 cấp độ Scope** xếp theo thứ tự từ rộng nhất đến hẹp nhất:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ 1. GLOBAL SCOPE (Phạm vi toàn cục: Toàn bộ file / window / globalThis)  │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │ 2. MODULE SCOPE (Phạm vi file module ES6: import / export)       │ │
│   │   ┌────────────────────────────────────────────────────────────┐ │ │
│   │   │ 3. FUNCTION SCOPE (Phạm vi hàm: function doSomething() {}) │ │ │
│   │   │   ┌──────────────────────────────────────────────────────┐ │ │ │
│   │   │   │ 4. BLOCK SCOPE (Phạm vi khối {}: if, for, while, {}) │ │ │ │
│   │   │   └──────────────────────────────────────────────────────┘ │ │ │
│   │   └────────────────────────────────────────────────────────────┘ │ │
│   └──────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

#### Cấp 1: Global Scope (Phạm vi toàn cục)
- **Đặc điểm:** Bất kỳ biến nào khai báo ở ngoài cùng của script (không nằm trong bất kỳ hàm hay cặp `{}` nào) đều thuộc Global Scope.
- **Tầm hoạt động:** Có thể truy cập từ **bất cứ đâu** trong toàn bộ chương trình.
- **Nguy cơ ô nhiễm toàn cục (Global Pollution):** Càng khai báo nhiều biến global, mã nguồn càng dễ bị xung đột tên biến giữa các thư viện và module.
- **Sự khác biệt tai hại giữa `var` và `let`/`const` ở Global Scope:**
  ```javascript
  var globalVar = "Tôi gắn vào window";
  let globalLet = "Tôi KHÔNG gắn vào window";
  const globalConst = "Tôi KHÔNG gắn vào window";

  // Trên môi trường trình duyệt:
  console.log(window.globalVar);   // "Tôi gắn vào window" (Gây dính bẩn đối tượng window)
  console.log(window.globalLet);   // undefined (An toàn tuyệt đối!)
  console.log(window.globalConst); // undefined (An toàn tuyệt đối!)
  ```

#### Cấp 2: Module Scope (Phạm vi module)
- Khi sử dụng module trong ES6 (`<script type="module">` hoặc file NodeJS `.mjs`/`type: "module"`):
  - Mỗi file JavaScript là một module độc lập.
  - Các biến khai báo ở cấp cao nhất trong file **CHỈ** sống trong file đó, không rò rỉ ra `window` hay các file khác.
  - Chỉ khi bạn chủ động viết `export`, file khác mới có thể `import` để dùng.

#### Cấp 3: Function Scope / Local Scope (Phạm vi hàm)
- **Đặc điểm:** Mọi biến được khai báo bên trong một hàm (bằng `var`, `let`, hay `const`) đều bị "nhốt" chặt bên trong thân hàm đó.
- Thế giới bên ngoài **HOÀN TOÀN KHÔNG THỂ** nhìn thấy hoặc can thiệp vào biến nội bộ của hàm:
  ```javascript
  function taoTaiKhoan() {
      var matKhau = "secret_123";
      let soDu = 500000;
      const maPIN = 9999;
  }

  taoTaiKhoan();
  console.log(matKhau); // ❌ ReferenceError: matKhau is not defined
  console.log(soDu);    // ❌ ReferenceError: soDu is not defined
  console.log(maPIN);   // ❌ ReferenceError: maPIN is not defined
  ```

#### Cấp 4: Block Scope (Phạm vi khối lệnh `{}`)
- **Đặc điểm:** Một "Block" là bất kỳ đoạn code nào nằm giữa cặp ngoặc nhọn `{ ... }`. Ví dụ:
  - Khối lệnh điều kiện `if (...) { ... } else { ... }`
  - Khối vòng lặp `for (...) { ... }`, `while (...) { ... }`
  - Khối rẽ nhánh `switch (...) { ... }`
  - Thậm chí một khối ngoặc `{ ... }` đứng trơ trọi một mình (Standalone Block).
- **QUY TẮC SỐNG CÒN:**
  - **`let` và `const` có Block Scope:** Chỉ tồn tại trong cặp `{}` nơi chúng sinh ra.
  - **`var` HOÀN TOÀN KHÔNG CÓ Block Scope:** `var` sẽ "xuyên thủng" cặp ngoặc nhọn để nhảy ra ngoài!

---

<a id="3-3-so-sánh-sinh-tử-function-scope-vs-block-scope-nguồn-cơn-mọi-nhầm-lẫn"></a>
### 3.3. So Sánh Sinh Tử: Function Scope vs Block Scope (Nguồn Cơn Mọi Nhầm Lẫn)

Hãy quan sát sự khác nhau 180 độ giữa khối lệnh `{}` và hàm `function`:

```javascript
// --- THÍ NGHIỆM 1: Khối lệnh IF (Block Scope) ---
if (true) {
    var bietThuVar = "var xuyên thủng if ra ngoài!";
    let canHoLet   = "let bị nhốt trong if";
    const phongConst = "const bị nhốt trong if";
}

console.log(bietThuVar); // ✅ In ra bình thường: "var xuyên thủng if ra ngoài!" (RÒ RỈ BIẾN!)
// console.log(canHoLet);   // ❌ ReferenceError: canHoLet is not defined
// console.log(phongConst); // ❌ ReferenceError: phongConst is not defined


// --- THÍ NGHIỆM 2: Hàm FUNCTION (Function Scope) ---
function kiemTraHam() {
    var bietThuVarTrongHam = "var BỊ NHỐT trong hàm!";
    let canHoLetTrongHam   = "let BỊ NHỐT trong hàm!";
}

kiemTraHam();
// console.log(bietThuVarTrongHam); // ❌ ReferenceError: bietThuVarTrongHam is not defined
// console.log(canHoLetTrongHam);   // ❌ ReferenceError: canHoLetTrongHam is not defined
```

> [!CAUTION]
> **Khắc cốt ghi tâm:**
> - `var` chỉ sợ đúng một thứ: **Hàm (`function`)**.
> - `var` xem mọi cặp ngoặc nhọn `{}` khác (`if`, `for`, `while`) như **không khí vô hình**!
> - `let` và `const` sợ **TẤT CẢ** các loại cặp ngoặc nhọn `{}` (cả hàm lẫn block).

---

<a id="3-4-lexical-scope-phạm-vi-tĩnh-ẩn-dụ-kính-một-chiều"></a>
### 3.4. Lexical Scope (Phạm Vi Tĩnh) & Ẩn Dụ "Kính Một Chiều"

JavaScript sử dụng cơ chế **Lexical Scope** (còn gọi là *Static Scope* - Phạm vi tĩnh).

> **Lexical Scope có nghĩa là:**
> Phạm vi của một biến được quyết định bởi **VỊ TRÍ BẠN VIẾT NÓ TRONG MÃ NGUỒN**, chứ **KHÔNG PHẢI** vị trí mà hàm đó được gọi!

#### Ẩn dụ "Kính một chiều" (One-Way Mirror):
- **Ở trong nhìn ra ngoài: NHÌN THẤY TẤT CẢ.** Hàm con nằm bên trong có thể nhìn thấy biến của hàm cha và biến toàn cục.
- **Ở ngoài nhìn vào trong: TỐI ĐEN NHƯ MỰC.** Hàm cha hoặc môi trường ngoài không thể thấy hay can thiệp vào biến của hàm con.

```javascript
const ngoaiCung = "Cảnh quan sân vườn (Global)";

function ngoiNhaCha() {
    const phongKhach = "Bộ bàn ghế phòng khách (Cha)";

    function phongCon() {
        const doChoi = "Mô hình lego (Con)";

        // Đứng trong phòng con nhìn ra:
        console.log(doChoi);     // ✅ Thấy của chính mình
        console.log(phongKhach); // ✅ Nhìn ra phòng khách thấy bộ bàn ghế
        console.log(ngoaiCung);  // ✅ Nhìn qua cửa sổ thấy sân vườn
    }

    phongCon();

    // Đứng ở phòng khách cha:
    // console.log(doChoi);  // ❌ LỖI: Cha không thể nhìn trộm vào phòng con!
}

ngoiNhaCha();
```

#### Chứng minh: Vị trí khai báo quyết định, không phải vị trí gọi!
```javascript
const thanhPho = "Hà Nội";

function inThanhPho() {
    console.log(thanhPho); // Hàm này được sinh ra ở đâu? Sinh ra ở Global!
}

function testScope() {
    const thanhPho = "Đà Nẵng";
    inThanhPho(); // Gọi hàm tại đây!
}

testScope(); // 👉 Kết quả in ra là "Hà Nội", KHÔNG PHẢI "Đà Nẵng"!
```
*Giải thích:* Khi thực thi `inThanhPho()`, JS tìm biến `thanhPho` theo chuỗi scope nơi hàm `inThanhPho` được **khai báo** (tức là Global Scope $\rightarrow$ `"Hà Nội"`). Nó hoàn toàn không quan tâm hàm được gọi bên trong `testScope`!

---

<a id="3-5-chuỗi-phạm-vi-scope-chain-cơ-chế-tìm-kiếm-biến"></a>
### 3.5. Chuỗi Phạm Vi (Scope Chain) & Cơ Chế Tìm Kiếm Biến

Khi bạn yêu cầu JavaScript sử dụng một biến, JS Engine sẽ kích hoạt cơ chế **Scope Chain** (Chuỗi phạm vi) tìm kiếm theo quy tắc 1 chiều từ trong ra ngoài:

```text
[1. Scope Cục Bộ Hiện Tại] ──(Không thấy)──> [2. Scope Cha Gần Nhất]
                                                       │
                                                  (Không thấy)
                                                       ▼
[4. Báo lỗi ReferenceError] <──(Không thấy)── [3. Global Scope (Tột Cùng)]
```

```javascript
let diem = 100; // Global

function cap1() {
    // Không có biến 'diem' ở đây
    function cap2() {
        // Không có biến 'diem' ở đây
        function cap3() {
            console.log(diem); // JS leo lên cap2 -> cap1 -> Global -> Thấy 100!
        }
        cap3();
    }
    cap2();
}
cap1(); // In ra: 100
```

- **Quy tắc leo thang:** Tìm từ tầng trệt $\rightarrow$ tầng 1 $\rightarrow$ tầng 2 $\rightarrow$ sân thượng (Global).
- **Dừng lại ngay khi tìm thấy:** Nếu ở tầng 1 đã có biến `diem`, JS dùng luôn biến đó và **dừng tìm kiếm**, không leo lên tầng 2 nữa.
- **Không bao giờ đi ngược lại:** Tầng trên không thể tìm xuống tầng dưới. Hai hàm ngang hàng không thể nhìn sang phòng nhau.

---

<a id="3-6-hiện-tượng-che-khuất-biến-variable-shadowing"></a>
### 3.6. Hiện Tượng Che Khuất Biến (Variable Shadowing)

Khi một biến ở Scope con có **cùng tên** với một biến ở Scope cha, biến ở Scope con sẽ **"che khuất" (shadow)** biến ở Scope cha trong suốt phạm vi của nó:

```javascript
let userName = "Nguyễn Văn A"; // Global

function hienThi() {
    let userName = "Trần Thị B"; // Biến cục bộ che khuất biến Global bên ngoài
    console.log("Bên trong hàm:", userName); // "Trần Thị B"
}

hienThi();
console.log("Bên ngoài hàm:", userName); // "Nguyễn Văn A" (Biến Global không hề bị thay đổi!)
```

#### Cạm bẫy "Illegal Shadowing" (Che khuất bất hợp pháp)
Bạn không thể dùng `var` trong một block để che khuất một biến `let`/`const` đã khai báo ở scope cha trong cùng một hàm:
```javascript
let a = 10;
{
    // var a = 20; // ❌ SyntaxError: Identifier 'a' has already been declared
    // Lý do: 'var' cố tình xuyên thủng block để lên cùng cấp với 'let a', dẫn đến va chạm!
}
```

---

<a id="3-7-4-tình-huống-lú-lẫn-kinh-điển-nhất-về-scope-cách-tránh-bẫy"></a>
### 3.7. 4 Tình Huống "Lú Lẫn" Kinh Điển Nhất Về Scope & Cách Tránh Bẫy

#### Bẫy 1: Biến `var` trong vòng lặp `for` & bài toán bất đồng bộ
Đây là câu hỏi phỏng vấn kinh điển khiến hàng ngàn ứng viên mất điểm:
```javascript
// --- DÙNG VAR: TAI HỌA ---
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("var i:", i);
    }, 100);
}
// Kết quả in ra sau 100ms: 3, 3, 3! (Không phải 0, 1, 2)
```

> [!WARNING]
> **Thắc mắc thường gặp:** *"Ủa, hàm `function() {}` bên trong `setTimeout` cũng có Function Scope mà, tại sao nó không ngăn biến `var i` lại?"*

**Bóc tách 3 điểm cốt tử để hiểu tường tận:**

1. **Biến `var i` thực sự được sinh ra ở ĐÂU?**
   - Hãy nhìn kỹ: `var i` được khai báo ở dòng `for (var i = 0; ...)` — tức là **BÊN NGOÀI** hàm `setTimeout`!
   - Bên trong thân hàm `function() { console.log(i); }` **hoàn toàn KHÔNG có dòng `var i` nào cả**.
   - Vì `var` không có Block Scope, JavaScript Engine thực chất hiểu đoạn code trên là:
     ```javascript
     var i; // 👈 Nằm ở Global Scope / Scope cha bên ngoài!
     for (i = 0; i < 3; i++) {
         setTimeout(function() {
             console.log(i); // Hàm này chỉ mở cửa sổ nhìn ra ngoài tìm i!
         }, 100);
     }
     ```

2. **Quy tắc chiếc lồng: Function Scope chỉ nhốt theo chiều từ TRONG ra NGOÀI!**
   - Hàm chỉ nhốt những gì được sinh ra **bên trong** nó.
   - Nhưng theo cơ chế **Scope Chain** (nguyên tắc "kính một chiều"), hàm con luôn luôn có toàn quyền **nhìn ra ngoài** để đọc biến của môi trường cha.
   - Trong ví dụ trên, biến `i` giống như **"đồ vật để ở ngoài sân"**. Hàm bên trong `setTimeout` không hề sở hữu biến `i`, nó chỉ là kẻ **đứng trong nhà nhìn qua cửa sổ ra ngoài sân** để đọc giá trị của `i`.

3. **Trục thời gian (Timeline): Tại sao lại là số 3?**
   - Vòng lặp `for` chạy trong tích tắc ($0.0001\text{ ms}$):
     - Lần lặp 1: Hẹn giờ hàm #1 (100ms nữa chạy).
     - Lần lặp 2: Hẹn giờ hàm #2 (100ms nữa chạy).
     - Lần lặp 3: Hẹn giờ hàm #3 (100ms nữa chạy).
     - `i++` làm $i = 3$, điều kiện $3 < 3$ sai $\rightarrow$ **Vòng lặp `for` KẾT THÚC ngay lập tức, ô nhớ duy nhất của `i` đang giữ giá trị `3`!**
   - **100ms sau:** 3 hàm hẹn giờ mới lần lượt được lôi ra chạy. Cả 3 hàm cùng nhìn ra ngoài ô nhớ chung duy nhất $\rightarrow$ thấy số `3` $\rightarrow$ in ra: **`3, 3, 3`**!

---

**Cách giải quyết 1 (Chuẩn hiện đại ES6): Dùng `let`**
```javascript
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log("let j:", j);
    }, 100);
}
// Kết quả: 0, 1, 2
```
*Vì sao `let` chạy đúng?* Vì `let` có **Block Scope**. Ở mỗi vòng lặp, JavaScript Engine tạo ra một **bản sao biến `j` mới toanh** độc lập cho lần lặp đó (*per-iteration binding*). Mỗi hàm `setTimeout` được giữ một biến `j` riêng của vòng lặp đó!

---

**Cách giải quyết 2 (Kỹ thuật thời ES5 trước 2015): Dùng IIFE**
Trước khi ES6 ra đời, để biến `i` thực sự bị nhốt vào Function Scope, lập trình viên bắt buộc phải dùng **IIFE (Hàm tự gọi)** để truyền `i` vào làm **tham số** của hàm:
```javascript
for (var i = 0; i < 3; i++) {
    (function(savedI) { // 👈 savedI là THAM SỐ CỦA HÀM!
        // Tham số của hàm chính là biến nội bộ BÊN TRONG hàm!
        // Lúc này savedI MỚI THỰC SỰ BỊ NHỐT trong Function Scope này!
        setTimeout(function() {
            console.log("iife:", savedI);
        }, 100);
    })(i); // Đóng gói giá trị i vào lồng ngay tại thời điểm vòng lặp chạy
}
// Kết quả: 0, 1, 2
```

#### Bẫy 2: Quên từ khóa khai báo (`x = 10`) biến thành Biến Toàn Cục Tự Động (Implicit Global)
```javascript
function tinhToan() {
    ketQua = 100; // ❌ QUÊN viết let/const/var!
}

tinhToan();
console.log(ketQua); // In ra 100! Biến 'ketQua' tự động bị biến thành biến toàn cục!
console.log(window.ketQua); // 100 (Rò rỉ nghiêm trọng!)
```
- **Cách khắc phục:** Luôn đặt `"use strict";` ở đầu file. Chế độ nghiêm ngặt sẽ ném ngay lỗi `ReferenceError: ketQua is not defined` để bảo vệ bạn!

#### Bẫy 3: Cặp ngoặc nhọn `{}` của Object Literal KHÔNG PHẢI là Block Scope!
```javascript
const user = {
    ten: "Nam",
    tuoi: 25
}; // Cặp {} ở đây là Object Literal để tạo dữ liệu, KHÔNG TẠO RA SCOPE!
```

#### Bẫy 4: Khối lệnh độc lập `{}` — Kỹ thuật cách ly biến tạm thời
Bạn có thể tự tạo một Block Scope bất kỳ lúc nào chỉ bằng một cặp `{}` trơ trọi để tính toán dữ liệu mà không làm rác phạm vi xung quanh:
```javascript
const tongDiem = 100;

{
    // Khối Block cô lập biến tạm
    const diemCong = 15;
    const diemThuong = 5;
    console.log("Tạm tính:", tongDiem + diemCong + diemThuong); // 120
}

// console.log(diemCong); // ❌ Lỗi ReferenceError! diemCong đã biến mất sạch sẽ!
```

---

<a id="3-8-bảng-cheat-sheet-tổng-kết-toàn-diện-các-loại-scope"></a>
### 3.8. Bảng "Cheat Sheet" Tổng Kết Toàn Diện Các Loại Scope

| Loại Scope | Được Tạo Ra Bởi Gì? | Từ Khóa Tuân Thủ | `var` Có Bị Giới Hạn Không? | Nhìn Thấy Gì? | Bên Ngoài Nhìn Thấy Không? |
| :--- | :--- | :--- | :---: | :--- | :---: |
| **Global Scope** | Ngoài cùng file / script | `var`, `let`, `const` | ✅ Có (cấp cao nhất) | Chỉ thấy biến Global | ✅ Ai cũng thấy |
| **Module Scope** | File ES Module (`import`/`export`) | `var`, `let`, `const` | ✅ Bị nhốt trong file | Thấy biến Global & Module | ❌ Trừ khi `export` |
| **Function Scope** | `function foo() { ... }` | `var`, `let`, `const` | ✅ **Bị nhốt trong hàm** | Thấy chính nó + Scope cha + Global | ❌ **Không thể** |
| **Block Scope** | Cặp `{}` của `if`, `for`, `while`, `{}` | **CHỈ `let` & `const`** | ❌ **KHÔNG (var xuyên thủng ra ngoài)** | Thấy chính nó + Scope cha + Global | ❌ **Không thể** |

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="4-đi-sâu-vào-const-bản-chất-khóa-biến-chứ-không-khóa-giá-trị"></a>
## 4. Đi Sâu Vào const: Bản Chất Khóa Biến Chứ Không Khóa Giá Trị

### 4.1. `const` là gì?
`const` (viết tắt của *constant*) là từ khóa dùng để khai báo một **biến hằng** — biến mà bạn không thể gán lại sang một giá trị hoặc vùng nhớ khác:

```javascript
const x = 10;
x = 20; // ❌ TypeError: Assignment to constant variable.
```

### 4.2. Điều quan trọng nhất cần nhớ
> [!IMPORTANT]
> **`const` khóa CÁI TÊN BIẾN, không khóa NỘI DUNG BÊN TRONG giá trị!**
> - `const` chỉ cấm gán lại biến (`variable = ...`).
> - `const` **không cấm** thay đổi dữ liệu bên trong mảng hoặc object!

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="5-hai-nhóm-kiểu-dữ-liệu-primitive-nguyên-thủy-vs-reference-tham-chiếu"></a>
## 5. Hai Nhóm Kiểu Dữ Liệu: Primitive (Nguyên Thủy) vs Reference (Tham Chiếu)
Lý do vì sao `const` có hành vi khác nhau giữa số/chuỗi và mảng/object bắt nguồn từ cách JavaScript tổ chức bộ nhớ:

| Nhóm dữ liệu | Ví dụ cụ thể | Vùng nhớ lưu trữ | Có "ruột" để sửa đổi không? |
| :--- | :--- | :--- | :---: |
| **Primitive (Nguyên thủy)** | `number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol` | Lưu trực tiếp tại **Stack** (kích thước cố định) | ❌ **Không** (Bất biến - Immutable) |
| **Reference (Tham chiếu)** | `Array`, `Object`, `Function` | Lưu tại **Heap**, biến giữ con trỏ địa chỉ tại **Stack** | ✅ **Có** (Có thể thay đổi - Mutable) |

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="6-const-với-kiểu-primitive-vs-const-với-mảng-object"></a>
## 6. const Với Kiểu Primitive vs const Với Mảng / Object

### 6.1. `const` với kiểu Primitive (Gần như đóng băng hoàn toàn)
```javascript
const i = 1;
// i giữ trực tiếp giá trị 1.
// Số 1 là bất biến, không có "ruột" để sửa.
// Muốn i thành 2 thì bắt buộc phải gán lại biến -> mà const cấm!

i = 2; // ❌ TypeError: Assignment to constant variable.
i++;   // ❌ TypeError (tương đương i = i + 1)
```
**Kết luận:** Với kiểu nguyên thủy, `const` biến giá trị thành bất biến hoàn toàn.

### 6.2. `const` với mảng và object (Khóa địa chỉ tham chiếu)
```javascript
const friend = ["An", "Bình"];
// friend giữ địa chỉ trỏ đến vùng nhớ Heap chứa mảng.
// const khóa địa chỉ đó -> bạn không được trỏ friend sang mảng khác.
// Nhưng nội dung bên trong chiếc hộp mảng vẫn sửa thoải mái!
```

- ✅ **Được phép (Thay đổi nội dung bên trong mảng):**
```javascript
friend.push("Cường");    // Thêm cuối mảng -> ["An", "Bình", "Cường"]
friend.unshift("Dũng");  // Thêm đầu mảng  -> ["Dũng", "An", "Bình", "Cường"]
friend.pop();            // Xóa phần tử cuối
friend.shift();          // Xóa phần tử đầu
friend[0] = "Minh";      // Sửa trực tiếp phần tử tại index 0
friend.splice(1, 1);     // Xóa hoặc chèn tại vị trí bất kỳ
```

- ❌ **Không được phép (Gán lại sang vùng nhớ khác):**
```javascript
friend = ["Cường"]; // ❌ TypeError: Assignment to constant variable.
friend = "hello";   // ❌ TypeError
friend = 123;       // ❌ TypeError
```

### 6.3. Hình dung trực quan: Nhãn Dán và Chiếc Hộp
```text
[Nhãn: friend] ===== ĐÓNG ĐINH BẰNG CONST =====> [Hộp Mảng: ["An", "Bình"]]
                                                       │
                                  Thêm/Bớt thoải mái: ├── push("Cường")
                                                      ├── pop()
                                                      └── [0] = "Minh"
```
- `friend` là chiếc nhãn dán.
- Mảng `["An", "Bình"]` là chiếc hộp chứa đồ.
- `const` dán chặt nhãn `friend` lên chiếc hộp đó. Bạn **không được bóc nhãn dán sang chiếc hộp khác**.
- Nhưng bạn **vẫn được mở nắp hộp, thêm đồ, bớt đồ, sắp xếp đồ vật bên trong**!

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="7-bảng-so-sánh-chi-tiết-const-vs-let"></a>
## 7. Bảng So Sánh Chi Tiết: const vs let

| Hành động | `const` | `let` |
| :--- | :---: | :---: |
| **Khai báo kèm gán giá trị ban đầu** (`const x = 1; let y = 1;`) | ✅ Được phép | ✅ Được phép |
| **Khai báo không gán giá trị** (`let z;`) | ❌ **Báo lỗi ngay cú pháp** | ✅ Được phép (nhận `undefined`) |
| **Gán lại biến sang giá trị mới** (`x = 2;`) | ❌ **Báo lỗi `TypeError`** | ✅ Được phép |
| **Sửa nội dung thuộc tính của Object** (`obj.name = "Mới";`) | ✅ Được phép | ✅ Được phép |
| **Thêm / xóa phần tử của Mảng** (`arr.push(4);`) | ✅ Được phép | ✅ Được phép |

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="8-4-lỗi-thường-gặp-nhất-khi-làm-việc-với-const"></a>
## 8. 4 Lỗi Thường Gặp Nhất Khi Làm Việc Với const

### Lỗi 1: Nghĩ rằng `const` làm mảng trở nên bất biến
```javascript
const arr = [1, 2, 3];
arr.push(4); // ✅ Hoàn toàn hợp lệ! Nhiều người lầm tưởng dòng này báo lỗi.
```

### Lỗi 2: Gán lại biến `const`
```javascript
const arr = [1, 2, 3];
arr = [4, 5, 6]; // ❌ Lỗi thật sự: TypeError: Assignment to constant variable.
```

### Lỗi 3: Khai báo `const` mà không khởi tạo giá trị
```javascript
const x; // ❌ Lỗi cú pháp: SyntaxError: Missing initializer in const declaration
// Khắc phục: Phải gán giá trị ngay: const x = 10;
```

### Lỗi 4: Nhầm `typeof` khi kiểm tra mảng
```javascript
const arr = [1, 2, 3];
typeof arr;         // "object" (Không phải "array" - bẫy phổ biến!)
Array.isArray(arr); // ✅ true (Đây mới là cách chuẩn xác nhất để kiểm tra mảng)
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="9-vì-sao-hiện-nay-không-ai-dùng-var-nữa"></a>
## 9. Vì Sao Hiện Nay Không Ai Dùng var Nữa?
`var` là tàn dư từ phiên bản JavaScript đầu tiên năm 1995. Có 3 lý do cốt tử khiến `var` bị "cấm chỉ định" trong code hiện đại:

1. **Rò rỉ biến ra ngoài phạm vi (Out-of-scope leak):**
   `var` không hỗ trợ Block Scope (không bị giới hạn bởi cặp `{}` của `if`, `for`, `while`). Biến khai báo trong vòng lặp sẽ "tràn" ra ngoài và làm dính bẩn phạm vi bên ngoài:
   ```javascript
   for (var i = 0; i < 3; i++) {}
   console.log(i); // 3 (Rò rỉ! Lẽ ra i phải biến mất sau vòng for)
   ```
2. **Tự động ghi đè biến (Accidental Overwriting):**
   Bạn có thể vô tình khai báo `var user = "An"` rồi 50 dòng sau lại viết `var user = "Bình"` mà JavaScript không hề đưa ra cảnh báo nào, dẫn đến mất dữ liệu nghiêm trọng trong dự án lớn.
3. **Cơ chế Hoisting kỳ quặc:**
   Gọi biến `var` trước dòng khai báo không làm crash chương trình mà trả về `undefined`. Lỗi logic này cực kỳ khó debug!

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="10-quy-tắc-vàng-khi-chọn-từ-khóa-khai-báo-biến"></a>
## 10. Quy Tắc Vàng Khi Chọn Từ Khóa Khai Báo Biến
Trừ khi bạn phải bảo trì các dự án di sản (legacy code) từ hơn một thập kỷ trước, nguyên tắc làm việc chuẩn Clean Code quốc tế hiện nay là:

> [!TIP]
> **Quy tắc 3 bước:**
> 1. **Mặc định ưu tiên 100% dùng `const`** cho tất cả các biến (kể cả mảng, object, hàm).
> 2. **Chỉ chuyển sang dùng `let`** khi bạn biết chắc chắn giá trị của biến đó bắt buộc phải thay đổi (ví dụ: biến đếm vòng lặp, tích lũy điểm số, cờ bật tắt trạng thái).
> 3. **Tuyệt đối nói KHÔNG với `var`** trong toàn bộ mã nguồn viết mới.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="11-toàn-diện-về-kiểu-dữ-liệu-trong-javascript-data-types"></a>
## 11. Toàn Diện Về Kiểu Dữ Liệu Trong JavaScript (Data Types)

<a id="11-1-ẩn-dụ-bữa-tiệc-kiểu-dữ-liệu"></a>
### 11.1. Ẩn Dụ: Bữa Tiệc Kiểu Dữ Liệu

> [!NOTE]
> **Hãy tưởng tượng bạn đang tổ chức một bữa tiệc.** Mỗi món ăn tại bữa tiệc này tượng trưng cho một kiểu dữ liệu khác nhau trong JavaScript:
> - 📖 **Một quyển sách mở ra:** Chính là chuỗi ký tự (`String`).
> - 🧮 **Một chiếc máy tính đang thực hiện phép tính:** Biểu diễn cho số học (`Number`).
> - 🔢 **Máy tính siêu trọng lượng:** Biểu diễn cho số nguyên siêu lớn (`BigInt`).
> - 🪧 **Một tấm biển hiển thị Đúng (true) hoặc Sai (false):** Tượng trưng cho kiểu nhị phân (`Boolean`).
> - ❓ **Chiếc ghế đã đặt bàn nhưng chưa có người ngồi:** Tượng trưng cho biến chưa gán giá trị (`Undefined`).
> - 🕳️ **Một chiếc đĩa trống được chủ ý dọn sạch:** Tượng trưng cho sự trống rỗng có chủ đích (`Null`).
> - 💎 **Tấm vé VIP độc bản không bao giờ trùng:** Tượng trưng cho giá trị duy nhất (`Symbol`).
> - 📦 **Hộp quà nhiều ngăn chứa nhiều món đồ:** Tượng trưng cho đối tượng (`Object`).

Mỗi món ăn mang một hương vị đặc trưng, giống như mỗi kiểu dữ liệu có đặc tính, cách lưu trữ và mục đích riêng biệt trong JavaScript.

---

<a id="11-2-tổng-quan-8-kiểu-dữ-liệu--toán-tử-typeof"></a>
### 11.2. Tổng Quan 8 Kiểu Dữ Liệu & Toán Tử typeof

Trong JavaScript, kiểu dữ liệu là một khái niệm nền tảng giúp xác định loại giá trị mà một biến có thể chứa. JavaScript phân chia làm **8 kiểu dữ liệu** thuộc 2 nhóm:

```text
1. Nhóm Nguyên Thủy (Primitive Types - Lưu theo giá trị):
   ├── String
   ├── Number
   ├── BigInt
   ├── Boolean
   ├── Undefined
   ├── Null
   └── Symbol

2. Nhóm Tham Chiếu (Reference Types - Lưu theo địa chỉ ô nhớ):
   └── Object
         ├── Array    (Mảng - dạng đặc biệt của Object)
         └── Function (Hàm - dạng đặc biệt của Object)
```

> [!IMPORTANT]
> **Kiểm tra kiểu dữ liệu:** Sử dụng toán tử `typeof` để kiểm tra kiểu dữ liệu của một giá trị. Lệnh này luôn trả về **một chuỗi ký tự** đại diện cho tên kiểu.
> Tuy nhiên, hãy nhớ 2 ngoại lệ kinh điển:
> - `typeof null` trả về `"object"` (đây là bug thiết kế từ năm 1995 nhưng được giữ lại để tương thích ngược).
> - `typeof []` (Mảng) trả về `"object"` (phải dùng `Array.isArray()` để kiểm tra chuẩn xác).

```javascript
console.log(typeof "Nguyễn Văn A"); // "string"
console.log(typeof 42);             // "number"
console.log(typeof 9007199254740991n); // "bigint"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" ⚠️ Bug lịch sử!
console.log(typeof Symbol("id"));   // "symbol"
console.log(typeof { name: "An" }); // "object"
console.log(typeof [1, 2, 3]);       // "object" ⚠️ (dùng Array.isArray)
console.log(typeof function() {});  // "function"
```

---

<a id="11-3-chi-tiết-từng-kiểu-dữ-liệu--quy-ước-đặt-tên"></a>
### 11.3. Chi Tiết Từng Kiểu Dữ Liệu & Quy Ước Đặt Tên

<a id="string-chuỗi"></a>
#### 1. String (Chuỗi)
- **Mục đích sử dụng:** Biểu diễn văn bản, ký tự (tên, email, địa chỉ, thông điệp).
- **Cú pháp:** Dùng nháy đơn `''`, nháy kép `""` hoặc backticks `` ` `` (Template Literals).

```javascript
let userName = "Nguyễn Văn A";
console.log(typeof userName); // "string"
```

- **Quy ước đặt tên:** Tùy theo ý nghĩa giá trị lưu trữ (ví dụ: `userName`, `emailAddress`, `productTitle`).

---

<a id="number-số--giới-hạn-max_safe_integer"></a>
#### 2. Number (Số)
- **Mục đích sử dụng:** Làm việc với toán học và tính toán số học.

```javascript
let birthYear = 1990;
let currentYear = 2024;
let age = currentYear - birthYear;

console.log(typeof birthYear); // "number"
```

- **Bản chất kỹ thuật:** JavaScript chỉ dùng **một kiểu Number duy nhất** (chuẩn IEEE 754 64-bit float) cho cả số nguyên và số thập phân.
- **Giới hạn số nguyên an toàn:** `Number.MAX_SAFE_INTEGER` là $2^{53} - 1$ (tương đương `9,007,199,254,740,991`). Vượt quá ngưỡng này, kiểu Number vẫn chứa được số cực lớn (lên tới $\approx 1.8 \times 10^{308}$) nhưng sẽ bị **làm tròn sai lệch**.
- **Quy ước đặt tên:** Đặt tên rõ nghĩa số lượng hoặc giá trị (ví dụ: `birthYear`, `itemCount`, `totalPrice`).

---

<a id="bigint-số-nguyên-khổng-lồ"></a>
#### 3. BigInt (Số nguyên khổng lồ)
- **Mục đích sử dụng:** Khi cần tính toán số nguyên cực lớn với độ chính xác tuyệt đối (lĩnh vực tài chính ngân hàng, mật mã học, khoa học kỹ thuật) vượt quá ngưỡng an toàn $2^{53} - 1$.
- **Cú pháp:** Thêm hậu tố `n` vào cuối số nguyên hoặc gọi hàm `BigInt()`.

```javascript
let largeNumber = BigInt("9007199254740991");
let bigNumber = 9007199254740991n;

console.log(typeof largeNumber); // "bigint"
console.log(typeof bigNumber);   // "bigint"
```

> [!NOTE]
> **Lưu ý môi trường:** Trong VS Code và Node.js hiện đại, cả 2 cách `BigInt(...)` và hậu tố `n` đều chạy tốt. Tuy nhiên trên một số trình chạy code online cũ (hoặc trình chấm bài F8 cũ), cú pháp `n` có thể báo lỗi cú pháp; khi đó hãy dùng `BigInt("...")`.
> Ngoài ra, **không được phép** thực hiện phép tính trực tiếp giữa `BigInt` và `Number` mà không ép kiểu rõ ràng (ví dụ: `10n + 5` sẽ bắn lỗi `TypeError`).

- **Quy ước đặt tên:** Thường thêm tiền tố `big` hoặc `large` vào tên biến (ví dụ: `largeTransactionAmount`, `bigPopulationCount`).

---

<a id="boolean-đúng--sai"></a>
#### 4. Boolean (Đúng / Sai)
- **Mục đích sử dụng:** Biểu diễn trạng thái nhị phân chỉ gồm 2 giá trị: `true` (đúng) hoặc `false` (sai). Thường xuất hiện qua các phép so sánh điều kiện.

```javascript
let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"
```

- **Quy ước đặt tên (Chuẩn quốc tế):** Bắt đầu bằng các tiền tố câu hỏi: `is`, `has`, `can`, `should` để phản ánh rõ giá trị đúng/sai:
  - `isLoggedIn`, `isEmailVerified`
  - `hasPermission`, `hasAdminRole`
  - `canEdit`, `canDelete`
  - `shouldRedirect`

---

<a id="undefined-chưa-khởi-tạo"></a>
#### 5. Undefined (Chưa được khởi tạo)
- **Mục đích sử dụng:** Xuất hiện khi một biến đã được cấp phát bộ nhớ nhưng chưa từng được gán giá trị cụ thể nào.

```javascript
let userLocation;
console.log(userLocation);        // undefined
console.log(typeof userLocation); // "undefined"
```

> [!TIP]
> **Bí kíp chuyên sâu (`void 0`):** Do `undefined` không phải là từ khóa bất biến trong JavaScript (có thể bị khai báo đè biến cục bộ trong hàm), các thư viện lớn thường dùng biểu thức `void 0` để đảm bảo luôn tạo ra giá trị `undefined` nguyên bản và an toàn tuyệt đối (xem chi tiết tại [Bài 05: Hệ thống Toán tử](file:///d:/github/studyProgram/javascript/docs/05-conditionals-and-operators.md#84-toán-tử-void--khái-niệm-cơ-chế--3-ứng-dụng-thực-tế)).

---

<a id="null-trống-rỗng-có-chủ-đích--bug-typeof-null"></a>
#### 6. Null (Trống rỗng có chủ đích) & Bug typeof null
- **Mục đích sử dụng:** Thể hiện rằng một biến **chủ động chưa có giá trị**, hoặc không tìm thấy dữ liệu đối tượng nào (sự trống rỗng có chủ đích của lập trình viên).

```javascript
let searchResult = null;
console.log(typeof searchResult); // "object"
```

> [!WARNING]
> Trong JavaScript, dù `null` là một kiểu nguyên thủy hoàn chỉnh, `typeof null` lại trả về `"object"`. Đây là một bug lịch sử đã tồn tại từ bản JS đầu tiên (năm 1995) do quy định bit biểu diễn nhãn đối tượng. Tiêu chuẩn ECMAScript không thể sửa lỗi này vì sửa sẽ làm hỏng hàng loạt website cũ. Hãy dùng so sánh tuyệt đối `value === null` để kiểm tra.

---

<a id="symbol-định-danh-độc-bản-duy-nhất"></a>
#### 7. Symbol (Định danh độc bản duy nhất)
- **Mục đích sử dụng:** Tạo ra một giá trị độc bản, không bao giờ trùng lặp trên toàn hệ thống (kể cả khi truyền cùng một mô tả description). Thường dùng làm key ẩn cho thuộc tính Object để tránh xung đột tên.

```javascript
let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 === id2); // false (luôn luôn là duy nhất!)
console.log(typeof id1);   // "symbol"
```

> [!NOTE]
> Trong thực tế lập trình hàng ngày, `BigInt` và `Symbol` là hai kiểu ít được sử dụng nhất so với 6 kiểu còn lại vì các bài toán thông thường hiếm khi cần vượt giới hạn $2^{53} - 1$ hoặc tạo key độc bản bí mật.

---

<a id="object-đối-tượng-key-value"></a>
#### 8. Object (Đối tượng key-value)
- **Mục đích sử dụng:** Lưu trữ và quản lý tập hợp dữ liệu phức tạp theo cấu trúc cặp khóa - giá trị (`key: value`).

```javascript
let user = {
  name: "Nguyễn Văn A",
  age: 30
};

console.log(typeof user); // "object"
```

- **Quy ước đặt tên:** Dùng **danh từ số ít** đại diện cho thực thể (ví dụ: `user`, `product`, `order`).

---

<a id="11-4-dạng-đặc-biệt-của-object-array--function"></a>
### 11.4. Dạng Đặc Biệt Của Object: Array & Function

Trong JavaScript, hầu hết mọi cấu trúc phức tạp đều là biến thể của Object:

#### 1. Array (Mảng)
- **Mục đích:** Lưu trữ một danh sách có thứ tự các phần tử.
- **`typeof` trả về:** `"object"` (Muốn kiểm tra mảng chuẩn xác, dùng `Array.isArray()`).
- **Quy ước đặt tên:** Luôn dùng **danh từ số nhiều** (ví dụ: `fruits`, `products`, `colors`).

```javascript
let products = ["iPhone", "Samsung Galaxy", "Google Pixel"];

console.log(typeof products);          // "object"
console.log(Array.isArray(products));  // true ✅
```

#### 2. Function (Hàm)
- **Mục đích:** Đóng gói một khối lệnh có thể tái sử dụng nhiều lần để thực thi tác vụ.
- **`typeof` trả về:** `"function"` (đây là ngoại lệ hữu ích của typeof).
- **Quy ước đặt tên:** Luôn bắt đầu bằng **động từ** (ví dụ: `calculateTax`, `getUserProfile`, `renderCart`).

```javascript
function calculateTax(price) {
  const taxRate = 0.1;
  return price * (1 + taxRate);
}

console.log(typeof calculateTax); // "function"
```

> [!NOTE]
> Trong JavaScript hiện đại còn có các dạng Object nâng cao khác như `Map`, `Set`, `Date`, `RegExp` (được nghiên cứu chi tiết ở các chuyên đề sau).

---

<a id="11-5-5-tình-huống-kinh-điển-giá-trị-undefined-xuất-hiện"></a>
### 11.5. 5 Tình Huống Kinh Điển Giá Trị "undefined" Xuất Hiện

`undefined` xuất hiện tự động khi JavaScript muốn thông báo trạng thái "chưa được khởi tạo" hoặc "không tồn tại":

| STT | Tình huống | Ví dụ code minh họa | Kết quả |
| :---: | :--- | :--- | :--- |
| **1** | Biến được khai báo nhưng chưa gán giá trị | `let example;`<br>`console.log(example);` | `undefined` |
| **2** | Một hàm kết thúc mà không có lệnh return | `function noReturn() { let a = 1 + 2; }`<br>`console.log(noReturn());` | `undefined` |
| **3** | Đối số không được truyền vào hàm khi gọi | `function greet(name) { return "Hello " + name; }`<br>`console.log(greet());` | `"Hello undefined"` |
| **4** | Truy cập thuộc tính không tồn tại trong Object | `let obj = { name: "An" };`<br>`console.log(obj.age);` | `undefined` |
| **5** | Truy cập phần tử tại vị trí index không tồn tại trong Mảng | `let arr = [1, 2, 3];`<br>`console.log(arr[10]);` | `undefined` |

---

<a id="11-6-3-sai-lầm-thường-gặp-common-pitfalls"></a>
### 11.6. 3 Sai Lầm Thường Gặp (Common Pitfalls)

<a id="cạm-bẫy-1-nhầm-lẫn-giữa-string-và-number"></a>
#### ⚠️ Cạm bẫy 1: Nhầm lẫn giữa String và Number
Toán tử `+` khi gặp ít nhất một toán hạng là chuỗi sẽ tự động chuyển sang cơ chế **ghép chuỗi (String Concatenation)** thay vì phép cộng số học:

```javascript
console.log('2' + 2);   // "22" ❌ (Ghép chuỗi, không phải 4!)
console.log(2 + 2);     // 4    ✅ (Cộng số)
console.log('10' - 5);  // 5    ✅ (Toán tử -, *, / tự ép kiểu chuỗi số sang Number)
```

**Khắc phục:** Luôn ép kiểu rõ ràng bằng `Number(val)` hoặc `parseInt(val, 10)` trước khi tính toán.

---

<a id="cạm-bẫy-2-không-hiểu-rõ-sự-khác-biệt-giữa-null-và-undefined"></a>
#### ⚠️ Cạm bẫy 2: Không hiểu rõ sự khác biệt giữa Null và Undefined

| Tiêu chí | `undefined` | `null` |
| :--- | :--- | :--- |
| **Ý nghĩa** | Chưa được khởi tạo / Chưa xác định | Rỗng có chủ đích / Trống không |
| **Chủ thể gán** | Do JavaScript tự động gán | Do lập trình viên chủ động gán |
| **typeof** | `"undefined"` | `"object"` (bug lịch sử) |
| **So sánh** | `null == undefined` là `true` | `null === undefined` là `false` |

**4 Ứng dụng thực tế kinh điển của `null`:**
1. **Khởi tạo biến chứa đối tượng chưa tải xong:**
   ```javascript
   let currentUser = null; // Khởi tạo rỗng
   if (isLoggedIn) {
     currentUser = { name: "An", age: 30 };
   }
   ```
2. **Trả về khi thuật toán tìm kiếm không có kết quả:**
   ```javascript
   function findUserById(users, id) {
     for (let u of users) {
       if (u.id === id) return u;
     }
     return null; // Trả về null báo hiệu "không tìm thấy"
   }
   ```
3. **Reset giá trị bộ nhớ:**
   ```javascript
   let selectedFile = { name: "cv.pdf", size: "2MB" };
   // Người dùng nhấn nút xóa:
   selectedFile = null;
   ```
4. **Đánh dấu tham số tùy chọn không bắt buộc:**
   ```javascript
   function createProfile(name, age, address = null) {
     // Nếu không truyền address, giá trị sẽ là null rõ ràng
   }
   ```

---

<a id="cạm-bẫy-3-không-kiểm-tra-kiểu-dữ-liệu-trước-khi-tính-toán"></a>
#### ⚠️ Cạm bẫy 3: Không kiểm tra kiểu dữ liệu trước khi tính toán
Trong hàm tính tuổi từ năm sinh, nếu tham số truyền vào là chuỗi không hợp lệ, phép trừ sẽ ra `NaN` (Not a Number):

```javascript
// ❌ Cách viết nguy hiểm:
function calculateAge(currentYear, birthYear) {
  return currentYear - birthYear;
}
console.log(calculateAge(2024, "ABC")); // NaN

// ✅ Cách viết phòng thủ an toàn (Clean Code):
function calculateAge(currentYear, birthYear) {
  if (typeof currentYear !== 'number' || typeof birthYear !== 'number') {
    return 'Lỗi: Dữ liệu đầu vào phải là số hợp lệ';
  }
  return currentYear - birthYear;
}
console.log(calculateAge(2024, "ABC")); // "Lỗi: Dữ liệu đầu vào phải là số hợp lệ"
```

---

<a id="11-7-bảng-tra-cứu-toàn-diện-8-kiểu-dữ-liệu"></a>
### 11.7. Bảng Tra Cứu Toàn Diện 8 Kiểu Dữ Liệu

| Kiểu dữ liệu | Nhóm | `typeof` trả về | Mục đích sử dụng | Quy ước đặt tên |
| :--- | :--- | :--- | :--- | :--- |
| **String** | Primitive | `"string"` | Lưu trữ văn bản | Danh từ số ít |
| **Number** | Primitive | `"number"` | Toán học, số học (có `NaN`, `Infinity`) | Danh từ số ít |
| **BigInt** | Primitive | `"bigint"` | Số nguyên lớn > $2^{53} - 1$ | Thêm tiền tố `big`, `large` |
| **Boolean** | Primitive | `"boolean"` | Trạng thái đúng/sai nhị phân | Bắt đầu: `is`, `has`, `can`, `should` |
| **Undefined** | Primitive | `"undefined"` | Biến chưa được gán giá trị | Thường do JS gán tự động |
| **Null** | Primitive | `"object"` ⚠️ | Đánh dấu rỗng có chủ đích | Danh từ số ít |
| **Symbol** | Primitive | `"symbol"` | Định danh độc bản duy nhất | Thường dùng hằng số hoặc camelCase |
| **Object** | Reference | `"object"` | Cấu trúc key-value phức tạp | Danh từ số ít |
| **Array** | Reference | `"object"` ⚠️ (dùng `Array.isArray`) | Danh sách có thứ tự | **Danh từ số nhiều** |
| **Function** | Reference | `"function"` | Tác vụ xử lý có thể gọi lại | **Động từ** |

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="11-8-phòng-khám-dr-javascript--kỹ-thuật-chẩn-đoán-kiểu-dữ-liệu-chuẩn-xác-4-ca-bệnh-khó"></a>
### 11.8. Phòng Khám Dr. JavaScript — Kỹ Thuật "Chẩn Đoán" Kiểu Dữ Liệu Chuẩn Xác (4 Ca Bệnh Khó)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Tại phòng khám đa khoa của **Dr. JavaScript**, mỗi “bệnh nhân” bước vào đều mang hồ sơ bệnh án là một kiểu dữ liệu khác nhau. Một ngày nọ, Dr. JavaScript đối mặt với thách thức nan giải mang tên **“Căn bệnh khó lường”**:
> - Khi dùng máy quét xét nghiệm thông thường (`typeof`), cả 3 bệnh nhân gồm **`null`**, **`object`**, và **`array`** đều cho ra kết quả xét nghiệm giống hệt nhau là `"object"`.
> - Không những thế, bệnh nhân dị tật **`NaN` (Not a Number)** lại được máy quét thông báo là kiểu... `"number"`!
> 
> Nếu chỉ tin vào kết quả của máy quét sơ sài `typeof`, bác sĩ sẽ chẩn đoán nhầm và "kê sai đơn thuốc", dẫn đến phần mềm bị crash hoặc sinh lỗi ngầm nghiêm trọng. Làm sao để phân biệt và chẩn đoán chính xác 100% từng kiểu dữ liệu?

---

#### 📋 Cẩm Nang Chẩn Đoán Chi Tiết Từng Kiểu Dữ Liệu

Dưới đây là phác đồ chẩn đoán chuẩn xác cho toàn bộ 10 dạng dữ liệu trong JavaScript:

##### 1. String (Chuỗi)
Chuỗi ký tự biểu diễn văn bản. Dùng `typeof` là đủ an toàn.
```javascript
let greeting = "Hello, world!";
console.log(typeof greeting === "string"); // true
```

##### 2. Number (Số) & ⚠️ Ca Bệnh Khó 1: Loại Trừ NaN
`typeof NaN` trả về `"number"` dù bản chất nó là kết quả của một phép toán số học không hợp lệ. Do đó, muốn kiểm tra một biến có thực sự là số hợp lệ hay không, **bắt buộc phải loại trừ `NaN`**:
```javascript
let value = 30; // Thử đổi thành NaN để kiểm tra
console.log(typeof value === "number" && !isNaN(value)); // true
```
> [!TIP]
> **Nâng cao:** Biểu thức `!isNaN(value)` ở trên vẫn coi `Infinity` và `-Infinity` là số hợp lệ. Nếu bài toán của bạn yêu cầu loại bỏ cả số vô cực, hãy dùng phương thức chuẩn ES6:
> ```javascript
> Number.isFinite(value); // true nếu là số thực sự và hữu hạn (loại cả NaN, Infinity, -Infinity)
> ```
> *Lý do ra đời của BigInt:* Do Number dùng chuẩn IEEE 754 64-bit float, nó chỉ biểu diễn chính xác số nguyên trong khoảng $\pm(2^{53} - 1)$ (`Number.MAX_SAFE_INTEGER`). Vượt ngưỡng này, số sẽ bị làm tròn sai lệch (ví dụ `9007199254740993` sẽ bị ép thành `9007199254740992`).

##### 3. BigInt (Số nguyên lớn)
Dành cho số nguyên khổng lồ vượt ngưỡng an toàn của Number:
```javascript
let largeNumber = 9007199254740991n;
console.log(typeof largeNumber === "bigint"); // true
```
> [!NOTE]
> Khi chạy code trên các nền tảng online cũ hoặc trình chấm bài F8, nếu cú pháp hậu tố `n` báo lỗi cú pháp *"Identifier directly after number"*, hãy dùng cú pháp `BigInt("9007199254740991")`. Cả hai đều biểu diễn chính xác tuyệt đối.

##### 4. Boolean (Đúng / Sai)
Giá trị nhị phân `true` hoặc `false`. Dùng `typeof` là đủ:
```javascript
let isStudent = true;
console.log(typeof isStudent === "boolean"); // true
```

##### 5. ⚠️ Ca Bệnh Khó 2: Null (Phải So Sánh Trực Tiếp === null)
Vì `typeof null` bị lỗi lịch sử trả về `"object"`, ta **tuyệt đối không dùng typeof** mà phải so sánh trực tiếp:
```javascript
let emptyValue = null;
console.log(emptyValue === null); // true ✅
```

##### 6. Undefined (Chưa được gán giá trị)
Biến đã khai báo nhưng chưa có giá trị. Dùng `typeof` hoặc so sánh trực tiếp:
```javascript
let notAssigned;
console.log(typeof notAssigned === "undefined"); // true
console.log(notAssigned === undefined);          // true
```

##### 7. Symbol (Định danh độc bản)
Tạo giá trị duy nhất, không trùng lặp:
```javascript
let sym = Symbol("unique");
console.log(typeof sym === "symbol"); // true
```

##### 8. ⚠️ Ca Bệnh Khó 3: Array (Phải Dùng Array.isArray)
Vì mảng là đối tượng đặc biệt nên `typeof []` trả về `"object"`. Muốn xác nhận chắc chắn là mảng:
```javascript
let fruits = ["apple", "banana", "cherry"];

// Cách 1: Chuẩn mực khuyên dùng 100%
console.log(Array.isArray(fruits)); // true ✅

// Cách 2: Dùng instanceof
console.log(fruits instanceof Array); // true
```

##### 9. ⚠️ Ca Bệnh Khó 4: Object Thuần Túy (Plain Object)
Vì `typeof null` và `typeof []` đều ra `"object"`, nên nếu chỉ viết `typeof person === "object"` thì sẽ bị "bắt nhầm" cả `null` lẫn `Array`! 
Công thức chẩn đoán chính xác một biến thực sự là đối tượng (`{}`):
```javascript
let person = { name: "John", age: 30 };

// Bắt buộc phải kết hợp 3 điều kiện:
const isPureObject = typeof person === "object" && person !== null && !Array.isArray(person);
console.log(isPureObject); // true ✅
```

##### 10. Function (Hàm)
Hàm là đối tượng đặc biệt có thể gọi (callable):
```javascript
function greet() { return "Hello, world!"; }
console.log(typeof greet === "function"); // true
```

---

#### 🏆 Bảng "Kê Đơn" 4 Trường Hợp Cần Ghi Nhớ Nằm Lòng

| Ca bệnh khó | Triệu chứng gây nhầm lẫn | Phác đồ "điều trị" chuẩn xác 100% |
| :--- | :--- | :--- |
| **1. Number** | `typeof NaN === "number"` (báo số nhưng không tính được) | `typeof val === "number" && !isNaN(val)`<br>*(hoặc `Number.isFinite(val)`)* |
| **2. Null** | `typeof null === "object"` (lỗi thiết kế từ năm 1995) | `val === null` |
| **3. Array** | `typeof [] === "object"` (mảng bị nhận nhầm là object) | `Array.isArray(val)` |
| **4. Plain Object** | Bị trùng với cả `null` và `Array` khi dùng `typeof` | `typeof val === "object" && val !== null && !Array.isArray(val)` |

[⬆️ Quay lại Mục lục](#mục-lục)
