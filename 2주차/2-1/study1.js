
//1.Object to JSON
let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['banana','grape'])
console.log(json)

const rabbit = {
    name:"tori",
    color:"white",
    size:null,
    birthDate : new Date()
};
console.log(rabbit)
json = JSON.stringify(rabbit);
console.log(json);
json = JSON.stringify(rabbit,['name','color']);
console.log(json)
json = JSON.stringify(rabbit,(key,value)=>{
    console.log(`key:${key},value:${value}`);
    // return value;
    return key==='name'?'seongjun':value;
});
console.log(json)

//JSON to Object

json = JSON.stringify(rabbit);
//const obj = JSON.parse(json);
const obj = JSON.parse(json,(key,value)=>{
    console.log(`key1:${key},value1:${value}`);
    return value;
});
console.log(obj);

console.log(rabbit.birthDate.getDate());