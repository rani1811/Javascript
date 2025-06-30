// const user = {
//   username: "user",
//   logincount: 8,
//   signIn: true,

//   getuserdetails: function () {
//     // console.log("userdetails");
//     //console.log(`username:${this.username}`);
//     //console.log(this);
//   },
// };

// console.log(user.username);
// console.log(user.getuserdetails());
//console.log(this);

// function User(username, logincount, islogggin) {
//   this.username = username;
//   this.logincount = logincount;
//   this.islogggin = islogggin;
//   this.greeting = function () {
//     console.log("greeting");
//   };
//   return this;
// }

// const userOne = new User("rani", 12, true);
// const userTwo = new User("chaiaurcode", 12, true);
// console.log(userOne);
// console.log(userTwo);
//console.log(userOne.constructor);
//new - create a empty object ,call a construction funtion ,objects injected to this keyword ,and will get it in function
//instanceof -The instanceof operator checks whether an object is an instance of a particular constructor or class.

function Person(name) {
  this.name = name;
}

const person1 = new Person("Alice");

console.log(person1 instanceof Person); // true
console.log(person1 instanceof Object); // true (since all objects inherit from Object)
console.log([] instanceof Person); // false
