// ============================================
// ĐỐI TƯỢNG (OBJECT) - BÀI LÀM CỦA BẠN
// Đọc yêu cầu trong "debai.md" và làm vào các phần TODO bên dưới
// ============================================

// TODO 1: BÀI CAR (Dot & Bracket notation)
console.group("=== BÀI 1: CAR ===");
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
};
console.log("Car ban đầu:", car);

// 1.1. Thêm thuộc tính color: "Black" vào car bằng Dot notation:

// 1.2. Thêm thuộc tính warranty: 2 vào car bằng Bracket notation:

// 1.3. Cập nhật year thành 2024:

// 1.4. Xóa thuộc tính model khỏi car:

// 1.5. Dùng Bracket notation ([]) in thuộc tính brand ra màn hình:

console.groupEnd();

// TODO 2: BÀI RECTANGLE (Phương thức & từ khóa this)
console.group("\n=== BÀI 2: RECTANGLE & THIS ===");
// Tạo object rectangle có:
// - width: 10, height: 5
// - getArea(): trả về diện tích (width * height)
// - getPerimeter(): trả về chu vi ((width + height) * 2)
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// TODO 3: BÀI STUDENT SCORES (Object.keys, values, entries)
console.group("\n=== BÀI 3: STUDENT SCORES ===");
const studentScores = {
    math: 8.5,
    english: 7.5,
    physics: 9.0,
    chemistry: 8.0,
};

// 3.1. In ra mảng danh sách tất cả các môn học (Object.keys):

// 3.2. In ra mảng danh sách tất cả điểm số (Object.values):

// 3.3. Dùng reduce tính điểm trung bình (kết quả: 8.25):

// 3.4. In danh sách theo định dạng "Môn [Tên môn]: [Điểm] điểm" bằng 2 cách:
// - Cách 1: Vòng lặp for...of với Object.entries()

// - Cách 2: Phương thức forEach() của mảng

console.groupEnd();

// TODO 4: BÀI CONFIG (Chuyển đổi Object <-> Array)
console.group("\n=== BÀI 4: CONFIG ===");
const configArr = [
    ["theme", "dark"],
    ["language", "vi"],
    ["notifications", true],
];

// 4.1. Chuyển mảng configArr thành Object tên `config` (dùng Object.fromEntries):

// 4.2. Kiểm tra xem config có khóa "theme" không (dùng Object.hasOwn):

// 4.3. Thay đổi "theme" thành "light", sau đó chuyển config ngược lại thành Mảng (dùng Object.entries):

console.groupEnd();

// TODO 5: BÀI BOOK (Object Destructuring)
console.group("\n=== BÀI 5: OBJECT DESTRUCTURING ===");
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

// 5.1. Dùng Destructuring trích xuất title và author từ book:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 5.2. Trích xuất với giá trị mặc định cho publisher:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// TODO 6: BÀI PERSON (Duyệt for...in & Kiểm tra key với toán tử in)
console.group("\n=== BÀI 6: DUYỆT FOR...IN & KIỂM TRA KEY ===");
const person = {
    name: "Alice",
    age: 25,
    isEmployed: true,
};

// 6.1. Dùng vòng lặp for...in duyệt và in ra từng cặp key-value:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 6.2. Dùng toán tử 'in' kiểm tra nếu có 'age' thì cập nhật lên 26:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// TODO 7: BÀI MEMBER (Bản chất const với Object & Object.freeze)
console.group("\n=== BÀI 7: CONST VỚI OBJECT & OBJECT.FREEZE ===");
const member = {
    name: "John",
    role: "member",
};
console.log("Member ban đầu:", member);

// 7.1. Đổi name thành "Jane" và thêm thuộc tính level: 1:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 7.2. Thử gán lại member = { name: "Mike" } bọc trong khối try...catch và in ra lỗi:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 7.3. Đóng băng đối tượng member bằng Object.freeze() và in ra kết quả Object.isFrozen():
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 7.4. Thử gán member.name = "Bob" sau khi freeze và in ra member.name để kiểm chứng:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// TODO 8: BÀI DOG (Thuộc tính, Phương thức & Quy ước đặt tên)
console.group("\n=== BÀI 8: THUỘC TÍNH & PHƯƠNG THỨC (DOG) ===");
// 8.1. Khai báo đối tượng dog gồm:
// - Thuộc tính (Danh từ): name: "Scooby Doo", age: 5, isActive: true
// - Phương thức (Động từ): speak() in ra "Go go...", calculateHumanAge() trả về this.age * 7
const dog = {
    // VIẾT CODE KHAI BÁO CỦA BẠN DƯỚI ĐÂY:

};

// 8.2. In ra dog.name, dog.age, dog.isActive và gọi dog.speak(), dog.calculateHumanAge():
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 8.3. Thêm dog.Name = "Scrappy Doo" và in cả dog.name lẫn dog.Name để kiểm chứng phân biệt HOA-thường:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 8.4. Thêm phương thức updateAge(newAge) cập nhật this.age = newAge và gọi dog.updateAge(6):
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// TODO 9: BÀI PERSON & TỪ KHÓA THIS (Bản chất this & Lý do không hardcode tên biến)
console.group("\n=== BÀI 9: TỪ KHÓA THIS & BẢN CHẤT NGỮ CẢNH ===");
// 9.1. Khởi tạo personWithThis có:
// - Thuộc tính: firstName: "John", lastName: "Smith", age: 30
// - Phương thức:
//   + getFullName(): trả về `${this.firstName} ${this.lastName}`
//   + greet(): in ra "Hello, " + this.firstName
const personWithThis = {
    // VIẾT CODE KHAI BÁO CỦA BẠN DƯỚI ĐÂY:

};

// 9.2. In kết quả personWithThis.getFullName() và gọi personWithThis.greet():
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 9.3. Gán userRef = personWithThis, gọi userRef.getFullName() để kiểm chứng tính linh hoạt của this:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();

// TODO 10: BÀI ENHANCED OBJECT LITERALS & NESTED DESTRUCTURING
console.group("\n=== BÀI 10: ENHANCED OBJECT LITERALS & NESTED DESTRUCTURING ===");
const name = "John Doe";
const age = 30;
const property = "lastName";

// 10.1. Khởi tạo object enhancedPerson kết hợp:
// - Property shorthand cho name và age
// - Computed property name cho [property]: "Smith"
// - Thuộc tính firstName: "John"
// - Method shorthand speak() in ra "Go go..."
const enhancedPerson = {
    // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

};

// 10.2. In ra enhancedPerson.lastName và gọi enhancedPerson.speak():
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 10.3. Cho object course:
const course = {
    title: "JavaScript Pro",
    info: {
        url: "https://fullstack.edu.vn",
        description: "JavaScript Basic, Advanced.",
        keywords: "js basic, js advanced",
    },
};

// 10.4. Sử dụng Nested Destructuring để trích xuất title (đặt bí danh courseTitle để tránh trùng biến ở Bài 5) và đổi tên keywords thành topics:
// VIẾT CODE DESTRUCTURING CỦA BẠN DƯỚI ĐÂY:


// 10.5. In ra courseTitle và topics:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


console.groupEnd();




