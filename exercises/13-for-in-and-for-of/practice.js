/**
 * BÀI TẬP 13: VÒNG LẶP FOR-IN & FOR-OF TRONG JAVASCRIPT
 * File: practice.js - Dành cho bạn tự thực hành gõ code
 *
 * Hướng dẫn chạy file:
 * - Chạy bằng Node.js: node exercises/13-for-in-and-for-of/practice.js
 * - Chạy bằng lệnh npm: npm run test:for-in-of
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

  // TODO 1: Dùng for...in in ra lần lượt các keys của đối tượng person
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


  // TODO 2: Dùng for...in và person[key] in ra: "Thuộc tính: <key> => Giá trị: <value>"
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

}
console.groupEnd();

console.group("=== BÀI 1.2: DUYỆT MẢNG VÀ CHUỖI VỚI FOR...OF ===");
{
  const colors = ["red", "green", "blue", "yellow"];
  const greeting = "Xin chào!";

  // TODO 1: Dùng for...of duyệt mảng colors và in ra từng màu viết in hoa (.toUpperCase())
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


  // TODO 2: Dùng for...of duyệt chuỗi greeting và đếm số ký tự khác khoảng trắng " "
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

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

  // TODO 1: Dùng for...in định dạng và in thông tin nhân viên
  // Định dạng: "Thông tin nhân viên: [name: Nguyễn Văn B, age: 28, position: Front-end Developer, salary: 15000000]"
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


  // TODO 2: Dùng for...in tính tổng số lượng toàn bộ mặt hàng trong inventory
  // In ra: "Tổng số sản phẩm trong kho: X"
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

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

  // TODO: Dùng for...of duyệt requiredProps và dùng toán tử 'in' để kiểm tra.
  // Gom thuộc tính thiếu vào mảng missingProps và in ra cảnh báo hoặc thông báo hợp lệ
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

}
console.groupEnd();

console.group("=== BÀI 2.3: TÍNH ĐIỂM TRUNG BÌNH HỌC SINH (FOR...OF) ===");
{
  const scores = [8.5, 9.0, 7.5, 10.0, 9.5, 6.0];

  // TODO: Dùng for...of tính tổng điểm, tìm điểm cao nhất (Max score)
  // Tính điểm trung bình (làm tròn 2 chữ số thập phân) và xếp loại
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

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

  // TODO: Dùng for...of tìm cuốn sách có tiêu đề searchTitle
  // In thông tin chi tiết và dùng break để dừng lặp ngay lập tức
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

}
console.groupEnd();

console.group("=== BÀI 3.2: CẠM BẪY ARRAY.PROTOTYPE KHI DÙNG FOR...IN TRÊN MẢNG ===");
{
  // Giả lập thư viện bên ngoài mở rộng Prototype:
  Array.prototype.customMethod = function() { return "Hack!"; };
  Array.prototype.author = "Hacker";

  const techStack = ["JavaScript", "HTML", "CSS", "React"];

  // TODO 1: Dùng for...in duyệt techStack và quan sát các thuộc tính lạ in ra
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


  // TODO 2: Dùng for...of duyệt techStack và quan sát sự an toàn
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


  // Dọn dẹp prototype sau khi thử nghiệm xong:
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

  // TODO 1: Cố tình dùng for...of trực tiếp trên serverConfig trong khối try...catch
  // để bắt lỗi TypeError: serverConfig is not iterable
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


  // TODO 2: Sử dụng Object.entries(serverConfig) kết hợp for...of và destructuring [key, val]
  // để duyệt và in ra: "⚙️ Cấu hình [<key>]: <val>"
  // VIẾT CODE CỦA BẠN DƯỚI ĐÂY:

}
console.groupEnd();
