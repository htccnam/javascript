// lời giải cho : hãy khai báo 1 map rỗng bằng map và in ra để xem kết quả
console.log("khai báo 1 map rỗng và in ra");
const xinchao = new Map();
console.log(xinchao);

// luồng chạy cơ bản xem ở phần console
console.log("đoán luồng chạy cơ bản");
function testBasic() {
    console.log("1. Bắt đầu try");
    try {
        console.log("2. Trong try");
    } catch (err) {
        console.log("3. Trong catch");
    } finally {
        console.log("4. Trong finally");
    }
    console.log("5. Kết thúc hàm");
}

testBasic();
