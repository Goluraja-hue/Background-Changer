// const userEmail = "golu@gmail.com";
// const userEmail = "";// false
const userEmail = [];//true

// if (userEmail) {
//     console.log("goit the user email");
// }else{
//     console.log("not");
// }

//falsy value
// false , 0 , -0 , BigInt 0n , "" , undefined , NaN

// truthy value
// "0" , 'false' , " " , [] , {} , function(){} 

// if (userEmail.length == 0) {
//     console.log("Array is empty");
    
// }

const emptyobj = {};


// if (Object.keys (emptyobj).length === 0) {
//     console.log("object is empty");
    
// }


// nullish coalecing operator (??) : null undefined

let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 15
val = null ?? 10 ?? 20;

console.log(val);


// ternary operator

// condition ? true : false;

const iccPrice = 80;
iccPrice > 80 ? console.log("less than 80") : console.log("more than 80");
 
