console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return console.log(`Hello, ${name}!`);
}
// Remember to call the function to test
helloName("Savon");
helloName("Nina");
helloName("Simba");

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  return console.log(`${firstNumber} plus ${secondNumber} is: ${sum}`);
}
// Test function
addNumbers(2, 3);
addNumbers(10, 15);

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  let total = num1 * num2 * num3;
  return console.log(`Total is: ${total}`);
}
// Test function
multiplyThree(1, 2, 3);
multiplyThree(-2, -4, 5);
multiplyThree(0, -5, 9);

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  let lastItem = array[array.length - 1];
  if (lastItem >= 0) {
    return lastItem;
  } else {
    return "undefined";
  }
}
// Test function
let testLast1 = getLast([2, 6, 9]);
let testLast2 = getLast([]);
let testLast3 = getLast([4, 6, 7, 10, 1000, 0]);
console.log("Last number is: " + testLast1);
console.log("Last number is: " + testLast2);
console.log("Last number is: " + testLast3);

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
// Test function
let testFind1 = find(2, [2, 3, 6]);
let testFind2 = find(8, [2, 3, 6]);
let testFind3 = find(6, [2, 3, 60, 45, 6, 79]);
let testFind4 = find(-22, [-99, 3345, -22, 298, 343, 66]);
console.log("Should return true: " + testFind1);
console.log("Should return false: " + testFind2);
console.log("Should return true: " + testFind3);
console.log("Should return true: " + testFind4);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let i = 0; i < string.length; i++) {
    if (letter === string[0]) {
      return true;
    }
  }
  return false;
}
// Test function
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
// Test function
let testSum1 = sumAll([1, 2, 3]); // 6
let testSum2 = sumAll([-2, 6, 6]); // 10
let testSum3 = sumAll([0, -10, 35]); // 25
console.log("Sum of array is: " + testSum1);
console.log("Sum of array is: " + testSum2);
console.log("Sum of array is: " + testSum3);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function inputArray(someArray) {
  let newArray = [];
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] > 0) {
      newArray.push(someArray[i]);
    }
  }
  return newArray;
}
//test
console.log("Positive numbers are: " + inputArray([0, -9, -5, 9, 5, 6]));
console.log("Positive numbers are: " + inputArray([0, 0, -1, -4, -6, -20]));
console.log("Positive numbers are: " + inputArray([2, -4, 5, 99, 45, 33]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

/*
Given a month as an integer from 1 to 12, return to which quarter of the year it 
belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is 
part of the second quarter, and month 11 (November), is part of the fourth quarter.
*/

// Using if...else statements
const quarterOf = (month) => {
  // Your code here
  if (month < 4) {
    return 1;
  } else if (month < 7) {
    return 2;
  } else if (month < 10) {
    return 3;
  } else {
    return 4;
  }
};
// Test function
let quarterOfTest1 = quarterOf(2);
let quarterOfTest2 = quarterOf(6);
let quarterOfTest3 = quarterOf(11);
console.log("Month 2 should return 1: " + quarterOfTest1);
console.log("Month 6 should return 2: " + quarterOfTest2);
console.log("Month 11 should return 4: " + quarterOfTest3);

// Using ternary operator
const quarterOfVersionTwo = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
};
// Test function
let quarterOfVersionTwoTest1 = quarterOfVersionTwo(2);
let quarterOfVersionTwoTest2 = quarterOfVersionTwo(6);
let quarterOfVersionTwoTest3 = quarterOfVersionTwo(11);
console.log("Month 2 should return 1: " + quarterOfVersionTwoTest1);
console.log("Month 6 should return 2: " + quarterOfVersionTwoTest2);
console.log("Month 11 should return 4: " + quarterOfVersionTwoTest3);
