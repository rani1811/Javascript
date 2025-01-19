// if else 

// if(true){
// //code will exceute
// }

// if(false){
//     //code will not exceute
// }

// <,>,<=,>=,==,===,!==,

// const score = 200

// if(score >100){
//     const power ="fly"
//     console.log(`user power: ${power}`)
// }
//console.log(`user power: ${power}`) //ReferenceError: power is not defined


//nested if else
// const balance =1000;

// if(balance > 500) {
//     console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 750")
// }else {
//     console.log("less than 1200")
// }


//using logical operator

const isuserlogin =true
const debitcard = true
const logginfromgoogle = true
const loggingfromgmail = true



if(isuserlogin && debitcard)
    {
    console.log("allow for payment")
}

if(logginfromgoogle || loggingfromgmail ){
    console.log("user logged in")
}