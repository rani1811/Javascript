// let myName = "Rani   ";

// console.log(myName.truelength);

//inheritance

const user = {
  name: "username",
  email: "google",
};
const teacher = {
  makevideo: true,
};

const techingsupport = {
  isAvailable: false,
  __proto__: teacher,
};

teacher.__proto__ = user;

//modern syntax

Object.setPrototypeOf(teacher, user);

let anotherUserName = "chaiaurcode   ";

String.prototype.truelength = function () {
  console.log(`${this}`);
  //console.log(`${this.name}`);
  console.log(`True length is ${this.trim().length}`);
};
anotherUserName.truelength();

//"icetea".truelength()
