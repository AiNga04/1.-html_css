let time = undefined;

while (isNaN(time) || !Number.isInteger(time) || time < 1) {
  time = parseInt(prompt("Nhập vào số phút: "));
}

let countdown = (seconds) => {
  let minutesLeft = Math.floor(seconds / 60);
  let secondsLeft = seconds % 60;

  let prefixSecondFormat = secondsLeft < 10 ? "0" : "";
  console.log(`${minutesLeft}:${prefixSecondFormat}${secondsLeft}`);

  if (seconds <= 0) {
    clearInterval(stopCountDown);
    alert("Hết thời gian");
  } else {
    seconds--;
    stopCountDown = setTimeout(() => countdown(seconds), 1000); // Gọi lại hàm đếm ngược mỗi giây
  }
};

function startCountdown(minutes) {
  alert("Thời gian làm bài của bạn là: " + minutes + " phút");
  let seconds = minutes * 60;
  countdown(seconds);
}

startCountdown(time);
