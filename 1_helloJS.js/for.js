let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(`Tổng từ 1 đến 10 là: ${sum}`);

let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("----------");
}
