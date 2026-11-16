// Bộ test tự động cho bài 09.
defineTests(({ test, get, logs, expect }) => {
  test("1.1", "tinhTong(a, b) bằng Function Declaration: tinhTong(5, 3) = 8", () => {
    expect(get("tinhTong")(5, 3)).toBe(8);
  });

  test("1.2", "tinhHieu(a, b) bằng Function Expression: tinhHieu(5, 3) = 2", () => {
    expect(get("tinhHieu")(5, 3)).toBe(2);
  });

  test("1.3", "Arrow Function rút gọn: in ra 'Tinh tich 5 * 3 = 15' và 'Gap doi so 4 = 8'", () => {
    expect(logs()).toContainText("15");
    expect(logs()).toContainText("8");
  });

  test("2.1", "Gọi Function Declaration trước khi khai báo: chạy thành công", () => {
    expect(logs()).toContainText("Hoisted hoàn toàn thành công");
  });

  test("2.1", "Function Expression với var gọi trước gán: TypeError 'is not a function'", () => {
    expect(logs()).toContainText("chayThu2 is not a function");
  });

  test("2.1", "Arrow với const gọi trước khi khởi tạo: ReferenceError (TDZ)", () => {
    expect(logs()).toContainText("chayThu3");
    expect(logs()).toContainText("before initialization");
  });

  test("3.1", "filter: danh sách học sinh đỗ có An, Cường, Dũng (điểm >= 5.0)", () => {
    expect(logs()).toContainText("name: 'An'");
    expect(logs()).toContainText("name: 'Cường'");
    expect(logs()).toContainText("name: 'Dũng'");
  });

  test("3.2", "map: tên viết HOA [ 'AN', 'CƯỜNG', 'DŨNG' ]", () => {
    expect(logs()).toContainText("[ 'AN', 'CƯỜNG', 'DŨNG' ]");
  });

  test("3.3", "reduce: tổng điểm cả lớp 27 và điểm trung bình 6.75", () => {
    expect(logs()).toContainText("27");
    expect(logs()).toContainText("6.75");
  });
});
