//for of 


// const arr = [1,2,3,4,5]

// for (const num of arr) {
    
//     console.log(num)
// }


// const greetings = "Hello world !"

// for (const greet of greetings) {
//     console.log(`each char of ${greet}`)
    
// }


//maps

//maps - for of loop array
const map = new Map()
map.set('IN','India')
map.set('USA','United state of America')
map.set('Fr','France')

map.set('IN','India')

// for (const key in map) { // here map is not iterable
//     console.log(key)
// }

//console.log(map)
// for (const [key,value] of map) {
//     console.log(key ,':-' ,value)
    
// }

//maps - for of loop for objects 

//TypeError: myobj is not iterable in for of loop

// const myobj = {
//     'Game1':'NFS',
//     'Game1':'Spiderman'
// }

// for (const [key,value] of myobj) {
//     console.log(key ,':-' ,value)//TypeError: myobj is not iterable
    
// }
