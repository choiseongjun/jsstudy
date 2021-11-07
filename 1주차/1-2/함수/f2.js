function add(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}
function result(operator) {
  const res = operator(2, 3);
  return res;
}
console.log(result(divide));

// 자바스크립트에서 함수는 일급객체입니다. 일급 객체가 되기 위해서는 몇 가지 조건을 만족하여야 합니다.

// 변수나 데이터 구조 안에 담을 수 있다.
// 파라미터로 전달 할 수 있다.
// 반환값으로 사용 할 수 있다.
// 런타임에 생성될 수 있다.
