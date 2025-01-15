//Immediately invoked function expressions (IIFE)


//normal function
// function Myname(){
//     console.log("rani")
// }
// Myname()




//iife function - also called named iife

(function Myname(){
    console.log("rani")
})(); //here ";" is important to terminate the function ,otherwise will get error while executing


//arrow funtion iife

( () => {
    console.log(`hello`)
}) ()

//named iife

// ( (name) => {
//     console.log(`hello ${name}`)
// }) ('rani')