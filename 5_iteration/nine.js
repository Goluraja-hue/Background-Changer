const num = [ 1,2,3,4,5];

// let sum = num.reduce(function (acc,curval){
//     console.log(`acc: ${acc} and cural ${curval}`);
//     return acc + curval;
// } , 0)

const sum = num.reduce( (acc,cur) => acc+cur,0)

// console.log(sum);


const card = [
    {
        item : 'js course',
        price : 2000
    },
    {
        item : 'mobiledev course',
        price : 4999
    },
    {
        item : 'data science course',
        price : 9999
    },
    {
        item : 'java course',
        price : 3999
    },
    {
        item : 'webdev course',
        price : 5999
    },
    {
        item : 'c++ course',
        price : 399
    }
];


let price = card.reduce( (acc,item) => item.price + acc,0);
// console.log(price);
