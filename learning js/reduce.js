const arr = [1,2,3,4]

const total = arr.reduce(function(accumulator, currentValue){
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0)  // here we have initalize the value of accumulator to 0

console.log(total) // 10
