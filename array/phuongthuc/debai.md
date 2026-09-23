# Bài Tập Thực Hành Mảng (Array) Trong JavaScript

Tài liệu này bao gồm danh sách các bài tập thực hành được phân loại từ cơ bản đến nâng cao nhằm giúp bạn làm chủ toàn bộ thuộc tính, phương thức và các cú pháp khai báo mảng trong JavaScript.

---

## Phần 1: Khai Báo Mảng (Array Declaration)

### Bài 1.1: Khai báo bằng Array Literal (`[]`)
Tạo mảng `colors` chứa 3 chuỗi màu sắc bất kỳ. Sau đó truy cập và in ra phần tử đầu tiên và phần tử cuối cùng của mảng.

<details>
<summary>lời giải</summary>

```javascript
function name(){

}
```
</details>

### Bài 1.2: Khai báo bằng Constructor (`new Array()`)
1. Tạo mảng `emptyArr` gồm 5 ô rỗng (`length = 5`) bằng `new Array()`.
2. Tạo mảng `scores` chứa 3 số: `10, 20, 30` bằng `new Array()`.

### Bài 1.3: Khai báo bằng `Array.of()`
Tạo mảng `singleNum` chỉ chứa 1 phần tử là số `5` sử dụng `Array.of()`. (So sánh kết quả với `new Array(5)`).

### Bài 1.4: Tạo mảng động với `Array.from()`
1. Tạo mảng `letters` gồm các ký tự từ chuỗi `"JAVASCRIPT"`.
2. Tạo mảng `evenNumbers` chứa các số chẵn từ `0` đến `10` bằng cách sử dụng `Array.from({ length: 6 }, ...)` kết hợp hàm map callback.

---

## Phần 2: Thuộc Tính & Phương Thức Biến Đổi Mảng Gốc (Mutating Methods)

Sử dụng mảng ban đầu sau:
```javascript
const fruits = ["Apple", "Banana", "Orange"];