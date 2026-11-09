# 01 - Tìm hiểu về chuỗi trong JavaScript

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng bạn có hai người bạn: **Huy** và **Linh**.
> - **Huy** rất giỏi kể chuyện nhưng chỉ thích nói từng mẩu nhỏ một.
> - **Linh** lại thích nối những phần chuyện của Huy lại với nhau để thành một câu chuyện hoàn chỉnh.
>
> Trong lập trình JavaScript, **Huy** giống như những chuỗi văn bản đơn lẻ, còn **Linh** giống như **toán tử nối chuỗi** và **nội suy (interpolation)**, giúp ghép nối và tạo ra một câu chuyện liền mạch — tức là một chuỗi văn bản hoàn chỉnh.

---

<a id="mục-lục"></a>
## Mục Lục

- [1. Tìm hiểu về chuỗi](#1-tìm-hiểu-về-chuỗi)
  - [1.1. Chuỗi là gì?](#11-chuỗi-là-gì)
  - [1.2. Tạo chuỗi với nháy đơn (`' '`)](#12-tạo-chuỗi-với-nháy-đơn--)
  - [1.3. Tạo chuỗi với nháy kép (`" "`)](#13-tạo-chuỗi-với-nháy-kép--)
  - [1.4. Tạo chuỗi với backticks (`` ` ` ``)](#14-tạo-chuỗi-với-backticks---)
- [2. Nối chuỗi](#2-nối-chuỗi)
  - [2.1. Toán tử nối chuỗi (`+`)](#21-toán-tử-nối-chuỗi-)
  - [2.2. Ví dụ nối chuỗi](#22-ví-dụ-nối-chuỗi)
  - [2.3. Lưu ý quan trọng khi sử dụng toán tử `+`](#23-lưu-ý-quan-trọng-khi-sử-dụng-toán-tử-)
- [3. Template Literals](#3-template-literals)
  - [3.1. Template Literals là gì?](#31-template-literals-là-gì)
  - [3.2. Nội suy chuỗi (String Interpolation)](#32-nội-suy-chuỗi-string-interpolation)
  - [3.3. Các ví dụ về nội suy chuỗi](#33-các-ví-dụ-về-nội-suy-chuỗi)
- [4. Các lỗi thường gặp khi làm việc với chuỗi](#4-các-lỗi-thường-gặp-khi-làm-việc-với-chuỗi)
- [5. Tóm tắt kiến thức cốt lõi](#5-tóm-tắt-kiến-thức-cốt-lõi)

---

## 1. Tìm hiểu về chuỗi

### 1.1. Chuỗi là gì?

**Chuỗi (String)** là một kiểu dữ liệu nguyên thủy (primitive data type) trong JavaScript, được sử dụng để biểu diễn và lưu trữ văn bản.

Để tạo chuỗi, ta có thể bao bọc văn bản bằng:
- Dấu nháy đơn (`' '`)
- Dấu nháy kép (`" "`)
- Dấu backticks (`` ` ` ``)

```javascript
// Tạo chuỗi với dấu nháy đơn
const str1 = 'This is a string!';

// Tạo chuỗi với dấu nháy kép
const str2 = "This is another string";

// Tạo chuỗi với backticks
const str3 = `This is yet another string!`;
```

> [!TIP]
> Phím backtick (`` ` ``) thường nằm ngay bên dưới phím **ESC** và bên trên phím **TAB** ở góc trên bên trái bàn phím.

---

### 1.2. Tạo chuỗi với nháy đơn (`' '`)

- **Đặc điểm:** Đây là cách truyền thống và phổ biến nhất để tạo chuỗi trong JavaScript.
- **Ứng dụng:** Thường dùng cho các chuỗi văn bản đơn giản, không cần xuống dòng. Rất tiện lợi khi chuỗi chứa sẵn dấu nháy kép bên trong mà không sợ bị xung đột.

```javascript
const quote = 'Xin chào, đây là "JavaScript"!';
console.log(quote); // Xin chào, đây là "JavaScript"!
```

---

### 1.3. Tạo chuỗi với nháy kép (`" "`)

- **Đặc điểm:** Tương tự dấu nháy đơn, nhưng thường được ưu tiên khi nội dung chuỗi có chứa dấu nháy đơn.
- **Ứng dụng:** Hữu ích khi bạn muốn bao gồm dấu nháy đơn (như dấu sở hữu cách, rút gọn trong tiếng Anh) mà không cần dùng ký tự thoát (Escape character).

```javascript
const message = "Đây là 'JavaScript'!";
console.log(message); // Đây là 'JavaScript'!
```

#### 📌 Ký tự thoát (Escape Character `\`)
Khi bạn bắt buộc phải dùng cùng loại dấu nháy với dấu bao quanh chuỗi, hãy đặt dấu gạch chéo ngược (`\`) ngay trước ký tự đó để bỏ chức năng đặc biệt của nó:

```javascript
// Dùng \' để nhúng dấu nháy đơn trong chuỗi nháy đơn
const phrase = 'I\'m learning JavaScript';
console.log(phrase); // I'm learning JavaScript
```

**Một số ký tự thoát thường gặp:**
- `\n`: Xuống dòng mới (Newline)
- `\t`: Thụt lề một khoảng Tab
- `\'`: Dấu nháy đơn
- `\"`: Dấu nháy kép
- `\\`: In chính dấu gạch chéo ngược `\`

```javascript
// Muốn chuỗi chứa chính dấu \, hãy viết hai dấu liên tiếp:
console.log("C:\\Users\\Admin"); // In ra: C:\Users\Admin
```

---

### 1.4. Tạo chuỗi với backticks (`` ` ` ``)

- **Đặc điểm:** Hỗ trợ **nội suy chuỗi (String Interpolation)** — cho phép chèn biến hoặc biểu thức trực tiếp vào chuỗi qua cú pháp `${...}`, đồng thời cho phép **xuống dòng trực tiếp** trong chuỗi.
- **Ứng dụng:** Cực kỳ hữu ích khi cần tạo thông điệp động kết hợp chuỗi với biến, hoặc khi cần viết văn bản nhiều dòng (HTML template, đoạn văn dài).

```javascript
let name = "JavaScript";
let greeting = `Xin chào, đây là ${name}!
Chúng ta có thể xuống dòng trực tiếp mà không cần dùng \\n.`;

console.log(greeting);
```

> [!IMPORTANT]
> - Sử dụng `${name}` bên trong backticks được gọi là **“Nội suy” (Interpolation)**.
> - Tạo chuỗi với dấu nháy đơn (`' '`) và nháy kép (`" "`) **KHÔNG hỗ trợ** nội suy.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 2. Nối chuỗi

### 2.1. Toán tử nối chuỗi (`+`)

Toán tử nối chuỗi cho phép kết hợp hai hoặc nhiều chuỗi thành một chuỗi duy nhất bằng cách sử dụng ký tự `+`.

```javascript
// Nối chuỗi với toán tử +
let greeting = "Xin chào, " + "tôi là " + "Huy.";
console.log(greeting); // Xin chào, tôi là Huy.
```

- **Lý do sử dụng:** Giúp tạo ra thông điệp động, kết hợp dữ liệu từ nhiều nguồn (ví dụ: chào mừng theo tên người dùng).

---

### 2.2. Ví dụ nối chuỗi

#### a. Nối chuỗi cố định với chuỗi cố định:
```javascript
const text = 'Xin' + ' ' + 'chào!';
console.log(text); // 'Xin chào!'
```

#### b. Chuỗi lưu vào biến rồi nối tiếp:
```javascript
let greeting = 'Xin';
let message = greeting + ' chào!';
console.log(message); // Xin chào!
```

#### c. Chuỗi chứa nháy đơn:
```javascript
let message = "Đây là chuỗi chứa dấu nháy đơn: I'm learning JavaScript!";
console.log(message); // Đây là chuỗi chứa dấu nháy đơn: I'm learning JavaScript!
```

#### d. Chuỗi chứa nháy kép:
```javascript
let message = 'Đây là chuỗi chứa dấu nháy kép: "JavaScript is fun!"';
console.log(message); // Đây là chuỗi chứa dấu nháy kép: "JavaScript is fun!"
```

---

### 2.3. Lưu ý quan trọng khi sử dụng toán tử `+`

Khi sử dụng toán tử `+` trong JavaScript, bạn cần phân biệt rõ ràng giữa **nối chuỗi** và **phép cộng số học**.

```javascript
console.log('2' + 2); // Kết quả là '22', KHÔNG PHẢI 4!
```

> **Quy tắc của JavaScript:**
> - Nếu **ít nhất một** trong hai toán hạng là chuỗi, JavaScript sẽ ưu tiên thực hiện **nối chuỗi**.
> - Nếu **cả hai** toán hạng đều là số, JavaScript mới thực hiện **phép cộng số học**.

#### ⚠️ Thứ tự thực hiện phép toán
Biểu thức được tính từ trái sang phải:

```javascript
// Phép cộng số học chạy trước (3 + 4 = 7), sau đó nối với chuỗi "5"
console.log(3 + 4 + "5"); // Trả về "75", KHÔNG PHẢI "345"
```

#### ⚠️ Chuyển đổi kiểu dữ liệu tự động (Implicit Coercion)
```javascript
// "3" là chuỗi nên các phép tính sau đó bị ép kiểu thành nối chuỗi hết
console.log("3" + 4 + 5); // Trả về "345", KHÔNG PHẢI 12
```

#### 💡 Làm sao để tránh nhầm lẫn?
Để tránh nhầm lẫn tai hại khi tính toán kết hợp chuỗi, không nên đặt phép cộng số học và nối chuỗi lẫn lộn trong cùng một biểu thức.

```javascript
let a = 10;
let b = 20;

// ❌ CÁCH LÀM SAI:
let messageWrong = 'Tổng của ' + a + ' và ' + b + ' là: ' + a + b;
console.log(messageWrong); // 'Tổng của 10 và 20 là: 1020' (Do 10 và 20 bị nối thành chuỗi!)

// ✅ CÁCH ĐÚNG 1: Dùng ngoặc tròn () để ưu tiên phép cộng số học trước
let messageFix1 = 'Tổng của ' + a + ' và ' + b + ' là: ' + (a + b);
console.log(messageFix1); // 'Tổng của 10 và 20 là: 30'

// ✅ CÁCH ĐÚNG 2: Tách biến tính tổng riêng biệt
let total = a + b; // Tính toán trước
let messageFix2 = 'Tổng của ' + a + ' và ' + b + ' là: ' + total;
console.log(messageFix2); // 'Tổng của 10 và 20 là: 30'

// 🌟 CÁCH ĐÚNG 3 (KHUYÊN DÙNG): Dùng Template Literals kết hợp biến tổng
let sum = a + b;
let messageFix3 = `Tổng của ${a} và ${b} là: ${sum}`;
console.log(messageFix3); // 'Tổng của 10 và 20 là: 30'
```

> [!TIP]
> **Tại sao nên dùng cách 3?**
> Việc tính toán trước kết quả và dùng Template Literals với `${...}` giúp mã nguồn trong sáng, dễ đọc, không bị lỗi nối chuỗi ngoài ý muốn.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 3. Template Literals

### 3.1. Template Literals là gì?

**Template Literals** (còn được gọi là **Template Strings**) là một tính năng mạnh mẽ được giới thiệu từ phiên bản **ECMAScript 2015 (ES6)**:
- Sử dụng cặp dấu **backticks** (`` ` ` ``) để định nghĩa chuỗi.
- Hỗ trợ **nội suy (Interpolation)**: Chèn trực tiếp giá trị của biến hoặc kết quả biểu thức vào trong chuỗi thông qua cú pháp `${expression}`.
- Cho phép viết **chuỗi đa dòng (Multi-line strings)** tự nhiên mà không cần đến ký tự `\n`.

---

### 3.2. Nội suy chuỗi (String Interpolation)

Nội suy chuỗi là cơ chế nhúng trực tiếp biểu thức, biến vào văn bản thông qua sự kết hợp của:
1. Cặp dấu bao bọc: `` ` ` ``
2. Ký hiệu bắt đầu nội suy: `$`
3. Cặp ngoặc nhọn chứa biểu thức: `{}`

```javascript
let name = "Linh";
let story = `Và đây là câu chuyện của ${name}.`;
console.log(story); // Và đây là câu chuyện của Linh.
```

---

### 3.3. Các ví dụ về nội suy chuỗi

#### Ví dụ 1: Nội suy biến vào chuỗi
```javascript
let language = "JavaScript";
let message = `Tôi đang học ${language}!`;
console.log(message); // Tôi đang học JavaScript!
```

#### Ví dụ 2: Chuỗi nhiều dòng tự nhiên
```javascript
let message = `Xin chào, đây là JavaScript!
Chúng ta có thể xuống dòng trực tiếp.`;

console.log(message);
// Output:
// Xin chào, đây là JavaScript!
// Chúng ta có thể xuống dòng trực tiếp.
```

#### Ví dụ 3: Kết hợp nội suy và nhiều dòng
```javascript
let name = "JavaScript";
let message = `Xin chào, đây là ${name}!
Chúng ta có thể xuống dòng trực tiếp.`;

console.log(message);
```

#### Ví dụ 4: Nội suy kết hợp hai biến chuỗi
```javascript
let part1 = 'Học lập trình';
let part2 = 'không khó.';
let combined = `${part1} ${part2}`;
console.log(combined); // Học lập trình không khó.
```

#### Ví dụ 5: Chuỗi chứa cả nháy đơn lẫn nháy kép thoải mái
Khi dùng backticks, bạn có thể tự do đặt cả `'` và `"` bên trong mà không cần escape (`\`):

```javascript
let quote = `She said, "I'm learning JavaScript!"`;
console.log(quote); // She said, "I'm learning JavaScript!"
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 4. Các lỗi thường gặp khi làm việc với chuỗi

1. **Quên dùng ký tự thoát (Escape character):**
   - Đặt nháy đơn bên trong chuỗi nháy đơn (`'It's fine'`) $\rightarrow$ Báo lỗi cú pháp (`SyntaxError`).
   - Sửa: Dùng `\'` hoặc đổi dấu bao quanh thành nháy kép `"` hoặc backticks `` ` ``.
2. **Nhầm lẫn giữa nối chuỗi và cộng số:**
   - Biểu thức `"2" + 2` cho ra `"22"` chứ không phải `4`.
   - Khi nhận dữ liệu từ input hoặc URL (thường là chuỗi), hãy chủ động ép kiểu sang số trước bằng `Number()`, `parseInt()`, hoặc toán tử `+`: `+str`.
3. **Cố tình dùng cú pháp nội suy `${...}` bên trong nháy đơn hoặc nháy kép:**
   - Ví dụ: `'Xin chào ${name}'` sẽ in ra nguyên văn chữ `Xin chào ${name}`, vì nháy đơn và nháy kép không hỗ trợ nội suy. Bắt buộc phải dùng backticks `` ` ``.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 5. Tóm tắt kiến thức cốt lõi

| Đặc điểm | Nháy đơn (`' '`) | Nháy kép (`" "`) | Backticks (`` ` ` ``) |
| :--- | :---: | :---: | :---: |
| **Hỗ trợ chuỗi cơ bản** | Có | Có | Có |
| **Chứa dấu nháy đơn `'` không cần escape** | Không (cần `\'`) | Có | Có |
| **Chứa dấu nháy kép `"` không cần escape** | Có | Không (cần `\"`) | Có |
| **Xuống dòng trực tiếp** | Không (phải dùng `\n`) | Không (phải dùng `\n`) | **Có** |
| **Nội suy biến / biểu thức `${...}`** | Không | Không | **Có** |
| **Nối chuỗi** | Dùng `+` | Dùng `+` | Dùng `${...}` hoặc `+` |

[⬆️ Quay lại Mục lục](#mục-lục)

