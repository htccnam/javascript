// Bộ test tự động cho bài 13. Chạy trong lab/ (nút Chấm bài) và scripts/verify-tests.mjs.
defineTests(({ test, logs, expect }) => {
  test("1.1", "for...in liệt kê đủ các key name, age, city (đúng thứ tự)", () => {
    expect(logs()).toContainTextsInOrder(["name", "age", "city"]);
  });

  test("1.1", "In 'Thuộc tính: <key> => Giá trị: <value>' cho từng thuộc tính", () => {
    expect(logs()).toContainLine("Thuộc tính: name => Giá trị: Nguyen Van A");
    expect(logs()).toContainLine("Thuộc tính: age => Giá trị: 30");
    expect(logs()).toContainLine("Thuộc tính: city => Giá trị: Hà Nội");
  });

  test("1.2", "for...of in từng màu viết HOA theo thứ tự", () => {
    expect(logs()).toContainTextsInOrder(["RED", "GREEN", "BLUE", "YELLOW"]);
  });

  test("1.2", "Đếm đúng 8 ký tự khác khoảng trắng trong 'Xin chào!'", () => {
    expect(logs()).toContainLine(/(^|[^\d])8([^\d]|$)/);
  });

  test("2.1", "In đúng thông tin nhân viên theo định dạng đề bài", () => {
    expect(logs()).toContainText(
      "Thông tin nhân viên: [name: Nguyễn Văn B, age: 28, position: Front-end Developer, salary: 15000000]"
    );
  });

  test("2.1", "Tổng số lượng kho = 80 (25 + 30 + 15 + 10)", () => {
    expect(logs()).toContainText("Tổng số sản phẩm trong kho: 80");
  });

  test("2.2", "Phát hiện thiếu thuộc tính 'category'", () => {
    expect(logs()).toContainText("category");
  });

  test("2.3", "Điểm trung bình làm tròn 2 chữ số = 8.42", () => {
    expect(logs()).toContainText("8.42");
  });

  test("2.3", "Điểm cao nhất = 10 và xếp loại 'Giỏi'", () => {
    expect(logs()).toContainText("10");
    expect(logs()).toContainText("Giỏi");
  });

  test("3.1", "Tìm đúng sách 'Học thiết kế web' (tác giả Trần Thị B, mã 102)", () => {
    expect(logs()).toContainText("Trần Thị B");
    expect(logs()).toContainText("102");
  });

  test("3.1", "Dùng break: không duyệt tới cuốn sách nằm sau cuốn tìm được", () => {
    expect(logs()).toContainText("Trần Thị B"); // phải tìm thấy trước đã
    expect(logs().some((l) => l.includes("Giải thuật nâng cao"))).toBe(false);
  });

  test("3.2", "for...in trên mảng lộ thuộc tính prototype 'customMethod'", () => {
    expect(logs()).toContainText("customMethod");
  });

  test("3.2", "for...of duyệt đúng các phần tử gốc của mảng techStack", () => {
    expect(logs()).toContainTextsInOrder(["JavaScript", "HTML", "CSS", "React"]);
  });

  test("3.3", "for...of trực tiếp trên object ném TypeError 'is not iterable'", () => {
    expect(logs()).toContainText("is not iterable");
  });

  test("3.3", "Object.entries + for...of in đủ 4 cấu hình đúng thứ tự", () => {
    expect(logs()).toContainTextsInOrder([
      "[host]: localhost",
      "[port]: 8080",
      "[protocol]: https",
      "[maxConnections]: 1000",
    ]);
  });
});
