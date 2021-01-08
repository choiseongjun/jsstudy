//해시맵 셋,위크셋 위크맵
let myArray = [11,22,34,65,34];
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a:1,b:2});
mySet.delete(22);
mySet.clear();
mySet.add('100');
mySet.add('200');
console.log(mySet);
console.log(mySet.size);

mySet.forEach(function(val){
    console.log(val);
})

let myMap = new Map([['a1','Hello'],['b2','Goodbye']])
myMap.set('c3','Foo');
myMap.delete('a1')
console.log(myMap)

let carWeakSet = new WeakSet();

let car1 = {
    make:'Honda',
    model:'Civic'
}
carWeakSet.add(car1)
console.log(carWeakSet);

//genrator
//함수의 실행을 중간에 멈췄다가 재개 할 수 있는 기능
function* fn(){
    try{
        yield 1;
        yield 2;
        yield 3;
        return "finish";
    }catch(e){
        console.log(e)
    }
}

const a= fn();
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())

