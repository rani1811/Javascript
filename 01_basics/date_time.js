let mydate = new Date();

// console.log(mydate)

// console.log(mydate.toString());
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleString())
// console.log(mydate.toDateString())

//  let myCreatedDate1  = new Date(2023, 0, 23)

//  console.log(myCreatedDate1.toLocaleString());

// let myCreatedDate  = new Date(2023, 0, 23, 5,3)

// console.log(myCreatedDate.toLocaleString());


let timestamp = Date.now()

// console.log(timestamp);
// console.log(mydate.getTime());

let newDate = new Date();
// console.log(newDate.toString())
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth())

console.log(newDate.toLocaleString('default',{
    //weekday:"long",
   // weekday:"narrow",
  weekday:"short",
  
}))