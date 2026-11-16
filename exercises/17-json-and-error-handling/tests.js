// Bộ test tự động cho bài 17.
defineTests(({ test, get, logs, expect }) => {
  test("1.1", "typeof product1 là object; sau JSON.stringify là string", () => {
    expect(logs()).toContainText("Kiểu dữ liệu sau khi stringify: string");
  });

  test("1.2", "JSON.stringify với 2 spaces: có dòng '  \"name\": \"điện thoại\"'", () => {
    expect(logs()).toContainText('"name": "điện thoại"');
    expect(logs()).toContainText('"price": 15000000');
  });

  test("1.3", "JSON.parse trả về object và truy cập được thuộc tính name", () => {
    expect(logs()).toContainText("Truy cập thuộc tính name: điện thoại");
  });

  test("1.4", "Parse '{ invalid: true }' bị bắt trong try...catch (SyntaxError)", () => {
    expect(logs()).toContainText("SyntaxError");
  });

  test("2.1", "try/catch/finally không lỗi: thứ tự Bắt đầu → try → finally → Kết thúc", () => {
    expect(logs()).toContainTextsInOrder(["Bắt đầu hàm", "Trong khối try", "Trong khối finally", "Kết thúc hàm"]);
  });

  test("2.2", "Có lỗi: catch bắt được 'Lỗi kết nối CSDL giả lập!' rồi finally vẫn chạy", () => {
    expect(logs()).toContainText("Lỗi kết nối CSDL giả lập!");
    expect(logs()).toContainTextsInOrder(["Trong khối catch", "Trong khối finally"]);
  });

  test("2.3", "return trong finally ghi đè kết quả của try", () => {
    expect(logs()).toContainText("Kết quả từ FINALLY");
  });
});
