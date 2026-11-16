// Bộ test tự động cho bài 04.
defineTests(({ test, logs, expect }) => {
  const count = (part) => logs().filter((l) => l.includes(part)).length;

  test("1.1", "Trích dẫn lồng nhau: cả 3 cách viết in ra đúng câu có dấu nháy kép", () => {
    expect(count("Không có gì quý hơn độc lập, tự do!") >= 3).toBe(true);
    expect(logs()).toContainText('"Không có gì quý hơn độc lập, tự do!"');
  });

  test("1.2", "In đường dẫn Windows đúng: C:\\Users\\Admin\\Documents\\Javascript\\Project", () => {
    expect(logs()).toContainText("C:\\Users\\Admin\\Documents\\Javascript\\Project");
  });

  test("1.3", "Đoạn 3 dòng thụt lề có \\n và \\t: có 'Danh sách môn học' và mục 1, 2", () => {
    expect(logs()).toContainText("Danh sách môn học:");
    expect(logs()).toContainText("1. JavaScript Cơ Bản");
    expect(logs()).toContainText("2. HTML & CSS");
  });

  test("2.1", "Ép kiểu ngầm: 10+20+'30' = 3030, '10'+20+30 = 102030, '10'+(20+30) = 1050, '100'-20 = 80", () => {
    expect(logs()).toContainTextsInOrder(["3030", "102030", "1050", "80"]);
  });

  test("2.2", "Sửa lỗi tính tiền giỏ hàng: kết quả đúng 160.000 VNĐ", () => {
    expect(logs()).toContainText("160.000 VNĐ");
  });

  test("3.1", "Template literal tạo thẻ HTML user-card có họ tên và tuổi", () => {
    expect(logs()).toContainText('<div class="user-card">');
    expect(logs()).toContainText("Nguyễn Văn Huy (22 tuổi)");
  });

  test("3.2", "Hoá đơn: tạm tính 2.400.000, VAT 240.000, tổng cộng 2.640.000 VNĐ", () => {
    expect(logs()).toContainText("Tạm tính: 2.400.000 VNĐ");
    expect(logs()).toContainText("TỔNG CỘNG: 2.640.000 VNĐ");
  });
});
