function timeSince(timestamp) {
  let now = new Date();
  console.log("Xem thử timestamp hiện tại: " + now.getTime());
  let timeDifference = now - timestamp;
  let seconds = Math.floor(timeDifference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);

  if (years > 0) {
    return `Online ${years} năm trước `;
  } else if (months > 0) {
    return `Online ${months} tháng trước `;
  } else if (days > 0) {
    return `Online ${days} ngày trước `;
  } else if (hours > 0) {
    return `Online ${hours} giờ trước `;
  } else if (minutes > 0) {
    return `Online ${minutes} phút trước `;
  } else {
    return `Online ${seconds} giây trước `;
  }
}

let timeOffline = 1707704398964; //Thời điểm bạn A offline
console.log(timeSince(timeOffline));
