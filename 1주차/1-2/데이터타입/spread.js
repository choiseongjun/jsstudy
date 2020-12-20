//ES5
var arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
 
// ES6
const arr = [1, 2, 3];
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
console.log([...arr, 4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]

// ES5
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
 
// apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 push 메소드에 전달된다.
//Array.prototype.push.apply(arr1, arr2);
//arr1.push(arr2); => [1,2,3,[4,5,6]]
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
 
// ES6
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
 
// ...arr2는 [4, 5, 6]을 개별 요소로 분리한다
arr1.push(...arr2); // == arr1.push(4, 5, 6);
 
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

const o1 = { x: 1, y: 2 };
const o2 = { ...o1, z: 3 };
console.log(o2); // { x: 1, y: 2, z: 3 }
 
const target = { x: 1, y: 2 };
const source = { z: 3 };
// Object.assign를 사용하여도 동일한 작업을 할 수 있다.
// Object.assign은 타깃 객체를 반환한다
console.log(Object.assign(target, source)); // { x: 1, y: 2, z: 3 }
