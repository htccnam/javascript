# Bài Tập 11: Cấu Trúc Dữ Liệu Map & Set trong JavaScript

## Mục Lục
<a id="mục-lục"></a>

1. [Phần 1: Cấu Trúc Dữ Liệu Map (CRUD Cơ Bản)](#phần-1-cấu-trúc-dữ-liệu-map-crud-cơ-bản)
2. [Phần 2: Sử Dụng Object & Function Làm Key Trong Map](#phần-2-sử-dụng-object--function-làm-key-trong-map)
3. [Phần 3: Duyệt Map & Chuyển Đổi Map <-> Object / Array](#phần-3-duyệt-map--chuyển-đổi-map---object--array)
4. [Phần 4: Cấu Trúc Dữ Liệu Set (CRUD & Tính Duy Nhất)](#phần-4-cấu-trúc-dữ-liệu-set-crud--tính-duy-nhất)
5. [Phần 5: Lọc Trùng Mảng Bằng Set Trong Thực Tế](#phần-5-lọc-trùng-mảng-bằng-set-trong-thực-tế)
6. [Phần 6: Các Phép Toán Tập Hợp (Union, Intersection, Difference)](#phần-6-các-phép-toán-tập-hợp-union-intersection-difference)

---

## Phần 1: Cấu Trúc Dữ Liệu Map (CRUD Cơ Bản)
1. Tạo một Map rỗng tên `userRoles`.
2. Thêm các cặp key-value sau vào `userRoles` bằng phương thức `.set()`:
   - `"admin"` $ightarrow$ `"Toàn quyền quản trị"`
   - `"editor"` $ightarrow$ `"Chỉnh sửa bài viết"`
   - `"viewer"` $ightarrow$ `"Chỉ xem nội dung"`
3. Lấy ra quyền của `"editor"` bằng `.get()` và in ra màn hình.
4. Kiểm tra xem quyền `"moderator"` có tồn tại trong Map không bằng `.has()`.
5. In ra tổng số lượng quyền hiện có bằng `.size`.
6. Xóa quyền `"viewer"` khỏi Map bằng `.delete()` và kiểm tra lại kích thước.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 2: Sử Dụng Object & Function Làm Key Trong Map
1. Tạo 2 object người dùng: `userA = { name: "Huy" }` và `userB = { name: "Linh" }`.
2. Tạo một Map tên `userPreferences`.
3. Gán cấu hình giao diện cho từng người dùng:
   - `userA` $ightarrow$ `{ theme: "dark", lang: "vi" }`
   - `userB` $ightarrow$ `{ theme: "light", lang: "en" }`
4. Lấy cấu hình của `userA` thông qua chính object `userA`. Giải thích lý do Plain Object `{}` không thể làm được điều này một cách trực tiếp.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 3: Duyệt Map & Chuyển Đổi Map <-> Object / Array
Cho Map lưu trữ bảng điểm sinh viên:
```javascript
const studentGrades = new Map([
  ["Toán", 9.0],
  ["Văn", 8.0],
  ["Anh", 8.5]
]);
```
1. Dùng vòng lặp `for...of` kết hợp Destructuring `[subject, grade]` để in ra: `Môn [subject]: [grade] điểm`.
2. Lấy danh sách toàn bộ các môn học (`.keys()`) và tính điểm trung bình (`.values()`).
3. Chuyển Map thành mảng 2 chiều (`Array.from()` hoặc `[...map]`).
4. Chuyển Map thành Plain Object (`Object.fromEntries()`) và chuyển ngược lại (`new Map(Object.entries(obj))`).

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 4: Cấu Trúc Dữ Liệu Set (CRUD & Tính Duy Nhất)
1. Khởi tạo một `Set` rỗng tên `tags`.
2. Dùng `.add()` để thêm lần lượt các chuỗi: `"javascript"`, `"react"`, `"nodejs"`, `"javascript"` (thêm 2 lần để quan sát phản ứng loại trùng).
3. In ra kích thước của Set (`tags.size`).
4. Dùng `.has()` để kiểm tra xem thẻ `"react"` và `"python"` có nằm trong Set không.
5. Dùng `.delete()` để xóa thẻ `"nodejs"` và `.clear()` để dọn sạch toàn bộ Set.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 5: Lọc Trùng Mảng Bằng Set Trong Thực Tế
Cho mảng chứa ID người dùng ghé thăm website:
```javascript
const visitorIds = [101, 102, 103, 101, 104, 102, 105, 101];
```
1. Tạo một mảng mới `uniqueVisitorIds` chỉ chứa các ID duy nhất (loại bỏ toàn bộ phần tử trùng lặp bằng cú pháp `[...new Set(visitorIds)]`).
2. Đếm số lượng người dùng thực tế đã truy cập website.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 6: Các Phép Toán Tập Hợp (Union, Intersection, Difference)
Cho 2 tập hợp kỹ năng:
```javascript
const teamFrontend = new Set(["HTML", "CSS", "JavaScript", "React"]);
const teamBackend = new Set(["NodeJS", "JavaScript", "SQL", "Docker"]);
```
1. **Phép Hợp (Union):** Tìm tập hợp tất cả các kỹ năng mà cả hai team có (không trùng lặp).
2. **Phép Giao (Intersection):** Tìm các kỹ năng chung mà cả hai team đều sử dụng.
3. **Phép Hiệu (Difference):** Tìm các kỹ năng chỉ Frontend có mà Backend không có.

[⬆️ Quay lại Mục lục](#mục-lục)
