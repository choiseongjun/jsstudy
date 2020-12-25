


console.log('1');
setTimeout(function(){
    console.log('2');
},4000);
console.log('3')


//동기적 콜백
function printImmediately(print){
    print();
}
printImmediately(()=>console.log("sync"));
//비동기적 콜백
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log("async go"),2000);