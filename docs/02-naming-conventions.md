# 02 - Quy Ước Đặt Tên Trong JavaScript (JavaScript Naming Conventions)

> [!NOTE]
> **Câu chuyện ẩn dụ:**
> Hãy tưởng tượng mã nguồn của bạn giống như một **siêu thị bách hóa quốc tế**:
> - Nếu các kệ hàng, bao bì và thùng chứa chỉ được dán những nhãn mơ hồ như `hop1`, `hop2`, `data`, `x`, `temp`, khách hàng (đồng đội hoặc chính bạn sau 3 tháng) sẽ phải mở từng chiếc nắp ra nếm thử mới biết bên trong là muối, đường hay chất độc!
> - Nhưng nếu siêu thị tuân thủ quy chuẩn biển báo quốc tế:
>   - **Biển hiệu câu hỏi (Boolean):** `isOpen` (Đang mở cửa?), `hasDiscount` (Có giảm giá?) giúp người đọc hiểu ngay điều kiện đúng/sai trong 1 giây.
>   - **Kệ hàng số ít & số nhiều:** `product` (1 món hàng cụ thể) nằm gọn trong `products` (danh sách cả kệ hàng).
>   - **Bảng hướng dẫn hành động (Hàm):** Bắt đầu bằng động từ rõ nghĩa: `calculateTotal()`, `printReceipt()`, `checkout()`.
>   - **Tòa nhà / Phòng ban (Class):** Viết hoa trang trọng kiểu PascalCase: `SupermarketStore`, `OrderProcessor`.
>   - **Biển báo cố định bất biến:** Được đúc bằng kim loại in hoa `MAX_CAPACITY`, `STORE_HOTLINE`.
> 
> *"Code được đọc nhiều hơn gấp 10 lần so với lúc được viết ra."* Đặt tên chuẩn mực chính là chiếc chìa khóa vàng giúp mã nguồn tự giải thích (Self-documenting code) mà không cần lạm dụng chú thích.

---

<a id="mục-lục"></a>
## Mục Lục

- [1. Các Phong Cách Viết Chữ (Casing Styles) Trong JavaScript](#1-các-phong-cách-viết-chữ-casing-styles-trong-javascript)
- [2. Quy Tắc Đặt Tên Biến Boolean (Dạng Câu Hỏi Yes/No)](#2-quy-tắc-đặt-tên-biến-boolean-dạng-câu-hỏi-yes-no)
- [3. Quy Tắc Đặt Tên Biến Thông Thường (Danh Từ Số Ít & Số Nhiều)](#3-quy-tắc-đặt-tên-biến-thông-thường-danh-từ-số-ít-số-nhiều)
- [4. Quy Tắc Đặt Tên Hàm Và Phương Thức (Động Từ + Tân Ngữ)](#4-quy-tắc-đặt-tên-hàm-và-phương-thức-động-từ-tân-ngữ)
- [5. Quy Tắc Đặt Tên Class Và Constructor (PascalCase)](#5-quy-tắc-đặt-tên-class-và-constructor-pascalcase)
- [6. Hằng Số Bất Biến (UPPER_SNAKE_CASE vs const Thông Thường)](#6-hằng-số-bất-biến-uppersnakecase-vs-const-thông-thường)
- [7. Thuộc Tính & Phương Thức Nội Bộ / Riêng Tư (`_` và `#`)](#7-thuộc-tính-phương-thức-nội-bộ-riêng-tư-và)
- [8. Cạm Bẫy Thường Gặp Khi Đặt Tên (Common Pitfalls)](#8-cạm-bẫy-thường-gặp-khi-đặt-tên-common-pitfalls)
- [9. Bảng Tổng Kết Quy Ước Đặt Tên Toàn Diện](#9-bảng-tổng-kết-quy-ước-đặt-tên-toàn-diện)
- [10. Lời Khuyên Thực Chiến Từ Google & Airbnb Style Guides](#10-lời-khuyên-thực-chiến-từ-google-airbnb-style-guides)

---

<a id="1-các-phong-cách-viết-chữ-casing-styles-trong-javascript"></a>
## 1. Các Phong Cách Viết Chữ (Casing Styles) Trong JavaScript

JavaScript phân biệt chữ hoa và chữ thường (**Case-sensitive**). Cộng đồng JavaScript trên thế giới đã thống nhất 4 phong cách viết chuẩn mực cho từng thành phần:

```text
1. lowerCamelCase:      userName, totalScore, calculateTax()
2. PascalCase:          UserProfile, ShoppingCart, OrderService
3. UPPER_SNAKE_CASE:    MAX_USERS, API_KEY, DEFAULT_TIMEOUT
4. kebab-case:          05-naming-conventions (dùng cho tên file & URL)
```

> [!IMPORTANT]
> **Quy tắc vàng:** Luôn dùng **tiếng Anh chuẩn** để đặt tên. Ngôn ngữ lập trình (từ khóa `function`, `class`, `return`), các thư viện quốc tế và tài liệu đều viết bằng tiếng Anh. Đặt tên tiếng Anh giúp dự án dễ hòa nhập, chuẩn ngữ pháp và chuyên nghiệp.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="2-quy-tắc-đặt-tên-biến-boolean-dạng-câu-hỏi-yes-no"></a>
## 2. Quy Tắc Đặt Tên Biến Boolean (Dạng Câu Hỏi Yes/No)

Biến Boolean chỉ chứa giá trị `true` hoặc `false`. Vì vậy, tên biến phải mang tính chất của một **câu hỏi Yes/No**, bắt đầu bằng các tiền tố trợ động từ:

| Tiền tố | Ý nghĩa câu hỏi | Ví dụ thực tế |
| :--- | :--- | :--- |
| **`is`** | *Có phải là X không?* (Trạng thái, tính chất) | `isLoggedIn`, `isActive`, `isVisible`, `isLoaded` |
| **`has`** | *Có X không?* (Sở hữu, tồn tại) | `hasPermission`, `hasChildren`, `hasDiscount` |
| **`can`** | *Có thể làm X không?* (Khả năng thực thi) | `canEdit`, `canDelete`, `canSubmit` |
| **`should`** | *Có nên làm X không?* (Hành vi đề xuất) | `shouldSave`, `shouldUpdate`, `shouldRefresh` |

```javascript
// ❌ SAI: Mơ hồ, không rõ điều kiện kiểm tra
let active = true;
let login = false;
let check = true;

// ✅ ĐÚNG: Đọc vào hiểu ngay điều kiện trong câu lệnh if
let isActive = true;
let isLoggedIn = false;
let hasPermission = true;

if (isLoggedIn && hasPermission) {
    console.log("Cho phép truy cập trang quản trị!");
}
```

### ⚠️ Hai cạm bẫy boolean kinh điển:
1. **Không dùng tên phủ định gây rối rắm logic:**
   - ❌ Tránh viết: `let isNotValid = false;` $\rightarrow$ Khi kiểm tra `if (!isNotValid)` sẽ tạo ra phủ định kép cực kỳ hại não.
   - ✅ Hãy viết: `let isValid = true;` $\rightarrow$ Khi kiểm tra chỉ cần `if (isValid)` hoặc `if (!isValid)`.
2. **Không ghép sai ngữ pháp:**
   - ❌ `isProductsExist` (Sai ngữ pháp).
   - ✅ `hasProducts` (Chuẩn: Có sản phẩm hay không?).

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="3-quy-tắc-đặt-tên-biến-thông-thường-danh-từ-số-ít-số-nhiều"></a>
## 3. Quy Tắc Đặt Tên Biến Thông Thường (Danh Từ Số Ít & Số Nhiều)

Tên biến thông thường (chứa số, chuỗi, đối tượng, mảng) nên là **Danh từ hoặc Cụm danh từ** mô tả dữ liệu mà nó đang chứa, viết theo kiểu `lowerCamelCase`.

### 3.1. Phân biệt Số ít (Singular) và Số nhiều (Plural)
- **Danh từ số ít:** Dùng cho một giá trị đơn lẻ hoặc một đối tượng duy nhất (`user`, `price`, `fileName`, `orderDetail`).
- **Danh từ số nhiều:** Dùng cho mảng hoặc tập hợp nhiều phần tử (`users`, `prices`, `orderList`, `products`).

```javascript
// ✅ Cặp đôi hoàn hảo trong vòng lặp:
const students = ["An", "Bình", "Cường"]; // Danh sách số nhiều

for (const student of students) {          // Từng phần tử là số ít
    console.log(student);
}
```

### 3.2. Biến lặp và biến tạm trong phạm vi hẹp
- Các biến đếm như `i`, `j`, `k` được chấp nhận trong vòng lặp `for` ngắn (dưới 5-10 dòng).
- Nếu vòng lặp phức tạp hoặc lồng nhau, hãy đặt tên rõ nghĩa: `rowIndex`, `columnIndex`.

### 3.3. Xử lý từ viết tắt (Acronyms)
Khi tên biến chứa từ viết tắt (như URL, HTTP, HTML, ID, API):
- Hãy nhất quán: viết hoa toàn bộ (`apiURL`, `HTMLParser`) hoặc viết thường toàn bộ (`apiUrl`, `htmlParser`).
- ❌ **Tuyệt đối tránh kiểu nửa vời:** `ApiUrl`, `HttpRequests`.
- ✅ Khuyến nghị Airbnb: Dùng `apiUrl`, `userId`, `httpRequest` để giữ nhịp điệu camelCase tự nhiên.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="4-quy-tắc-đặt-tên-hàm-và-phương-thức-động-từ-tân-ngữ"></a>
## 4. Quy Tắc Đặt Tên Hàm Và Phương Thức (Động Từ + Tân Ngữ)

Hàm đại diện cho một **hành động**, do đó tên hàm luôn bắt đầu bằng một **Động từ**, theo cấu trúc:  
$$\text{Tên hàm} = \text{Động từ (Verb)} + \text{Tân ngữ (Noun/Target)}$$

### 4.1. Bảng động từ kinh điển và ngữ cảnh sử dụng:

| Động từ | Mục đích | Ví dụ |
| :--- | :--- | :--- |
| **`get`** | Lấy dữ liệu nội bộ hoặc tính toán trả về giá trị | `getName()`, `getFullName()`, `getScore()` |
| **`set`** | Thiết lập hoặc gán lại giá trị | `setName(val)`, `setTheme("dark")` |
| **`fetch`** | Lấy dữ liệu bất đồng bộ từ API/Server bên ngoài | `fetchUsers()`, `fetchWeatherData()` |
| **`create`** | Khởi tạo mới một đối tượng/bản ghi | `createUser(data)`, `createOrder()` |
| **`remove`** | Loại bỏ 1 phần tử ra khỏi mảng/danh sách cục bộ | `removeItem(index)`, `removeTag()` |
| **`delete`** | Xóa vĩnh viễn (khỏi Database hoặc hệ thống) | `deleteUser(id)`, `deleteAccount()` |
| **`reset`** | Khôi phục trạng thái về mặc định | `resetForm()`, `resetPassword()` |
| **`handle` / `on`** | Xử lý sự kiện người dùng tương tác | `handleClick()`, `onSubmit()`, `handleSearch()` |

```javascript
// ❌ Mơ hồ: Không biết hàm làm gì cụ thể
function process(data) { ... }
function doStuff() { ... }

// ✅ Rõ nghĩa: Thể hiện chính xác mục tiêu
function calculateFinalPrice(cartItems) { ... }
function filterActiveStudents(students) { ... }
```

### 4.2. Phương thức trong Class (Method)
Trong Class, đối tượng đã có ngữ cảnh rõ ràng nên bạn có thể **lược bỏ từ ngữ thừa thãi**:
```javascript
// ❌ Thừa thãi: user.loginUser()
// ✅ Tinh tế:
class User {
    login() { ... }       // Đủ rõ, gọi: user.login()
    isAdmin() { ... }     // Phương thức trả về boolean nên bắt đầu bằng is/has
}
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="5-quy-tắc-đặt-tên-class-và-constructor-pascalcase"></a>
## 5. Quy Tắc Đặt Tên Class Và Constructor (PascalCase)

Lớp (Class) và hàm khởi tạo (Constructor) đại diện cho một **bản thiết kế đối tượng**, bắt buộc đặt tên theo chuẩn **`PascalCase`** (viết hoa chữ cái đầu của mỗi từ) và là **Danh từ số ít**:

```javascript
class ShoppingCart {
    constructor(userId) {
        this.userId = userId;
        this.items = [];
    }
}

class BankAccount { ... }
```

> [!TIP]
> **Quy tắc phân biệt:**
> - `PascalCase` (`User`, `ProductService`): Dành cho Class, Constructor, hoặc React/Vue Component.
> - `camelCase` (`user`, `getUser`): Dành cho biến thông thường và hàm.
> - Không thêm các hậu tố thừa thãi như `class UserClass` hay `class CarObject`. Hãy viết đơn giản: `class User`, `class Car`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="6-hằng-số-bất-biến-uppersnakecase-vs-const-thông-thường"></a>
## 6. Hằng Số Bất Biến (UPPER_SNAKE_CASE vs const Thông Thường)

> [!CAUTION]
> **Hiểu lầm tai hại:** *"Mọi biến khai báo bằng `const` đều phải viết hoa toàn bộ `UPPER_SNAKE_CASE`."* $\rightarrow$ **SAI!**

Trong JavaScript:
- `const` chỉ có nghĩa là: **Không thể gán lại biến sang một địa chỉ ô nhớ khác** (immutable binding), chứ bản thân giá trị đó chưa chắc là một hằng số bất biến của cả hệ thống.

```javascript
// 1. HẰNG SỐ TOÀN CỤC BẤT BIẾN -> Dùng UPPER_SNAKE_CASE
// Giá trị cố định trước khi chương trình chạy, không bao giờ đổi:
const PI = 3.14159;
const DAYS_IN_WEEK = 7;
const MAX_LOGIN_ATTEMPTS = 5;
const DEFAULT_TIMEOUT_MS = 3000;
const API_BASE_URL = "https://api.example.com/v1";

// 2. BIẾN DÙNG CONST NHƯNG GIÁ TRỊ PHỤ THUỘC RUNTIME -> Dùng camelCase thông thường
// Giá trị thay đổi theo input người dùng hoặc logic lúc chạy:
const currentUserName = getUserInput(); // Không phải hằng số toàn cục!
const userProfile = { name: "Nam", age: 25 }; // Thuộc tính bên trong vẫn sửa được!
const currentDate = new Date();
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="7-thuộc-tính-phương-thức-nội-bộ-riêng-tư-và"></a>
## 7. Thuộc Tính & Phương Thức Nội Bộ / Riêng Tư (`_` và `#`)

Khi thiết kế thư viện, module hoặc Class, bạn thường có những biến chỉ dùng nội bộ mà **không muốn người ngoài gọi trực tiếp**:

### 7.1. Tiền tố `_` (Quy ước cộng đồng)
```javascript
class Order {
    constructor(id) {
        this.id = id;
        this._secretKey = "SECRET_123"; // Quy ước ngầm: "Đừng chạm vào thuộc tính này từ bên ngoài!"
    }

    _calculateInternalTax() {
        return 0.1;
    }
}
```
*Lưu ý:* `_` chỉ là quy ước mang tính thỏa thuận của lập trình viên, JavaScript Engine vẫn cho phép truy cập `order._secretKey`.

### 7.2. Tiền tố `#` (Private Field chính thức từ ES2020+)
```javascript
class BankVault {
    #securityCode = 9999; // 🔒 Thực sự riêng tư ở cấp độ Engine!

    unlock(code) {
        return this.#securityCode === code;
    }
}

const vault = new BankVault();
// console.log(vault.#securityCode); // ❌ Lỗi cú pháp ngay lập tức: Private field must be declared in an enclosing class
```

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="8-cạm-bẫy-thường-gặp-khi-đặt-tên-common-pitfalls"></a>
## 8. Cạm Bẫy Thường Gặp Khi Đặt Tên (Common Pitfalls)

1. **Đặt tên kiểu ký hiệu Hungary lỗi thời (Hungarian Notation):**
   - ❌ `strName`, `iAge`, `arrUsers`, `bIsActive`, `objConfig` (thêm tiền tố kiểu dữ liệu vào tên).
   - ✅ Hãy để tên tự nhiên: `name`, `age`, `users`, `isActive`, `config`.
2. **Che khuất biến phạm vi cha (Variable Shadowing):**
   ```javascript
   const user = { name: "Huy" };
   
   function printInfo() {
       const user = { name: "Linh" }; // ⚠️ Shadowing biến user ở ngoài, cực kỳ dễ gây nhầm lẫn!
       console.log(user.name);
   }
   ```
3. **Từ ngữ chung chung, vô nghĩa:**
   - ❌ `data`, `info`, `item`, `temp`, `res1`, `res2`.
   - ✅ `customerData`, `productInfo`, `selectedItem`, `serverResponse`.
4. **Lạm dụng viết tắt tối nghĩa:**
   - ❌ `btnSub`, `calcTotPrBfrDisc()`.
   - ✅ `submitButton`, `calculateTotalPriceBeforeDiscount()`.

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="9-bảng-tổng-kết-quy-ước-đặt-tên-toàn-diện"></a>
## 9. Bảng Tổng Kết Quy Ước Đặt Tên Toàn Diện

| Thành phần | Phong cách Casing | Quy tắc ngữ pháp | Ví dụ chuẩn mực | Ví dụ cần tránh |
| :--- | :---: | :--- | :--- | :--- |
| **Biến thường** | `camelCase` | Danh từ số ít | `userName`, `totalPrice` | `user_name`, `u` |
| **Mảng / Danh sách** | `camelCase` | Danh từ số nhiều | `products`, `studentList` | `product`, `arrProduct` |
| **Biến Boolean** | `camelCase` | Trợ động từ (`is`, `has`, `can`) | `isValid`, `hasCoupon` | `valid`, `isNotValid` |
| **Hàm / Method** | `camelCase` | Động từ + Tân ngữ | `calculateTax()`, `fetchData()` | `tax()`, `dataProcess()` |
| **Class / Component** | `PascalCase` | Danh từ số ít | `ShoppingCart`, `UserProfile` | `shopping_cart`, `cartClass` |
| **Hằng số bất biến** | `UPPER_SNAKE_CASE` | Danh từ in hoa cố định | `MAX_USERS`, `API_KEY` | `maxUsers`, `MAXUSERS` |
| **Thuộc tính Private** | `_camelCase` hoặc `#camelCase` | Danh từ có tiền tố `_` hoặc `#` | `_cache`, `#apiKey` | `privateCache` |

[⬆️ Quay lại Mục lục](#mục-lục)

---

<a id="10-lời-khuyên-thực-chiến-từ-google-airbnb-style-guides"></a>
## 10. Lời Khuyên Thực Chiến Từ Google & Airbnb Style Guides

1. **"Tính nhất quán quan trọng hơn sở thích cá nhân":** Nếu bạn bước vào một dự án đã chọn phong cách `apiUrl`, hãy tuân thủ nó xuyên suốt toàn bộ file, đừng tự ý chêm vào `apiURL`.
2. **Đặt tên tự giải thích (Self-documenting Code):** Nếu bạn cảm thấy phải viết thêm comment để giải thích biến đó lưu cái gì, hãy nghĩ xem liệu có đổi được tên biến đó sang một từ rõ nghĩa hơn hay không.
3. **Đầu tư 30 giây suy nghĩ tên biến:** Việc suy nghĩ một cái tên chuẩn xác ngay từ đầu sẽ tiết kiệm hàng giờ debug và tranh luận khi code review sau này!

[⬆️ Quay lại Mục lục](#mục-lục)
