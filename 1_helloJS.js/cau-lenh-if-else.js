let year = parseInt(prompt("Enter year: "));
while (isNaN(year) || year <= 0) {
  year = parseInt(
    prompt("Vui lòng nhập năm hợp lệ (năm phải là số nguyên dương): ")
  );
}

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(`${year} là năm nhuận`);
} else {
  console.log(`${year} không là năm nhuận`);
}

alert(`kiểm tra tháng có bao nhiêu ngày`);
let month = parseInt(prompt("Enter month: "));
while (isNaN(month) || month < 1 || month > 12) {
  month = parseInt(prompt("Vui lòng nhập tháng hợp lệ (1-12): "));
}

// C1
const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];

if (monthsWith31Days.includes(month)) {
  console.log(`Tháng ${month} có 31 ngày`);
} else if (month == 2) {
  let y = parseInt(prompt(`Enter year: `));
  while (isNaN(y) || y <= 0) {
    y = parseInt(
      prompt("Vui lòng nhập năm hợp lệ (năm phải là số nguyên dương): ")
    );
  }
  (y % 4 == 0 && y % 100 != 0) || y % 400 == 0
    ? console.log(`Tháng 2 có 29 ngày`)
    : console.log(`Tháng 2 có 28 ngày`);
} else {
  console.log(`Tháng ${month} có 30 ngày`);
}

// C2

if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  console.log(`Tháng ${month} có 31 ngày`);
} else if (month == 2) {
  let y = parseInt(prompt(`Enter year: `));

  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
    ? console.log(`${month} có 29 ngày`)
    : console.log(`${month} có 28 ngày`);
} else {
  console.log(`${month} có 30 ngày`);
}
