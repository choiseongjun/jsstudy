'use strict';

class Person{
    
    constructor(name,age){
        this.name = name;
        this.age =age;
    }

    speak(){
        console.log(`${this.name} : hello!`)
    }
}
const seongjun = new Person('seongjun',14);

console.log(seongjun.name);
console.log(seongjun.age);
seongjun.speak();