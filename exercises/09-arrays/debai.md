# Bài Tập 09: Mảng trong JavaScript (Khai Báo, Duyệt & Phương Thức Xử Lý)

## Mục Lục
<a id="mục-lục"></a>

1. [Phần 1: Khai Báo Bằng Array Literal & Duyệt Mảng](#phần-1-khai-báo-bằng-array-literal--duyệt-mảng)
2. [Phần 2: Khai Báo Bằng new Array() Constructor](#phần-2-khai-báo-bằng-new-array-constructor)
3. [Phần 3: Thao Tác Thêm, Xóa Đầu/Cuối Mảng (push, pop, shift, unshift)](#phần-3-thao-tác-thêm-xóa-đầucuối-mảng-push-pop-shift-unshift)
4. [Phần 4: Chèn, Xóa & Thay Thế Phần Tử Linh Hoạt (splice)](#phần-4-chèn-xóa--thay-thế-phần-tử-linh-hoạt-splice)
5. [Phần 5: Lọc & Biến Đổi Dữ Liệu (filter, map)](#phần-5-lọc--biến-đổi-dữ-liệu-filter-map)
6. [Phần 6: Tính Toán & Gom Nhóm Dữ Liệu (reduce)](#phần-6-tính-toán--gom-nhóm-dữ-liệu-reduce)
7. [Phần 7: Kiểm Tra Điều Kiện & Tiện Ích Mảng (some, every, includes, flat, sort)](#phần-7-kiểm-tra-điều-kiện--tiện-ích-mảng-some-every-includes-flat-sort)

---

## Phần 1: Khai Báo Bằng Array Literal & Duyệt Mảng
1. Tạo một mảng `colors` chứa 3 màu sắc bất kỳ bằng cú pháp Array Literal (`[]`).
2. Duyệt qua mảng `colors` và in ra vị trí (index) kèm nội dung theo 3 cách:
   - Vòng lặp `for` truyền thống
   - Vòng lặp `for...of` (kết hợp `colors.entries()`)
   - Phương thức `forEach()`
3. Truy cập và in ra phần tử đầu tiên và phần tử cuối cùng của mảng.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 2: Khai Báo Bằng new Array() Constructor
1. Tạo một mảng rỗng gồm 5 ô bằng `new Array(5)`. In ra mảng và kiểm tra độ dài `.length`.
2. Tạo một mảng chứa 3 số: 10, 20, 30 bằng `new Array(10, 20, 30)`. In ra mảng và độ dài của nó.
3. Giải thích sự khác biệt cốt lõi khi truyền **1 tham số số nguyên** so với **nhiều tham số** vào `new Array()`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 3: Thao Tác Thêm, Xóa Đầu/Cuối Mảng (push, pop, shift, unshift)
Cho mảng ban đầu: `const friend = ["An", "Bình"];`
1. Thêm khách hàng `"Cường"` vào cuối hàng đợi (`push`).
2. Thêm khách hàng ưu tiên `"Dũng"` vào đầu hàng đợi (`unshift`).
3. Phục vụ khách hàng đầu tiên trong hàng (xóa khỏi hàng và in tên khách hàng đó ra bằng `shift`).
4. Xóa bạn ở cuối mảng và in tên bạn đó ra (`pop`).

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 4: Chèn, Xóa & Thay Thế Phần Tử Linh Hoạt (splice)
Cho mảng: `const palette = ["Red", "Green", "Blue", "Yellow"];`
1. Thay thế màu `"Blue"` bằng `"Purple"` bằng phương thức `splice()`.
2. Chèn hai màu `"Pink"` và `"Orange"` vào giữa `"Green"` và `"Purple"`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 5: Lọc & Biến Đổi Dữ Liệu (filter, map)
Cho danh sách sản phẩm:
```javascript
const products = [
  { id: 1, name: "Laptop", price: 1500, category: "Tech" },
  { id: 2, name: "Phone", price: 800, category: "Tech" },
  { id: 3, name: "Shirt", price: 50, category: "Fashion" },
  { id: 4, name: "Headphone", price: 200, category: "Tech" }
];
```
1. Lọc ra danh sách sản phẩm thuộc category `"Tech"` có giá lớn hơn 500 (`filter`).
2. Tạo mảng mới chỉ chứa tên của các sản phẩm công nghệ đã lọc ở trên dưới dạng in hoa (`map`).

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 6: Tính Toán & Gom Nhóm Dữ Liệu (reduce)
Cho giỏ hàng:
```javascript
const cart = [
  { name: "Sách JS", price: 100, quantity: 2 },
  { name: "Bút", price: 10, quantity: 5 },
  { name: "Vở", price: 20, quantity: 3 }
];
```
1. Dùng `reduce()` tính tổng giá trị toàn bộ hóa đơn (`price * quantity`).
2. Dùng `reduce()` đếm tổng số lượng sản phẩm vật lý trong giỏ hàng.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 7: Kiểm Tra Điều Kiện & Tiện Ích Mảng (some, every, includes, flat, sort)
1. Cho mảng điểm: `const examScores = [8.5, 7.0, 9.2, 4.5, 6.8];`
   - Dùng `some()` kiểm tra xem có học sinh nào bị điểm dưới 5.0 không?
   - Dùng `every()` kiểm tra xem toàn bộ sinh viên có đạt điểm >= 6.0 không?
   - Dùng `includes()` kiểm tra xem có ai được đúng 7.0 điểm không?
2. Cho mảng đa chiều lồng nhau: `const nested = [1, [2, [3, [4, 5]]]];`
   - Dùng `flat(Infinity)` để làm phẳng thành mảng 1 chiều duy nhất.
3. Cho mảng số: `const numbers = [40, 100, 1, 5, 25, 10];`
   - Sắp xếp tăng dần và giảm dần (lưu ý hàm so sánh `(a, b) => a - b`).

[⬆️ Quay lại Mục lục](#mục-lục)
