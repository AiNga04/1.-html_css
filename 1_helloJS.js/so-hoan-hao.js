function isPerfectNumber(n) {
  if (n <= 1) return false;
  let sum = 0;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n;
}

let number = parseInt(prompt("Nhập n: "));
let s = 0;

for (let i = 1; i <= number; i++) {
  if (isPerfectNumber(i)) {
    s += i;
  }
}

console.log(`Tổng các số hoàn hảo từ 1 đến ${number} là: ${s}`);
