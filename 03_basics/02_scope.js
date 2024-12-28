// let a = 10;

 var c = 30 ;//global scope 

if(true){
    let a =70 ;
    const b = 20 ;
    var c =60 
    
    console.log(a)
    console.log(c) //blocked scope 
}

//console.log(a)
    console.log(c) //

    //funtion declaration


   // addone(5) -Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
function addone(num){
    return num + 1 
}addone(5)



//addtwo(5)  if declare funnction with const and assigning variable to it ,it will give error  
// but you have declare a function without assiging to varibale ,it will create a hoisting
const addtwo = function(num){
    return num + 1 
}
addtwo(5)



