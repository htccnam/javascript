// =================================================================
// BÀI TẬP 12: THAO TÁC DOM & SỰ KIỆN - LỜI GIẢI CHI TIẾT
// =================================================================

if (typeof document !== "undefined") {
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM đã tải xong! Bắt đầu khởi tạo các sự kiện...");

    // -----------------------------------------------------------------
    // BÀI 1.1: BẬT / TẮT CHẾ ĐỘ TỐI (DARK MODE)
    // -----------------------------------------------------------------
    const themeToggleBtn = document.querySelector("#theme-toggle-btn");

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            // Chuyển đổi class "dark-mode" trên thẻ <body>
            const isDarkMode = document.body.classList.toggle("dark-mode");

            // Cập nhật text trên nút dựa vào trạng thái vừa đổi
            themeToggleBtn.textContent = isDarkMode
                ? "☀️ Chế độ sáng"
                : "🌙 Chế độ tối";

            console.log("Đã đổi giao diện sang:", isDarkMode ? "Dark" : "Light");
        });
    }

    // -----------------------------------------------------------------
    // BÀI 1.2: BỘ ĐẾM KÝ TỰ TRỰC TIẾP (LIVE COUNTER)
    // -----------------------------------------------------------------
    const taskInput = document.querySelector("#task-input");
    const charCount = document.querySelector("#char-count");

    if (taskInput && charCount) {
        taskInput.addEventListener("input", () => {
            const currentLength = taskInput.value.length;
            charCount.textContent = currentLength;

            // Đổi màu cảnh báo nếu quá 30 ký tự
            if (currentLength > 30) {
                charCount.style.color = "#ef4444";
                charCount.style.fontWeight = "bold";
            } else {
                charCount.style.color = "";
                charCount.style.fontWeight = "normal";
            }
        });
    }

    // -----------------------------------------------------------------
    // BÀI 2.1: THÊM CÔNG VIỆC MỚI VÀO DANH SÁCH
    // -----------------------------------------------------------------
    const todoForm = document.querySelector("#todo-form");
    const todoList = document.querySelector("#todo-list");

    if (todoForm && taskInput && todoList) {
        todoForm.addEventListener("submit", (event) => {
            // 1. Chặn reload trang mặc định của form
            event.preventDefault();

            const text = taskInput.value.trim();

            // 2. Validate: Không cho phép nhập rỗng
            if (!text) {
                alert("Vui lòng nhập nội dung công việc!");
                taskInput.focus();
                return;
            }

            // 3. Tạo thẻ <li> mới bằng document.createElement
            const newLi = document.createElement("li");
            newLi.className = "todo-item";

            // 4. Tạo cấu trúc nội dung HTML bên trong
            newLi.innerHTML = `
                <span class="task-text">${text}</span>
                <button class="delete-btn">Xóa</button>
            `;

            // 5. Chèn vào danh sách <ul>
            todoList.appendChild(newLi);

            // 6. Reset ô nhập và bộ đếm
            taskInput.value = "";
            if (charCount) charCount.textContent = "0";
            taskInput.focus();

            console.log("Đã thêm công việc mới:", text);
        });
    }

    // -----------------------------------------------------------------
    // BÀI 2.2: ĐÁNH DẤU HOÀN THÀNH & XÓA (EVENT DELEGATION)
    // -----------------------------------------------------------------
    if (todoList) {
        todoList.addEventListener("click", (event) => {
            const target = event.target;

            // Trường hợp 1: Click vào nút "Xóa"
            if (target.classList.contains("delete-btn")) {
                const liItem = target.closest(".todo-item");
                if (liItem) {
                    const taskName = liItem.querySelector(".task-text")?.textContent;
                    liItem.remove();
                    console.log("Đã xóa công việc:", taskName);
                }
                return;
            }

            // Trường hợp 2: Click vào thẻ li hoặc span task-text -> Đánh dấu hoàn thành
            const liItem = target.closest(".todo-item");
            if (liItem) {
                liItem.classList.toggle("completed");
                console.log(
                    "Đổi trạng thái hoàn thành:",
                    liItem.querySelector(".task-text")?.textContent,
                );
            }
        });
    }
});

} else {
    console.log("ℹ️ Bài tập 12 (Thao tác DOM & Sự kiện) là ứng dụng tương tác giao diện (Todo List & Dark Mode).");
    console.log("👉 Hãy mở file 'exercises/12-dom-basics/loigiai.html' trên trình duyệt web để trực tiếp trải nghiệm và tương tác giao diện!");
}
