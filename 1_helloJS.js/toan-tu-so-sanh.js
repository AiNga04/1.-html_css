// 1. Phép so sánh bằng (Equality)
console.log(5 == "5"); // true - không kiểm tra kiểu
console.log(5 === "5"); // false - kiểm tra cả kiểu dữ liệu
console.log(5 === 5); // true - cùng kiểu và giá trị

// 2. Phép so sánh không bằng (Inequality)
console.log(5 != "5"); // false - không kiểm tra kiểu, 5 và '5' coi là bằng nhau
console.log(5 !== "5"); // true - khác kiểu (số và chuỗi)

// 3. Phép so sánh lớn hơn, nhỏ hơn
console.log(10 > 5); // true - 10 lớn hơn 5
console.log(5 < 10); // true - 5 nhỏ hơn 10
console.log(10 >= 10); // true - 10 lớn hơn hoặc bằng 10
console.log(5 <= 10); // true - 5 nhỏ hơn hoặc bằng 10

// 4. Phép so sánh đặc biệt với Object.is()
console.log(Object.is(NaN, NaN)); // true - NaN và NaN được coi là bằng nhau với Object.is
console.log(Object.is(-0, +0)); // false - -0 và +0 khác nhau theo Object.is

// 5. So sánh chuỗi (String Comparison)
console.log("apple" > "banana"); // false - 'a' nhỏ hơn 'b' theo mã Unicode
console.log("abc" < "abd"); // true - 'c' nhỏ hơn 'd' theo thứ tự chữ cái

// 6. So sánh với null và undefined
console.log(null == undefined); // true - null và undefined được coi là bằng nhau
console.log(null === undefined); // false - khác kiểu dữ liệu

// 7. So sánh với NaN
console.log(NaN == NaN); // false - NaN không bằng chính nó
console.log(isNaN(NaN)); // true - kiểm tra nếu giá trị là NaN
console.log(Object.is(NaN, NaN)); // true - Object.is nhận diện NaN bằng nhau
