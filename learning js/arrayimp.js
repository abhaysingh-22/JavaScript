//map is used to create a new array using some returned value
//means values ko use kr k koi new array create krna ho
//for each loop used when we have to do normal calc
let nums = [32,54,67];

let newarr = nums.map((val) =>{
    return val;
})
console.log(newarr);

//filter
let arr = [1,3,4,5,6,7];

let evenarr = arr.filter((val) =>{
    return val % 2 === 0;
})
console.log(evenarr);

//reduce 
let ar = [1,2,3,4];
const output =ar.reduce((result,curr) =>{
    return result+curr;
});
console.log(output);

// code to print largest number in an array using reduce method 
let arra = [1,2,3,4,343];
const outp =arra.reduce((prev,cur) =>{
    return prev>cur ? prev : cur;
});
console.log(outp);