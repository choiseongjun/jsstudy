//변수 초기화
var a = 1; //숫자형
var b = "str"; //문자열
var c = "1";

console.log(typeof c);

console.log(a == b); // 출력되는 값은 똗같기에 true
console.log(a === b); //출력되는 값은 같지만 타입이 다르기떄문에 false
//=== 는 타입등을 정확히 체크하여 비교하기때문에 ===로 쓰는걸 권장

console.log(a === parseInt(c)); //c를 parseint를 하여 정수형으로 바꿔줌으로써 true가 됨
