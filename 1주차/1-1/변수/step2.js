var number = 10;

// console.log(number++);
// console.log(++number);
// console.log(number--);
// console.log(--number);

var i = 1;
var j = i++;
// 전위 증감 연산자는 변수 자체의 값을 1 증가/감소해서 반환하지만 후위 증감 연산자는 다른 변수에 현재 변수 값을 저장하고 변수 값을 1 증가/감소하고 이전에 저장된 값을 반환합니다.

// 보통 for문의 증감식에 증감 연산자를 사용하게 되는데 컴파일러에서 최적화를 하기 때문에 차이가 없을 수도 있지만 최적화를 하지 않을 경우에는 전위 증감 연산자를 사용하면 후위 증감 연산자 보다 성능상 이득이 있을 수 있습니다.

console.log(i+","+j)