//singleton

const regular_user ={
    email:"user@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rani",
            lastname:"ingale"
        }
    }
}

//console.log(regular_user.fullname.userfullname.firstname)

const obj1={1:"a" ,2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}

//const obj3 =Object.assign({},obj1,obj2)

const obj3 ={...obj1, ...obj2}
// console.log(obj3)

// console.log(Object.keys(regular_user))
// console.log(Object.values(regular_user))
// console.log(Object.entries(regular_user))

// console.log(regular_user.hasOwnProperty('islogged'))


//destructring
const course ={
    coursename:"java",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor


const {courseInstructor:mentor} =course

console.log(mentor)




