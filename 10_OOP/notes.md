#OOP

#object

- collection of properties and methods
- toLowerCase , toUppercase - are objects

#part of oop

- objects literal

-constructor function
In JavaScript, a constructor function is used to create multiple objects with the same properties and methods. Constructor functions use the function keyword and typically start with an uppercase letter by convention.

function Person(name, age) {
this.name = name;
this.age = age;

    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };

}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet(); // Hello, my name is Alice and I am 25 years old.
person2.greet(); // Hello, my name is Bob and I am 30 years old.

-prototypes
-classes
-instances(new ,this)

# 4 pillars

Abstraction
Encapsulation
Inheritance
Polymorphism


#RangeError: Maximum call stack size exceeded - constructor is calling continously and setter is also setting 