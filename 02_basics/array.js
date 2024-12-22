const arr =  [1,2,3,4,5]

//console.log(arr);

const months =["jan","feb","march"]

//const array = new Array(0,1 ,2 ,3 ,4)

//console.log(array[0])


//array methods

//array.push(6)

// array.pop()

//array.unshift(9) // add value in 0th location 

//array.shift()
//console.log(array.includes(5))

//console.log(array.indexOf(9))

// const newarr =array.join()
// console.log(newarr)
// console.log(typeof(newarr))
// console.log(array)
// console.log(typeof(array))


//slice - it will return a new array ,without modifying the original array
 



const array = new Array(0,1 ,2 ,3 ,4,5)

//console.log("a",array)

const myarr1 =array.slice(1,3)

//console.log("myarr1" , myarr1)

//console.log("after slice operation",array)

// splice - it will  removing or replacing existing elements and/or adding new elements in place, modifying the original array.

const myarr2 =array.splice(1,3)

// console.log("myarr2",myarr2)


// console.log("after splice operation",array)

//methods in array - concat() , spread() ,flat() ,isArray() ,from()


const new_array =[1,2,3,4,[5,6,7],8,[9,20,[23,34]]]

//const new_modified_array = new_array.flat(Infinity);

const new_modified_array = new_array.flat(1);
//console.log(new_modified_array)


// console.log(Array.isArray("Array"))
//  console.log(Array.from("Array"))

//  console.log(Array.from({name:"array"})) //imp for interview

let score1 =100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))