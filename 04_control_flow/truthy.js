//the value will be always true 

const useremail ="email@gmail.com"

// if(useremail){
//     console.log("got useremail")
// }else{
//     console.log("don't have user email")
// }

// falsy values -> false, 0, -0 ,BigInt 0n ,"" ,null ,undefined ,NaN

//truthy values ->[] , true , 1 ," " , {} ,"0" (0, false ," "inside string), 'false' , function(){}

//we can checked whether array/object is empty or not 

//array 

const array =[]

// if(array.length === 0){
//     console.log("array is empty")
// }


//objects 

const emptObj ={}

// if(Object.keys(emptObj).length === 0){
//     console.log("object is empty")
// }



//false == 0 ->true 
//false == '' ->true
//0 == '' ->true


//Nullish coalescing operator (??) : null undefined

let val1;

// val1 = 5 ?? 10 
// val1 = null ?? 10

//val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15
// val1 =null ?? ''

//console.log(val1)

//terniary operator

// syntax -> condition ? true : false


const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") :console.log("more than 80")