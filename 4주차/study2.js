//구조 분해 할당

let [x,y] = [1,2]

let users = ['Mike','Tom',"Jane"];

let [user1,user2,user3] = users;

let str = "Mike-Tom-Jane";

let [user1,user2,user3] = str.split("-")

let [a,b,c] = [1,2];

let [a=3,b=4,c=5] =[1,2] //값이 없을경우 미리 선언해둠

//본질적인 접근
// const arr=[1,2]

// let temp=arr[0]
// arr[0]=arr[1]
// arr[1]=temp

let a = 1;
let b = 2;

[a,b] = [b,a];

//객체 구조분해할당

let user = {name:'Mike',age:30};
let {name,age} = user 

//let name = user.name 과 같음

let {name:userName,age:userAge} = user;//이와 같은 방식으로 변수를 바꿔서쓸수있음

console.log(userName);
console.log(userAge);