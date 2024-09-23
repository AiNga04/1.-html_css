alert("Toi moi hoc JS");
console.log("log error");

var nameuser = prompt("Mời nhập tên bạn: ");
let age;

const pi = 3.14;

console.log("Name: " + nameuser);
console.log("Pi: " + pi);

// Thay đổi giá trị
nameuser = "Ái Nga";
console.log("Name: " + nameuser);

// Tên biến _, $ a-z, A-Z
// lỗi keywords: if, else, while, function, return, var, let, const, v.v.
// is cho biến boolean
// num cho biến số

// Chuổi
let myString = "nga";
console.log("myString");
console.log(typeof myString);

// Integer max_min
let max = Number.MAX_SAFE_INTEGER;
let min = Number.MIN_SAFE_INTEGER;

console.log("Max: " + max + ", Min: " + min);
//các cách xuất
let a = 24;
let b = 32;
console.log("Sum: " + a + " + " + b + " = " + (a + b));
console.log(`Sum: ${a} + ${b} = ${a + b}`);
console.log("Sum:", a, "+", b, "=", a + b);
console.log(`Sum: %s + %s = %s`, a, b, a + b);

let numA = 3,
  numB = 4,
  numC = (a = b);

console.log(numC);

// Thứ tự
// right-to-left
let x = (y = 5);

let numD = prompt("NumD: ");
console.log(typeof numD);

// Cộng chuỗi
let rs = numC + numD;

let rs1 = numC + parseInt(numD);

console.log(typeof rs, typeof rs1);
