function addNum() {
  var sum = 0;
  for (var i = 1; i < 51; i++) {
    if (sum > 100) {
      break;
    }
    sum += i;
  }
  console.log(sum); // 1275 -> 105
}
const result = addNum();

//addNum함수를 만들어서 1부터 51까지 반복문을 돌린다.
//반복문을 돌리면서 1부터 51까지 더하는데 더한값이 100보다 크면 멈추는 함수를 만들어주세요
