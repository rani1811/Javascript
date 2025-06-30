//ES6

// class User {
//   constructor(Username, email, passowrd) {
//     this.Username = Username;
//     this.email = email;
//     this.passowrd = passowrd;
//   }
//   encryptPassword() {
//     return `${this.passowrd}abc`;
//   }
//   changeUsername() {
//     return `${this.Username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "12345");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene

function User(Username, email, passowrd) {
  this.Username = Username;
  this.email = email;
  this.passowrd = passowrd;
}

User.prototype.encryptPassword = function () {
  return `${this.passowrd}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.Username.toUpperCase()}`;
};

const tea = new User("tea", "email", "456");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
