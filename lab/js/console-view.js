// console-view.js — hiển thị log/group/table/error giống DevTools, từ dữ liệu đã serialize.

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
};

// Render một cây giá trị (từ harness.toTree) thành DOM có màu theo kiểu
function renderTree(tree) {
  const span = el("span", `v v-${tree.t}`);
  if (tree.t === "array") {
    // mảng: render từng phần tử con để giữ màu theo kiểu
    span.append("[ ");
    tree.items.forEach((item, i) => {
      if (i) span.append(", ");
      span.append(renderTree(item));
    });
    if (tree.more) span.append(`, ... ${tree.more} more`);
    span.append(" ]");
  } else {
    span.textContent = textOf(tree);
  }
  return span;
}

// Phiên bản text ngắn gọn cho các loại không phải mảng
function textOf(tree) {
  switch (tree.t) {
    case "string": return `'${tree.v}'`;
    case "undefined": return "undefined";
    case "null": return "null";
    case "error": return `${tree.name}: ${tree.message}`;
    case "set": return `Set(${tree.size}) { ... }`;
    case "map": return `Map(${tree.size}) { ... }`;
    case "object": return tree.cls ? `${tree.cls} { ... }` : "{ ... }";
    default: return tree.v;
  }
}

function renderTable(tree) {
  // console.table cho mảng object/mảng: hiển thị bảng đơn giản; còn lại rơi về dạng cây
  if (tree.t !== "array") return null;
  const rows = tree.items;
  const cols = [];
  const isObj = (r) => r && (r.t === "object" || r.t === "array");
  if (!rows.every(isObj)) return null;
  for (const r of rows) {
    const keys = r.t === "object" ? r.entries.map(([k]) => k) : r.items.map((_, i) => String(i));
    keys.forEach((k) => !cols.includes(k) && cols.push(k));
  }
  const table = el("table", "log-table");
  const thead = el("tr");
  ["(index)", ...cols].forEach((c) => thead.append(el("th", null, c)));
  table.append(thead);
  rows.forEach((r, i) => {
    const tr = el("tr");
    tr.append(el("td", null, String(i)));
    cols.forEach((c) => {
      let cell;
      if (r.t === "object") cell = r.entries.find(([k]) => k === c)?.[1];
      else cell = r.items[Number(c)];
      tr.append(el("td", null, cell ? textOf(cell) : ""));
    });
    table.append(tr);
  });
  return table;
}

export class ConsoleView {
  constructor(container) {
    this.container = container;
    this.groups = []; // stack các phần tử con của group
    this.count = 0;
  }

  clear() {
    this.container.replaceChildren();
    this.groups = [];
    this.count = 0;
  }

  /** @param {{level:string, depth:number, text:string, trees:object[]}} entry */
  append(entry) {
    this.count++;
    const parent = this.groups.length ? this.groups[this.groups.length - 1] : this.container;

    if (entry.level === "group") {
      const g = el("details", "log-group");
      g.open = true;
      g.append(el("summary", null, entry.text || "console.group"));
      const body = el("div", "log-body");
      g.append(body);
      parent.append(g);
      this.groups.push(body);
      return;
    }

    const row = el("div", `log-row log-${entry.level}`);
    const table = entry.level === "table" && entry.trees[0] ? renderTable(entry.trees[0]) : null;
    if (table) {
      row.append(table);
    } else if (entry.trees.length && entry.trees.some((t) => t.t !== "string")) {
      // có giá trị không phải chuỗi: hiển thị từng phần để đọc được cấu trúc
      entry.trees.forEach((t, i) => {
        if (i) row.append(" ");
        row.append(t.t === "string" ? document.createTextNode(t.v) : renderTree(t));
      });
    } else {
      row.textContent = entry.text;
    }
    parent.append(row);
  }

  groupEnd() {
    if (this.groups.length) this.groups.pop();
  }

  /** Dòng lỗi (lỗi cú pháp/runtime) với số dòng */
  appendError(err, label = "Lỗi") {
    const row = el("div", "log-row log-error");
    const where = err.line ? ` (dòng ${err.line})` : "";
    row.textContent = `✖ ${label}${where}: ${err.name ? err.name + ": " : ""}${err.message}`;
    this.container.append(row);
    this.count++;
  }

  appendNote(text) {
    this.container.append(el("div", "log-row log-note", text));
  }
}
