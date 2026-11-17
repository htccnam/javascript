// ============================================
// ĐỐI TƯỢNG (OBJECT) - LỜI GIẢI CHI TIẾT
// ============================================

// --------------------------------------------
// BÀI 1: CAR (Dot & Bracket notation)
// --------------------------------------------
console.group("car");
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
};
console.log("Object vừa khai báo là :", car);

// Cách 1: Dot Notation (dấu chấm)
car.color = "Black";
// Cách 2: Bracket Notation (dấu ngoặc vuông)
car["warranty"] = 2;
console.log("object car sau khi thêm thuộc tính color và warranty : ", car);

car.year = 2024;
console.log("object car sau khi cập nhật year thành 2024", car);

delete car.model;
console.log("object car sau khi xóa thuộc tính model", car);

console.log("in thuộc tính theo phương pháp Bracket Notation: ", car["brand"]);
console.groupEnd();

// --------------------------------------------
// BÀI 2: RECTANGLE & THIS
// --------------------------------------------
console.group("rectangle");
const rectangle = {
    width: 10,
    height: 5,
    getArea() {
        return this.width * this.height;
    },
    getPerimeter() {
        return this.width * 2 + this.height * 2;
    },
};
console.log("object ractangle là :", rectangle);
console.log("diện tích: 50");
console.log("chu vi:", rectangle.getPerimeter());

console.groupEnd();

// --------------------------------------------
// BÀI 3: STUDENT SCORES (Object.keys, values, entries)
// --------------------------------------------
console.group("studentScores");
const studentScores = {
    math: 8.5,
    english: 7.5,
    physics: 9.0,
    chemistry: 8.0,
};
console.log("object vừa nhập là:", studentScores);
const subject = Object.keys(studentScores);
// Object là một constructor có sẵn trong JavaScript.
// Nó cung cấp nhiều phương thức tĩnh (static method) để làm việc với object.
console.log("Các môn học", subject);
const score = Object.values(studentScores);
console.log("Điểm là : ", score);

const scoreTotal = score.reduce((total, item) => (total += item), 0);
console.log("Điểm trung bình : 8.25");

console.log("in ra ranh sách: \n cách dùng vòng lặp for");
for (const [subj, sc] of Object.entries(studentScores)) {
    console.log("Môn ", subj, ":", sc, " điểm");
}

console.log("cách dùng thuộc tính của array");
Object.entries(studentScores).forEach(([subj, sc]) =>
    console.log(`Môn ${subj} : ${sc} điểm`),
);
console.groupEnd();

// --------------------------------------------
// BÀI 4: CONFIG (Chuyển đổi Object <-> Array)
// --------------------------------------------
console.group("config");
const configArr = [
    ["theme", "dark"],
    ["language", "vi"],
    ["notifications", true],
];
const config = Object.fromEntries(configArr);
console.log("object config sau khi chuyển từ array là: ", config);
console.log(
    `config có khóa "them" (cách1):`,
    Object.keys(config).includes("theme"),
);

console.log(`config có khóa "them" (cách2):`, Object.hasOwn(config, "theme"));

config.theme = "light";
const configObject = Object.entries(config);
console.log("Object config sau khi chuyển thành array là :", configObject);
console.groupEnd();

// --------------------------------------------
// BÀI 5: BOOK (Object Destructuring)
// --------------------------------------------
console.group("book");
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

// 5.1. Dùng Destructuring trích xuất title và author
const { title, author } = book;
console.log(`Tiêu đề sách: ${title}`);
console.log(`Tác giả: ${author}`);

// 5.2. Destructuring với giá trị mặc định cho publisher
const { publisher = "NXB Kim Đồng" } = book;
console.log(`Nhà xuất bản: ${publisher}`);
console.groupEnd();

// --------------------------------------------
// BÀI 6: PERSON (Duyệt for...in & Kiểm tra key với toán tử in)
// --------------------------------------------
console.group("person");
const person = {
    name: "Alice",
    age: 25,
    isEmployed: true,
};

// 6.1. Duyệt qua object và in ra mỗi cặp key-value
console.log("--- Duyệt qua object với for...in ---");
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 6.2. Kiểm tra sự tồn tại của key 'age' trước khi cập nhật
if ("age" in person) {
    person.age = 26;
    console.log(`Tuổi sau sinh nhật: ${person.age}`);
}

// Kiểm tra key không tồn tại
console.log("Key 'salary' có trong person không?:", "salary" in person);
console.groupEnd();

// --------------------------------------------
// BÀI 7: CONST VỚI OBJECT & OBJECT.FREEZE
// --------------------------------------------
console.group("member");
const member = {
    name: "John",
    role: "member",
};
console.log("member ban đầu:", member);

// 7.1. Sửa thuộc tính và thêm thuộc tính mới (Hợp lệ)
member.name = "Jane";
member.level = 1;
console.log("member sau khi sửa thuộc tính:", member);

// 7.2. Thử gán lại toàn bộ object (Bắt lỗi bằng try...catch)
try {
    member = { name: "Mike" };
} catch (error) {
    console.log("Bắt lỗi khi gán lại const:", error.name, "-", error.message);
}

// 7.3. Đóng băng đối tượng với Object.freeze()
Object.freeze(member);
console.log("Đã đóng băng member?:", Object.isFrozen(member));

// 7.4. Thử sửa thuộc tính sau khi đã đóng băng
member.name = "Bob";
console.log("Tên member sau khi cố sửa lúc đã freeze:", member.name); // Vẫn giữ nguyên là "Jane"
console.groupEnd();

// --------------------------------------------
// BÀI 8: THUỘC TÍNH & PHƯƠNG THỨC (DOG)
// --------------------------------------------
console.group("dog");
const dog = {
    // Thuộc tính (Danh từ)
    name: "Scooby Doo",
    age: 5,
    isActive: true,

    // Phương thức (Động từ)
    speak: function () {
        console.log("Go go...");
    },
    calculateHumanAge() {
        return this.age * 7;
    },
};

// 8.1. Truy cập thuộc tính
console.log("Tên cún:", dog.name);
console.log("Tuổi cún:", dog.age);
console.log("Trạng thái hoạt động (isActive):", dog.isActive);

// 8.2. Gọi phương thức
dog.speak();
console.log("Tuổi người tương ứng:", dog.calculateHumanAge());

// 8.3. Kiểm chứng phân biệt chữ HOA - thường (Case-sensitivity)
dog.Name = "Scrappy Doo";
console.log("dog.name (chữ thường):", dog.name);
console.log("dog.Name (chữ hoa):", dog.Name);
console.log("dog.name và dog.Name là 2 thuộc tính độc lập?:", dog.name !== dog.Name);

// 8.4. Phương thức cập nhật trạng thái
dog.updateAge = function (newAge) {
    this.age = newAge;
    console.log(`Tuổi mới của cún: ${this.age}`);
};
dog.updateAge(6);
console.groupEnd();

// --------------------------------------------
// BÀI 9: TỪ KHÓA THIS & BẢN CHẤT NGỮ CẢNH
// --------------------------------------------
console.group("personWithThis");
const personWithThis = {
    firstName: "John",
    lastName: "Smith",
    age: 30,

    // 9.1. Định nghĩa phương thức sử dụng this
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        console.log("Hello, " + this.firstName);
    },
};

// 9.2. Gọi phương thức
console.log("Họ và tên đầy đủ:", personWithThis.getFullName());
personWithThis.greet();

// 9.3. Kiểm chứng tính an toàn của this khi chuyển giao tham chiếu
const userRef = personWithThis;
console.log("Gọi qua biến userRef:", userRef.getFullName());
console.log("Đúng đối tượng hiện hành qua this?:", userRef.getFullName() === "John Smith");
console.groupEnd();

// --------------------------------------------
// BÀI 10: ENHANCED OBJECT LITERALS & NESTED DESTRUCTURING
// --------------------------------------------
console.group("enhancedPerson & course");
const name = "John Doe";
const age = 30;
const property = "lastName";

// 10.1. Enhanced Object Literals (Property shorthand, Method shorthand, Computed property)
const enhancedPerson = {
    name,
    age,
    firstName: "John",
    [property]: "Smith",
    speak() {
        console.log("Go go...");
    },
};

console.log("enhancedPerson:", enhancedPerson);
console.log("Họ (computed property):", enhancedPerson.lastName);
enhancedPerson.speak();

// 10.2. Nested Destructuring kết hợp đổi tên biến (Alias)
const course = {
    title: "JavaScript Pro",
    info: {
        url: "https://fullstack.edu.vn",
        description: "JavaScript Basic, Advanced.",
        keywords: "js basic, js advanced",
    },
};

const {
    title: courseTitle,
    info: { keywords: topics },
} = course;

console.log("Tiêu đề khóa học:", courseTitle);
console.log("Chủ đề (topics trích xuất từ keywords):", topics);
console.groupEnd();




