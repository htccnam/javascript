// Bộ test tự động cho bài 08 (ép kiểu và các loại vòng lặp, break/continue, while).
defineTests(({ test, logs, expect }) => {
  test("1.1", "Ép kiểu tường minh: Number('25') = 25, parseFloat('175.5cm') = 175.5, Number('175.5cm') = NaN", () => {
    expect(logs()).toContainText("25 (typeof: number)");
    expect(logs()).toContainText("175.5");
    expect(logs()).toContainText("NaN");
  });

  test("1.1", "Ép kiểu ngầm: '10' + 20 = '1020', '10' - 5 = 5, true + 1 = 2, false + '5' = 'false5'", () => {
    expect(logs()).toContainTextsInOrder(["1020", "5", "20", "2", "false5"]);
  });

  test("1.2", "Prefix ++x trả về 11, postfix y++ trả về 10 rồi y = 11", () => {
    expect(logs()).toContainTextsInOrder(["11", "10", "11"]);
  });

  test("1.2", "Biểu thức 4 + 6 - 5 + 5 = 10 và n cuối cùng = 4", () => {
    expect(logs()).toContainText("10");
    expect(logs()).toContainText(": 4");
  });

  test("2.1", "for block: in dãy số chẵn 2, 4, 6, 8, 10", () => {
    expect(logs()).toContainText("2, 4, 6, 8, 10");
  });

  test("2.1", "for single statement: bảng cửu chương 5 từ 5 x 1 = 5 đến 5 x 5 = 25", () => {
    expect(logs()).toContainTextsInOrder(["5 x 1 = 5", "5 x 5 = 25"]);
  });

  test("2.1", "Empty statement: tổng 1 → 100 = 5050", () => {
    expect(logs()).toContainText("5050");
  });

  test("2.2", "continue: danh sách số dương [12, 5, 8, 19, 44, 26] và tổng 114", () => {
    expect(logs()).toContainText("[12, 5, 8, 19, 44, 26]");
    expect(logs()).toContainText("114");
  });

  test("2.2", "break: số chẵn đầu tiên > 20 là 44", () => {
    expect(logs()).toContainText("44");
  });

  test("2.3", "while trừ phí 75.000 mỗi ngày từ 500.000, dừng khi không đủ tiền", () => {
    expect(logs()).toContainTextsInOrder(["425.000", "350.000", "275.000", "200.000"]);
  });
});
