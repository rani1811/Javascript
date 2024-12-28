const user ={
    username: "rani",
    price: 199,

    greeting: function(){
       // console.log(`${this.username} , welcome`)
    }
}
user.greeting()

user.username ="sam"
user.greeting()


// function 

// function emp(){
//     let username ="user"
//     //console.log(this.username) //undefined 
// }
// emp()


// const empolyee = function (){
//     let username ="user"
//     console.log(this.username)  //undefined
// }
// empolyee()

//arrow function

const empolyee = () => {
    let username ="user"
    //console.log(this)  //{}
}
empolyee()


function emp() {
    let username ="user"
    //console.log(this) //it will prinnt object
}
emp()

//
// const addtwo =(num1 ,num2) =>{
//     return num1 + num2
// }

//const addtwo =(num1 ,num2) => num1 +num2 

//const addtwo =(num1 ,num2) => (num1 +num2 )



console.log(addtwo(1,2))

