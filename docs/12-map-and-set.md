# 12 - Cấu Trúc Dữ Liệu Map & Set Trong JavaScript (ES6 Modern Data Structures)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Trong kho vũ khí của JavaScript:
> - **Plain Object (`{}`)** giống như một **ngăn tủ để đồ gia đình**: Tiện lợi nhưng có quy định khắt khe — nhãn dán trên mỗi hộc tủ bắt buộc phải là một chuỗi ký tự (String), và các hộc tủ không cam kết luôn giữ đúng thứ tự bạn bỏ đồ vào.
> - **Map** giống như một **kho lưu trữ công nghệ cao**: Bất cứ vật thể nào cũng có thể dùng làm "chìa khóa" mở kho — bạn có thể dùng một cái thẻ từ, một chiếc xe, hay thậm chí một người cụ thể (Object làm Key)! Đồng thời, kho luôn ghi nhớ chính xác thứ tự từng món hàng được nhập vào.
> - **Set** giống như một **hộp kiểm duyệt thẻ ID chống gian lận**: Bất kỳ người nào đi qua cổng nhiều lần đều chỉ được lưu lại đúng 1 lần duy nhất — hoàn hảo để loại bỏ mọi phần tử trùng lặp trong nháy mắt.

---

## Mục Lục
<a id="mục-lục"></a>

1. [Cấu Trúc Dữ Liệu Map: Bản Chất & Điểm Khác Biệt Với Object](#1-cấu-trúc-dữ-liệu-map-bản-chất-điểm-khác-biệt-với-object)
2. [Các Thao Tác CRUD Cơ Bản Với Map](#2-các-thao-tác-crud-cơ-bản-với-map)
3. [Sức Mạnh Khi Dùng Object Làm Key](#3-sức-mạnh-khi-dùng-object-làm-key)
4. [Duyệt Map & Chuyển Đổi Map <-> Object / Array](#4-duyệt-map-chuyển-đổi-map-object-array)
5. [Cấu Trúc Dữ Liệu Set: Tính Duy Nhất (Uniqueness)](#5-cấu-trúc-dữ-liệu-set-tính-duy-nhất-uniqueness)
6. [Thực Chiến Set: Lọc Trùng Mảng & Phép Toán Tập Hợp](#6-thực-chiến-set-lọc-trùng-mảng-phép-toán-tập-hợp)

---

<a id="1-cấu-trúc-dữ-liệu-map-bản-chất-điểm-khác-biệt-với-object"></a>
## 1. Cấu Trúc Dữ Liệu Map: Bản Chất & Điểm Khác Biệt Với Object

| Tiêu chí so sánh | Plain Object (`{}`) | Map |
| :--- | :--- | :--- |
| **Kiểu dữ liệu của Key** | Chỉ là `string` hoặc `symbol` | **Bất kỳ kiểu dữ liệu nào** (Object, Array, Function, Number...) |
| **Thứ tự các phần tử** | Không đảm bảo 100% | Luôn bảo toàn chính xác thứ tự chèn |
| **Đếm kích thước** | Phải thông qua `Object.keys(obj).length` | Có sẵn thuộc tính `.size` với độ phức tạp $O(1)$ |
| **Hiệu năng thêm/xóa** | Chưa tối ưu cho việc thêm xóa liên tục | Tối ưu hóa cao cho các thao tác CRUD liên tục |

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="2-các-thao-tác-crud-cơ-bản-với-map"></a>
## 2. Các Thao Tác CRUD Cơ Bản Với Map

```javascript
const userRoles = new Map();

// 1. Thêm / Cập nhật (Create / Update)
userRoles.set("admin", "Toàn quyền quản trị");
userRoles.set("editor", "Chỉnh sửa nội dung");

// 2. Đọc (Read)
console.log(userRoles.get("admin")); // "Toàn quyền quản trị"

// 3. Kiểm tra tồn tại
console.log(userRoles.has("viewer")); // false

// 4. Lấy số lượng phần tử
console.log(userRoles.size); // 2

// 5. Xóa phần tử (Delete)
userRoles.delete("editor");

// 6. Xóa toàn bộ
userRoles.clear();
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="3-sức-mạnh-khi-dùng-object-làm-key"></a>
## 3. Sức Mạnh Khi Dùng Object Làm Key
Với Plain Object thông thường, nếu bạn dùng object làm key: `obj[{ id: 1 }] = "data"`, key sẽ bị tự động ép kiểu thành chuỗi `"[object Object]"`.
Trong Map, tham chiếu của Object được giữ nguyên vẹn:

```javascript
const userA = { id: 101, name: "Huy" };
const userB = { id: 102, name: "Linh" };

const preferences = new Map();
preferences.set(userA, { theme: "dark", lang: "vi" });
preferences.set(userB, { theme: "light", lang: "en" });

console.log(preferences.get(userA).theme); // "dark"
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="4-duyệt-map-chuyển-đổi-map-object-array"></a>
## 4. Duyệt Map & Chuyển Đổi Map <-> Object / Array

```javascript
const grades = new Map([
  ["Toán", 9],
  ["Văn", 8]
]);

// 1. Duyệt bằng for...of
for (const [subject, score] of grades) {
  console.log(`${subject}: ${score}`);
}

// 2. Chuyển Map thành mảng
const arr = [...grades]; // [["Toán", 9], ["Văn", 8]]

// 3. Chuyển Map thành Object
const obj = Object.fromEntries(grades); // { "Toán": 9, "Văn": 8 }

// 4. Chuyển Object thành Map
const newMap = new Map(Object.entries(obj));
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="5-cấu-trúc-dữ-liệu-set-tính-duy-nhất-uniqueness"></a>
## 5. Cấu Trúc Dữ Liệu Set: Tính Duy Nhất (Uniqueness)
`Set` là tập hợp các giá trị không trùng lặp:

```javascript
const tags = new Set();
tags.add("javascript");
tags.add("react");
tags.add("javascript"); // Bị tự động bỏ qua vì đã tồn tại!

console.log(tags.size); // 2
console.log(tags.has("react")); // true
tags.delete("react");
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="6-thực-chiến-set-lọc-trùng-mảng-phép-toán-tập-hợp"></a>
## 6. Thực Chiến Set: Lọc Trùng Mảng & Phép Toán Tập Hợp

### 6.1. Lọc trùng mảng siêu tốc
```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)]; // [1, 2, 3, 4, 5]
```

### 6.2. Các phép toán tập hợp
```javascript
const setA = new Set(["HTML", "CSS", "JS"]);
const setB = new Set(["JS", "NodeJS", "Docker"]);

// Phép Hợp (Union)
const union = new Set([...setA, ...setB]);
// Set { "HTML", "CSS", "JS", "NodeJS", "Docker" }

// Phép Giao (Intersection)
const intersection = new Set([...setA].filter(item => setB.has(item)));
// Set { "JS" }

// Phép Hiệu (Difference - A trừ B)
const difference = new Set([...setA].filter(item => !setB.has(item)));
// Set { "HTML", "CSS" }
```

[⬆️ Quay lại Mục lục](#mục-lục)
