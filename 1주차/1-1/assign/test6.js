function sum(a, b, c) {
  if (!c || c === undefined) {
    return a + b;
  } else {
    return a + b + c;
  }
}
function test() {
  var a = 1;
  var b = 2;
  var c = 3;
  var result = sum(a, b);
  console.log(result);
}
test();
