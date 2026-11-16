// Bộ test tự động cho bài 10. Các dòng TODO giải thích (Vì sao ném lỗi...) không chấm tự động.
defineTests(({ test, get, logs, expect }) => {
  test("1.1", "var soThuNhat: trước khi gán in undefined (dòng trống), sau khi gán in 100", () => {
    expect(logs()).toContainText("Giá trị soThuNhat sau khi gán: 100");
  });

  test("1.2", "let soThuHai nằm trong TDZ: ReferenceError 'before initialization'", () => {
    expect(logs()).toContainText("soThuHai");
    expect(logs()).toContainText("before initialization");
  });

  test("1.2", "const soThuBa nằm trong TDZ: ReferenceError 'before initialization'", () => {
    expect(logs()).toContainText("soThuBa");
  });

  test("2.1", "Function Declaration gọi trước định nghĩa: in 'Xin chào, Nam'", () => {
    expect(logs()).toContainText("Xin chào, Nam");
  });

  test("2.2", "Function Expression với var gọi trước gán: TypeError 'tamBiet is not a function'", () => {
    expect(logs()).toContainText("tamBiet is not a function");
  });

  test("2.3", "Arrow Function với const gọi trước khởi tạo: ReferenceError (henGapLai)", () => {
    expect(logs()).toContainText("henGapLai");
  });

  test("3.1", "noiBo() gọi bên trong chayUngDung chạy được", () => {
    expect(logs()).toContainText("Hàm nội bộ được thực thi an toàn");
  });

  test("3.1", "noiBo() gọi từ bên ngoài báo 'noiBo is not defined'", () => {
    expect(logs()).toContainText("noiBo is not defined");
  });

  test("3.2", "Mô phỏng 2 pha: điểm mô phỏng là 8.5 rồi 10", () => {
    expect(logs()).toContainTextsInOrder(["Điểm mô phỏng là: 8.5", "Điểm mô phỏng là: 10"]);
  });
});
