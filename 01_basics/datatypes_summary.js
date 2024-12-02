// primitive datatype
// 7 types : String , Number ,Boolean , NUll ,undefined , Symbol ,BigInt 






//Reference type (non primitive)

//Array , objects , Functions 


// const heros =["shaktiman" ,"doga"]

// let myobj ={
//     name:"acer",
//     age:5 
// }

// const myfunction = function() {
// console.log("hi")
    
// }

// console.log(typeof myfunction)


//*******************memory *****************************/

//Stack (Primitive) , Heap(Non-primitive)

let myname ="acer"
let anotherName = myname

anotherName ="HP"
console.log(myname);

console.log(anotherName);


let userOne ={
    email:"user@google.com",
    upi:"user@okici"
}

let userTwo = userOne

userTwo.email ="userTwo@google.com"

console.log(userOne.email)
console.log(userTwo.email)