//async await
//깔끔하게 프로미스 사용


//1.async

async function fetchUser(){
    return 'seongjun';
}

const user = fetchUser();
user.then(console.log);

function delay(ms){
    return new Promise((resolve, reject)=>{setTimeout(resolve, ms)})
}
async function getApple(){
    await delay(2000);
   // throw 'error';
    return "사과";
}
async function getBanana(){
    await delay(3000);
    return "바나나";
}
// function pickFruits(){
//     return getApple()
//             .then(apple=>{
//                 return getBanana()
//                 .then(banana=>`${apple}+${banana}`)
//             })
// }
// async function pickFruits(){
//     // try{
//     //     const apple = await getApple();
//     //     const banana = await getBanana();
//     // }catch(err){

//     // }
//     const applePromise = await getApple();
//     const bananaPromise = await getBanana();
//     const apple = await applePromise;
//     const banana = await bananaPromise;
//     return `${apple} + ${banana}`;
// }
// pickFruits().then(console.log)

//두개다 출력하기
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()]).then(fruits=>
        fruits.join('+')
    );
}
pickAllFruits().then(console.log);

//순서 빠른거 뽑기
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log)