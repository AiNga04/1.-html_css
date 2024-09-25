let a = 1234;
console.log(typeof a);

let b = String(a);
console.log(typeof b);
console.log(`giá trị của b là: %s`, b);

let name = prompt(`nhập tên: `);

if (name) {
  console.log("Có tên");
} else {
  console.log("Không có tên");
}

let age = 0;
console.log(age || "Tuổi không hợp lệ"); // "Tuổi không hợp lệ" vì 0 là falsy

let user = null;
let defaultUser = "Guest";
console.log(user || defaultUser); // "Guest" vì `user` là falsy

let input = prompt("Enter your name:");

if (!input) {
  console.log("Bạn chưa nhập tên!");
} else {
  console.log(`Xin chào, ${input}!`);
}
