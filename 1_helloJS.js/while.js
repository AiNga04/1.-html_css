let i = 1;
let sum = 0;

while (i <= 10) {
  if (i % 2 !== 0) {
    sum += i;
  }
  i++;
}

console.log(`Tổng các số lẻ từ 1 đến 10 là: ${sum}`);

let password;

do {
  password = prompt("Nhập mật khẩu:");
} while (password !== "1234");

console.log("Bạn đã nhập đúng mật khẩu!");
