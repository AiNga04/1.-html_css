class Wallet {
  #pin;
  #banlance;
  constructor(bankName, pin) {
    this.bankName = bankName;
    this._pin = pin;
    this._balance = 0;
  }

  deposit(value) {
    this._balance += value; // Cộng tiền vào balance
    console.log(
      `Đã gửi ${value} vào tài khoản. Số dư hiện tại: ${this.balance}`
    );
  }

  withdraw(value) {
    if (value > this._balance) {
      console.log("Số tiền trong tài khoản không đủ!");
    } else {
      this._balance -= value; // Trừ tiền khỏi balance
      console.log(
        `Rút tiền thành công! Đã rút ${value}. Số dư hiện tại: ${this.balance}`
      );
    }
  }
}

const nga = new Wallet("Mb Bank", 1111);

nga.deposit(10000);
nga.withdraw(10000);
nga.withdraw(5000);

console.log(nga._pin);
