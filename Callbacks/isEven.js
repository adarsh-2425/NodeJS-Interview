/*Create a function called filterArray that takes an array of numbers and a callback function as arguments. The callback function should accept a number and return true if the
number is even and false if it's odd. The filterArray function should use the callback function to filter the array and return a new array containing only the even numbers.*/

function isEven(num) {
  return num % 2 === 0;
}

function filterArray(nums, callback) {
  return nums.filter(callback)
}

const nums = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(nums, isEven);

console.log('Original array:', nums);
console.log('Filtered array (even numbers):', evenNumbers);
