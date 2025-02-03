// by apna college

function myfunction(){
    console.log("welcome to pune");
    console.log("we are learning JS")
}

myfunction();
//bar bar kuch repeat krna hai toh use function 

function abhay(msg){
    console.log(msg);
} //this parameter is used to take input from user

abhay("currently i am in pune") // here when we call the function we provide input


// funtion for sum of two numbers

function sum(x,y){
    console.log(x+y);
}
sum(1,2);

//
function add(m,n){
    a = m+n;
    return a;
    console.log("abhay"); //since we writing this statement after return that's why it is not showing anything
}
let val = add(3,4);
console.log(val);


// questions   (and you get output only after linking this file with html)

function countvowels(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count ++;
        }
    }
    console.log(count);
}

//by arrow method 
const countvow = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count ++;
        }
    }
    console.log(count);
}
