class Wallet {
  #pin;
  #balance;

  constructor(bankName, pin) {
    this.bankName = bankName;
    this.#pin = pin;
    this.#balance = 0; // Khởi tạo balance ban đầu
  }

  // Phương thức để xác thực mã PIN
  #validatePin(inputPin) {
    return inputPin === this.#pin;
  }

  // Nạp tiền vào tài khoản
  deposit(value, inputPin) {
    if (this.#validatePin(inputPin)) {
      this.#balance += value;
      console.log(
        `Đã gửi ${value} vào tài khoản. Số dư hiện tại: ${this.#balance}`
      );
    } else {
      console.log("Mã PIN không hợp lệ. Không thể nạp tiền.");
    }
  }

  // Rút tiền từ tài khoản
  withdraw(value, inputPin) {
    if (!this.#validatePin(inputPin)) {
      console.log("Mã PIN không hợp lệ. Không thể rút tiền.");
      return;
    }

    if (value > this.#balance) {
      console.log("Số tiền trong tài khoản không đủ!");
    } else {
      this.#balance -= value;
      console.log(
        `Rút tiền thành công! Đã rút ${value}. Số dư hiện tại: ${this.#balance}`
      );
    }
  }

  // Truy cập mã PIN
  getPin(inputPin) {
    if (this.#validatePin(inputPin)) {
      return this.#pin;
    } else {
      console.log("Mã PIN không hợp lệ. Không thể truy cập mã PIN.");
      return null;
    }
  }

  // Hiển thị số dư hiện tại
  getBalance(inputPin) {
    if (this.#validatePin(inputPin)) {
      return `Số dư hiện tại: ${this.#balance}`;
    } else {
      return "Mã PIN không hợp lệ. Không thể truy cập số dư.";
    }
  }
}

// Tạo ví mới
const nga = new Wallet("Mb Bank", 1111);

// Nạp tiền và rút tiền với mã PIN
nga.deposit(10000, 1111); // Nạp tiền thành công
nga.withdraw(5000, 1111); // Rút tiền thành công
nga.withdraw(7000, 1234); // Rút tiền thất bại do mã PIN sai

// Kiểm tra số dư
console.log(nga.getBalance(1111)); // Truy cập số dư thành công
console.log(nga.getBalance(1234)); // Truy cập số dư thất bại do mã PIN sai

// Kiểm tra mã PIN
console.log(nga.getPin(1111)); // Truy cập mã PIN thành công
console.log(nga.getPin(1234)); // Truy cập mã PIN thất bại
