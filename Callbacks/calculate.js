/*
Create a function called calculate that takes two numbers and a callback function as arguments. The callback function should accept the result of the calculation and perform some operation on it. 
Implement the calculate function and use it to perform addition and multiplication on two numbers.
*/

// Function to calculate sum
function calculate(num1, num2, callback) {
  const sum = num1 + num2;
  callback(sum);
}

// Addition by 1
function addOne(value) {
  console.log(`Result after adding 1: `, value + 1)
}

// Multiplication by 2
function multiplyBy2(value) {
  console.log(`Result after myultiplying with 2: `, value * 2 );
}
 
calculate(5, 5, addOne);
