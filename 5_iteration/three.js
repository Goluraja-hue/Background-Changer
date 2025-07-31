// for of 

// ["","","",""]
//[{},{},{},{}]


const arr = [1,2,3,4,5,6,7,8,9,10,11,12]

for (const num of arr) {
    // console.log(num);
}

const greet = "hello world!";

for (const hello of greet) {
    // console.log(`Each char is ${hello}`);
}


// maps

const map = new Map();
map.set('IN', "india");
map.set('UN', "USA");
map.set('R', "russia");
map.set('cn', "china");
map.set('A', "america");
map.set('j', "japan");
map.set('En', "england");
map.set('G', "goa");
map.set('AS', "asia");
map.set('GA', "goa");

// console.log(map);
for (const [key,value] of map) {
    // console.log(key , ':-' , value);  
}

const myObj = {
    'game' : "freefire",
    'game1' : "pubg",
    "game2" : "ruby"
}

// for (const [key , value] of myObj) {
//     console.log(key , ':-' , value);
// }

