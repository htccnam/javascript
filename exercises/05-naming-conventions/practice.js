// =================================================================
// BÀI TẬP 05: QUY ƯỚC ĐẶT TÊN TRONG JAVASCRIPT (NAMING CONVENTIONS)
// File này dành cho bạn tự thực hành từ đầu.
// Hãy đọc yêu cầu trong "debai.md" và viết code vào các phần TODO bên dưới.
// =================================================================

// -----------------------------------------------------------------
// PHẦN 1: CHUẨN HÓA BIẾN BOOLEAN & DANH TỪ SỐ ÍT / SỐ NHIỀU
// -----------------------------------------------------------------
console.group("=== PHẦN 1: BIẾN BOOLEAN & DANH TỪ SỐ ÍT / SỐ NHIỀU ===");

// TODO 1.1: Refactor 4 biến boolean sau sang chuẩn tiếng Anh dạng câu hỏi Yes/No
// Đề bài gốc:
//   let login = true;
//   let notAvailable = false;
//   let edit = true;
//   let coupon = false;
console.log("--- 1.1. Chuẩn hóa biến Boolean ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:




// TODO 1.2: Chuẩn hóa danh từ số ít, số nhiều và vòng lặp for...of
// Mảng gốc cần sửa tên: const student_score = [8.5, 9.0, 7.5, 6.0];
console.log("\n--- 1.2. Danh từ số ít, số nhiều & Vòng lặp ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY (Đổi tên mảng và dùng for...of in từng điểm):




console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 2: CHUẨN HÓA TÊN HÀM, CLASS & HẰNG SỐ
// -----------------------------------------------------------------
console.group("\n=== PHẦN 2: TÊN HÀM, CLASS & HẰNG SỐ ===");

// TODO 2.1: Chuẩn hóa 4 hàm sau theo cấu trúc Động từ + Tân ngữ (Verb + Noun)
// 1. Tải thông tin người dùng theo id:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 2. Kiểm tra xem người dùng có phải là Admin hay không (trả về boolean):
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 3. Tính toán tổng tiền giỏ hàng:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


// 4. Khôi phục dữ liệu form về mặc định:
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 2.2: Phân loại hằng số (UPPER_SNAKE_CASE vs camelCase)
// Danh sách gốc:
//   const max_file_size = 10485760;
//   const current_user = { name: "Nam", role: "Developer" };
//   const api_timeout = 5000;
//   const user_input_tags = ["javascript", "coding"];
console.log("\n--- 2.2. Phân loại hằng số ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:




// TODO 2.3: Thiết kế Class Product theo chuẩn PascalCase và trường Private (#)
console.log("\n--- 2.3. Class Product và Private Field ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:




console.groupEnd();

// -----------------------------------------------------------------
// PHẦN 3: THỬ THÁCH CODE REVIEW & REFACTORING THỰC CHIẾN
// -----------------------------------------------------------------
console.group("\n=== PHẦN 3: CODE REVIEW & REFACTORING THỰC CHIẾN ===");

// TODO 3.1: Dọn rác mã nguồn - Viết lại đoạn code tính tổng tiền hàng có sẵn:
// Đoạn code gốc cần refactor:
//   const arr_ds_hang = [
//       { ten_sp: "Chuột không dây", gia: 250000, b_het_hang: false },
//       { ten_sp: "Bàn phím cơ", gia: 1500000, b_het_hang: true },
//   ];
//   function proc(a) { ... }
console.log("--- 3.1. Refactor Legacy Code ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:




// TODO 3.2: Xây dựng Module BankAccount hoàn chỉnh
console.log("\n--- 3.2. Module BankAccount Clean Code ---");
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:




console.groupEnd();
