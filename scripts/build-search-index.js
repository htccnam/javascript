// scripts/build-search-index.js
// Quét toàn bộ 17 docs/*.md và 17 exercises/*/debai.md để sinh ra search-index.json
// Hỗ trợ tiếng Việt không dấu, trích xuất heading, anchor, breadcrumb và keywords.

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const LESSONS_PATH = path.join(ROOT_DIR, 'exercises', 'lessons.json');
const OUTPUT_PATH = path.join(ROOT_DIR, 'search-index.json');

// Hàm chuẩn hóa tiếng Việt tối ưu: bỏ dấu thanh, chuyển đ/Đ -> d/D, lowercase, trim
function removeDiacritics(str) {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

// Bỏ cú pháp markdown để lấy text sạch
function stripMarkdown(md) {
  if (!md) return '';
  return md
    // Bỏ khối code fences
    .replace(/```[\s\S]*?```/g, ' ')
    // Giữ nội dung trong inline code `code`
    .replace(/`([^`]+)`/g, '$1')
    // Bỏ HTML tags
    .replace(/<[^>]+>/g, ' ')
    // Bỏ image syntax
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    // Bỏ link syntax [text](url) -> text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    // Bỏ các ký tự header, quote, list, table border
    .replace(/^[#>|*\-+]\s*/gm, ' ')
    .replace(/[|*~_]/g, ' ')
    // Gom khoảng trắng thừa
    .replace(/\s+/g, ' ')
    .trim();
}

// Trích xuất các từ khóa công nghệ trong inline backticks `...` và các định danh JavaScript phổ biến
function extractKeywords(text) {
  const set = new Set();

  // 1. Lấy từ inline code `...`
  const codeMatches = text.match(/`([^`]+)`/g) || [];
  for (const m of codeMatches) {
    const clean = m.replace(/`/g, '').trim();
    if (clean.length >= 2 && clean.length <= 40 && !clean.includes('\n')) {
      set.add(clean);
    }
  }

  // 2. Lấy các định danh JS có dấu chấm hoặc ngoặc (VD: Object.keys, Math.max, Array.from)
  const identifierMatches = text.match(/\b[A-Za-z_$][A-Za-z0-9_$]*(?:\.[A-Za-z_$][A-Za-z0-9_$]*)+(?:\(\))?/g) || [];
  for (const id of identifierMatches) {
    if (id.length <= 40) set.add(id);
  }

  // 3. Lấy các hàm có () như parseInt(), parseFloat(), getFullName()
  const funcMatches = text.match(/\b[A-Za-z_$][A-Za-z0-9_$]*\(\)/g) || [];
  for (const fn of funcMatches) {
    if (fn.length <= 30) set.add(fn);
  }

  return Array.from(set);
}

// Tạo slug dự phòng nếu không có thẻ <a id="..."></a>
function slugify(text) {
  return removeDiacritics(text)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function processMarkdownFile(filePath, type, lesson) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  const documents = [];
  const headingStack = { 2: '', 3: '', 4: '' };

  let currentSection = null;
  let sectionLines = [];

  function flushSection() {
    if (!currentSection) return;
    const bodyRaw = sectionLines.join('\n');
    const bodyClean = stripMarkdown(bodyRaw);
    const keywords = extractKeywords((currentSection.rawHeading || currentSection.heading) + ' ' + bodyRaw.slice(0, 1500));

    // Breadcrumb: Bài XX › Heading 2 › Heading 3 (nếu có)
    const breadcrumbParts = [`Bài ${String(lesson.id).padStart(2, '0')}: ${lesson.title}`];
    if (currentSection.level > 2 && headingStack[2] && headingStack[2] !== currentSection.heading) {
      breadcrumbParts.push(headingStack[2]);
    }
    if (currentSection.level > 3 && headingStack[3] && headingStack[3] !== currentSection.heading) {
      breadcrumbParts.push(headingStack[3]);
    }
    breadcrumbParts.push(currentSection.heading);

    const doc = {
      id: `${type}-${lesson.id}-s${documents.length + 1}`,
      type: type, // 'theory' | 'exercise'
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      file: path.relative(ROOT_DIR, filePath).replace(/\\/g, '/'),
      heading: currentSection.heading,
      anchor: currentSection.anchor,
      level: currentSection.level,
      breadcrumb: breadcrumbParts.join(' › '),
      body: bodyClean.slice(0, 320), // 320 ký tự đầu làm context
      bodyNorm: removeDiacritics(bodyClean.slice(0, 600)), // chuẩn hóa để search
      keywords: keywords.slice(0, 8),
    };
    documents.push(doc);
    sectionLines = [];
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const headingMatch = line.match(/^(#{2,4})\s+(.+)$/);

    if (headingMatch) {
      flushSection();

      const level = headingMatch[1].length;
      let headingText = headingMatch[2].trim();

      // Kiểm tra dòng trước đó có thẻ anchor <a id="..."></a> không
      let anchor = '';
      if (i > 0) {
        const prevLine = lines[i - 1].trim();
        const anchorMatch = prevLine.match(/<a\s+id=["']([^"']+)["']><\/a>/i);
        if (anchorMatch) {
          anchor = anchorMatch[1];
        }
      }
      if (!anchor) {
        anchor = slugify(headingText);
      }

      // Xóa markdown backticks trong heading khi hiển thị
      headingText = headingText.replace(/`([^`]+)`/g, '$1').trim();

      // Bỏ qua mục Lục
      if (removeDiacritics(headingText).includes('muc luc')) {
        currentSection = null;
        continue;
      }

      // Cập nhật stack heading
      headingStack[level] = headingText;
      if (level === 2) {
        headingStack[3] = '';
        headingStack[4] = '';
      } else if (level === 3) {
        headingStack[4] = '';
      }

      currentSection = {
        level,
        rawHeading: headingMatch[2].trim(),
        heading: headingText,
        anchor,
      };
    } else if (currentSection) {
      sectionLines.push(line);
    }
  }

  flushSection();
  return documents;
}

function buildIndex() {
  console.log('🔍 Đang xây dựng Search Index cho JavaScript Study Program...');

  const manifestRaw = fs.readFileSync(LESSONS_PATH, 'utf8');
  const manifest = JSON.parse(manifestRaw);
  const lessons = manifest.lessons;

  let allDocuments = [];

  for (const lesson of lessons) {
    // 1. Quét lý thuyết docs/
    const docFile = path.join(ROOT_DIR, lesson.doc);
    if (fs.existsSync(docFile)) {
      const docItems = processMarkdownFile(docFile, 'theory', lesson);
      allDocuments = allDocuments.concat(docItems);
    }

    // 2. Quét đề bài exercises/*/debai.md
    const debaiFile = path.join(ROOT_DIR, lesson.dir, 'debai.md');
    if (fs.existsSync(debaiFile)) {
      const exItems = processMarkdownFile(debaiFile, 'exercise', lesson);
      allDocuments = allDocuments.concat(exItems);
    }
  }

  const payload = {
    version: 1,
    builtAt: new Date().toISOString(),
    totalDocuments: allDocuments.length,
    documents: allDocuments,
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2), 'utf8');

  const stats = fs.statSync(OUTPUT_PATH);
  const sizeKb = (stats.size / 1024).toFixed(1);
  console.log(`✅ Đã tạo ${OUTPUT_PATH}`);
  console.log(`📊 Tổng số documents: ${allDocuments.length} mục (dung lượng: ${sizeKb} KB)`);
}

buildIndex();
