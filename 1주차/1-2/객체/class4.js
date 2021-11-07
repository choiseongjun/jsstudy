class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
  toString() {
    return `Triangle: color:${this.color}`;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    //overriding
    super.draw();
    console.log("gg");
  }
  getArea() {
    //overriding
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
console.log(triangle.getArea());
