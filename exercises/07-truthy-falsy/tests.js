// Bộ test tự động cho bài 07.
defineTests(({ test, logs, expect }) => {
  const linesWith = (re) => logs().filter((l) => re.test(l));

  test("1", "Bảng phân loại: đúng 8 giá trị FALSY trong danh sách (kể cả 0n, NaN, null, undefined)", () => {
    expect(linesWith(/FALSY ❌/).length).toBe(8);
  });

  test("1", "Bảng phân loại: các giá trị truthy như '0', 'false', [], {} được nhận là TRUTHY", () => {
    expect(logs()).toContainLine(/"0"\s*\|.*TRUTHY/);
    expect(logs()).toContainLine(/"false"\s*\|.*TRUTHY/);
    expect(linesWith(/TRUTHY ✅/).length).toBe(10);
  });

  test("1", "Tổng kết có liệt kê 0n và NaN là falsy", () => {
    expect(logs()).toContainText("NaN");
    expect(logs()).toContainText("BigInt zero");
  });

  test("2", "Ép kiểu ngầm trong if: các trường hợp đều in Truthy/Falsy đúng", () => {
    expect(linesWith(/if \(.*\)\s*→ (Truthy|Falsy)/).length >= 8).toBe(true);
    expect(logs()).toContainLine(/if \("0"\s*\)\s*→ Truthy/);
    expect(logs()).toContainLine(/if \(0\s*\)\s*→ Falsy/);
  });
});
