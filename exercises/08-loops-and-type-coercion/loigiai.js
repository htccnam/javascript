/**
 * BÀI TẬP 08: ÉP KIỂU & CÁC CẤU TRÚC VÒNG LẶP TRONG JAVASCRIPT
 * File: loigiai.js - Lời giải mẫu chuẩn mực & phân tích bản chất cơ chế
 * 
 * Hướng dẫn chạy file:
 * - Chạy bằng Node.js: node exercises/08-loops-and-type-coercion/loigiai.js
 * - Chạy bằng lệnh npm: npm run solution:loops
 */

// =========================================================================
// PHẦN 1: CẤP ĐỘ CƠ BẢN (ÉP KIỂU & TOÁN TỬ TĂNG GIẢM)
// =========================================================================

console.group("=== BÀI 1.1: ÉP KIỂU TƯỜNG MINH VS ÉP KIỂU NGẦM ĐỊNH ===");
{
    const rawAge = "25";
    const rawHeight = "175.5cm";
    const rawIsVip = 1;
    const rawEmpty = "";
    const rawNull = null;
    const rawUndefined = undefined;

    console.log("1. ÉP KIỂU TƯỜNG MINH (Explicit Coercion):");
    
    // Ép sang Number
    const ageNum1 = Number(rawAge);
    const ageNum2 = +rawAge;
    console.log(`  - rawAge bằng Number(): ${ageNum1} (typeof: ${typeof ageNum1})`);
    console.log(`  - rawAge bằng '+': ${ageNum2} (typeof: ${typeof ageNum2})`);

    // So sánh parseFloat vs Number
    const heightFloat = parseFloat(rawHeight);
    const heightNum = Number(rawHeight);
    console.log(`  - rawHeight bằng parseFloat(): ${heightFloat} (Bỏ qua 'cm' để lấy số)`);
    console.log(`  - rawHeight bằng Number(): ${heightNum} (Thất bại vì dính ký tự chữ 'cm')`);

    // Ép sang Boolean
    const isVipBool1 = Boolean(rawIsVip);
    const isVipBool2 = !!rawIsVip;
    console.log(`  - rawIsVip bằng Boolean(): ${isVipBool1}`);
    console.log(`  - rawIsVip bằng '!!': ${isVipBool2}`);

    // Ép null và undefined sang Number
    console.log(`  - Number(null)      = ${Number(rawNull)} (null chuyển thành 0)`);
    console.log(`  - Number(undefined) = ${Number(rawUndefined)} (undefined chuyển thành NaN - Cực kỳ quan trọng!)`);
    console.log(`  - Number('')        = ${Number(rawEmpty)} (chuỗi rỗng chuyển thành 0)`);

    console.log("\n2. ÉP KIỂU NGẦM ĐỊNH (Implicit Coercion):");
    console.log(`  - "10" + 20   = "${"10" + 20}" (Phép '+' ưu tiên ghép chuỗi)`);
    console.log(`  - "10" - 5    = ${"10" - 5} (Phép '-' ép sang số)`);
    console.log(`  - "10" * "2"  = ${"10" * "2"} (Phép '*' ép cả hai sang số)`);
    console.log(`  - true + 1    = ${true + 1} (true ép thành 1 -> 1 + 1 = 2)`);
    console.log(`  - false + "5" = "${false + "5"}" (false ép thành chuỗi "false" -> "false5")`);
}
console.groupEnd();

console.group("=== BÀI 1.2: PREFIX (++a) VS POSTFIX (a++) ===");
{
    let x = 10;
    let y = 10;

    let res1 = ++x;
    console.log("1. Tiền tố (Prefix ++x):");
    console.log(`  - Giá trị res1 : ${res1} (Nhận giá trị đã tăng ngay lập tức)`);
    console.log(`  - Biến x hiện tại: ${x}`);

    let res2 = y++;
    console.log("2. Hậu tố (Postfix y++):");
    console.log(`  - Giá trị res2 : ${res2} (Nhận giá trị cũ TRƯỚC KHI biến y tăng)`);
    console.log(`  - Biến y hiện tại: ${y} (y đã được tăng trong bộ nhớ)`);

    console.log("3. Đánh giá biểu thức phức tạp:");
    let n = 4;
    // Bước 1: n++ -> lấy 4, sau đó n tăng lên 5
    // Bước 2: ++n -> n từ 5 tăng lên 6, lấy 6
    // Bước 3: --n -> n từ 6 giảm xuống 5, lấy 5
    // Bước 4: n-- -> lấy 5, sau đó n giảm xuống 4
    // Phép tính: 4 + 6 - 5 + 5 = 10
    let total = n++ + ++n - --n + n--;
    console.log(`  - Kết quả total: ${total} (Phép tính: 4 + 6 - 5 + 5 = 10)`);
    console.log(`  - Giá trị cuối cùng của n: ${n}`);
}
console.groupEnd();

// =========================================================================
// PHẦN 2: CẤP ĐỘ TRUNG BÌNH (LÀM CHỦ FOR, WHILE & DO-WHILE)
// =========================================================================

console.group("=== BÀI 2.1: VÒNG LẶP FOR & 3 DẠNG STATEMENT ===");
{
    console.log("1. Block Statement: Dãy số chẵn từ 2 đến 10:");
    const evens = [];
    for (let i = 2; i <= 10; i += 2) {
        evens.push(i);
    }
    console.log("  ", evens.join(", "));

    console.log("2. Single Statement: Bảng nhân 5 từ 5 x 1 đến 5 x 5:");
    for (let i = 1; i <= 5; i++)
        console.log(`   5 x ${i} = ${5 * i}`);

    console.log("3. Empty Statement: Tính tổng từ 1 đến 100 bằng 1 dòng code:");
    let sum = 0;
    for (let i = 1; i <= 100; sum += i++);
    console.log(`   Tổng các số 1 -> 100 = ${sum}`);
}
console.groupEnd();

console.group("=== BÀI 2.2: ĐIỀU KHIỂN LUỒNG VỚI BREAK & CONTINUE ===");
{
    const numbers = [12, 5, 8, -3, 19, 0, 44, -7, 26];

    console.log("1. Dùng continue lọc và tính tổng số dương (> 0):");
    let positiveSum = 0;
    const positiveList = [];
    for (let i = 0; i < numbers.length; i++) {
        const val = numbers[i];
        if (val <= 0) {
            continue; // Bỏ qua số <= 0
        }
        positiveList.push(val);
        positiveSum += val;
    }
    console.log(`   Danh sách số dương: [${positiveList.join(", ")}]`);
    console.log(`   Tổng các số dương : ${positiveSum}`);

    console.log("2. Dùng break tìm số chẵn đầu tiên > 20:");
    let foundEven = null;
    for (let i = 0; i < numbers.length; i++) {
        const val = numbers[i];
        if (val > 20 && val % 2 === 0) {
            foundEven = val;
            console.log(`   🎯 Đã tìm thấy số chẵn > 20 đầu tiên là: ${foundEven} tại chỉ mục [${i}]. Ngắt lặp ngay!`);
            break;
        }
    }
}
console.groupEnd();

console.group("=== BÀI 2.3: VÒNG LẶP WHILE - MÔ PHỎNG GIAO DỊCH ===");
{
    let balance = 500000;
    const feePerDay = 75000;
    let dayCount = 0;

    console.log(`Số dư ban đầu: ${balance.toLocaleString("vi-VN")} VNĐ. Phí mỗi ngày: ${feePerDay.toLocaleString("vi-VN")} VNĐ.`);

    while (balance >= feePerDay) {
        dayCount++;
        balance -= feePerDay;
        console.log(`   Ngày ${dayCount}: Trừ ${feePerDay.toLocaleString("vi-VN")} VNĐ -> Số dư còn: ${balance.toLocaleString("vi-VN")} VNĐ`);
    }

    console.log(`🏁 Kết thúc: Duy trì được ${dayCount} ngày. Số dư còn lại không đủ trả tiếp: ${balance.toLocaleString("vi-VN")} VNĐ`);
}
console.groupEnd();

console.group("=== BÀI 2.4: VÒNG LẶP DO-WHILE - TUNG XÚC XẮC ===");
{
    let diceRoll;
    let rollCount = 0;
    const rollHistory = [];

    do {
        diceRoll = Math.floor(Math.random() * 6) + 1; // Tạo số ngẫu nhiên 1 - 6
        rollCount++;
        rollHistory.push(diceRoll);
    } while (diceRoll !== 6);

    console.log(`🎲 Lịch sử các lần tung xúc xắc: [${rollHistory.join(" -> ")}]`);
    console.log(`🎉 Đã xuất hiện mặt 6 sau đúng ${rollCount} lần tung!`);
    console.log(`💡 Nhận xét: Vòng lặp do...while đảm bảo việc tung xúc xắc luôn chạy ít nhất 1 lần đầu tiên.`);
}
console.groupEnd();

// =========================================================================
// PHẦN 3: CẤP ĐỘ NÂNG CAO / THỰC CHIẾN (GIẢI THUẬT & LABEL)
// =========================================================================

console.group("=== BÀI 3.1: NHÃN ĐIỀU KHIỂN (LABELLED STATEMENTS) TRONG MA TRẬN ===");
{
    const mapGrid = [
        ["Đất", "Đất", "Rừng"],
        ["Đất", "KHO BÁU", "Đất"],
        ["Núi", "Đất", "Hồ nước"]
    ];

    let foundRow = -1;
    let foundCol = -1;
    let scannedCells = 0;

    // Gắn nhãn matrixScanner cho vòng lặp ngoài
    matrixScanner: for (let row = 0; row < mapGrid.length; row++) {
        for (let col = 0; col < mapGrid[row].length; col++) {
            scannedCells++;
            const currentItem = mapGrid[row][col];
            console.log(`   Đang quét ô [${row}][${col}]: ${currentItem}`);

            if (currentItem === "KHO BÁU") {
                foundRow = row;
                foundCol = col;
                console.log(`   ✨ ĐÃ TÌM THẤY KHO BÁU TẠI HÀNG ${foundRow}, CỘT ${foundCol}!`);
                console.log("   🚀 Kích hoạt 'break matrixScanner' để thoát cả 2 tầng vòng lặp ngay lập tức!");
                break matrixScanner; // Thoát toàn bộ 2 vòng lặp!
            }
        }
    }

    console.log(`📊 Tổng số ô đã phải quét trước khi dừng: ${scannedCells}/9 ô.`);
}
console.groupEnd();

console.group("=== BÀI 3.2: BỘ XỬ LÝ CHUỖI NHẬP LIỆU BẨN (SANITIZER & CALCULATOR) ===");
{
    const dirtyInputs = [" 150 ", "abc", "250.50px", "0", "-40", "   ", "90đ", null, undefined, "100"];

    console.log("Dữ liệu đầu vào bẩn:", JSON.stringify(dirtyInputs));

    const cleanResults = [];
    let totalRevenue = 0;

    for (let i = 0; i < dirtyInputs.length; i++) {
        const item = dirtyInputs[i];

        // Bước 1: Bỏ qua null và undefined
        if (item === null || item === undefined) {
            continue;
        }

        // Bước 2: Bỏ qua chuỗi rỗng hoặc toàn khoảng trắng
        if (typeof item === "string" && item.trim() === "") {
            continue;
        }

        // Bước 3: Trích xuất số thực bằng parseFloat
        const parsedNumber = parseFloat(item);

        // Bước 4: Kiểm tra nếu parseFloat sinh ra NaN (như 'abc')
        if (isNaN(parsedNumber)) {
            continue;
        }

        // Bước 5: Bỏ qua các số âm hoặc bằng 0
        if (parsedNumber <= 0) {
            continue;
        }

        // Hợp lệ: Thêm vào kết quả và cộng dồn
        cleanResults.push(parsedNumber);
        totalRevenue += parsedNumber;
    }

    console.log("✅ Các giá trị số hợp lệ sau khi làm sạch:", cleanResults);
    console.log(`💰 Tổng doanh thu hợp lệ tính được: ${totalRevenue.toFixed(2)}`);
}
console.groupEnd();
