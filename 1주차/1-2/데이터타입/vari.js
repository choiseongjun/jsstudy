
let name1="seongjun";
console.log(name1);
name1="hello";
console.log(name1);


console.log(age)//hoisting
age=4;
var age;
console.log(age)

{
    vage=5;
    var vage;
}
console.log(vage)

// console.log(age1)
// age1=4;
// let age1;

//constants
//benefit
//1.security,thread safety,reduce mistake

const count = 17;
const size = 17.1;

console.log(`value:${count},type:${typeof count}`);
console.log(`value:${size},type:${typeof size}`);
//symbol타입
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2);
console.log(`value :${symbol1.description},type${typeof symbol1}`);

let text = 'hello';
console.log(`value:${text},type:${typeof text}`);
text=1;
console.log(`value:${text},type:${typeof text}`);
text = '7'+5;
console.log(`value:${text},type:${typeof text}`);
text ='8'/'2';
console.log(`value:${text},type:${typeof text}`);

const v1 = true;
const v2=  5< 1;

console.log(`or:${v1 && v2 && chk()}`)
console.log(`or:${v1 && v2 || chk()}`)
function chk(){
    for(let i = 0;i<10;i++){
        console.log('v')
    }
    return true;
}

const vName = "seongjun";
console.log(vName === "seongjun" ? "yes":"no")