const user  = {
    username: "abhay",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website`);
    }
}

user.welcomeMessage()
user.username = "honey singh"
user.welcomeMessage()

//browser k aandar jo global object h vo h window 

// function chai(){
//     let username = "abhay"
//     console.log(this.username);
// }
// chai()  //here it is showing undefined because this does not work in function



//******************************ARROW FUNCTION***************************


// const chai = () => {
//     let username = "abhay"
//     console.log(this.username);
// }
// chai()  //here it is showing undefined because this does not work in function



// **************************Visualse of ARROW FUNCTION****************************
const addTwo = (n, m) => {
    return n + m
}
console.log(addTwo(3, 4))


//****************alt. way to represent arrow function************************

const add = (n, m) => n + m
console.log(addTwo(3, 4))

//**************ANother way******************

const addd = (n, m) => (n + m)
console.log(addTwo(3, 4))
//curly braces use kiya toh return likhna pade ga known as explicit return and parenthesis use kiya toh return likhne ki jarurat nhi h and it is known as implicit return 

