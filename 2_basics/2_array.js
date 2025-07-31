const myHeros = ["superman","ironman","golu","sunil"];
const dc = ["utkarsh","rahul","aman","gaurav","atul"];

// myHeros.push(dc);

// console.log(myHeros);
// console.log(myHeros[4][1]);

// const allHeros = myHeros.concat(dc);
// console.log(allHeros);

const allnewHero = [...myHeros,...dc];
// console.log(allnewHero);

const anotherArr = [1,2,3,[4,5,6,7],8,[4,5]];

const realOtherArr = anotherArr.flat(Infinity);

// console.log(realOtherArr);


console.log(Array.isArray("golu"));
console.log(Array.from("golu"));
console.log(Array.from({name :"golu"}));// intresting


let score = 100
let score2 = 500
let score3 = 800

// console.log(Array.of(score,score2,score3));



