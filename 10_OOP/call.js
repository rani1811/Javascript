function SetUsername(username) {
  this.username = username;
  console.log("call");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "wer@gmail.com", "212345");

console.log(chai);
