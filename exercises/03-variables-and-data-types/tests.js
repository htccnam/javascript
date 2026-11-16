// Bộ test tự động cho bài 03.
defineTests(({ test, get, logs, source, expect }) => {
  test("1", "Phạm vi: biến var rò rỉ ra ngoài khối, biến let/const bị ReferenceError ngoài khối", () => {
    expect(logs()).toContainText("Tôi là var");
    expect(logs()).toContainText("bienLet is not defined");
    expect(logs()).toContainText("bienConst is not defined");
  });

  test("1", "Khai báo lại: var x có thể ghi đè (x: 20)", () => {
    expect(logs()).toContainText("20");
  });

  test("2.1", "Gán lại const nguyên thủy ném TypeError 'Assignment to constant variable'", () => {
    expect(logs()).toContainText("Assignment to constant variable");
  });

  test("2.2", "Mảng friend: push/unshift/shift/pop/splice cho kết quả đúng ['An']", () => {
    expect(logs()).toContainText("[ 'An' ]");
  });

  test("3.1", "Nhận diện 8 kiểu dữ liệu đúng thứ tự typeof", () => {
    expect(logs()).toContainTextsInOrder(["string", "number", "bigint", "boolean", "undefined", "symbol"]);
  });

  test("3.2", "Chuẩn hoá tên biến: isLoggedIn (boolean), friend (object), items (mảng), calculateTax (hàm)", () => {
    expect(source()).toMatch(/\bisLoggedIn\b/);
    expect(source()).toMatch(/\bitems\b/);
    expect(source()).toMatch(/\bcalculateTax\b/);
  });

  test("4", "Tình huống undefined: 1 - undefined cho NaN", () => {
    expect(logs()).toContainText("NaN");
  });

  test("5.1", "checkCartStatus(null) báo chưa khởi tạo; (undefined) báo không xác định", () => {
    const f = get("checkCartStatus");
    expect(String(f(null)).includes("chưa được khởi tạo")).toBe(true);
    expect(String(f(undefined)).includes("không xác định")).toBe(true);
  });

  test("5.1", "checkCartStatus: giỏ trống và giỏ có 2 sản phẩm", () => {
    const f = get("checkCartStatus");
    expect(String(f({ items: [] })).includes("trống")).toBe(true);
    expect(String(f({ items: ["A", "B"] })).includes("2 sản phẩm")).toBe(true);
  });

  test("5.2", "applyCoupon: GIAM10 giảm 10%, mã null giữ nguyên giá, mã sai báo không hợp lệ", () => {
    const f = get("applyCoupon");
    expect(f(500000, "GIAM10")).toBe(450000);
    expect(f(500000, null)).toBe(500000);
    expect(String(f(500000, "SALE99")).includes("không hợp lệ")).toBe(true);
  });

  test("7.2", "diagnosePatient phân loại đúng: null, array, nan, infinity, number, object, symbol", () => {
    const f = get("diagnosePatient");
    expect(f(null)).toBe("null");
    expect(f([])).toBe("array");
    expect(f(NaN)).toBe("nan");
    expect(f(Infinity)).toBe("infinity");
    expect(f(5)).toBe("number");
    expect(f({})).toBe("object");
    expect(f(Symbol("x"))).toBe("symbol");
  });

  test("8", "calculateAge(2024, 1990) = 34; năm sinh sai trả về thông báo lỗi", () => {
    const f = get("calculateAge");
    expect(f(2024, 1990)).toBe(34);
    expect(String(f("2024", 1990)).includes("Lỗi")).toBe(true);
    expect(String(f(1990, 2024)).includes("Lỗi")).toBe(true);
  });
});
