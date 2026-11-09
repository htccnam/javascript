# Cấu trúc dữ liệu Set trong JavaScript

## 1. Lý thuyết cốt lõi
`Set` là một tập hợp các giá trị **DUY NHẤT (Unique)** được giới thiệu từ ES6:
- **Không chứa phần tử trùng lặp:** Nếu cố gắng thêm một giá trị đã tồn tại vào `Set`, nó sẽ tự động bị bỏ qua mà không báo lỗi.
- **Chấp nhận mọi kiểu dữ liệu:** Các phần tử trong Set có thể là số, chuỗi, boolean, null, undefined, Object, Array hoặc Function.
- **Bảo toàn thứ tự thêm vào:** Các phần tử khi duyệt qua sẽ xuất hiện đúng theo thứ tự chèn ban đầu.
- **Ứng dụng phổ biến nhất:** Loại bỏ các phần tử trùng lặp khỏi mảng chỉ với 1 dòng code: `[...new Set(array)]`.

---

## 2. Bài tập thực hành

### Bài 1: Thao tác cơ bản với Set (CRUD)
1. Khởi tạo một `Set` rỗng tên `tags`.
2. Dùng `.add()` để thêm lần lượt các chuỗi: `"javascript"`, `"react"`, `"nodejs"`, `"javascript"` (thêm 2 lần để quan sát phản ứng).
3. In ra kích thước của Set (`tags.size`).
4. Dùng `.has()` để kiểm tra xem thẻ `"react"` và `"python"` có nằm trong Set không.
5. Dùng `.delete()` để xóa thẻ `"nodejs"`.
6. Dùng `.clear()` để dọn sạch toàn bộ Set.

### Bài 2: Lọc trùng lặp mảng (Use Case thực tế)
Cho mảng chứa ID người dùng ghé thăm website (có nhiều ID bị trùng lặp do bấm nhiều lần):
```javascript
const visitorIds = [101, 102, 103, 101, 104, 102, 105, 101];
```
1. Hãy tạo một mảng mới `uniqueVisitorIds` chỉ chứa các ID duy nhất (loại bỏ toàn bộ phần tử trùng lặp).
2. Đếm số lượng người dùng thực tế đã truy cập website.

### Bài 3: Các phép toán tập hợp cơ bản với Set
Cho 2 tập hợp kỹ năng:
```javascript
const teamFrontend = new Set(["HTML", "CSS", "JavaScript", "React"]);
const teamBackend = new Set(["NodeJS", "JavaScript", "SQL", "Docker"]);
```
1. **Phép Hợp (Union):** Tìm tập hợp tất cả các kỹ năng mà cả hai team có (không trùng lặp).
2. **Phép Giao (Intersection):** Tìm các kỹ năng chung mà cả hai team đều sử dụng.
3. **Phép Hiệu (Difference):** Tìm các kỹ năng chỉ Frontend có mà Backend không có.
