const mynums = [1,2,3,4,5,6,7,8,9,10];

let nums = mynums.map( (num) => {return num + 10})
let nums1 = mynums.map( (num) =>  num + 120)

// console.log(nums);

const nums2 = mynums
.map( (num) => num*10)
.map( (num) => num + 2 )
.filter( (num) => num > 40)
console.log(nums2);



