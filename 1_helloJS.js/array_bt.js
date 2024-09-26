let M = [];
let n;

while (true) {
  n = Number(
    prompt(`
  Mời nhập vào số phần tử của mảng
  Lưu ý: n phải là số nguyên > 0
  `)
  );

  if (Number.isInteger(n) && n > 0) {
    break;
  }
}

console.log("Số phần tử của mảng là: " + n);
for (let i = 0; i < n; i++) {
  console.log(i);
  let input = Number(prompt(`Mời nhập vào phần tử thứ: ${i + 1} `));
  M.push(input);
}

console.log(M);
