//* Rest Operator In Depth

// -> In ES6, the three dots operator(...) mean two thing

//? the spread operator
//? the rest opertator

// Spread syntax "expands" an array inot its elements, while rest syntx collects multiple elements and "condenses" them into a single element

// the rest syntax makes it possible to create a function that accepts any number of arguments.

// It is used for destructuring arrays and objects

//! Rest Syntax

function myFunction(argument1, argument2, ...moreArguments) {
  // actions
}

// -> Restriction with the rest Parameter

// there can be only one rest parameter

// the rest parameter has to be the last parameter in the function

function addNumber(...nums) {
  let total = 0;

  nums.forEach((num) => {
    if (typeof num === "number") {
      total += num;
    } else {
      console.log("cant add items");
    }
  });

  return total;
}

console.log(addNumber(2, 3, 4, 2, 4, 4, 5, 34));

//* Destructuring

// Simple array
const num = [12, 3, 4, 5, 6];

// using rest operator for destructing
const [first, second, ...others] = num;

console.log(others);
