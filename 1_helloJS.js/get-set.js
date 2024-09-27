class School {
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this._score = score;
  }

  get score() {
    return this._score; // Trả về giá trị điểm
  }

  set score(value) {
    if (value >= 0 && value <= 10) {
      this._score = value; // Gán giá trị cho _score
    } else {
      console.log("Điểm không hợp lệ");
    }
  }
}

let a = new School(1, "spkt", 9);

console.log(a);
console.log(a._score); // Không nên truy cập trực tiếp vào thuộc tính riêng

// Gọi getter
console.log(a.score);

// Gọi setter
a.score = 10;
console.log(a.score);

a.score = 12;
console.log(a.score);
