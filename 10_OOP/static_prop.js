class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username:${this.username}`);
  }
  createID() {
    return `123`;
  }
  //   static createID() {
  //     return `123`;
  //   }
}

const rani = new User("rani");

console.log(rani.createID());

class Teacher extends User {
  constructor(email, username) {
    super(username);
    this.email = email;
  }
}

const one = new Teacher("one", "W@gmail.com");
console.log(one.createID());
one.logMe();
