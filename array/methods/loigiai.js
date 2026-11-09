// friend
console.group("bài friend");
const friend = ["An", "Bình"];
// Biến friend đang trỏ đến một mảng.
// const chỉ đảm bảo rằng friend luôn trỏ đến đúng mảng đó.
// Nhưng nội dung của mảng đó vẫn có thể thay đổi: thêm, xóa, sửa phần tử.
console.log(`mảng được tạo là:`);
console.log(friend);

// Thêm khách hàng "Cường" vào cuối hàng đợi.
friend.push("Cường");
console.log("kết quả sau khi thêm Cường vào cuối hàng đợi");
console.log(friend);

// Thêm khách hàng ưu tiên "Dũng" vào đầu hàng đợi.
friend.unshift("Dũng");
console.log("kết quả khi thêm Dũng vào đầu hàng đợi");
console.log(friend);

// Phục vụ khách hàng đầu tiên trong hàng (xóa khỏi hàng và in tên khách hàng đó ra , in khách hàng còn lại).
const served = friend.shift();
console.log(`đã phục vụ : ${served} , khách hàng còn lại :`);
console.log(friend);

// Xóa bạn ở cuối mảng và in ra tên bạn đó
const lastItem = friend.pop();
console.log(`bạn bị xóa khỏi mảng là: ${lastItem} mảng sau khi xóa bạn cuối`);
console.log(friend);
console.groupEnd();

// colors
console.group("bài colors:");
// khai báo mảng
const colors = ["Red", "Green", "Blue", "Yellow"];
console.log("mảng vừa khai báo colors là:", colors);

// Thay thế "Blue" bằng "Purple".
colors.splice(2, 1, "Purple");
console.log(`mảng sau khi thay thế "Blue" bằng "Purple"`, colors);

// Chèn hai màu "Pink" và "Orange" vào giữa "Green" và "Purple"
colors.splice(2, 0, "Pink", "Orange");
console.log(
    `mảng sau khi chèn hai màu "Pink" và "Orange" vào giữa "Green" và "Purple"`,
    colors,
);
console.groupEnd();

// products
console.group("bài product");
const products = [
    { id: 1, name: "Laptop", price: 1500, category: "Tech" },
    { id: 2, name: "Phone", price: 800, category: "Tech" },
    { id: 3, name: "Shirt", price: 50, category: "Fashion" },
    { id: 4, name: "Headphone", price: 200, category: "Tech" },
];
console.log("mảng products là:", products);
const filterProduct = products.filter(
    // filter sẽ trả lại mảng mới
    /**filter() là phương thức của mảng.

    Nó duyệt qua từng phần tử của products.
    Với mỗi phần tử, nó gọi callback (hàm được truyền vào) và xem kết quả trả về:
    Nếu callback trả về truthy (true, số khác 0, chuỗi khác rỗng...) → giữ phần tử đó vào mảng mới.
    Nếu callback trả về falsy (false, 0, "", null, undefined, NaN) → loại phần tử đó.
    filter() không thay đổi mảng gốc products.
    filter() trả về mảng mới chứa các phần tử được giữ. */
    (product) => product.category === "Tech" && product.price > 500,
    // là arrow function (hàm mũi tên)
);
console.log(
    `mảng sau khi lọc ra danh sách các sản phẩm thuộc danh mục "Tech" có giá lớn hơn $500`,
    filterProduct,
);
const filterProductName = filterProduct.map(
    /**map() là phương thức của mảng, giống filter().
    Nó duyệt qua từng phần tử của filterProduct.
    Với mỗi phần tử, nó gọi callback và lấy giá trị trả về của callback.
    Kết quả là một mảng mới cùng độ dài với mảng gốc. */
    (product) => product.name.toUpperCase(),
);
console.log("Tên của các product đã lọc là:", filterProductName);
console.groupEnd();

// cart
console.group("cart");
const cart = [
    { name: "Sách JS", price: 100, quantity: 2 },
    { name: "Bút", price: 10, quantity: 5 },
    { name: "Vở", price: 20, quantity: 3 },
];
console.log("mảng cart là: ", cart);
const priceTotal = cart.reduce(
    /**reduce() là phương thức của mảng, dùng để gộp cả mảng thành MỘT giá trị duy nhất.
    Nó duyệt qua từng phần tử của cart.
    Mỗi vòng lặp, nó gọi callback, callback trả về gì thì trở thành acc cho vòng sau.
    Sau vòng cuối cùng, giá trị acc cuối cùng chính là kết quả của reduce. */
    (price, item) => (price += item.price * item.quantity),
    0,
);
console.log("tổng giá trị hóa đơn là:", priceTotal);

const quantityTotal = cart.reduce((total, item) => (total += item.quantity), 0);
console.log("tổng số lượng mặt hàng thu mua trong giỏ là :", quantityTotal);
console.groupEnd();

// Kiểm tra điều kiện dữ liệu
// scores
console.group("scores");
const scores = [8.5, 7.0, 9.2, 4.5, 6.8];
console.log("mảng scores là :", scores);

const hasFallingGrade = scores.some((score) => score < 5);
console.log("có học sinh nào bị điểm dưới 5 không: ", hasFallingGrade);

const isAllPassed = scores.every((score) => score >= 6);
console.log(
    "toàn bộ sinh viên có đạt loại khá/giỏi (điểm >= 6.0) không:",
    isAllPassed,
);

const hasSevenPoint = scores.includes(7);
console.log("trong mảng có điểm 7.0 hay không", hasSevenPoint);
console.groupEnd();

// nested
console.group();
const nested = [1, [2, [3, [4, 5]]]];
console.log("Mảng nested là:", nested);

const flatArray = nested.flat(Infinity);
console.log("mảng sau khi làm phẳng là:", flatArray);
console.groupEnd();

// numbers
console.group("numbers");
const numbers = [40, 100, 1, 5, 25, 10];
console.log("Mảng numbers là:", numbers);

numbers.sort((a, b) => a - b);
console.log("mảng numbers sau khi sắp xếp từ thấp tới cao là:", numbers);
numbers.sort((a, b) => b - a);
console.log("mảng numbers sau khi sắp xếp từ cao xuống thấp là:", numbers);
console.groupEnd();
