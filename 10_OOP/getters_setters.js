class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    return this.password.to;
  }
}

const acer = new User("acer@gmail.com", "1234");

console.log(acer.password);
