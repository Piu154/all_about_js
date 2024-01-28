// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("promise consumed")
// })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chai@example.com"})
//     },1000)
// }).then(function(user){
//     console.log(user);
// })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"chai",email:"chai@example.com"})
//         }
//         else{
//             reject('ERROR:Somethimg went wrong')
//         }
       
//     },1000)
// }).then((user)=>{
//     console.log(user);
//     return user.username
// }).then((user)=>{
//     console.log(user);
// // }).catch(function(error){
// //     console.log(error)
// // }).finally(()=>console.log("The promise is either solved or rejected"))
// // const promisefive=new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         let error=true;
// //         if(!error){
// //             resolve({username:"javascript",password:123})
// //         }
// //         else{
// //             reject('ERROR:Somethimg went wrong')
// //         }
       
// //     },1000)
// // })
// // async function consumepromisefive(){
// //     try{
// //         const response=await promisefive;
// //         console.log(response);
// //     }catch(error){
// //         console.log(error);
// //     }
// // }
// // consumepromisefive()
// async function getalluser(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }
// }
// getalluser()


class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);