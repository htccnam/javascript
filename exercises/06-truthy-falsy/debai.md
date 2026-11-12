# Bài Tập 06: Truthy & Falsy trong JavaScript

## Mục Lục
<a id="mục-lục"></a>

1. [Phần 1: Xác định Truthy / Falsy](#phần-1-xác-định-truthy--falsy)
2. [Phần 2: Ép kiểu ngầm (Implicit Coercion) trong điều kiện](#phần-2-ép-kiểu-ngầm-implicit-coercion-trong-điều-kiện)
3. [Phần 3: Toán tử logic &&, ||, !!](#phần-3-toán-tử-logic---)
4. [Phần 4: Ứng dụng thực tế - Validation & Default Values](#phần-4-ứng-dụng-thực-tế---validation--default-values)
5. [Phần 5: So sánh == vs === (Type Coercion)](#phần-5-so-sánh--vs--type-coercion)
6. [Phần 6: Edge Cases & Best Practices](#phần-6-edge-cases--best-practices)
7. [Phần 7: Thử thách - Viết hàm tiện ích](#phần-7-thử-thách---viết-hàm-tiện-ích)

---
## Phần 1: Xác định Truthy / Falsy

Cho danh sách các giá trị sau:

```javascript
const values = [
    false,
    true,
    0,
    -0,
    0n, // BigInt zero
    1,
    -1,
    "",
    "hello",
    "0",
    "false",
    null,
    undefined,
    NaN,
    [],
    {},
    function () {},
    new Date(),
    document.createElement("div"),
];
```

**Yêu cầu:**

- Duyệt qua mảng `values` và in ra từng giá trị kèm theo kiểu dữ liệu (`typeof`) và kết quả khi ép kiểu sang Boolean (`Boolean(value)`).
- Phân loại: giá trị nào là **Falsy**, giá trị nào là **Truthy**.


[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 2: Ép kiểu ngầm (Implicit Coercion) trong điều kiện

Cho các đoạn code sau, hãy **dự đoán kết quả** (true/false) và **giải thích lý do**:

```javascript
// 2.1
if ("hello") {
    console.log("2.1: Truthy");
} else {
    console.log("2.1: Falsy");
}

// 2.2
if (0) {
    console.log("2.2: Truthy");
} else {
    console.log("2.2: Falsy");
}

// 2.3
if ([]) {
    console.log("2.3: Truthy");
} else {
    console.log("2.3: Falsy");
}

// 2.4
if ({}) {
    console.log("2.4: Truthy");
} else {
    console.log("2.4: Falsy");
}

// 2.5
if (null) {
    console.log("2.5: Truthy");
} else {
    console.log("2.5: Falsy");
}

// 2.6
if (undefined) {
    console.log("2.6: Truthy");
} else {
    console.log("2.6: Falsy");
}

// 2.7
if (NaN) {
    console.log("2.7: Truthy");
} else {
    console.log("2.7: Falsy");
}

// 2.8
if ("0") {
    console.log("2.8: Truthy");
} else {
    console.log("2.8: Falsy");
}

// 2.9
if ("false") {
    console.log("2.9: Truthy");
} else {
    console.log("2.9: Falsy");
}

// 2.10
if (new Date()) {
    console.log("2.10: Truthy");
} else {
    console.log("2.10: Falsy");
}
```


[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 3: Toán tử logic &&, ||, !!

Cho các biểu thức sau, hãy **dự đoán giá trị trả về** (không phải true/false, mà là **giá trị thực tế** được trả về):

```javascript
// 3.1
const a = "hello" && "world";
console.log("3.1:", a);

// 3.2
const b = "hello" && "";
console.log("3.2:", b);

// 3.3
const c = 0 && "world";
console.log("3.3:", c);

// 3.4
const d = "" || "default";
console.log("3.4:", d);

// 3.5
const e = "hello" || "default";
console.log("3.5:", e);

// 3.6
const f = null || undefined || "fallback";
console.log("3.6:", f);

// 3.7
const g = !!"hello";
console.log("3.7:", g);

// 3.8
const h = !!0;
console.log("3.8:", h);

// 3.9
const i = !![];
console.log("3.9:", i);

// 3.10
const j = !!{};
console.log("3.10:", j);
```

**Giải thích:** Tại sao `&&` trả về giá trị cuối cùng nếu tất cả truthy, và `||` trả về giá trị truthy đầu tiên?


[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 4: Ứng dụng thực tế - Validation & Default Values

### Bài 4.1: Hàm kiểm tra dữ liệu hợp lệ

Viết hàm `isValidInput(value)` trả về `true` nếu `value` là một giá trị **hợp lệ để xử lý** (không phải null, undefined, NaN, chuỗi rỗng), ngược lại trả về `false`.

Test cases:

```javascript
console.log(isValidInput("hello")); // true
console.log(isValidInput("")); // false
console.log(isValidInput(0)); // false (số 0 coi là không hợp lệ)
console.log(isValidInput(42)); // true
console.log(isValidInput(null)); // false
console.log(isValidInput(undefined)); // false
console.log(isValidInput(NaN)); // false
console.log(isValidInput([])); // true (mảng rỗng vẫn là object)
console.log(isValidInput({})); // true
```

### Bài 4.2: Gán giá trị mặc định (Default Parameters pattern)

Cho object `config` có thể thiếu một số thuộc tính. Hãy dùng `||` hoặc `??` để gán giá trị mặc định:

```javascript
const config = {
    theme: "dark",
    // language: "vi",  // thiếu
    // notifications: true, // thiếu
    // debug: false // thiếu
};

// Yêu cầu: gán mặc định
// language -> "en"
// notifications -> false
// debug -> false
// KHÔNG được dùng if/else, chỉ dùng || hoặc ??
```

In ra object `finalConfig` sau khi gán mặc định.

### Bài 4.3: Short-circuit evaluation trong render

Giả lập việc render UI: chỉ hiển thị component khi `user` tồn tại và `isLoggedIn` là true.

```javascript
const user = { name: "An", isLoggedIn: true };
// const user = null; // test case 2

// Dùng && để render: nếu user && user.isLoggedIn thì in "Welcome An", ngược lại in "Please login"
```


[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 5: So sánh == vs === (Type Coercion)

Dự đoán kết quả `true`/`false` và giải thích:

```javascript
// 5.1
console.log("5.1:", 0 == false); // ?
console.log("5.2:", "" == false); // ?
console.log("5.3:", "0" == false); // ?
console.log("5.4:", null == undefined); // ?
console.log("5.5:", null == false); // ?
console.log("5.6:", undefined == false); // ?
console.log("5.7:", NaN == NaN); // ?
console.log("5.8:", [] == false); // ?
console.log("5.9:", [] == ""); // ?
console.log("5.10:", {} == true); // ?

// So sánh với === (strict equality)
console.log("5.11:", 0 === false); // ?
console.log("5.12:", "" === false); // ?
console.log("5.13:", null === undefined); // ?
```

**Giải thích:** Tại sao `==` cho kết quả khác `===`? Khi nào nên dùng cái nào?


[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 6: Edge Cases & Best Practices

### Bài 6.1: Kiểm tra mảng rỗng

```javascript
const arr1 = [];
const arr2 = [1, 2, 3];

// Cách 1: arr.length === 0
// Cách 2: !arr.length
// Cách 3: arr.length == 0
// Cách 4: Boolean(arr.length) === false
```

Hãy test 4 cách trên và cho biết cách nào **an toàn nhất** và **tại sao**.

### Bài 6.2: Kiểm tra object rỗng

```javascript
const obj1 = {};
const obj2 = { a: 1 };

// Cách 1: Object.keys(obj).length === 0
// Cách 2: JSON.stringify(obj) === "{}"
// Cách 3: !Object.keys(obj).length
```

Test và so sánh.

### Bài 6.3: Boolean() vs !! vs new Boolean()

```javascript
const val = "hello";

console.log(Boolean(val)); // ?
console.log(!!val); // ?
console.log(new Boolean(val)); // ? (kiểu dữ liệu là gì?)
console.log(typeof new Boolean(val)); // ?
```

Giải thích sự khác biệt.


[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 7: Thử thách - Viết hàm tiện ích

Viết các hàm sau **chỉ dùng các kiến thức Truthy/Falsy, &&, ||, !!** (không dùng if/else, không dùng ternary):

1. **`toBoolean(value)`** - chuyển bất kỳ giá trị nào thành `true`/`false` primitive (boolean thuần túy)
2. **`getFirstTruthy(...args)`** - trả về giá trị truthy đầu tiên trong danh sách, nếu không có thì trả về `null`
3. **`getLastTruthy(...args)`** - trả về giá trị truthy cuối cùng, nếu không có thì trả về `null`
4. **`coalesce(...args)`** - giống `??` nhưng dùng `||`: trả về giá trị đầu tiên không phải `null`/`undefined` (cho phép `0`, `""`, `false`)

Test:

```javascript
console.log(toBoolean("hello")); // true
console.log(toBoolean(0)); // false
console.log(getFirstTruthy(null, 0, "", "hello", 42)); // "hello"
console.log(getLastTruthy(null, 0, "", "hello", 42)); // 42
console.log(coalesce(null, undefined, 0, "", "fallback")); // 0
```


[⬆️ Quay lại Mục lục](#mục-lục)
