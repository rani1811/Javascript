class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.passowrd = password;
  }
  addCourse() {
    console.log(`new cousre added by ${this.username}`);
  }
}

const teacher = new Teacher("techie", "gmail@mail.com", "12345");
teacher.addCourse();
teacher.logMe();
const head = new User("headmaster");
head.logMe();
