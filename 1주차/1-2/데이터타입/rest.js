// Rest 파라미터는 Spread 연산자(...)를 사용하여 함수의 파라미터를 작성한 형태를 말한다.
// 즉, Rest 파라미터를 사용하면 함수의 파라미터로 오는 값들을 "배열"로 전달받을 수 있다.

function foo(...rest) {
  console.log(Array.isArray(rest)); // true
  return rest; // [ 1, 2, 3, 4, 5 ]
}
var res;
var str = "";
for (var a = 0; a < 5; a++) {
  str += a + ",";
  // res = foo(1, 2, 3, 4, 5);
  res = foo(a);
}
// res = foo(parseInt(str.substr(0, str.length - 1)));
// console.log(res);

// //rest parameter
// function printAll(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//   }
//   for (const arg of args) {
//     console.log(arg);
//   }
//   args.forEach((arg) => console.log(arg));
// }
// printAll("dream", "coding", "ellie");

// //2번쨰 방식

// var arr = [];
// for (var i = 0; i < 5; i++) {
//   arr.push(i);
// }
// console.log(arr);
