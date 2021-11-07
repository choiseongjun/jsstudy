function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

let globalMessage = "global";
function printMessage() {
  let message = "hello";
  globalMessage = "test";
  globalMessage = "test2";
  console.log(message);
  console.log(globalMessage);

  function printAnother() {
    let a = "test5";
    console.log(message);
    //let childMessage = 'hello';
  }
  console.log(a);
  printAnother();
  // console.log(childMessage);//error
}
//scope는 함수단위로 만들어진다.
printMessage();

//빨리 리턴할러면 조건을 걸어라
//bad
function upgradeUser(user) {
  if (user.point > 10) {
  }
}
//good
function upgradeUser(user) {
  if (user.point <= 10) return;
}

const anonyFunc = function () {
  //익명함수
  console.log("익명함수");
};
anonyFunc(); //익명함수
const anonyprint = anonyFunc;
anonyprint(); //익명함수

console.log(sumF(1, 2));

function sumF(a, b) {
  return a + b;
}
setTimeout(() => {
  console.log(sumF(1, 2));
}, 1000);

//callBack function using function expression;
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log("yes");
};
const printNo = function () {
  console.log("no");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

const simplePrint1 = function () {
  console.log("simplePrint");
};
const simplePrint2 = () => console.log("simplePrint");
simplePrint1();
simplePrint2();

(function immediate() {
  console.log("즉시실행함수");
})();

const immediate2 = (() => console.log("즉시실행함수2"))();
