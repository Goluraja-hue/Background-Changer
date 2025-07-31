// primitive datatypes 
// 7 types : String, Number, Boolean, null,undefined, symbol, BigInt

const score = 100;
const scorevalue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 35259876136n;





// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["ram","shyam","rishav","golu"];
let myObj = {
    name:"golu",
    age:22,
}

function gk() {
    console.log("Hello  golu");  
}

// console.log(myFunction);


//********************************************

// stack (primitive), heap(non-primitive)

let myName = "golukumar"
let otherName = myName;
otherName = "rohit kumar"

// console.log(myName);
// console.log(otherName);

let user = {
    email:"golukpumar6565@gmail.com",
    age :18
}

let userOne = user;
userOne.email = "golukumar15506@gmail.com";
// console.log(user.email);
// console.log(userOne.email);








