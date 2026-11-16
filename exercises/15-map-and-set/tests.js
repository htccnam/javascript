// Bộ test tự động cho bài 15 (Map & Set).
defineTests(({ test, logs, expect }) => {
  test("Map 1", "Map CRUD: thêm 3 quyền, lấy được 'Chỉnh sửa bài viết', kiểm tra has() đúng", () => {
    expect(logs()).toContainText("Map(3) { 'admin' => 'Toàn quyền quản trị'");
    expect(logs()).toContainLine(/editor.*có tồn tại\?: true/);
    expect(logs()).toContainLine(/moderator.*có tồn tại\?: false/);
    expect(logs()).toContainText("Tổng số quyền hiện có: 3");
  });

  test("Map 1", "Xoá 'viewer' thành công, kích thước còn 2", () => {
    expect(logs()).toContainText("Kích thước sau khi xóa: 2");
  });

  test("Map 2", "Object làm key trong Map: cấu hình của Huy và Linh được tách riêng", () => {
    expect(logs()).toContainText("{ theme: 'dark', lang: 'vi' }");
    expect(logs()).toContainText("{ theme: 'light', lang: 'en' }");
  });

  test("Map 3", "for...of qua Map: Môn Toán 9, Môn Văn 8, Môn Anh 8.5 theo thứ tự", () => {
    expect(logs()).toContainTextsInOrder(["Môn Toán: 9", "Môn Văn: 8", "Môn Anh: 8.5"]);
    expect(logs()).toContainText("8.50");
  });

  test("Map 4", "Map ↔ Array ↔ Object: chuyển đổi đúng 3 chiều", () => {
    expect(logs()).toContainText("[ [ 'Toán', 9 ], [ 'Văn', 8 ], [ 'Anh', 8.5 ] ]");
    expect(logs()).toContainText("{ Toán: 9, Văn: 8, Anh: 8.5 }");
    expect(logs()).toContainText("'host' => 'localhost'");
  });

  test("Set 1", "Set CRUD: thêm tag, has(), size = 3; xoá 'nodejs' còn { javascript, react }", () => {
    expect(logs()).toContainText("Set(3) { 'javascript', 'react', 'nodejs' }");
    expect(logs()).toContainText("tags.size): 3");
    expect(logs()).toContainText("Set(2) { 'javascript', 'react' }");
  });

  test("Set 1", "clear() làm Set rỗng (kích thước 0)", () => {
    expect(logs()).toContainText("Kích thước sau khi clear: 0");
  });

  test("Set 2", "Lọc trùng ID bằng Set: [101, 102, 103, 104, 105], 5 người dùng thực tế", () => {
    expect(logs()).toContainText("[ 101, 102, 103, 104, 105 ]");
    expect(logs()).toContainText("Số người dùng thực tế đã truy cập: 5");
  });

  test("Set 3", "Phép hợp, giao, hiệu: giao = ['JavaScript'], hiệu = ['HTML', 'CSS', 'React']", () => {
    expect(logs()).toContainText("[ 'JavaScript' ]");
    expect(logs()).toContainText("[ 'HTML', 'CSS', 'React' ]");
    expect(logs()).toContainText("Docker");
  });
});
