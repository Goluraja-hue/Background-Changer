// singleton
// onreject.create

// object literals

const mySym = Symbol("key1");

const jsUser = {
name : "golu kumar",
"fullName":"golu",
[mySym] : "myKey1",
age : 18,
Location : "bihar",
email : "golukumar5506@gmail.com",
isLoggedIn: false,
lastLoginDays: ["monay","tuesday"]
};

// console.log(jsUser.email);
// console.log(jsUser["name"]);
// // console.log(jsUser."fullName");
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);


jsUser.email = "golukuma@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "golukuma155@gmail.com";
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");
}

// console.log(jsUser.greeting());
// console.log(jsUser.greeting);


jsUser.greeting1 = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting1());

