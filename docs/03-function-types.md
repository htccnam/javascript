# 03 - 3 Loại Hàm Trong JavaScript (Declaration, Expression & Arrow Function)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng việc định nghĩa một hàm giống như **cách ghi chép công thức nấu ăn** trong nhà hàng:
> - **Hàm khai báo (Function Declaration)** giống như cuốn sách công thức gia truyền được in sẵn trên giá sách từ đời trước (**Hoisting**): Bất kỳ người đầu bếp nào bước vào bếp, dù đứng ở đầu hay cuối phòng bếp, đều có thể với tay lấy ra sử dụng ngay lập tức mà không cần chờ đợi.
> - **Hàm biểu thức (Function Expression)** giống như công thức được ghi vào một cuốn sổ tay cá nhân (`const recipe = ...`): Bạn chỉ có thể nấu được món ăn đó **sau khi** công thức đã được chép xong vào sổ. Nếu nấu trước khi viết, bạn sẽ không tìm thấy công thức đâu cả!
> - **Hàm mũi tên (Arrow Function)** giống như những tờ giấy ghi chú nhanh (Post-it note): Cực kỳ ngắn gọn, viết một phát xong ngay (`n => n * 2`), hoàn hảo để giao việc tức thì cho phụ bếp làm một công đoạn nhỏ (Hàm Callback).

---

<a id="mục-lục"></a>
## Mục Lục

- [1. Hàm Khai Báo (Function Declaration)](#1-hàm-khai-báo-function-declaration)
  - [1.1. Khái niệm & Cú pháp](#11-khái-niệm--cú-pháp)
  - [1.2. Ví dụ thực tế](#12-ví-dụ-thực-tế)
  - [1.3. Đặc điểm cốt lõi: Cơ chế Hoisting](#13-đặc-điểm-cốt-lõi-cơ-chế-hoisting)
- [2. Hàm Biểu Thức (Function Expression)](#2-hàm-biểu-thức-function-expression)
  - [2.1. Khái niệm & Cú pháp](#21-khái-niệm--cú-pháp)
  - [2.2. Ví dụ thực tế](#22-ví-dụ-thực-tế)
  - [2.3. Đặc điểm cốt lõi: Không thể gọi trước khi định nghĩa](#23-đặc-điểm-cốt-lõi-không-thể-gọi-trước-khi-định-nghĩa)
- [3. Hàm Mũi Tên (Arrow Function - ES6)](#3-hàm-mũi-tên-arrow-function---es6)
  - [3.1. Khái niệm & Cú pháp](#31-khái-niệm--cú-pháp)
  - [3.2. Các cấp độ rút gọn đỉnh cao của Arrow Function](#32-các-cấp-độ-rút-gọn-đỉnh-cao-của-arrow-function)
- [4. Khi Nào Thì Sử Dụng Loại Hàm Nào?](#4-khi-nào-thì-sử-dụng-loại-hàm-nào)
- [5. Những Khác Biệt Sâu & Cạm Bẫy Cần Nhớ](#5-những-khác-biệt-sâu--cạm-bẫy-cần-nhớ)
- [6. Bảng Tổng Kết So Sánh 3 Loại Hàm](#6-bảng-tổng-kết-so-sánh-3-loại-hàm)

---

## 1. Hàm Khai Báo (Function Declaration)

### 1.1. Khái niệm & Cú pháp
Hàm khai báo là cách truyền thống và lâu đời nhất để định nghĩa một hàm trong JavaScript kể từ những phiên bản đầu tiên.

```javascript
function tenHam(thamSo1, thamSo2) {
    // Khối lệnh thực thi
    return giaTri;
}
```

### 1.2. Ví dụ thực tế
```javascript
function tinhTong(a, b) {
    return a + b;
}

console.log(tinhTong(5, 3)); // 8
```

### 1.3. Đặc điểm cốt lõi: Cơ chế Hoisting
Điểm đặc biệt nhất của Function Declaration là **được đưa lên đầu phạm vi (Hoisted hoàn toàn)** cả tên hàm lẫn thân hàm trước khi code được thực thi. Do đó, bạn có thể gọi hàm **TRƯỚC** khi định nghĩa nó trong file:

```javascript
// Gọi hàm trước khi dòng khai báo xuất hiện -> VẪN CHẠY THÀNH CÔNG!
chaoBuoiSang("Nam"); // Output: "Chào buổi sáng, Nam!"

function chaoBuoiSang(name) {
    console.log(`Chào buổi sáng, ${name}!`);
}
```

> [!TIP]
> **Khuyến nghị:** Mặc dù JavaScript cho phép gọi trước khi khai báo, bạn vẫn nên tập thói quen gọi hàm sau khi đã định nghĩa để code rõ ràng, mạch lạc và dễ đọc-hiểu hơn đối với người mới học.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 2. Hàm Biểu Thức (Function Expression)

### 2.1. Khái niệm & Cú pháp
Hàm biểu thức là cách định nghĩa hàm thông qua việc **gán một hàm (thường là hàm ẩn danh - anonymous function) vào một biến**.

```javascript
const tenHam = function (thamSo1, thamSo2) {
    // Khối lệnh thực thi
    return giaTri;
};
```

### 2.2. Ví dụ thực tế
```javascript
const tinhHieu = function (a, b) {
    return a - b;
};

console.log(tinhHieu(5, 3)); // 2
```

### 2.3. Đặc điểm cốt lõi: Không thể gọi trước khi định nghĩa
Khác với Function Declaration, hàm biểu thức tuân theo quy tắc khai báo biến:
- Nếu khai báo bằng `const` hoặc `let`, biến sẽ nằm trong **Vùng chết tạm thời (TDZ - Temporal Dead Zone)**.
- Nếu bạn cố tình gọi hàm trước dòng gán, JavaScript sẽ ném ra lỗi `ReferenceError`:

```javascript
try {
    tinhHieu(5, 3); // ❌ LỖI NGAY TẠI ĐÂY!
} catch (error) {
    console.error(error.name); // ReferenceError
    console.error(error.message); // Cannot access 'tinhHieu' before initialization
}

const tinhHieu = function (a, b) {
    return a - b;
};
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 3. Hàm Mũi Tên (Arrow Function - ES6)

### 3.1. Khái niệm & Cú pháp
Được giới thiệu từ phiên bản **ECMAScript 2015 (ES6)**, Hàm mũi tên là cú pháp viết ngắn gọn và thanh lịch hơn của Hàm biểu thức, sử dụng ký hiệu mũi tên suy ra `=>` (fat arrow).

```javascript
const tenHam = (thamSo1, thamSo2) => {
    // Khối lệnh thực thi
    return giaTri;
};
```

### 3.2. Các cấp độ rút gọn đỉnh cao của Arrow Function

#### Cấp độ 1: Cú pháp đầy đủ (Có `{}` và `return`)
```javascript
const tinhTich = (a, b) => {
    return a * b;
};
console.log(tinhTich(5, 3)); // 15
```

#### Cấp độ 2: Trả về trực tiếp (Implicit Return - Bỏ `{}` và `return`)
Khi thân hàm chỉ chứa **duy nhất một biểu thức trả về giá trị**, bạn có thể bỏ cả dấu ngoặc nhọn `{}` và từ khóa `return`:
```javascript
const tinhTich = (a, b) => a * b;
console.log(tinhTich(5, 3)); // 15
```

#### Cấp độ 3: Bỏ ngoặc đơn `()` khi chỉ có đúng 1 tham số
Khi hàm chỉ nhận **duy nhất 1 tham số**, bạn có thể bỏ luôn dấu ngoặc đơn `()` quanh tham số:
```javascript
const gapDoi = n => n * 2;
console.log(gapDoi(4)); // 8
```
*(Nếu hàm có 0 tham số hoặc từ 2 tham số trở lên, bắt buộc phải có ngoặc đơn: `() => ...` hoặc `(a, b) => ...`)*.

#### Cấp độ 4: Trả về trực tiếp một Object Literal `({ ... })`
> [!CAUTION]
> **Cạm bẫy kinh điển:** Khi muốn return ngầm một Object Literal, bạn **bắt buộc phải bọc cặp ngoặc tròn `({ })`** bên ngoài object. Nếu không bọc, JavaScript sẽ hiểu nhầm dấu `{}` là thân hàm chứ không phải đối tượng!

```javascript
// ❌ SAI: JS hiểu {} là thân hàm, không phải object -> Kết quả ra undefined
const createUserWrong = (id, name) => { id: id, name: name };

// ✅ ĐÚNG: Bọc ngoặc tròn ({ }) để báo cho JS biết đây là Object Literal
const createUserRight = (id, name) => ({ id, name });
console.log(createUserRight(1, "Huy")); // { id: 1, name: "Huy" }
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 4. Khi Nào Thì Sử Dụng Loại Hàm Nào?

| Loại Hàm | Khi nào nên sử dụng? | Ưu điểm nổi bật |
| :--- | :--- | :--- |
| **Hàm khai báo**<br>*(Declaration)* | - Khi cần hàm có sẵn ở mọi nơi trong file (tận dụng Hoisting).<br>- Thích hợp làm các hàm tiện ích chung (Utility/Helper functions) ở đầu hoặc cuối file.<br>- Khi cần dùng làm hàm khởi tạo (Constructor). | Cú pháp quen thuộc, linh hoạt vị trí gọi. |
| **Hàm biểu thức**<br>*(Expression)* | - Khi bạn muốn kiểm soát chặt chẽ luồng thực thi: **chỉ được gọi sau khi đã định nghĩa**.<br>- Khi truyền hàm như một giá trị (First-class citizen): gán vào object method, truyền vào tham số. | Tránh lỗi gọi nhầm hàm trước khi khởi tạo dữ liệu. |
| **Hàm mũi tên**<br>*(Arrow Function)* | - Khi làm việc với các hàm Callback ngắn trong các phương thức mảng (`map`, `filter`, `reduce`, `find`...).<br>- Khi cần cú pháp cực kỳ ngắn gọn, súc tích.<br>- Khi muốn kế thừa ngữ cảnh `this` từ phạm vi cha (Arrow function không có `this` riêng). | Code ngắn gọn, sạch đẹp, giải quyết triệt để lỗi mất ngữ cảnh `this`. |

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 5. Những Khác Biệt Sâu & Cạm Bẫy Cần Nhớ

1. **Arrow Function KHÔNG có `this` riêng:**
   Nó lấy `this` của phạm vi cha nơi nó được khai báo (Lexical scoping). Vì vậy, **không nên dùng Arrow Function làm method của Object** nếu bạn muốn dùng `this` để truy cập thuộc tính của chính object đó.
2. **Arrow Function KHÔNG có đối tượng `arguments`:**
   Nếu muốn lấy danh sách tham số không giới hạn, hãy dùng toán tử Rest parameter (`...args`):
   ```javascript
   const sumAll = (...args) => args.reduce((sum, n) => sum + n, 0);
   ```
3. **Arrow Function KHÔNG thể dùng làm Constructor (với từ khóa `new`):**
   ```javascript
   const Person = (name) => { this.name = name; };
   // new Person("Huy"); // ❌ TypeError: Person is not a constructor
   ```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 6. Bảng Tổng Kết So Sánh 3 Loại Hàm

| Tiêu chí | Function Declaration | Function Expression | Arrow Function |
| :--- | :---: | :---: | :---: |
| **Cú pháp** | `function foo() {}` | `const foo = function() {}` | `const foo = () => {}` |
| **Cơ chế Hoisting** | Có (toàn bộ) | Không (chỉ hoist biến) | Không (chỉ hoist biến) |
| **Gọi trước định nghĩa?** | **ĐƯỢC** ✅ | **KHÔNG** ❌ *(ReferenceError)* | **KHÔNG** ❌ *(ReferenceError)* |
| **Từ khóa `this`** | `this` động (ngữ cảnh gọi) | `this` động (ngữ cảnh gọi) | `this` tĩnh (kế thừa cha) |
| **Hỗ trợ `new` Constructor** | Có | Có | **KHÔNG** ❌ |
| **Cú pháp rút gọn** | Không | Không | **Có (Implicit return)** |

[⬆️ Quay lại Mục lục](#mục-lục)
