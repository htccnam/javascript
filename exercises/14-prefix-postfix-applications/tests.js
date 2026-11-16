// Bộ test tự động cho bài 14. Chạy trong lab/ (nút Chấm bài) và scripts/verify-tests.mjs.
defineTests(({ test, get, logs, expect }) => {
  test("1.1", "Đáp án dự đoán a, b, c, d đúng (a=11, b=11, c=11, d=10)", () => {
    expect(get("answer_1_1")).toEqual({ a: 11, b: 11, c: 11, d: 10 });
  });

  test("1.2", "Đáp án biểu thức ++x + x++ + ++x: result=20, x=8", () => {
    expect(get("answer_1_2")).toEqual({ result: 20, x: 8 });
  });

  test("2.1", "In đúng 5 dòng 'Track n: <tên bài>' với ++trackNumber", () => {
    expect(logs()).toContainTextsInOrder([
      "Track 1: Bohemian Rhapsody",
      "Track 2: Stairway to Heaven",
      "Track 3: Hotel California",
      "Track 4: Imagine",
      "Track 5: Smells Like Teen Spirit",
    ]);
  });

  test("3.1", "Cách 1 (for truyền thống): in đúng 1. An … 5. Em", () => {
    expect(logs()).toContainTextsInOrder(["1. An", "2. Bình", "3. Cường", "4. Dũng", "5. Em"]);
  });

  test("3.2", "Cách 2 (for...of + ++counter): in đúng 1. An … 5. Em", () => {
    const all = logs();
    const start = all.findIndex((l) => l.includes("Cách 2"));
    expect(start >= 0).toBe(true);
    expect(all.slice(start)).toContainTextsInOrder(["1. An", "2. Bình", "3. Cường", "4. Dũng", "5. Em"]);
  });

  test("4.1", "createOrderManager sinh ORD-001, ORD-002, ORD-003 theo thứ tự", () => {
    const m = get("createOrderManager")("ORD");
    expect(m.generateOrder("A").orderId).toBe("ORD-001");
    expect(m.generateOrder("B").orderId).toBe("ORD-002");
    expect(m.generateOrder("C").orderId).toBe("ORD-003");
  });

  test("4.1", "Đơn hàng có customerName đúng và getTotalOrders() = số đơn đã sinh", () => {
    const m = get("createOrderManager")("ORD");
    const order = m.generateOrder("Nguyễn Văn A");
    expect(order.customerName).toBe("Nguyễn Văn A");
    expect(m.getTotalOrders()).toBe(1);
  });

  test("4.2", "isSymmetricArray([1,2,3,2,1]) = true", () => {
    expect(get("isSymmetricArray")([1, 2, 3, 2, 1])).toBe(true);
  });

  test("4.2", "isSymmetricArray(['a','b','c','d']) = false", () => {
    expect(get("isSymmetricArray")(["a", "b", "c", "d"])).toBe(false);
  });

  test("4.2", "isSymmetricArray(['a','b','b','a']) = true", () => {
    expect(get("isSymmetricArray")(["a", "b", "b", "a"])).toBe(true);
  });
});
