const a = prompt(`Nhập chuỗi: `);
const targetWord = prompt("Nhập chuỗi cần tìm");
let count = 0;

for (let i = 0; i < a.length; i++) {
  if (a.slice(i, i + targetWord.length) === targetWord) {
    count++;
  }
}

alert(`Số lần xuất hiện của từ ${targetWord} trong chuỗi là: ${count}`);
