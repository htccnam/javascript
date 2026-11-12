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
11. [7 Kiểu Dữ Liệu Nguyên Thủy (Primitive Types) Trong JavaScript](#11-7-kiểu-dữ-liệu-nguyên-thủy-primitive-types-trong-javascript)

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

<a id="11-7-kiểu-dữ-liệu-nguyên-thủy-primitive-types-trong-javascript"></a>
## 11. 7 Kiểu Dữ Liệu Nguyên Thủy (Primitive Types) Trong JavaScript
Các kiểu dữ liệu nguyên thủy lưu trữ giá trị trực tiếp tại vùng nhớ **Stack** (truy xuất siêu tốc). Chúng là những giá trị đơn lẻ và **không thể sửa đổi nội dung gốc (Immutable)**. Mọi thao tác biến đổi đều tạo ra một bản sao hoàn toàn mới:

| Kiểu dữ liệu | Mô tả bản chất | Ví dụ thực tế |
| :--- | :--- | :--- |
| **Number** | Đại diện cho cả số nguyên và số thực (chuẩn IEEE 754 64-bit). Chứa cả các giá trị đặc biệt: `NaN`, `Infinity`, `-Infinity`. | `let age = 21;`<br>`let price = 99.99;` |
| **String** | Chuỗi ký tự biểu diễn văn bản, được bọc trong cặp dấu `""`, `''` hoặc backticks `\`\` ` (Template Literals). | `const name = "Hoàng Nam";`<br>`` `Xin chào ${name}` `` |
| **Boolean** | Chỉ nhận 1 trong 2 giá trị nhị phân `true` hoặc `false`, dùng trong các biểu thức rẽ nhánh điều kiện logic. | `let isLoggedIn = true;`<br>`let hasAdminRole = false;` |
| **Undefined** | Trạng thái mặc định của một biến khi vừa được khai báo trong bộ nhớ mà chưa từng được gán giá trị nào. | `let status; // undefined` |
| **Null** | Giá trị rỗng có chủ ý, dùng để người lập trình chủ động đánh dấu biến đó hiện tại "không có gì". | `let currentUser = null;` |
| **BigInt** | Biểu diễn các số nguyên lớn tùy ý vượt quá giới hạn an toàn $2^{53} - 1$ của kiểu `Number`. Khai báo bằng cách thêm hậu tố `n`. | `const bigNum = 9007199254740991n;` |
| **Symbol** | Tạo ra một định danh duy nhất (Unique) và bất biến trên toàn hệ thống, không bao giờ trùng lặp, thường dùng làm key bảo vệ cho Object. | `const id = Symbol("id");` |

[⬆️ Quay lại Mục lục](#mục-lục)
