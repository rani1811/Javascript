// const myNum = [1,2,3,4,5]

//const newnums= myNum.map((num) => num +10)


//chaining

// const newnums = myNum.map((num) => num * 10 )
//                      .map((num)=>num +1)
//                      .filter((num) => num>= 40)

// console.log(newnums)

//REDUCE METHOD 



const myNum = [1,2,3,4,5]

const total = myNum.reduce((acc , currvalue) =>{
    console.log(`acc :${acc} and currvalue :${currvalue}`)
    return acc + currvalue
},0)

console.log(total)