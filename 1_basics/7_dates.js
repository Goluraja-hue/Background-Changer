// Dates

let myDate = new Date ();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let myCreatedDate = new Date (2024, 0 , 24);
// let myCreatedDate = new Date (2024, 0 , 24 ,5 , 6);
// let myCreatedDate = new Date ("2024-09-1");
let myCreatedDate = new Date ("09-12-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getDay() and the time}`

newDate.toLocaleString('default',{
    weekday: "long",
    
});











