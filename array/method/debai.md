# friend

- tạo mảng friend với 2 giá trị An , Bình , in ra mảng để quan sát
    - Thêm khách hàng "Cường" vào cuối hàng đợi.
    - Thêm khách hàng ưu tiên "Dũng" vào đầu hàng đợi.
    - Phục vụ khách hàng đầu tiên trong hàng (xóa khỏi hàng và in tên khách hàng đó ra , in khách hàng còn lại).
    - Xóa bạn ở cuối mảng và in ra tên bạn đó , in ra mảng sau khi xóa

---

# colors

chèn và xóa linh hoạt trong mảng .Cho mảng

```javascript
const colors = ["Red", "Green", "Blue", "Yellow"];
```

- Thay thế "Blue" bằng "Purple".
- Chèn hai màu "Pink" và "Orange" vào giữa "Green" và "Purple"

---

# products

cho mảng

```javascript
const products = [
    { id: 1, name: "Laptop", price: 1500, category: "Tech" },
    { id: 2, name: "Phone", price: 800, category: "Tech" },
    { id: 3, name: "Shirt", price: 50, category: "Fashion" },
    { id: 4, name: "Headphone", price: 200, category: "Tech" },
];
```

- Lọc ra danh sách các sản phẩm thuộc danh mục "Tech" có giá lớn hơn $500.(có id1 và id2 thỏa mãn điều kiện)

- Tạo mảng mới chỉ chứa tên các sản phẩm đã lọc ở trên dưới dạng in hoa (UPPERCASE).

# cart

cho mảng

```javascript
const cart = [
    { name: "Sách JS", price: 100, quantity: 2 },
    { name: "Bút", price: 10, quantity: 5 },
    { name: "Vở", price: 20, quantity: 3 },
];
```

- Tính tổng giá trị hóa đơn (giá \* số lượng).(kết quả 310)
- Thống kê tổng số lượng mặt hàng thu mua trong giỏ.(kết quả 10)

# Kiểm tra điều kiện dữ liệu

Cho danh sách điểm thi sinh viên:

```javascript
const scores = [8.5, 7.0, 9.2, 4.5, 6.8];
```

- Kiểm tra xem có học sinh nào bị điểm khống (dưới 5) hay không.(true)
- Kiểm tra xem toàn bộ sinh viên có đạt loại khá/giỏi (điểm >= 6.0) không (false)
- Kiểm tra xem trong mảng có điểm 7.0 hay không.(true)

# Làm phẳng mảng đa chiều

Cho mảng ma trận lồng nhau phức tạp:

```javascript
const nested = [1, [2, [3, [4, 5]]]];
```

- Hãy làm phẳng mảng trên thành một mảng 1 chiều duy nhất [1, 2, 3, 4, 5].

# Sắp xếp mảng số và mảng chuỗi

Đề bài:
Cho mảng số

```javascript
const numbers = [40, 100, 1, 5, 25, 10];
```

- Sắp xếp mảng theo thứ tự tăng dần.
- Sắp xếp mảng theo thứ tự giảm dần.
  