const name = "seongjun";
const age = 20;

function print(name,age){
    console.log(name);
    console.log(age);
}

const seongjun = {name:"seognjun",age:20};

function printOb(people){

    console.log(people.name);
    console.log(people.age);
    console.log(people.hasJob);
}
seongjun.hasJob = true;
printOb(seongjun);

delete seongjun.hasJob;//삭제 가능

//object는 키와 값의 집합체이다..

seongjun['hasJob'] = false;

console.log(seongjun)//hasJob = false;

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(seongjun,'name');
printValue(seongjun,'age');