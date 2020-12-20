const person1 = {name:'bob',age:2};
const person2 = {name:'steve',age:3};
const person3 = {name:'dave',age:4};
const person4 = makePerson('seongjun',30);
console.log(person4);
function makePerson(name,age){
    return{
        name,
        age
    }
}

function Person(name,age){
    this.name=name;
    this.age=age;
}
const person5 = new Person('sj',25);
console.log({...person5});
const person6 = new Object();
person6.a='1';
person6.b=2;
person6.c="Seongjun";

console.log(person6);

for(key in person6){
    console.log(key,"+++++",person6[key])
}

const array = [1,2,4,5];
for(let i=0;i<array.length;i++){
    console.log(array[i])
}
for(value of array){
    console.log(value)
}


//cloneing
const user = {name:"seongjun",age:"20"};
const user2 = user;
user2.name="junseong";
console.log(user)

//옛날 방식
const user3={};
for(key in user){
    user3[key] = user[key];
}
console.log(user3);

const user4={}
Object.assign(user4,user);
console.log(user4);

const car1 = {color:'red'};
const car2 = {color:'blue',size:'big'};
const mixed = Object.assign({},car1,car2);
console.log(mixed)