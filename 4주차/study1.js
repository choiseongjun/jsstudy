//call,apply,bind 예제
const mike ={
    name:"Mike"
}
const tom = {
    name:"Tom",
}
function showThisName(){
    console.log(this.name)
}
//call예제
showThisName.call(mike)//매개변수는 this로 사용할 값
showThisName.call(tom)

function update(birthYear,occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}
//call은 매개변수를 직접 받지만 apply는 배열로 받는다
//call예제
//update.call(mike,1999,'singer')
//apply예제
update.apply(mike,[1999,'singer'])
console.log(mike)

update.call(tom,2002,'teacher')
console.log(tom)

const nums = [3,10,1,6,4];
//const minNum = Math.min(...nums)
//apply 예제
const minNum = Math.min.apply(null,nums);//앞은 this로 사용돠는 값인데 max나 min은 this가 없음
//const maxNum = Math.max(...nums)
const maxNum = Math.max.call(null,...nums)
console.log(minNum);
console.log(maxNum);

const updateMike = update.bind(mike);
updateMike(1980,"police")
console.log(mike)

const user = {
    name:"Mike",
    showName:function(){
        console.log(`hello,${this.name}`)
    }
}
user.showName()

let fn = user.showName;

fn.call(user)
fn.apply(user)

let boundFn = fn.bind(user);
boundFn()