// 1. Tạo mảng ngẫu nhiên với n phần tử
function createRandomArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

let n = parseInt(prompt("Nhập số phần tử của mảng: "));
let randomArray = createRandomArray(n);

// 2. Xuất các giá trị trong mảng
console.log("=========Mảng ban đầu=========");
console.log(randomArray);
console.log("Mảng: " + randomArray.join(", "));

// 3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
console.log("======= Mảng sau đảo ngược ========");
let reversedArray = randomArray.slice().reverse();
console.log(reversedArray);

// 4. Sắp xếp mảng tăng dần
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

console.log("====== Mảng sau khi sắp xếp tăng dần =======");
let sortedArray = sortArray([...randomArray]);
console.log(sortedArray);

// 5. Tính tổng các phần tử trong mảng
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log("===== Tổng các phần tử trong mảng =====");
let sumElement = sum(randomArray);
console.log("Tổng : " + sumElement);

// 6. Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong mảng hay không
let searchNum = Number(prompt("Nhập số để kiểm tra: "));
let indexArr = [];
for (let i = 0; i < randomArray.length; i++) {
  if (searchNum === randomArray[i]) {
    indexArr.push(i);
  }
}

console.log(indexArr);
if (indexArr.length === 0) {
  console.log(`Không có số ${searchNum} trong mảng`);
} else {
  console.log(`Số ${searchNum} xuất hiện tại vị trí index: ` + indexArr.join());
}
