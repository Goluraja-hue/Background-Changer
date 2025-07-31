// const tinderUser = new object (); // singleton

const tinderUser = {}; // non-singleton

tinderUser.id = "11";
tinderUser.name = "golu";
tinderUser.age = 18;
// console.log(tinderUser);

const regularUser = {
    id : 123,
    fullName : {
        userName :{
            firstName : "Golu",
            lastName : "Kumar"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName);

const obj1 = {1 : "a", 2: "b"};
const obj2 = {3 : "a", 4: "b"};
const obj4 = {5 : "a", 6: "b"};

// const obj3 = Object.assign({},obj1,obj2,obj4);
const obj3 = {...obj1,...obj2,...obj4};
// console.log(obj3);

const user = [
    {
        id : 1,
        email : "g@gmail.com"
    },{
        id : 1,
        email : "g@gmail.com"
    },{
        id : 1,
        email : "g@gmail.com"
    }, {
        id : 1,
        email : "g@gmail.com"
    }, {
        id : 1,
        email : "g@gmail.com"
    }, {
        id : 1,
        email : "g@gmail.com"
    }
];

user[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));


 const course = {
    coursseName : "javascript",
    courseDuration : "1month",
    courseFee : 2000,
    courseFaculty : "Golu"
 }

//  course.courseFaculty;

const {courseDuration : Duration} = course;
// console.log(courseDuration);
console.log(Duration);








