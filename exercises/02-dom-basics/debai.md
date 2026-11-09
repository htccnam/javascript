# Bài Tập: Thao Tác DOM & Xử Lý Sự Kiện (DOM Manipulation & Events)

> **Mục tiêu thực hành:**
> - Sử dụng `document.querySelector` để tìm kiếm phần tử trên trang.
> - Thao tác với thuộc tính, text (`textContent`), và class (`classList.toggle`).
> - Lắng nghe các sự kiện người dùng: `click`, `input`, `submit`.
> - Tự tay xây dựng một ứng dụng danh sách công việc (Interactive Todo List) hoàn chỉnh.

---

<a id="mục-lục"></a>
## Mục Lục

- [Phần 1: Thao tác giao diện cơ bản (Cơ bản)](#phần-1-thao-tác-giao-diện-cơ-bản-cơ-bản)
  - [Bài 1.1: Bật / Tắt chế độ tối (Dark Mode Toggle)](#bài-11-bật--tắt-chế-độ-tối-dark-mode-toggle)
  - [Bài 1.2: Bộ đếm ký tự trực tiếp (Live Character Counter)](#bài-12-bộ-đếm-ký-tự-trực-tiếp-live-character-counter)
- [Phần 2: Xây dựng Todo List động (Trung bình & Thực chiến)](#phần-2-xây-dựng-todo-list-động-trung-bình--thực-chiến)
  - [Bài 2.1: Thêm công việc mới vào danh sách](#bài-21-thêm-công-việc-mới-vào-danh-sách)
  - [Bài 2.2: Đánh dấu hoàn thành & Xóa công việc (Event Delegation)](#bài-22-đánh-dấu-hoàn-thành--xóa-công-việc-event-delegation)

---

## Phần 1: Thao tác giao diện cơ bản (Cơ bản)

### Bài 1.1: Bật / Tắt chế độ tối (Dark Mode Toggle)
- **Mô tả:** Trên trang có một nút bấm ID `#theme-toggle-btn`.
- **Yêu cầu:** 
  1. Lắng nghe sự kiện `click` trên nút `#theme-toggle-btn`.
  2. Khi người dùng click, dùng `document.body.classList.toggle("dark-mode")` để đổi giao diện trang giữa sáng và tối.
  3. Cập nhật nội dung chữ trên nút bấm: Nếu đang ở Dark Mode thì đổi chữ thành `"☀️ Chế độ sáng"`, ngược lại đổi thành `"🌙 Chế độ tối"`.

[⬆️ Quay lại Mục lục](#mục-lục)

### Bài 1.2: Bộ đếm ký tự trực tiếp (Live Character Counter)
- **Mô tả:** Có ô nhập liệu `#task-input` và thẻ hiển thị số lượng ký tự `#char-count`.
- **Yêu cầu:**
  1. Lắng nghe sự kiện `input` trên ô `#task-input`.
  2. Mỗi khi người dùng gõ hoặc xóa chữ, lấy độ dài chuỗi (`input.value.length`) và cập nhật vào `#char-count`.
  3. Nếu độ dài vượt quá 30 ký tự, đổi màu chữ của `#char-count` sang màu đỏ cảnh báo (`style.color = "red"`), nếu <= 30 ký tự thì giữ màu mặc định.

[⬆️ Quay lại Mục lục](#mục-lục)

---

## Phần 2: Xây dựng Todo List động (Trung bình & Thực chiến)

### Bài 2.1: Thêm công việc mới vào danh sách
- **Mô tả:** Có form `#todo-form`, ô nhập `#task-input`, và danh sách `#todo-list`.
- **Yêu cầu:**
  1. Lắng nghe sự kiện `submit` của `#todo-form`.
  2. **Bắt buộc** gọi `event.preventDefault()` để ngăn trang bị tải lại (reload).
  3. Lấy nội dung từ ô nhập, dùng `.trim()` để loại bỏ khoảng trắng thừa.
  4. Nếu ô nhập trống (`""`), hiển thị cảnh báo bằng `alert("Vui lòng nhập công việc!")` và dừng lại.
  5. Nếu có nội dung:
     - Dùng `document.createElement("li")` tạo một thẻ `<li>` mới.
     - Gán class `todo-item` cho thẻ `<li>`.
     - Tạo nội dung cho thẻ `<li>` gồm: tiêu đề công việc và một nút bấm "Xóa" (`<button class="delete-btn">Xóa</button>`).
     - Gắn thẻ `<li>` mới vào danh sách `#todo-list` bằng `appendChild`.
     - Xóa trắng ô input và đưa con trỏ chuột quay lại ô input (`input.focus()`).

[⬆️ Quay lại Mục lục](#mục-lục)

### Bài 2.2: Đánh dấu hoàn thành & Xóa công việc (Event Delegation)
- **Yêu cầu:**
  1. Lắng nghe sự kiện `click` trên danh sách cha `#todo-list` (Kỹ thuật Event Delegation).
  2. Nếu người dùng click vào nút có class `.delete-btn`, xóa thẻ `<li>` chứa nút đó (`li.remove()`).
  3. Nếu người dùng click vào phần chữ của thẻ `<li>`, chuyển đổi trạng thái hoàn thành bằng cách toggle class `completed` (`li.classList.toggle("completed")`).

[⬆️ Quay lại Mục lục](#mục-lục)
