class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    //return this._password.toUpperCase();
    return `${this._password}rani` //to provide a wrong password
  }

set password(value){
    this._password = value.toUpperCase()

  }
  
  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email = value 
  }
  
}

const acer = new User("acer@gmail.com", "abc");

// console.log(acer.password);
console.log(acer.email);
