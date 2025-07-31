
// let a = 500;
// if (true){
// let a = 10;
// const b = 20;
// console.log("inner : ",a);

// }

// console.log(a);
// console.log(b);
// console.log(c);




function one (){
    const username = "Golu kumar";
    function two (){
        const website = "instaghram";
        console.log(username);
    }
    // console.log (website);

    two();
}

// one();

if (true){
    const username = "golukumar7605";
    if (true){
        const website =" instagram";
        // console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);



//*****************intresting****************
console.log(addone(7)); //global function
function addone(Num){
    return Num +1;
}
addone();
console.log(addone(7));




// console.log(addtwo(7)); // error because declaration se pahle call kar rhe hai so it is called local function
const addtwo = function (num){
    return num + 2;
}

// addtwo(7);
console.log(addtwo(7));
