// Bộ test tự động cho bài 12.
defineTests(({ test, get, logs, expect }) => {
  test("1", "car: thêm color, warranty; cập nhật year = 2024; xoá model (Dot & Bracket notation)", () => {
    const car = get("car");
    expect(car.year).toBe(2024);
    expect(car.color).toBe("Black");
    expect(car.warranty).toBe(2);
    expect("model" in car).toBe(false);
    expect(logs()).toContainText("Toyota");
  });

  test("2", "rectangle: diện tích 50 và chu vi 30 (dùng this)", () => {
    const r = get("rectangle");
    expect(r.getArea()).toBe(50);
    expect(r.getPerimeter()).toBe(30);
    expect(logs()).toContainText("diện tích: 50");
  });

  test("3", "studentScores: Object.keys/values/entries, điểm trung bình 8.25", () => {
    expect(logs()).toContainText("Điểm trung bình : 8.25");
    expect(logs()).toContainText("math");
    expect(logs()).toContainTextsInOrder(["math", "english", "physics", "chemistry"]);
  });

  test("4", "config: chuyển array [key, value] → object { theme: 'dark', language: 'vi', notifications: true }", () => {
    expect(logs()).toContainText("{ theme: 'dark', language: 'vi', notifications: true }");
  });

  test("4", "config → array: có cặp ['theme', 'light'] và ['language', 'vi']", () => {
    expect(logs()).toContainText("[ 'theme', 'light' ]");
    expect(logs()).toContainText("[ 'language', 'vi' ]");
  });
});
