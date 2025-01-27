//for loop 


// for (let index = 0; index <=10; index++) {
//     const element = index;
//     console.log(element)
// }



// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is lucky number")
//     }
//     console.log(i)
// }

//nested for loop 

// for (let i = 0; i <=10; i++) {
//    console.log(`outerloop ${i}`)
//    for (let j = 0; j <=10; j++) {
//     //console.log(`innerloop ${i} and ${j}`)
// //console.log(i + '*' + 'j' + '=' + i *j)
    
//    }
    
// }



//array used in foorloop

// let myArray =["1","2","3"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
    
// }


//break - to break the flow 

// for (let index = 1; index <=10; index++) {
//     //console.log(`value of i is ${index}`)

//     if(index == 5){
//         console.log("5")
//         break
//     }
//     console.log(`value of i is ${index}`)
// }

//continue 
for (let index = 1; index <=10; index++) {
    //console.log(`value of i is ${index}`)

    if(index == 5){
        console.log("5")
        continue
    }
    console.log(`value of i is ${index}`)
}