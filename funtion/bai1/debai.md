1. (Declaration $\rightarrow$ Arrow Function):Chuyển đổi hàm tinhBinhPhuong dưới đây sang dạng Arrow Function ngắn gọn nhất có thể (tối ưu bỏ ngoặc nhọn {} và từ khóa return):JavaScript

```javascript
function tinhBinhPhuong(n) {
    return n * n;
}
```

2. Khai báo mảng theo 2 cách

- Literal syntax
- Tạo mảng rỗng có length = 5

    #Phần 2: Hoisting, Callback & Scope (Trung bình)

3. (Dự đoán kết quả - Hoisting):
   Đoạn code sau đây sẽ chạy thành công hay báo lỗi? Giải thích chi tiết lý do dựa trên cơ chế Hoisting của Function Declaration và Function Expression.

```JavaScript
chayThu1();
chayThu2();

function chayThu1() {
  console.log("Thực thi hàm 1");
}

var chayThu2 = function() {
  console.log("Thực thi hàm 2");
};
```
