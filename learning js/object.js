// // obejct is kind of like map or a dictionary where we have key value pairs
// var details = ["abhay",18,91,false];
// console.log(details);

// details[0] = "prince";
// console.log(details)

// let x = {
//     name: "abhay",
//     age: 18,
//     percentage: 91,
//     ismarried: false
// };

// console.log(x);
// console.log(x.age);  //for printing a specific value
// console.log(x['age'])  // 2nd way to print this






// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// };
// const karanArjun = {
//     salary : 50000,
//     calcTax(){
//         console.log("tax rate is 20%");
//     },
// };

// karanArjun.__proto__ = employee;

//if obejct and prototype have same method objects method will be used 







class bmwcar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

let bmw = new bmwcar();
bmw.setBrand("A3");
let lexus = new bmwcar();   //so this will get same features as bmw has
