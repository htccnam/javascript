# Bài tập về Hàm (Functions) trong JavaScript

## Phần 1: Khai báo hàm & Arrow Function (Cơ bản)

### 1.1. Chuyển đổi Declaration sang Arrow Function
Chuyển đổi hàm `tinhBinhPhuong` dưới đây sang dạng Arrow Function ngắn gọn nhất có thể (tối ưu bỏ dấu ngoặc nhọn `{}` và từ khóa `return`):

```javascript
function tinhBinhPhuong(n) {
    return n * n;
}
```

### 1.2. Tham số mặc định (Default Parameters)
Viết một hàm `chaoHoi(name, greeting = "Xin chào")` trả về chuỗi `"[greeting], [name]!"`. Nếu không truyền `greeting`, giá trị mặc định là `"Xin chào"`.

---

## Phần 2: Hoisting, Scope & Execution Context (Trung bình)

### 2.1. Dự đoán kết quả Hoisting
Đoạn code sau đây sẽ chạy thành công hay báo lỗi? Hãy giải thích chi tiết lý do dựa trên cơ chế Hoisting của **Function Declaration** và **Function Expression**:

```javascript
chayThu1();
chayThu2();

function chayThu1() {
    console.log("Thực thi hàm 1");
}

var chayThu2 = function () {
    console.log("Thực thi hàm 2");
};
```

### 2.2. Hoisting với `let` / `const` và Temporal Dead Zone (TDZ)
Nếu thay `var chayThu2` bằng `const chayThu3 = function() {}` và gọi trước khi khai báo, lỗi nhận được là gì và khác gì so với dùng `var`?
