for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue; // Bỏ qua các số lẻ, chỉ thực hiện với các số chẵn
  }

  if (i > 8) {
    break; // Thoát khỏi vòng lặp khi i lớn hơn 8
  }

  console.log(i); // In ra các số chẵn từ 2 đến 8
}
