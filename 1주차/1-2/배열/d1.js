//선언 방식
const arr1 = new Array();
const arr2 = [1, 2, 3, 4];

console.log(arr1);
console.log(arr2.length);
console.log(arr2[1]);
console.log(arr2[arr2.length - 1]);

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
for (let arr of arr2) {
  console.log(arr);
}

arr2.forEach(function (arr, index, array) {
  console.log(arr, "====", index, "-====", array);
});

arr2.forEach((arr, index) => console.log(arr, "==", index));

arr2.push(6, 7);

console.log(arr2);

arr2.pop();
arr2.pop(0);
arr2.push(9);
console.log(arr2);
arr2.shift();

console.log(arr2);

arr2.unshift(99);
console.log(arr2);

arr2.splice(1, 1);
console.log("ttt", arr2);

console.log(arr2.includes(4));
console.log(arr2.indexOf(99));
// const arr = [1,2,3];

// arr.push(4); // 4

// // 이후 arr은 [1,2,3,4]로 '변형'된다.

// arr.concat(5); // [1,2,3,4,5]

// //  arr은 그대로 [1,2,3,4] 이다.
