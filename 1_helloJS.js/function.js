function isPrim(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let n = parseInt(prompt("Nhập số để kiểm tra các số nguyên tố nhỏ hơn: "));

for (let i = 2; i < n; i++) {
  if (isPrim(i)) {
    console.log(i);
  }
}

const add = (a, b) => a + b;
console.log(add(5, 3));

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 6)); // Kết quả: 24
