let year = undefined;
let currentDate = new Date();

while (isNaN(year) || year <= 0 || year > currentDate.getFullYear()) {
  year = parseInt(prompt("Nhập vào năm sinh của bạn: "));
}

// Hàm tính tuổi
let cntAge = () => {
  let age = currentDate.getFullYear() - year; // Gọi phương thức với dấu ngoặc ()
  console.log(`Năm nay bạn ${age} tuổi`);
};

cntAge();
