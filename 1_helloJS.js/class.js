class Sinhvien {
  constructor(id, name, ns) {
    this.id = id;
    this.name = name;
    this.ns = ns;
  }

  showInfo() {
    return this.id + ", " + this.name + ", " + this.ns;
  }
}

const sv = new Sinhvien(1, "Nga", 2004);

Sinhvien.prototype.calcAge = function () {
  let crYear = new Date();
  return crYear.getFullYear() - this.ns;
};

let age = sv.calcAge();

console.log(sv);
console.log("Tuổi của sinh viên: " + age);
console.log(sv.showInfo());

class Circle {
  constructor(r) {
    this.r = r;
  }
  draw() {
    console.log("Phương thức được gọi đến!");
  }
  calcArea(r) {
    return Math.PI * this.r * this.r;
  }

  static calcArea(r) {
    return Math.PI * r * r;
  }
}

let c1 = new Circle();
c1.draw();

let c2 = new Circle(5);
c2.draw();

console.log(c2.calcArea(5));
console.log(Circle.calcArea(22));
