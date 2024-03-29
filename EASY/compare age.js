class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    // Write code here!
    if (this.age > other.age) {
      return `${other.name} is younger than me.`;
    } else if (this.age == other.age) {
      return `${other.name} is the same age as me.`;
    } else {
      return `${other.name} is older than me.`;
    }
  }
}

p1 = new Person("A", 25);
p2 = new Person("B", 15);

console.log(p2.compareAge(p1));
