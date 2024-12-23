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
function addone(num){
    return num + 1 
}

addone(5)

const addtwo = function(num){
    return num + 1 
}
addtwo(5)