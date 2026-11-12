# 10 - Mảng Trong JavaScript (Arrays: Bản Chất & Toàn Bộ Phương Thức Thực Chiến)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng một mảng (Array) trong JavaScript giống như một **đoàn tàu hỏa chở hàng**:
> - Mỗi toa tàu được đánh số thứ tự (index) bắt đầu từ `0`.
> - Khác với nhiều ngôn ngữ tĩnh như C/Java đòi hỏi mỗi toa chỉ được chở đúng một loại hàng, đoàn tàu JavaScript cực kỳ linh hoạt: Toa 0 có thể chở một chuỗi văn bản, toa 1 chở một con số, toa 2 chở cả một toa tàu khác (mảng đa chiều)!
> - Các phương thức mảng chính là các **thao tác nghiệp vụ đường sắt**:
>   - Thêm/bớt toa ở đuôi (`push`/`pop`) hoặc ở đầu (`unshift`/`shift`).
>   - Chọn lọc toa hàng đủ chuẩn (`filter`), sơn sửa nâng cấp hàng loạt (`map`), hay cân tổng tải trọng cả đoàn tàu (`reduce`).

---

## Mục Lục
<a id="mục-lục"></a>

1. [Khai Báo & Duyệt Mảng](#1-khai-báo--duyệt-mảng)
2. [Thao Tác Thêm & Xóa: push, pop, shift, unshift](#2-thao-tác-thêm--xóa-push-pop-shift-unshift)
3. [Phương Thức Đa Năng: splice](#3-phương-thức-đa-năng-splice)
4. [Bộ Ba Bất Biến Lập Trình Hàm: filter, map, reduce](#4-bộ-ba-bất-biến-lập-trình-hàm-filter-map-reduce)
5. [Kiểm Tra & Tìm Kiếm: some, every, includes, find](#5-kiểm-tra--tìm-kiếm-some-every-includes-find)
6. [Làm Phẳng & Sắp Xếp: flat, sort](#6-làm-phẳng--sắp-xếp-flat-sort)

---

## 1. Khai Báo & Duyệt Mảng

### 1.1. Khai báo
```javascript
// Cách 1: Array Literal (Khuyên dùng nhất)
const fruits = ["Táo", "Cam", "Xoài"];

// Cách 2: Constructor new Array()
const numbers = new Array(1, 2, 3);
const emptySlots = new Array(5); // Tạo 5 ô trống (empty slots)
```

### 1.2. Duyệt mảng
```javascript
// 1. Vòng lặp for truyền thống (Linh hoạt về bước nhảy và break/continue)
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// 2. Vòng lặp for...of (Ngắn gọn, lấy trực tiếp giá trị)
for (const fruit of fruits) {
  console.log(fruit);
}

// 3. Phương thức forEach (Phong cách hàm, nhận element và index)
fruits.forEach((fruit, index) => {
  console.log(`Vị trí ${index}: ${fruit}`);
});
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 2. Thao Tác Thêm & Xóa: push, pop, shift, unshift

| Phương thức | Vị trí tác động | Hành động | Giá trị trả về | Làm biến đổi mảng gốc? |
| :--- | :---: | :--- | :---: | :---: |
| `.push(item)` | Cuối mảng | Thêm 1 hoặc nhiều phần tử | Độ dài mới của mảng | **Có (Mutating)** |
| `.pop()` | Cuối mảng | Xóa phần tử cuối cùng | Phần tử vừa bị xóa | **Có (Mutating)** |
| `.unshift(item)` | Đầu mảng | Thêm 1 hoặc nhiều phần tử | Độ dài mới của mảng | **Có (Mutating)** |
| `.shift()` | Đầu mảng | Xóa phần tử đầu tiên | Phần tử vừa bị xóa | **Có (Mutating)** |

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 3. Phương Thức Đa Năng: splice
Cú pháp: `arr.splice(startIndex, deleteCount, ...itemsToAdd)`
- Xóa, chèn, hoặc thay thế phần tử trực tiếp trên mảng gốc.

```javascript
const colors = ["Red", "Green", "Blue", "Yellow"];

// Thay thế "Blue" bằng "Purple" (xóa 1 phần tử tại index 2, chèn "Purple")
colors.splice(2, 1, "Purple");

// Chèn không xóa: chèn "Pink" vào index 1
colors.splice(1, 0, "Pink");
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 4. Bộ Ba Bất Biến Lập Trình Hàm: filter, map, reduce
Cả 3 phương thức này đều **không làm thay đổi mảng gốc (Non-mutating)**:

### 4.1. `.filter(callback)`
Lọc ra các phần tử thỏa mãn điều kiện (callback trả về truthy):
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0); // [2, 4, 6]
```

### 4.2. `.map(callback)`
Biến đổi từng phần tử của mảng thành một giá trị mới:
```javascript
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10, 12]
```

### 4.3. `.reduce(callback, initialValue)`
Gộp toàn bộ mảng thành một giá trị duy nhất (tổng, object thống kê, v.v.):
```javascript
const total = numbers.reduce((acc, curr) => acc + curr, 0); // 21
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 5. Kiểm Tra & Tìm Kiếm: some, every, includes, find
- **`.some(fn)`**: Trả về `true` nếu có **ít nhất 1** phần tử thỏa mãn điều kiện.
- **`.every(fn)`**: Trả về `true` nếu **tất cả** phần tử đều thỏa mãn điều kiện.
- **`.includes(val)`**: Trả về `true` nếu mảng chứa phần tử `val`.
- **`.find(fn)`**: Trả về phần tử đầu tiên thỏa mãn điều kiện (hoặc `undefined`).

[⬆️ Quay lại Mục lục](#mục-lục)

---

## 6. Làm Phẳng & Sắp Xếp: flat, sort

### 6.1. Làm phẳng mảng lồng nhau với `.flat(depth)`
```javascript
const nested = [1, [2, [3, [4]]]];
console.log(nested.flat(Infinity)); // [1, 2, 3, 4]
```

### 6.2. Sắp xếp mảng với `.sort(compareFn)`
> [!WARNING]
> Mặc định `.sort()` chuyển đổi phần tử thành chuỗi (string) để so sánh theo thứ tự từ điển, dẫn đến: `[40, 100, 5].sort()` ra kết quả sai `[100, 40, 5]`!
> **Luôn truyền hàm so sánh số:**
> - Tăng dần: `arr.sort((a, b) => a - b)`
> - Giảm dần: `arr.sort((a, b) => b - a)`

[⬆️ Quay lại Mục lục](#mục-lục)
