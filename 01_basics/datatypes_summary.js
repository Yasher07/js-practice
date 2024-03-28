//  Primitive  

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Javascript is dynamically typed language because the type of a variable is determined by the value that is assigned to it, and can change throughout the program as different values are assigned. There is no need to declare the type of a variable before using it.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 237383837828282828828222n

console.log(typeof bigNumber)


// Reference (Non Primitive)

// Array, Objects, FUnctions

const heroes = ["shaktimaan", "naagraaj", "doga"]

let myObj = {
    name : "Yasher",
    age: 22,
}

const myFunction = function (){
    console.log("Hello World")
}

console.log(typeof heroes)


// ++++++++++++++++++++++++++++++++++++++++

// Two types of memory 

// Stack (Primitive), Heap (Non Primitive)

let myYoutubename = "yasheryoutube"

let anothername = myYoutubename
anothername = "arafathyoutube"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "second@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);