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

  test("3", "studentScores: Object.keys/values/entries, điểm TB 8.25, điểm cao nhất 9, hàm isEmpty(obj)", () => {
    expect(logs()).toContainText("Điểm trung bình : 8.25");
    expect(logs()).toContainText("Điểm cao nhất: 9");
    expect(logs()).toContainText("isEmpty({}): true");
    expect(logs()).toContainText("isEmpty(studentScores): false");
    expect(logs()).toContainText("math");
    expect(logs()).toContainTextsInOrder(["math", "english", "physics", "chemistry"]);
    const isEmpty = get("isEmpty");
    expect(typeof isEmpty).toBe("function");
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty(get("studentScores"))).toBe(false);
  });

  test("4", "config: chuyển array [key, value] → object { theme: 'dark', language: 'vi', notifications: true }", () => {
    expect(logs()).toContainText("{ theme: 'dark', language: 'vi', notifications: true }");
  });

  test("4", "config → array: có cặp ['theme', 'light'] và ['language', 'vi']", () => {
    expect(logs()).toContainText("[ 'theme', 'light' ]");
    expect(logs()).toContainText("[ 'language', 'vi' ]");
  });

  test("5", "book: destructuring trích xuất title, author; in tiêu đề và tác giả", () => {
    expect(logs()).toContainText("Tiêu đề sách: The Great Gatsby");
    expect(logs()).toContainText("Tác giả: F. Scott Fitzgerald");
  });

  test("6", "person: duyệt for...in và cập nhật tuổi lên 26 nếu 'age' in person", () => {
    const p = get("person");
    expect(p.age).toBe(26);
    expect(logs()).toContainText("Tuổi sau sinh nhật: 26");
    expect(logs()).toContainText("isEmployed: true");
  });

  test("7", "member: sửa thuộc tính thành công, bắt lỗi gán lại bằng try/catch, đóng băng với Object.freeze", () => {
    const m = get("member");
    expect(m.name).toBe("Jane");
    expect(m.level).toBe(1);
    expect(Object.isFrozen(m)).toBe(true);
    expect(logs()).toContainText("Assignment to constant variable.");
  });

  test("8", "dog: khai báo đúng thuộc tính (danh từ), phương thức (động từ), gọi speak 'Go go...' và phân biệt hoa-thường dog.name !== dog.Name", () => {
    const d = get("dog");
    expect(d.name).toBe("Scooby Doo");
    expect(d.age).toBe(6);
    expect(d.isActive).toBe(true);
    expect(typeof d.speak).toBe("function");
    expect(typeof d.calculateHumanAge).toBe("function");
    expect(logs()).toContainText("Go go...");
    expect(d.Name).toBe("Scrappy Doo");
    expect(d.name !== d.Name).toBe(true);
  });

  test("9", "personWithThis: getFullName và greet dùng this, trả về 'John Smith' và in 'Hello, John'", () => {
    const p = get("personWithThis");
    expect(p.firstName).toBe("John");
    expect(p.lastName).toBe("Smith");
    expect(p.getFullName()).toBe("John Smith");
    expect(logs()).toContainText("John Smith");
    expect(logs()).toContainText("Hello, John");
  });

  test("10", "enhancedPerson & course: property shorthand, computed property name, method shorthand và nested destructuring keywords -> topics", () => {
    const ep = get("enhancedPerson");
    expect(ep.name).toBe("John Doe");
    expect(ep.age).toBe(30);
    expect(ep.firstName).toBe("John");
    expect(ep.lastName).toBe("Smith");
    expect(typeof ep.speak).toBe("function");
    const c = get("course");
    expect(c.title).toBe("JavaScript Pro");
    expect(logs()).toContainText("JavaScript Pro");
    expect(logs()).toContainText("js basic, js advanced");
  });
});
