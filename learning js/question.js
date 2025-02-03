let n = prompt("enter a number : ");

let arr = [];

for (let i=1;i<=n;i++){
    arr[i - 1] = i;
}

console.log(arr);
let sum = arr.reduce((red,curr) => {
    return res + curr;
});

console.log(" = ",sum);

let factorial = arr.reduce((res,curr) =>{
    return res*curr;
})
console.log(factorial)



//above code is not running and i don't know why compile it with a html file and then try on console

