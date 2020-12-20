let friends = [
        {name: '라이언', age: 2},
        {name: '어피치', age: 4},
        {name: '콘', age: 5},
        {name: '무지', age: 3}
];
var min=Number.POSITIVE_INFINITY;
for(var i=0;i<friends.length;i++){
    
    if(min>friends[i].age){
        min=friends[i].age;
    }
}
console.log(min);