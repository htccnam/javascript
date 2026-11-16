// Bộ test tự động cho bài 11.
defineTests(({ test, get, logs, expect }) => {
  test("1.1", "Mảng colors có 3 chuỗi màu (Array Literal)", () => {
    const colors = get("colors");
    expect(Array.isArray(colors)).toBe(true);
    expect(colors.length).toBe(3);
    expect(colors.every((c) => typeof c === "string")).toBe(true);
  });

  test("1.2", "Duyệt colors bằng for truyền thống, for...of và forEach: red, green, blue theo thứ tự", () => {
    expect(logs()).toContainTextsInOrder(["red", "green", "blue", "red", "green", "blue"]);
  });

  test("1.3", "Truy cập phần tử đầu (red) và cuối (blue) của colors", () => {
    expect(logs()).toContainTextsInOrder(["red", "blue"]);
  });

  test("2.1", "emptyArr là mảng 5 ô rỗng (new Array(5))", () => {
    expect(get("emptyArr").length).toBe(5);
  });

  test("2.2", "scores = new Array(10, 20, 30)", () => {
    expect(get("scores")).toEqual([10, 20, 30]);
  });

  test("Bài friend", "push/unshift/shift/pop/splice: hàng đợi cuối cùng còn [ 'An', 'Bình' ]", () => {
    expect(logs()).toContainText("[ 'Dũng', 'An', 'Bình', 'Cường' ]");
    expect(logs()).toContainText("[ 'An', 'Bình' ]");
  });

  test("Bài colors", "splice thay Blue→Purple và chèn Pink, Orange vào giữa Green và Purple", () => {
    expect(logs()).toContainText("[ 'Red', 'Green', 'Purple', 'Yellow' ]");
    expect(logs()).toContainText("[ 'Red', 'Green', 'Pink', 'Orange', 'Purple', 'Yellow' ]");
  });

  test("Bài products", "filter Tech có giá > 500 và map ra tên viết HOA: LAPTOP, PHONE", () => {
    expect(logs()).toContainText("[ 'LAPTOP', 'PHONE' ]");
  });

  test("Bài cart / reduce", "Tính tổng và các phần tử hợp lệ được in ra (có dòng 'Tổng')", () => {
    expect(logs().some((l) => /tổng|total/i.test(l))).toBe(true);
  });
});
