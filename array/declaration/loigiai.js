// khai báo mảng bằng Array Literal
console.log("kết quả tạo mảng:");
const colors = ["red", "green", "blue"];
// in ra mảng bằng console.log
console.log(colors);

// duyệt mảng
console.log("kết quả khi duyệt mảng");
console.log("dùng vòng lặp for truyền thống \n");
for (let i = 0; i < colors.length; i++) {
    console.log(`Vị trí ${i}: ${colors[i]}`);
}

console.log("sử dụng for ... of");
console.log("Hiển thị từng nội dung");
for (const color of colors) {
    console.log(color);
}
console.log("Hiển thị vị trí và nội dung:");
for (const [id, color] of colors.entries()) {
    // fruits.entries() là phương thức của mảng. Nó trả về một iterator, mỗi lần lặp sẽ trả ra một cặp dạng [index, value]
    // [index, value] là destructuring mảng, nên quan trọng là vị trí, không phải tên biến , có thể đổi tùy ý.
    console.log(`vị trí ${id}: ${color}`);
}

console.log("Sử dụng phương thức ForEach():");
// Khi nào dùng: Khi muốn thực hiện một hành động lên từng phần tử mà không thể dừng lặp giữa chừng (break hoặc continue không hoạt động trong forEach).
colors.forEach((name, id) => {
    console.log(`vị trí ${id} : ${name}`);
});

console.log("in ra phần tử đầu tiên và phần tử cuối cùng của mảng");
console.log("Phần tử đầu tiên (index 0):", colors[0]);
console.log("Phần tử cuối cùng (index length - 1):", colors[colors.length - 1]);

// bai 1.2: khai báo mảng bằng new Array()
const emptyArr = new Array(5);
// new Array(5) tạo mảng có length = 5 nhưng chưa có giá trị thực tế (empty slots / sparse array).
console.log("tổng số phần tử trong emptyArr là: " + emptyArr.length);

const scores = new Array(10, 20, 30);
// new Array(10, 20, 30) tạo mảng có 3 phần tử: [10, 20, 30]
console.log("mảng scores được tạo là:", scores);
console.log("tổng số phần tử trong scores là: " + scores.length);
