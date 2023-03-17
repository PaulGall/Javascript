class Square {
  constructor(side) {
    this.side = side;
  }
  get area() {
    return this.side * this.side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.height * this.width;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return this.radius * this.radius * 3.14;
  }
}

class AreaCalculator {
  static calculate(shape) {
    if (shape instanceof Square) {
      return shape.area;
    } else if (shape instanceof Rectangle) {
      return shape.area;
    } else if (shape instanceof Circle) {
      return shape.area;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
