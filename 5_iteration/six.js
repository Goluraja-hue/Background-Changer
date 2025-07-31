const coding =['js','c','c++','python','ruby','c#'];

// const value = coding.forEach((item)=> {
//     // console.log(item);
//     return item;
// })

// console.log(value);


const myNums = [1,2,3,4,5,6,7,8,9,10];

// const nums = myNums.filter( (num) => {
//    return num > 4 
// })

const newnums = [];
myNums.forEach((num)=>{
    if (num > 4) {
        newnums.push(num);
    }
})
// console.log(newnums);


// console.log(nums);

const books = [
    {title : 'Book One' , genre: 'fiction' , publish: 2003, edition: 2010},

    {title : 'Book two' , genre: 'Non-fiction' , publish: 1988, edition: 2009},

    {title : 'Book three' , genre: 'friction' , publish: 2005, edition: 2006},

    {title : 'Book four' , genre: 'function' , publish: 2000, edition: 2012},

    {title : 'Book five' , genre: 'coding' , publish: 1984, edition: 2015},

    {title : 'Book six' , genre: 'iteration' , publish: 2002, edition: 2013},

    {title : 'Book seven' , genre: 'array' , publish: 1977, edition: 2014},

    {title : 'Book eight' , genre: 'stack' , publish: 2001, edition: 2007},

    {title : 'Book nine' , genre: 'queue' , publish: 1999, edition: 2019},

    {title : 'Book ten' , genre: 'linkedlist' , publish: 1984, edition: 2016}
];

let userBooks = books.filter( (bk) => bk.publish)
 userBooks = books.filter( (bk) => { return bk.publish})
// console.log(userBooks);

