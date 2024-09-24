let a = parseInt(prompt("Nhập a: "));
let b = parseInt(prompt("Nhập b: "));
let r = parseInt(prompt("Nhập r: "));

let pi = Math.PI;

console.log(`a: ${a} b: ${b} r: ${r}`);
console.log(
  `Chu vi HCN: ${(a + b) * 2} \nChu vi HT: ${(2 * pi * r).toFixed(2)}`
);
