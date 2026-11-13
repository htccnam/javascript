// =================================================================
// BÀI TẬP 12: THAO TÁC DOM & SỰ KIỆN - BÀI LÀM CỦA BẠN
// =================================================================

if (typeof document !== "undefined") {
// -----------------------------------------------------------------
// PHẦN 1: THAO TÁC GIAO DIỆN CƠ BẢN
// -----------------------------------------------------------------

// TODO 1.1: Bật/Tắt chế độ tối (Dark Mode Toggle)
// 1. Truy vấn nút "#theme-toggle-btn"
// 2. Gắn sự kiện "click"
// 3. Toggle class "dark-mode" trên document.body
// 4. Đổi chữ trên nút: Nếu là dark-mode thì đổi thành "☀️ Chế độ sáng", ngược lại "🌙 Chế độ tối"
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 1.2: Bộ đếm ký tự trực tiếp (Live Character Counter)
// 1. Truy vấn ô nhập "#task-input" và thẻ hiển thị số lượng "#char-count"
// 2. Gắn sự kiện "input" trên ô nhập
// 3. Cập nhật số ký tự (taskInput.value.length) vào charCount
// 4. Nếu vượt quá 30 ký tự thì đổi chữ sang màu đỏ (style.color = "red"), ngược lại giữ màu mặc định
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// -----------------------------------------------------------------
// PHẦN 2: XÂY DỰNG TODO LIST ĐỘNG
// -----------------------------------------------------------------

// TODO 2.1: Thêm công việc mới vào danh sách
// 1. Truy vấn form "#todo-form", ô nhập "#task-input", và danh sách "#todo-list"
// 2. Gắn sự kiện "submit" trên form (nhớ gọi event.preventDefault())
// 3. Lấy text từ ô nhập và .trim(). Nếu rỗng thì alert cảnh báo và return
// 4. Dùng document.createElement("li") tạo thẻ <li> mới với class "todo-item"
// 5. Thêm nội dung gồm: <span class="task-text">nội dung</span> và <button class="delete-btn">Xóa</button>
// 6. Gắn <li> vào "#todo-list", xóa trắng ô input và focus lại ô input
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:



// TODO 2.2: Đánh dấu hoàn thành & Xóa công việc (Event Delegation)
// 1. Gắn sự kiện "click" trên danh sách cha "#todo-list"
// 2. Nếu click trúng nút có class ".delete-btn": xóa thẻ <li> cha (closest hoặc target.parentElement.remove())
// 3. Nếu click vào thẻ <li> (hoặc .task-text): toggle class "completed" trên thẻ <li>
// VIẾT CODE CỦA BẠN DƯỚI ĐÂY:


} else {
    console.log("ℹ️ Bài tập 12 (Thao tác DOM & Sự kiện) là ứng dụng tương tác giao diện.");
    console.log("👉 Hãy mở file 'exercises/12-dom-basics/loigiai.html' trên trình duyệt web để kiểm tra mã của bạn!");
}
