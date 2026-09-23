// khai báo mảng
const product1 = {
    namne:"điện thoại",
    soluong:"100"
}

// chuyển đổi thành json
const json=JSON.stringify(product1)
console.log(json)

// chuyển json ngược sang object
const object=JSON.parse(json)
console.log(object)