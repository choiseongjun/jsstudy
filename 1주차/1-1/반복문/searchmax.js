let friends = [
        {name: '라이언', age: 2},
        {name: '어피치', age: 4},
        {name: '콘', age: 5},
        {name: '무지', age: 3}
];
var max = 0;
for(friend of friends){
    if(max<friend.age){
        max=friend.age;
    }
}
console.log(max)