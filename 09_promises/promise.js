// const promiseone = new Promise(function (resolve, reject) {
//   //do an asynce task
//   //DB calls ,cryptography , network
//   setTimeout(function () {
//     console.log("async task is done");
//     resolve();
//   }, 1000);
// });

// promiseone.then(function () {
//   console.log("promise consumed");
// });

//another way to write promise

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("prommise 2 resolve");
// });

//2nd promise

// const promisetwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "email@gmail.com" });
//   }, 1000);
// });

// promisetwo.then(function (user) {
//   console.log(user);
// });

// const promisethird = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "chaicode", password: "chai" });
//     } else {
//       reject("ERROR");
//     }
//   }, 1000);
// });

// promisethird
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("promise is either resolve or rejeacted");
//   });

// const promisefour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "rani", password: "12345" });
//     } else {
//       reject("rejected");
//     }
//   }, 1000);
// });

// async function consumepromisefive() {
//   try {
//     const response = await promisefour;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumepromisefive();

//fetching using try and catch

// async function getallusers() {
//   try {
//     const response = await fetch("https://api.github.com/users/rani1811");
//     //console.log(response);
//     const data = awaitresponse.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getallusers();

//fetching using then and catch
fetch("https://api.github.com/users/rani1811")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
