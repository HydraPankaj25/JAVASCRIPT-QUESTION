class circle {
  constructor(num) {
    this.radius = num;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

let c1 = new circle(11)
console.log(c1.getArea());

let c2 = new circle(4.44)
console.log(c2.getPerimeter());