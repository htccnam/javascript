# Cấu trúc dữ liệu Map trong JavaScript

## 1. Lý thuyết cốt lõi
`Map` là một cấu trúc dữ liệu tập hợp các cặp **Key - Value (Khóa - Giá trị)** được giới thiệu từ ES6, với những đặc điểm nổi bật so với Plain Object (`{}`):
- **Khóa đa dạng:** Key trong `Map` có thể là **bất kỳ kiểu dữ liệu nào** (Primitive, Object, Function, mảng, v.v.), trong khi key của Object chỉ có thể là `string` hoặc `symbol`.
- **Bảo toàn thứ tự:** Các phần tử trong `Map` luôn giữ nguyên thứ tự được thêm vào khi duyệt lặp.
- **Kích thước có sẵn:** Thuộc tính `map.size` cho biết ngay số lượng phần tử mà không cần `Object.keys(obj).length`.
- **Hiệu năng:** Tối ưu hơn Plain Object khi thực hiện các thao tác thêm / xóa liên tục.

---

## 2. Bài tập thực hành

### Bài 1: Khởi tạo và các thao tác cơ bản (CRUD)
1. Tạo một Map rỗng tên `userRoles`.
2. Thêm các cặp key-value sau vào `userRoles` bằng phương thức `.set()`:
   - `"admin"` $\rightarrow$ `"Toàn quyền quản trị"`
   - `"editor"` $\rightarrow$ `"Chỉnh sửa bài viết"`
   - `"viewer"` $\rightarrow$ `"Chỉ xem nội dung"`
3. Lấy ra quyền của `"editor"` bằng `.get()` và in ra màn hình.
4. Kiểm tra xem quyền `"moderator"` có tồn tại trong Map không bằng `.has()`.
5. In ra tổng số lượng quyền hiện có bằng `.size`.
6. Xóa quyền `"viewer"` khỏi Map bằng `.delete()` và kiểm tra lại kích thước.

### Bài 2: Dùng Object và Function làm Key
1. Tạo 2 object người dùng: `userA = { name: "Huy" }` và `userB = { name: "Linh" }`.
2. Tạo một Map tên `userPreferences`.
3. Gán cấu hình giao diện cho từng người dùng:
   - `userA` $\rightarrow$ `{ theme: "dark", lang: "vi" }`
   - `userB` $\rightarrow$ `{ theme: "light", lang: "en" }`
4. Lấy cấu hình của `userA` thông qua chính object `userA`.
*(Thử giải thích vì sao Plain Object `{}` không làm được điều này một cách trực tiếp).*

### Bài 3: Duyệt qua Map
Cho Map lưu trữ bảng điểm sinh viên:
```javascript
const studentGrades = new Map([
    ["Toán", 9.0],
    ["Văn", 8.0],
    ["Anh", 8.5],
]);
```
1. Dùng vòng lặp `for...of` kết hợp Destructuring `[subject, grade]` để in ra: `Môn [subject]: [grade] điểm`.
2. Lấy ra danh sách toàn bộ các môn học (`.keys()`) dưới dạng mảng 1 chiều.
3. Tính điểm trung bình tất cả các môn bằng cách lấy danh sách điểm (`.values()`).

### Bài 4: Chuyển đổi giữa Map, Array và Object
1. Chuyển Map `studentGrades` thành mảng 2 chiều bằng `Array.from()` hoặc toán tử Spread `[...map]`.
2. Chuyển Map `studentGrades` thành Plain Object bằng `Object.fromEntries()`.
3. Chuyển ngược một Plain Object thành `Map` bằng `new Map(Object.entries(obj))`.
