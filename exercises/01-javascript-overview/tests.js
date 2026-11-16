// Bộ test tự động cho bài 01. Phần 2.2 và 3.2 (phân tích / DOM) không chấm tự động.
defineTests(({ test, get, logs, expect }) => {
  test("1.1", "In giá trị và kiểu dữ liệu động: 100 (number), chuỗi, boolean, object", () => {
    expect(logs()).toContainText("number");
    expect(logs()).toContainTextsInOrder(["100", "string", "boolean", "object"]);
  });

  test("1.2", "Phân biệt hoa-thường: in userName, Username, USERNAME", () => {
    expect(logs()).toContainTextsInOrder(["Alice", "Bob", "Charlie"]);
  });

  test("1.2", "Bắt ReferenceError khi dùng 'username' (chữ thường, chưa khai báo)", () => {
    expect(logs()).toContainText("ReferenceError");
  });

  test("2.1", "Type coercion: 10+'20' = '1020', '50'-10 = 40, 'abc'*2 = NaN", () => {
    expect(logs()).toContainTextsInOrder(["1020", "40", "NaN"]);
  });

  test("2.1", "true + 5 = 6 và null + 10 = 10", () => {
    expect(logs()).toContainTextsInOrder(["6", "10"]);
  });

  test("3.1", "detectEnvironment() trả về object với hasWindow, hasDocument, hasProcess (boolean)", () => {
    const env = get("detectEnvironment")();
    expect(typeof env).toBe("object");
    expect(typeof env.hasWindow).toBe("boolean");
    expect(typeof env.hasDocument).toBe("boolean");
    expect(typeof env.hasProcess).toBe("boolean");
    expect(typeof env.environmentName).toBe("string");
  });
});
