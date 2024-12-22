
// function addTwoNumbers(num1 ,num2){ //parameters-(num1 ,num2)
//    console.log( num1 + num2 )
// }
//addTwoNumbers(3,6) //arguments -(3,6)


//function addTwoNumbers(num1 ,num2){ 
// let result = num1 + num2 
//  return result

// return num1 + num2
//  }

//  const result =addTwoNumbers(3,6)
// console.log(result)






//function loginuserMessage(username){
//here we are passing default value for username="sam" ,
// even though user didn't pass username it will consider a default value ,if user give value it override with given value

function loginuserMessage(username ="sam"){
        // if(username === undefined){
        //     console.log("enter username")
        //     return 
        // }

        //or 

        if(!username){
            console.log("enter username")
            return 
        }
    return `${username} just logged in`
        
    }
   // console.log(loginuserMessage()) //if we didn't pass the value it will return undefined
   //console.log(loginuserMessage("rani"))


   function calculateCartPrice(val1 ,val2 ,...num1){

    return num1

   }
//val1 =200 ,val2 =800 , else its going to array
   //console.log(calculateCartPrice(200,800,600,900))



//    const user ={
//     username :"rani",
//     prices: 199
//    }

   function handleObject(anyobj){
    //console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
   }
   //handleObject(user)
//we can declare user and called it in function and directly in function also we can create it
   handleObject({
    username :"sam",
    price:399
   })



   //to get array element

   function getarrayelements(getarray){
    
    return getarray[3]
   }

   console.log(getarrayelements([200,300,600,700,800]))