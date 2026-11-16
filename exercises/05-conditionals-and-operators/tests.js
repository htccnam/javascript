// Bộ test tự động cho bài 05. Phần giờ hiện tại (new Date) không chấm nội dung, chỉ chấm cấu trúc.
defineTests(({ test, logs, source, expect }) => {
  test("1.1", "Chào hỏi theo khung giờ: có dòng 'Lời chào:' với một câu chào", () => {
    expect(logs()).toContainText("Lời chào:");
  });

  test("1.2", "Tra cứu lịch làm việc bằng switch...case", () => {
    expect(source()).toMatch(/\bswitch\s*\(/);
    expect(logs()).toContainText("Lịch làm việc:");
  });

  test("1.3", "=== và == khác nhau: 5 === '5' false, 5 == '5' true, 0 == false true, 0 === false false", () => {
    expect(logs()).toContainLine(/5 === '5'\s*:\s*false/);
    expect(logs()).toContainLine(/5 == '5'\s*:\s*true/);
    expect(logs()).toContainLine(/0 == false\s*:\s*true/);
    expect(logs()).toContainLine(/0 === false\s*:\s*false/);
  });

  test("1.3", "null == undefined true, null === undefined false", () => {
    expect(logs()).toContainLine(/null == undefined\s*:\s*true/);
    expect(logs()).toContainLine(/null === undefined\s*:\s*false/);
  });

  test("2.1", "Toán tử ba ngôi in 'Đã thanh toán (250.000 VNĐ)'", () => {
    expect(logs()).toContainText("Đã thanh toán (250.000 VNĐ)");
  });

  test("2.2", "Fall-through switch: tháng 8 thuộc Quý 3", () => {
    expect(logs()).toContainText("Tháng 8 thuộc: Quý 3");
  });

  test("2.3", "Short-circuit: 0 && 'JavaScript' → 0; 100 && 'ReactJS' → ReactJS; 0 || 'NodeJS' → NodeJS", () => {
    expect(logs()).toContainTextsInOrder(["0", "ReactJS", "NodeJS", "VueJS"]);
    expect(logs()).toContainLine(/\(!false \|\| false && false\)\s*:\s*true/);
  });

  test("2.4", "void 0 luôn là undefined; so sánh val === void 0 cho kết quả đúng", () => {
    expect(source()).toMatch(/void\s+0/);
    expect(logs()).toContainText("val === void 0");
  });

  test("3.1", "Role checker: người dùng role editor không được vào trang quản trị", () => {
    expect(logs()).toContainText("Được phép vào trang quản trị?: false");
  });

  test("3.2", "Hoá đơn giao hàng (logistics) được in ra", () => {
    expect(logs()).toContainText("HÓA ĐƠN GIAO HÀNG");
  });
});
