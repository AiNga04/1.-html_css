let day = parseInt(prompt("Enter Day: "));

while (isNaN(day) || day < 1 || day > 7) {
  let day = parseInt(prompt("Enter Day: "));
}

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day");
}

let month = 2;
let year = 2024;
let days;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;

  case 2:
    // Kiểm tra năm nhuận cho tháng 2
    days = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28;
    break;

  default:
    days = "Invalid month";
}

console.log(`Tháng ${month} có ${days} ngày.`);
