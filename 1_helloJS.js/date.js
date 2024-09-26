let currentDate = new Date();

console.log(typeof currentDate); // Kiểu dữ liệu của currentDate là object
console.log(currentDate); // Hiển thị đối tượng ngày giờ hiện tại

// Gọi đúng phương thức với cặp dấu ngoặc ()
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Cộng 1 vì getMonth() trả về giá trị từ 0-11
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();

console.log(`year: ${year}`);
console.log(`month: ${month}`);
console.log(`day: ${day}`);
console.log(`hour: ${hour}`);
console.log(`minute: ${minute}`);
console.log(`second: ${second}`);

let timeStamp = new Date(0);
console.log(timeStamp);

let currentTimeStamp = currentDate.getTime();
console.log(`timestamp: ${currentTimeStamp}`);

let myDate = new Date(2024, 9, 25);
console.log(`my date: ${myDate.toDateString()}`);
console.log(`my date: ${myDate.toLocaleDateString()}`);

let myDate2 = new Date("2024-09-25T17:23:50");
console.log(`my date: ${myDate2}`);
console.log(`my date: ${myDate2.toDateString()}`); // Chuyển đối tượng Date thà // In ra toàn bộ đối tượng Datenh chuỗi định dạng ngày
console.log(`my date: ${myDate2.toLocaleDateString()}`); // Chuyển đổi ngày theo định dạng của ngôn ngữ địa phương

let myDate3 = new Date();
console.log(`my date: ${myDate3}`);
myDate3.setFullYear(2023);
console.log(`my date: ${myDate3}`);

console.log(
  `Ngày ${myDate3.getDate()} Tháng ${myDate3.getMonth()} Năm ${myDate3.getFullYear()}`
);

let prefitDay = myDate3.getDate() < 10 ? "0" : "";
let prefitMonth = myDate3.getMonth() < 9 ? "0" : "";
console.log(
  `Ngày ${prefitDay}${myDate3.getDate()} Tháng ${prefitMonth}${myDate3.getMonth()} Năm ${myDate3.getFullYear()}`
);

// setTimeout
let hello = () => {
  console.log("hello world");
};

setTimeout(hello, 3000);

let helloNga = (yourName) => {
  console.log("hello world " + yourName);
};

setTimeout(helloNga, 4000, "Nga");

let timeOut = setTimeout(helloNga, 5000, "NgaDev");
clearTimeout(timeOut);

// setInterval
let notification = () => {
  console.log(`bạn có xxx thông báo chưa xem!!!`);
};
// setInterval(notification, 2000);

let updateTime = () => {
  let currentTime = new Date();
  console.log(`Time: ${currentTime}`);
};

// setInterval(updateTime, 1000);

let cnt = 0;
let intervalId;

// Hàm đếm
let count = function () {
  console.log(`Count: ${cnt++}`);

  // Dừng đếm khi cnt đạt 20
  if (cnt === 20) {
    clearInterval(intervalId);
    console.log("Interval stopped at count 20");
  }
};

// Bắt đầu setInterval và lưu ID
intervalId = setInterval(count, 500);
