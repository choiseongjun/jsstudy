"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.money = 1000;
  }

  speak() {
    console.log(`${this.name} : hello! ${this.money}`);
  }
}
const seongjun = new Person("seongjun", 14);

console.log(seongjun);
console.log(seongjun.name);
console.log(seongjun.age);
seongjun.speak();
