# cho mảng sau :

```javascript
const product1 = {
    namne: "điện thoại",
    soluong: "100",
};
```

## hãy chuyển đổi mảng thành json và in ra để chứng minh

## chuyển ngược từ dữ liệu json sang object và in ra để chứng minh

---

# bắt lỗi bằng try , catch

📌 Lý thuyết cốt lõi cần nhớ trước khi làm bài

- try: Chứa đoạn mã có nguy cơ bắn ra lỗi (throw error).

- catch: Chỉ chạy khi và chỉ khi khối try xảy ra lỗi.

- finally: Luôn luôn chạy cho dù khối try thành công hay xảy ra lỗi (ngay cả khi trong try hoặc catch có câu lệnh return).

- Mối quan hệ return & finally: Nếu khối finally chứa câu lệnh return, nó sẽ ghi đè (override) toàn bộ kết quả return hoặc lỗi bắn ra từ try/catch.

## đoán luồng chạy cơ bản

```javascript
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
```
