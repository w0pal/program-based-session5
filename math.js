let {addNumber,subNumber,multiplyNumber} = require('./arithmetic')

let number1 = 10
let number2 = 90

let result = addNumber(number1,number2);
let result1 = subNumber(number1,number2);
let result2 = multiplyNumber(number1,number2);

console.log(`${number1} + ${number2} = ${result}`);
console.log(`${number1} - ${number2} = ${result1}`);
console.log(`${number1} x ${number2} = ${result2}`);

