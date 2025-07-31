
function gk (){
console.log("G");
console.log("o");
console.log("l");
console.log("u");
console.log("K");
console.log("u");
console.log("m");
console.log("a");
console.log("r");
}

// gk();


// function addTwoInteger (number1,number2){
//     console.log(number1 + number2);
// }


function addTwoInteger (number1,number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

// addTwoInteger(10,12);
// addTwoInteger(10,"golu");
const result =  addTwoInteger(10,"golu");

// console.log("Result",result);

function userMassege (user = 'gk'){

    return `${user} just logged In`;
}


// console.log(userMassege("golu"));
// console.log(userMassege());


// function calculateCardPrice1 (...num){
//     return num;
// }

// console.log(calculateCardPrice1(100,200,600,800,1000));

function calculateCardPrice1 (val1,val2,...num){
    return num;
}

// console.log(calculateCardPrice1(100,200,600,800,1000));

function calculateCardPrice (num){
    return num;
}

// console.log(calculateCardPrice(100,200,600,800,1000));


const user1 = {
    userName : "Golu",
    price : 200
}

function handleObject (anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user1);
// handleObject({
//     userName : "golu kumar",
//     price : 999
// });



const myArr = [200,300,400,500,600];
function returnArray (getArr){
    return getArr[3];

}

// console.log(returnArray(myArr));
console.log(returnArray([200,300,700,800]));


