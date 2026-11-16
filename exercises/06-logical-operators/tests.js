// Bộ test tự động cho bài 06.
defineTests(({ test, logs, expect }) => {
  const count = (part) => logs().filter((l) => l.includes(part)).length;

  test("1.1", "Kế hoạch dã ngoại (&&): in 'Đi picnic!' (cả 2 cách viết)", () => {
    expect(count("Đi picnic!") >= 2).toBe(true);
  });

  test("1.2", "Chọn phim (||): in 'Xem phim vui vẻ!'", () => {
    expect(logs()).toContainText("Xem phim vui vẻ!");
  });

  test("1.3", "NOT (!): in thông điệp 'thích mèo!' khi không phải người yêu mèo", () => {
    expect(logs()).toContainText("thích mèo!");
  });

  test("1.3", "Ép kiểu !!: '' → false, 'JavaScript' → true, 0 → false, 42 → true, null/undefined → false", () => {
    expect(logs()).toContainLine(/!!""\s*:\s*false/);
    expect(logs()).toContainLine(/"JavaScript"\s*:\s*true/);
    expect(logs()).toContainLine(/!!0\s*:\s*false/);
    expect(logs()).toContainLine(/!!42\s*:\s*true/);
    expect(logs()).toContainLine(/!!null\s*:\s*false/);
    expect(logs()).toContainLine(/!!undefined\s*:\s*false/);
  });

  test("2.1", "Điều kiện nhập học: đủ điều kiện, và không đủ khi thiếu kỹ năng tin học", () => {
    expect(logs()).toContainText("Đủ điều kiện tham gia khóa học");
    expect(logs()).toContainText("Không đủ điều kiện");
  });

  test("2.2", "Phân quyền VIP (||): hasGiftCode = true nên vào được nội dung VIP", () => {
    expect(logs()).toContainText("Truy cập nội dung VIP");
  });

  test("2.3", "Cạm bẫy thiếu ngoặc: (A || B) && C — khách mua 200.000 không được nhận quà", () => {
    expect(logs()).toContainText("Đủ điều kiện nhận quà");
    expect(logs()).toContainText("BUG");
  });

  test("3.1", "Đoản mạch (&&) không gọi sendEmail; toán tử bitwise & thì gọi (emailCount 0 rồi 1)", () => {
    expect(logs()).toContainText("emailCount = 0");
    expect(logs()).toContainText("emailCount = 1");
  });

  test("3.2", "Guarding và fallback: chào 'Hoàng Nam' và dùng giá trị mặc định 'Khách vãng lai'", () => {
    expect(logs()).toContainText("Xin chào Hoàng Nam!");
    expect(logs()).toContainText("Khách vãng lai");
  });
});
