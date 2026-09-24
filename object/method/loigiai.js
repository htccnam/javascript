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

// Phương thức (Method) và Từ khóa this
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
console.log("diện tích:", rectangle.getArea());
console.log("chu vi:", rectangle.getPerimeter());

console.groupEnd();

// Cho object chứa điểm số của một học sinh:
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
console.log("Điểm trung bình :", scoreTotal / score.length);

console.log("in ra ranh sách: \n cách dùng vòng lặp for");
for (const [subject, score] of Object.entries(studentScores)) {
    console.log("Môn ", subject, ":", score, " điểm");
}

console.log("cách dùng thuộc tính của array");
Object.entries(studentScores).forEach(([subject, score]) =>
    console.log(`Môn ${subject} : ${score} điểm`),
);
console.groupEnd();

console.group("config");
const configArr = [
    ["theme", "dark"],
    ["language", "vi"],
    ["notifications", true],
];
const config = Object.fromEntries(configArr);
console.log("object config là: ", config);
console.log(
    `config có khóa "them" (cách1):`,
    Object.keys(config).includes("theme"),
);
// cách này không khuyến khích vì Tạo mảng mới → tốn bộ nhớ, chậm hơn khi object lớn.

console.log(`config có khóa "them" (cách2):`, Object.hasOwn(config, "theme"));
console.groupEnd();
