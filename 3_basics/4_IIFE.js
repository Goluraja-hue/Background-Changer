// Immediatly Invoked Function Expression

(function greet(){
    console.log("hello world");
})(); // kayi bar global scope ke pollution se error hoti hai kayi baar usi ko hatane ke liye IIFE ka use karte hai.


( (name) =>{
    console.log(`hello golu ${name}`);
})('holu');

