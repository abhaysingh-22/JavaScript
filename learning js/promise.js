// promises is the obejct that tell the completion of async operation

const Promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task completed');
        resolve();
    }, 1000)
})

Promise1.then(function(){    //here then is the method that is called when the promise is resolved i.e. it is directly related to resolve
    console.log('task completed');
})




//ALT to the above code in minimal way;
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task2');
        resolve();
    }, 1000)
}).then(function(){
    console.log('task2 completed');
})




const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task3');
        resolve({username: "abhay", email: "yoyohoney@gmail.com"});
    }, 1000)
})

promise3.then(function(user){
    console.log(user);
})




const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false  //try once by doiung "true"
        if(!error){
            resolve({username: "abhay", college: "army institute of technology"})
        }else{
            reject('error occured')
        }
    }, 1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("either resolved or rejected"));   // this "finally" is called in both cases i.e. resolved or rejected




async function getAllusers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()      //here response means that ki response likhne k waja se hi jo data h vo access ho paa rha h 
    console.log(data);
    // console.log(response);
}
getAllusers();  //this will give the promise object as output as it is async function


// ***********FETCH*************
// it is the successor of XMLhttprequest

// agar humne promise se ek request fetch ki h or error aaya(404) then vo hume hamesha as a reponse hi mile ga 
