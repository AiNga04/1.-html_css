let a = 10;
let rs = 1;

while (a > 0) {
  rs *= a;
  a--;
}
console.log(`giai thừa: %s`, rs);

rs = 1;
for (let i = 1; i <= 10; i++) {
  rs *= i;
}
console.log(`giai thừa: %s`, rs);

s = 0;
for (let i = 1; i <= 10; i++) {
  gt = 1;
  for (let j = 1; j <= i; j++) {
    gt *= j;
  }
  s += gt;
}
console.log(`Sum: ${s}`);
