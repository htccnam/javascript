// Bộ test tự động cho bài 02. Chấm việc ĐẶT TÊN bằng cách kiểm tra mã nguồn học viên (source()).
defineTests(({ test, logs, source, expect }) => {
  test("1.1", "Biến boolean đặt theo dạng câu hỏi: isLoggedIn, isAvailable, canEdit, hasCoupon", () => {
    for (const name of ["isLoggedIn", "isAvailable", "canEdit", "hasCoupon"]) {
      expect(new RegExp(`\\b${name}\\b`).test(source())).toBe(true);
    }
  });

  test("1.2", "Duyệt studentScores bằng for...of in đúng 4 điểm", () => {
    expect(source()).toMatch(/\bstudentScores\b/);
    expect(logs()).toContainTextsInOrder(["8.5", "9", "7.5", "6"]);
  });

  test("2.1", "Hàm đặt theo Động từ + Tân ngữ: fetchUserData, isAdmin, calculateCartTotal, resetForm", () => {
    for (const name of ["fetchUserData", "isAdmin", "calculateCartTotal", "resetForm"]) {
      expect(new RegExp(`\\b${name}\\b`).test(source())).toBe(true);
    }
  });

  test("2.2", "Hằng số UPPER_SNAKE_CASE: MAX_FILE_SIZE, API_TIMEOUT_MS và giá trị in ra đúng", () => {
    expect(source()).toMatch(/\bMAX_FILE_SIZE\b/);
    expect(source()).toMatch(/\bAPI_TIMEOUT_MS\b/);
    expect(logs()).toContainText("10485760");
    expect(logs()).toContainText("5000");
  });

  test("2.3", "Class Product (PascalCase) có trường private # và in được tên sản phẩm", () => {
    expect(source()).toMatch(/class\s+Product\b/);
    expect(source()).toMatch(/#\w+/);
    expect(logs()).toContainText("Bàn phím cơ AKKO");
  });

  test("3.1", "Refactor hàm tính tổng tiền: in 'Tổng tiền hàng có sẵn: 250.000 VNĐ'", () => {
    expect(logs()).toContainText("250.000");
  });

  test("3.2", "Module BankAccount: số dư sau nạp 700.000 và sau rút 80.000", () => {
    expect(logs()).toContainTextsInOrder(["700.000", "80.000"]);
  });
});
