'use strict';

    //network,file 등 시간이 오래걸리는 작업은 비동기처리를 한다
//Producer
const promise = new Promise((resolve, reject) => {

    //프로미스가 만들어지는 그 순간 실행된다
    setTimeout(()=>{
        //resolve('seongjun')
        reject(new Error('no network'))
    },2000)
});

//Consumer :then,catch,finally
promise
    .then((value)=>{
        console.log(value);
    })
    .catch(error=>{
        console.log(error);
    })
    .finally(()=>{console.log('finally')})

//숫자 예제
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1),1000)
})

fetchNumber
    .then(num=>num*2)//2
    .then(num=>num*3)//6
    .then(num=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve(num-1),1000);
        })
    })
    .then(num=>console.log(num))//5
//에러 핸들링
const getHen = () =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('닭'),1000);
    })
const getEgg = hen =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${hen}=>달걀`),1000);
    });
const cook = egg =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${egg}=>후라이팬`),1000);
    })

getHen()
    .then(hen=>getEgg(hen))
    .catch(err=>{return "빵"})
    //.then(getEgg) <=이렇게도 가능
    .then(egg=>cook(egg))
    .then(meal=>console.log(meal))
    .catch(console.log)