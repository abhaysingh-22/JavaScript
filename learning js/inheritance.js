// inheritance is passing down properties and method from parent class to child class 
// if child and parent have same method, child's method will be used and known as  (method overriding) 
// class k andar jo function likhe jaate h unko function khete h 


// class parent{
//     hello(){
//         console.log("helo");
//     }
// }

// class child extends parent{

// }


// let DATA = "secret information"
// class user{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data = ",DATA);
//     }
// }

// let student1 = new user("abhay","abhaysingh6575gmail.com");
// let student2 = new user("prince","princesingh6575gmail.com");

// let teacher1 = new user("dean","dean679gmail.com");







// error handling

try{
    console.log("a+b = ", a + c);  //error line in which we thought ki error ho skta h
}catch(err) {
    console.log(err);
}