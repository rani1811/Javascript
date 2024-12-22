//objects literals

const mysym = Symbol("key1")

const user ={
    name: "Rani",
    "full name ":"Rani Ingale",
    [mysym]:"key1",
    age:18,
    location:"jaipur",
    isloggedIn:false,
    lastLoginDays:["monday","todays"]
}

// console.log(user.name)
// console.log(user["age"])
// console.log(typeof(mysym))
// console.log(user[mysym])
//console.log(user["full name "])
//console.log(user)

// user.name="Rani"
// Object.freeze(user)
// user.name="Ingale"
// console.log(user)



user.greeting= function(){
    console.log("Hello user")
}

user.greeting2= function(){
    console.log(`Hello user ,${this.name}`)
}

//console.log(user.greeting)
console.log(user.greeting2())