class Shape {
  constructor(name) {
    this.name = name;
  }

  calcArea() {
    return 0;
  }

  calcPerimeter() {
    return 0;
  }

  showInfo() {
    return `Shape: ${this.name}, Area: ${this.calcArea().toFixed(
      2
    )}, Perimeter: ${this.calcPerimeter().toFixed(2)}`;
  }
}

class Square extends Shape {
  constructor(name, a) {
    super(name);
    this.a = a;
  }

  calcArea() {
    return this.a * this.a;
  }

  calcPerimeter() {
    return 4 * this.a;
  }
}

class Rectangle extends Shape {
  constructor(name, a, b) {
    super(name);
    this.a = a;
    this.b = b;
  }

  calcArea() {
    return this.a * this.b;
  }

  calcPerimeter() {
    return 2 * (this.a + this.b);
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  calcArea() {
    return Math.PI * this.radius * this.radius;
  }

  calcPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

let square = new Square("Square", 4);
console.log(square.showInfo());

let rectangle = new Rectangle("Rectangle", 5, 10);
console.log(rectangle.showInfo());

let circle = new Circle("Circle", 3);
console.log(circle.showInfo());
