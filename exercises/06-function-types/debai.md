# Bài Tập 06: 3 Loại Hàm Trong JavaScript (Declaration, Expression, Arrow)

> **Mục tiêu thực hành:**
> - Nắm vững cú pháp và sự khác biệt giữa Function Declaration, Function Expression và Arrow Function.
> - Thành thạo kỹ thuật rút gọn Arrow Function (bỏ `{}`, bỏ `return`, bỏ `()`, trả về object `({ })`).
> - Hiểu sâu cơ chế Hoisting và phân biệt lỗi `ReferenceError` (TDZ) vs `TypeError`.
> - Ứng dụng Arrow Function làm Callback trong các bài toán xử lý dữ liệu thực tế.

---

<a id="mục-lục"></a>
## Mục Lục

- [Phần 1: Khai báo hàm & Rút gọn cú pháp (Cơ bản)](#phần-1-khai-báo-hàm--rút-gọn-cú-pháp-cơ-bản)
  - [Bài 1.1: Function Declaration vs Function Expression](#bài-11-function-declaration-vs-function-expression)
  - [Bài 1.2: Luyện tập rút gọn với Arrow Function](#bài-12-luyện-tập-rút-gọn-với-arrow-function)
- [Phần 2: Kiểm chứng Hoisting & Vùng chết tạm thời (Trung bình)](#phần-2-kiểm-chứng-hoisting--vùng-chết-tạm-thời-trung-bình)
  - [Bài 2.1: Dự đoán lỗi khi gọi trước định nghĩa](#bài-21-dự-đoán-lỗi-khi-gọi-trước-định-nghĩa)
- [Phần 3: Ứng dụng thực chiến làm Callback (Nâng cao)](#phần-3-ứng-dụng-thực-chiến-làm-callback-nâng-cao)
  - [Bài 3.1: Xử lý dữ liệu sinh viên với Arrow Function](#bài-31-xử-lý-dữ-liệu-sinh-viên-với-arrow-function)

---

## Phần 1: Khai báo hàm & Rút gọn cú pháp (Cơ bản)

### Bài 1.1: Function Declaration vs Function Expression
1. Định nghĩa hàm `tinhTong(a, b)` bằng cú pháp **Function Declaration** nhận vào 2 số và trả về tổng của chúng.
2. Định nghĩa hàm `tinhHieu(a, b)` bằng cú pháp **Function Expression** (gán vào biến `const`) nhận vào 2 số và trả về hiệu của chúng.

[⬆️ Quay lại Mục lục](#mục-lục)

### Bài 1.2: Luyện tập rút gọn với Arrow Function
Chuyển đổi các hàm sau sang dạng **Arrow Function ngắn gọn nhất có thể**:
1. Hàm tính tích:
   ```javascript
   function tinhTich(a, b) {
       return a * b;
   }
   ```
2. Hàm gấp đôi một số (yêu cầu bỏ cả cặp ngoặc tròn `()` của tham số):
   ```javascript
   function gapDoi(n) {
       return n * 2;
   }
   ```
3. Hàm tạo đối tượng người dùng (yêu cầu dùng kỹ thuật **Implicit Return Object** bọc trong `({ })`):
   ```javascript
   function taoUser(id, username) {
       return {
           id: id,
           username: username,
       };
   }
   ```

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 2: Kiểm chứng Hoisting & Vùng chết tạm thời (Trung bình)

### Bài 2.1: Dự đoán lỗi khi gọi trước định nghĩa
Cho đoạn code sau, hãy **dự đoán kết quả** khi chạy từng hàm trước dòng định nghĩa:

```javascript
// Gọi hàm 1:
chayThu1();

// Gọi hàm 2:
chayThu2();

// Gọi hàm 3:
chayThu3();

function chayThu1() {
    console.log("Thực thi hàm 1 (Declaration)");
}

var chayThu2 = function () {
    console.log("Thực thi hàm 2 (Expression với var)");
};

const chayThu3 = () => {
    console.log("Thực thi hàm 3 (Arrow với const)");
};
```

- **Câu hỏi:**
  1. `chayThu1()` chạy thành công hay thất bại? Vì sao?
  2. `chayThu2()` ném ra lỗi gì? (`TypeError` hay `ReferenceError`? Giải thích vì sao).
  3. `chayThu3()` ném ra lỗi gì? (`TypeError` hay `ReferenceError`? Khái niệm TDZ là gì?).

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 3: Ứng dụng thực chiến làm Callback (Nâng cao)

### Bài 3.1: Xử lý dữ liệu sinh viên với Arrow Function
Cho danh sách điểm thi của các học sinh:
```javascript
const students = [
    { name: "An", score: 8.5 },
    { name: "Bình", score: 4.0 },
    { name: "Cường", score: 9.0 },
    { name: "Dũng", score: 5.5 },
];
```
- **Yêu cầu 1:** Dùng phương thức `.filter()` kết hợp **Arrow Function rút gọn** để lọc ra danh sách các học sinh đạt điểm đỗ (điểm >= 5.0).
- **Yêu cầu 2:** Dùng phương thức `.map()` kết hợp **Arrow Function rút gọn** từ danh sách đã đỗ ở trên để tạo một mảng mới chỉ chứa tên học sinh viết hoa (ví dụ: `["AN", "CƯỜNG", "DŨNG"]`).
- **Yêu cầu 3:** Dùng `.reduce()` tính tổng điểm của toàn bộ học sinh trong lớp bằng Arrow Function 1 dòng.

[⬆️ Quay lại Mục lục](#mục-lục)
