class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    // if(value<0){
    //     throw Error("age는 0보다 커야합니다")
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("seognjun", "choi", -1);
console.log(user1.age);
