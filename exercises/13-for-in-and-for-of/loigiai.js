/**
 * BÀI TẬP 13: VÒNG LẶP FOR-IN & FOR-OF TRONG JAVASCRIPT
 * File: loigiai.js - Lời giải mẫu chuẩn mực & phân tích bản chất cơ chế
 *
 * Hướng dẫn chạy file:
 * - Chạy bằng Node.js: node exercises/13-for-in-and-for-of/loigiai.js
 * - Chạy bằng lệnh npm: npm run solution:for-in-of
 */

// =========================================================================
// PHẦN 1: CẤP ĐỘ CƠ BẢN (CÚ PHÁP & BẢN CHẤT CƠ BẢN)
// =========================================================================

console.group("=== BÀI 1.1: TRẢI NGHIỆM DUYỆT OBJECT VỚI FOR...IN ===");
{
  const person = {
    name: "Nguyen Van A",
    age: 30,
    city: "Hà Nội"
  };

  console.log("1. Danh sách tên các thuộc tính (keys):");
  for (const key in person) {
    console.log(`   - Key: ${key}`);
  }

  console.log("\n2. Chi tiết Thuộc tính & Giá trị (dùng Bracket Notation person[key]):");
  for (const key in person) {
    // Lưu ý: Phải dùng person[key] vì 'key' là chuỗi động.
    // Nếu dùng person.key sẽ ra undefined vì JS tìm thuộc tính có tên là 'key'.
    console.log(`   Thuộc tính: ${key} => Giá trị: ${person[key]}`);
  }
}
console.groupEnd();

console.group("=== BÀI 1.2: DUYỆT MẢNG VÀ CHUỖI VỚI FOR...OF ===");
{
  const colors = ["red", "green", "blue", "yellow"];
  const greeting = "Xin chào!";

  console.log("1. Duyệt mảng colors bằng for...of và in chữ in hoa:");
  for (const color of colors) {
    console.log(`   Màu: ${color.toUpperCase()}`);
  }

  console.log("\n2. Duyệt chuỗi greeting bằng for...of và đếm ký tự (loại trừ khoảng trắng):");
  let validCharCount = 0;
  for (const char of greeting) {
    if (char !== " ") {
      validCharCount++;
    }
  }
  console.log(`   Chuỗi gốc: "${greeting}"`);
  console.log(`   Tổng số ký tự thực tế (không tính khoảng trắng): ${validCharCount}`);
}
console.groupEnd();

// =========================================================================
// PHẦN 2: CẤP ĐỘ TRUNG BÌNH (XỬ LÝ DỮ LIỆU THỰC TẾ)
// =========================================================================

console.group("=== BÀI 2.1: HỒ SƠ NHÂN SỰ & TÍNH TỔNG KHO HÀNG (FOR...IN) ===");
{
  const employee = {
    name: "Nguyễn Văn B",
    age: 28,
    position: "Front-end Developer",
    salary: 15000000
  };

  const inventory = {
    aoThun: 25,
    quanJeans: 30,
    giayTheThao: 15,
    muLuoiTrai: 10
  };

  // 1. Hồ sơ nhân viên
  const profileParts = [];
  for (const key in employee) {
    profileParts.push(`${key}: ${employee[key]}`);
  }
  console.log(`1. Thông tin nhân viên: [${profileParts.join(", ")}]`);

  // 2. Tính tổng số lượng hàng trong kho
  let totalItems = 0;
  for (const item in inventory) {
    totalItems += inventory[item];
  }
  console.log(`2. Tổng số sản phẩm trong kho: ${totalItems} món hàng.`);
}
console.groupEnd();

console.group("=== BÀI 2.2: KIỂM TRA THUỘC TÍNH SẢN PHẨM BẰNG TOÁN TỬ IN ===");
{
  const product = {
    id: "SP01",
    name: "Điện thoại thông minh",
    price: 15000000
  };

  const requiredProps = ["id", "name", "price", "category"];
  const missingProps = [];

  for (const prop of requiredProps) {
    // Toán tử 'in' kiểm tra sự tồn tại của key trong Object
    if (prop in product) {
      console.log(`   ✔️ Đã có thuộc tính: "${prop}"`);
    } else {
      console.log(`   ❌ Thiếu thuộc tính: "${prop}"`);
      missingProps.push(prop);
    }
  }

  if (missingProps.length > 0) {
    console.log(`\n⚠️ CẢNH BÁO: Sản phẩm không đủ điều kiện đăng tải! Còn thiếu: [${missingProps.join(", ")}]`);
  } else {
    console.log("\n✅ Sản phẩm hợp lệ, sẵn sàng đăng tải!");
  }
}
console.groupEnd();

console.group("=== BÀI 2.3: TÍNH ĐIỂM TRUNG BÌNH HỌC SINH (FOR...OF) ===");
{
  const scores = [8.5, 9.0, 7.5, 10.0, 9.5, 6.0];

  let totalScore = 0;
  let maxScore = scores[0];

  for (const score of scores) {
    totalScore += score;
    if (score > maxScore) {
      maxScore = score;
    }
  }

  const averageScore = totalScore / scores.length;

  let grade = "";
  if (averageScore >= 8.0) {
    grade = "Giỏi";
  } else if (averageScore >= 6.5) {
    grade = "Khá";
  } else {
    grade = "Trung bình";
  }

  console.log(`📊 Điểm cao nhất: ${maxScore}`);
  console.log(`📈 Điểm trung bình: ${averageScore.toFixed(2)}`);
  console.log(`🏆 Xếp loại học lực: ${grade}`);
}
console.groupEnd();

// =========================================================================
// PHẦN 3: CẤP ĐỘ NÂNG CAO / THỰC CHIẾN (GIẢI THUẬT & PHÒNG TRÁNH CẠM BẪY)
// =========================================================================

console.group("=== BÀI 3.1: TÌM KIẾM SÁCH VÀ TỐI ƯU HÓA BẰNG BREAK ===");
{
  const books = [
    { id: 101, title: "Sách lập trình JavaScript", author: "Nguyễn Văn A", year: 2023, isAvailable: true },
    { id: 102, title: "Học thiết kế web", author: "Trần Thị B", year: 2022, isAvailable: false },
    { id: 103, title: "Kỹ năng quản lý thời gian", author: "Lê Văn C", year: 2024, isAvailable: true },
    { id: 104, title: "Giải thuật nâng cao", author: "Phạm Văn D", year: 2021, isAvailable: true }
  ];

  const searchTitle = "Học thiết kế web";
  let scanCount = 0;
  let foundBook = null;

  for (const book of books) {
    scanCount++;
    console.log(`   [Lần lặp ${scanCount}] Đang kiểm tra: "${book.title}"...`);

    if (book.title === searchTitle) {
      foundBook = book;
      console.log(`   🎯 ĐÃ TÌM THẤY! Ngắt vòng lặp bằng 'break' ngay lập tức.`);
      break; // Thoát lặp ngay, không duyệt các cuốn sách tiếp theo!
    }
  }

  if (foundBook) {
    const statusText = foundBook.isAvailable ? "Còn trong kho" : "Đã mượn";
    console.log(`\n📚 KẾT QUẢ TÌM KIẾM:`);
    console.log(`   Mã: ${foundBook.id} | Tên: ${foundBook.title} | Tác giả: ${foundBook.author} | Năm: ${foundBook.year} | Trạng thái: ${statusText}`);
    console.log(`⚡ Hiệu quả tối ưu: Chỉ duyệt ${scanCount}/${books.length} cuốn sách (tiết kiệm 50% số lần lặp).`);
  }
}
console.groupEnd();

console.group("=== BÀI 3.2: CẠM BẪY ARRAY.PROTOTYPE KHI DÙNG FOR...IN TRÊN MẢNG ===");
{
  // 1. Giả lập thư viện bên thứ 3 mở rộng Prototype của Array:
  Array.prototype.customMethod = function() { return "Hack!"; };
  Array.prototype.author = "Hacker";

  const techStack = ["JavaScript", "HTML", "CSS", "React"];

  console.log("1. THỬ NGHIỆM NGUY HIỂM: Dùng for...in duyệt mảng:");
  const forInOutput = [];
  for (const idx in techStack) {
    forInOutput.push(`${idx} => ${techStack[idx]}`);
  }
  console.log("   Kết quả duyệt for...in:");
  forInOutput.forEach(line => console.log(`     ${line}`));
  console.log("   ❌ NGUY HIỂM: for...in duyệt cả thuộc tính mở rộng 'customMethod' và 'author'!");

  console.log("\n2. GIẢI PHÁP AN TOÀN: Dùng for...of duyệt mảng:");
  const forOfOutput = [];
  for (const item of techStack) {
    forOfOutput.push(item);
  }
  console.log(`   Kết quả duyệt for...of: [${forOfOutput.join(", ")}]`);
  console.log("   ✅ AN TOÀN TUYỆT ĐỐI: for...of chỉ duyệt đúng các phần tử thực tế trong mảng, bỏ qua hoàn toàn prototype!");

  // Dọn dẹp Prototype sau khi thực nghiệm:
  delete Array.prototype.customMethod;
  delete Array.prototype.author;
}
console.groupEnd();

console.group("=== BÀI 3.3: LỖI TYPEERROR KHI DÙNG FOR...OF CHO OBJECT & GIẢI PHÁP ===");
{
  const serverConfig = {
    host: "localhost",
    port: 8080,
    protocol: "https",
    maxConnections: 1000
  };

  // 1. Thử nghiệm lỗi khi dùng for...of trực tiếp cho Object
  console.log("1. Thử nghiệm chạy for...of trực tiếp trên Plain Object:");
  try {
    for (const val of serverConfig) {
      console.log(val);
    }
  } catch (error) {
    console.log(`   ❌ Bắt được lỗi mong đợi: [${error.name}] - ${error.message}`);
    console.log("   💡 Giải thích: Plain Object không có thuộc tính [Symbol.iterator] nên không phải là Iterable!");
  }

  // 2. Kỹ thuật duyệt Object chuẩn hiện đại bằng Object.entries() kết hợp for...of
  console.log("\n2. Giải pháp chuẩn: Kết hợp Object.entries() + Destructuring + for...of:");
  for (const [key, value] of Object.entries(serverConfig)) {
    console.log(`   ⚙️ Cấu hình [${key}]: ${value}`);
  }
}
console.groupEnd();
