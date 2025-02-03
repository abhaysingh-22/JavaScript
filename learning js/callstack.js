// global execution context 
// function execution context
// eval execution context (property of global EC)


// basically call back is nothing but writing a function in parentthesis example shown below


// Used to ensure that a function is executed only after another function has finished executing, enabling asynchronous behavior.

function processUserInput(callback) {
    let name = "Abhay";
    callback(name);
}

function greet(name) {
    console.log(`Hello, ${name}!`);
}

processUserInput(greet); 
// Output: Hello, Abhay!

