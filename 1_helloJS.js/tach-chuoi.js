function separate(inputString) {
  let letters = "";
  let numbers = "";

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    if (isNaN(char)) {
      letters += char;
    } else {
      numbers += char;
    }
  }
  return { letters, numbers };
}

let inputString = prompt("Mời nhập chuỗi:");
let result = separate(inputString);

alert(`
Chuỗi chữ: ${result.letters}
Chuỗi số: ${result.numbers}
`);
