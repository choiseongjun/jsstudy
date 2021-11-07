let friends = [
  { name: "라이언", age: 2 },
  { name: "어피치", age: 4 },
  { name: "콘", age: 5 },
  { name: "무지", age: 3 },
];
var max = 0;
for (friend of friends) {
  if (max < friend.age) {
    max = friend.age;
  }
}
console.log(max);

// https://velog.io/@limes/Javascript-Array-Method-for-each-%EC%99%80-map%ED%95%A8%EC%88%98%EC%9D%98-%EC%B0%A8%EC%9D%B4
//https://velog.io/@eomttt/for-...in-for-...of-%EC%B0%A8%EC%9D%B4
