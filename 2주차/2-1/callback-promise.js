class UserStorage{
    loginUser(id,password,onSuccess,onError){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if((id==="seongjun" && password=="123")||
                    (id==="choi" && password=="123")){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            },2000)
        })
       
    }
    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(user==='seongjun'){
                    resolve({name:"seongjun",role:"admin"});
                }else{
                    reject(new Error('no access'));
                }
            },1000)
        })
    }
}

const userStorage = new UserStorage();
const id = "seongjun"
const password = "123"

userStorage.loginUser(id,password)
.then(userStorage.getRoles)
.then(user=>console.log(`Hello ${user.name},you have a ${user.role} role`))
.catch(console.log)
// userStorage.loginUser(
//     id,
//     password,
//     (user)=>{
//         userStorage.getRoles(
//             user,
//             (userWithRole)=>{console.log(`success ${userWithRole.name},role is ${userWithRole.role}`)},
//             error=>{console.log(error)}
//             )
//     },
//     error=>{
//         console.log(error);
//     }
// )