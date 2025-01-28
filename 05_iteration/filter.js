//FILTER METHOD
const myNum =[1,2,3,4,5,6,7,8,9,10]

//const newnums=myNum.filter((num)=> num>4)  //without scope ,written value without writtten

// const newnums = myNum.filter((num)=>{ //for scope need to write return method
//     return num>4

// })


// const newnums =[]

// myNum.forEach((num)=>{
//     if(num>4){
//  newnums.push(num)
//     }

// })
// console.log(newnums)

const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publishYear: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publishYear: 1949,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publishYear: 1813,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      publishYear: 1925,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publishYear: 1937,
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "Fiction",
      publishYear: 2011,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publishYear: 1951,
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      genre: "Autobiography",
      publishYear: 2018,
    },
  ];
  
  //using scope

//   let userbooks = books.filter((book)=>{
//     return book.genre ==='Fiction'

//   })


//using without scope

// let userbooks = books.filter((book) => book.publishYear>=2000)
  

 let userbooks = books.filter((book) => book.publishYear>=2000 && book.genre==='Fiction')


console.log(userbooks)


