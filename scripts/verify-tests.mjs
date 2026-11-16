// =====================================================================
// verify-tests.mjs — kiểm tra bộ test tự động của từng bài.
//   1. loigiai.js phải đạt 100% test của bài đó.
//   2. practice.js gốc phải TRƯỢT ít nhất một test (đảm bảo test có ý nghĩa).
// Chạy: node scripts/verify-tests.mjs [so-bai]   (ví dụ: node scripts/verify-tests.mjs 14)
// =====================================================================
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { runSandbox } = await import(pathToFileURL(join(root, "lab", "js", "harness.js")).href);
const manifest = JSON.parse(readFileSync(join(root, "exercises", "lessons.json"), "utf8"));

const onlyId = process.argv[2] ? Number(process.argv[2]) : null;
let failures = 0;

for (const lesson of manifest.lessons) {
  if (onlyId && lesson.id !== onlyId) continue;
  const dir = join(root, lesson.dir);
  const testsPath = join(dir, "tests.js");
  if (!existsSync(testsPath)) {
    console.log(`- Bài ${lesson.id}: chưa có tests.js (bỏ qua)`);
    continue;
  }
  const testsSrc = readFileSync(testsPath, "utf8");
  const solution = readFileSync(join(dir, "loigiai.js"), "utf8");
  const practice = readFileSync(join(dir, "practice.js"), "utf8");

  const sol = runSandbox({ code: solution, testsSrc });
  const solFailed = sol.results.filter((r) => !r.pass);
  const solOk = !sol.error && !sol.testsError && solFailed.length === 0 && sol.results.length > 0;
  if (!solOk) {
    failures++;
    console.log(`✗ Bài ${lesson.id}: lời giải KHÔNG đạt 100%`);
    if (sol.error) console.log(`    lỗi code: ${sol.error.message}`);
    if (sol.testsError) console.log(`    lỗi tests.js: ${sol.testsError.message}`);
    for (const r of solFailed) console.log(`    [${r.id}] ${r.name}: ${r.message}`);
  } else {
    console.log(`✓ Bài ${lesson.id}: lời giải đạt ${sol.results.length}/${sol.results.length} test`);
  }

  const prac = runSandbox({ code: practice, testsSrc });
  const pracFailed = prac.results.filter((r) => !r.pass).length;
  if (pracFailed === 0) {
    failures++;
    console.log(`✗ Bài ${lesson.id}: practice.js gốc đạt hết test (test vô nghĩa?)`);
  } else {
    console.log(`    practice.js gốc trượt ${pracFailed}/${prac.results.length} test (đúng kỳ vọng)`);
  }
}

if (failures) {
  console.log(`\n${failures} lỗi kiểm tra.`);
  process.exit(1);
}
console.log("\nTất cả bài đã kiểm tra đều đạt.");
