// const tinderuser={}
// tinderuser.id="123abc"
// tinderuser.name="priya"
// tinderuser.isLoggedIn=false
// console.log(tinderuser);

// const course={
//     coursename:"java script",
//     price:"999",
//     instructor:"priya"
// }
// const{instructor}=course
// console.log(instructor)
// function addnumber(n1,n2){
//    console.log(n1+n2);
// }
// addnumber(3,4);
// function logginmsg(username){
//     return `${username} just logged in`
// }
// console.log(logginmsg("priya"))
// function calculatecartprice(val1,val2,...num1){
//     return num1
// }
// console.log(calculatecartprice(100,200,300))
// const user={
//     username:"priya",
//     price:999
// }
// function handleobject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleobject(user)

// const mynewarray=[100,200,300,400,500]
// function returnarray(getarray){
//     return getarray[1]
// }
// console.log(returnarray(mynewarray))
// function one(){
//     const username="priya"
//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     console.log(website);
//     two();
// }
// one();
// const addtwo= (num1,num2)=>num1+num2
// console.log(addtwo(3,4))
// const a=[1,2,3,4,5]
// for (const i of a) {
//     console.log(i);
// }
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"unites state of america")
// map.set('Fr',"France")
// map.set('IN',"India")
// console.log(map)
// for(const [key,value] of map){
//     console.log(key, ':-', value);
// }
// const object={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
// }
// for (const key in object) {
//     console.log(`${key} shortcut is for ${object[key]}`);
// }
// const coding=["js","ruby","java","python","cpp"]
// coding.forEach (function (val){
//     console.log(val);
// })
// const coding =[
//     {
//         langname :"javascript",
//         filename:"js"
//     },
//     {
//         langname :"java",
//         filename:"java"
//     },
//     {
//         langname :"python",
//         filename:"py"
//     },
// ]
// coding.forEach((item)=>{
//     console.log(item.langname)
// })
// const num=[1,2,3,4,5,6,7,8,9,10]
// const num1=num.filter((num)=>num>4)
// console.log(num1)
// const num=[1,2,3,4,5,6,7,8,9,10]
// // const newnum=num.map((num)=>num*10).map((num)=>num+1)
// // console.log(newnum)
// const total = num.reduce((acc,curval)=>{
//     return acc+curval
// },0)
// console.log(total)