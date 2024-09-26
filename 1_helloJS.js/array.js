// Khai báo mảng rỗng
let array1 = [];
let array2 = new Array();

// Khai báo mảng có giá trị
let fruits = ["Apple", "Banana", "Mango"]; // Mảng chuỗi
let numbers = [1, 2, 3, 4]; // Mảng số
let mixedArray = ["Hello", 123, true]; // Mảng chứa các kiểu dữ liệu khác nhau

console.log(fruits[0]);
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
console.log(numbers);

// for...of : Chỉ có thể xem, không sửa được giá trị của mảng
for (let x of numbers) {
  console.log(x);
}

// Gán giá trị cho một phần tử mảng
fruits[1] = "Orange";
console.log(fruits[1]);

// Thêm, xóa phần tử trong mảng
fruits.push("Grapes"); //add end
console.log(fruits);

fruits.unshift("Strawberry"); // add start
console.log(fruits);

fruits.pop(); //delete end
console.log(fruits);

fruits.shift(); //delete start
console.log(fruits);

fruits.forEach(function (x) {
  console.log(x);
});

// Một số phương thức thao tác trên mảng
//concat(): Nối mảng hiện tại với mảng khác và trả về một mảng mới.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = arr1.concat(arr2);
console.log(arr);
console.log(arr1);
console.log(arr2);

// slice(start, end): Tạo một bản sao của mảng cắt từ start đến end-1
//từ một vị trí bắt đầu đến một vị trí kết thúc (không bao gồm vị trí kết thúc).

let sliceArr1 = arr.slice();
console.log(sliceArr1);

let sliceArr2 = arr.slice(1, 4);
console.log(sliceArr2);

// includes(): Kiểm tra xem một mảng có chứa một giá trị cụ thể hay không.
//Trả về true nếu có và false nếu không.
let isNum = arr.includes(2);
console.log(isNum);

arr = arr1.concat(arr1);
console.log(arr);

// indexOf(): Trả về vị trí index của phần tử xuất hiện lần đầu tiên trong mảng nếu tìm thấy.
//Trả về -1 nếu không tìm thấy.
let index = arr.indexOf(2);
console.log(index);

//lastIndexOf(). Trả về vị trí index của phần tử xuất hiện lần cuối cùng trong mảng nếu tìm thấy.
//Trả về -1 nếu không tìm thấy.
let lastIndex = arr.lastIndexOf(2);
console.log(lastIndex);

// reverse(): đảo ngược thứ tự của các phần tử trong mảng gốc.
//Nó thay đổi mảng gốc và không tạo ra mảng mới.
console.log(sliceArr1);
let reverseArr = sliceArr1.reverse();
console.log(reverseArr);

// join() :
/*
array.join(separator);
 Nối các phần tử trong mảng thành chuỗi, theo ký tự phân tách 'separator'
 separator : Nếu bỏ trống sẽ mặc định là dấu ,
 Phương thức này không thay đổi mảng gốc.
*/

let joinArr1 = reverseArr.join();
console.log(joinArr1);

let joinArr2 = reverseArr.join(" -> ");
console.log(joinArr2);

// splice():  array.splice(start, deleteCount, item1, item2, ...);

/*
start: Chỉ định vị trí bắt đầu thay đổi mảng. Nếu là một số âm, nó sẽ được tính từ cuối mảng.
deleteCount: Số nguyên chỉ định số lượng phần tử sẽ bị loại bỏ từ mảng, bắt đầu từ vị trí start. Nếu deleteCount là 0, không có phần tử nào bị loại bỏ.
item1, item2, ...: Các phần tử mới sẽ được thêm vào mảng từ vị trí start
*/
console.log(arr);
arr.splice(2, 1);
console.log(arr);
arr.splice(2, 1, "Nga", "Dev");
console.log(arr);
arr.splice(2, 0, "Nga", "Dev");
console.log(arr);

// Toán tử Spread (...) - ES6
//Tạo bản sao (clone) của mảng:
//Tạo ra mảng mới nằm trên ô nhớ mới, có phần tử giống hệt mảng gốc
let spreadArr = [...arr];
console.log(spreadArr);
console.log(arr);

arr.splice(2, 4, 1, 7, 8);
console.log(arr);

let sum = (a, b, c, d, e, f, g) => {
  return a + b + c + d + e + f + g;
};
// Tinh toan
let result = sum(...arr);
console.log(result);

let spreadArr1 = [...arr1, ...arr2];
console.log(spreadArr1);

let myName = "AiNga";
let arrMyName = [...myName];
console.log(arrMyName);

//Phương thức sort()
//Khi không truyền compareFunction
let sortArr = ["b", "a", "c"];
// Để xem giá trị unicode dùng charCodeAt()
console.log("n".charCodeAt());
// Duyệt mảng để xem
for (let element of sortArr) {
  // console.log(element);
  console.log(`${element} có mã unicode là: ${element.charCodeAt()}`);
}

sortArr = [1, 2, 200, 42, 16, 35];
console.log(sortArr);
let sortArr1 = sortArr.sort((a, b) => a - b); //increase
console.log(sortArr1);
let sortArr2 = sortArr.sort((a, b) => b - a); //decrease
console.log(sortArr2);

sortArr = ["b", "a", "c"];
console.log(sortArr);

// Sắp xếp tăng dần
let sortArr3 = sortArr.slice().sort((a, b) => a.localeCompare(b));
console.log(sortArr3);

// Sắp xếp giảm dần
let sortArr4 = sortArr.slice().sort((a, b) => b.localeCompare(a));
console.log(sortArr4);

// reduce;
let nums = [1, 2, 3, 4, 5];

let s = 0;
for (let element of nums) {
  s += element;
}
console.log(s); // Output: 15

s = 0;
s = nums.reduce(
  (accumulator, currentValue, currentIndex, array) =>
    accumulator + currentValue,
  0
);
console.log(s); // Output: 15

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
