// callback is a function which is passed as an argument to another function
// in JS we can use functions as a normal variable it is not a predefined value

let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){  //value at each index
    console.log(val);
})

arr.forEach((val) => {      // arrow form 
    console.log(val);
})
// we can use 3 parameters in for each loop val, index,array

// what is higher order function/mathod (interview question)
// ans. are those which can take different function as a parameter/return

//question
//method 1
let ar = [5,6,7,8,9];   
ar.forEach(function printVal(v){
    console.log(v*v);
})

//method 2
ar.forEach((v) => {
    console.log(v*v);
})
