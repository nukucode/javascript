console.log("==> DAY-2 CHALLENGES <==");

//: Print all even numbers from 0 - 10 =>

const printEvenNumbers = () => {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i, " is even number");
    } else {
      console.log(i, " is not an even number");
    }
  }
};

printEvenNumbers();

//: Print a table containing multiplication tables =>

const multiplicationTable = (value = 2) => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${value} : ${i * value}`);
  }
};
console.log(multiplicationTable());

//: create a lenght converter function =>

function lengthConvertor(type, value) {
  if (type === "meter") {
    return value / 3.2808;
  }

  if (type === "inche") {
    return value * 12;
  }

  if (type === "cm") {
    return value / 0.032808;
  }

  if (type === "kilometer") {
    return value * 0.00018939;
  }

  if (type === "feet") {
    return new Error("feet to others");
  }
}

console.log(lengthConvertor("kilometer", 5281));

//: Calculate the sum of numbers within an array =>

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, value) => acc + value);
// or
const sum2 = () => {
  let sum = 0; //! if no initial value they didn't work
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

console.log(sum2());

//: Create a function that reverse an array =>

let reversed = arr.reverse();
console.log(reversed);

//: Sort an array from lowest to highest

const anotherArray = [100, 100, 200, 300, 400];
const sorted = anotherArray.sort((a, b) => b - a);
console.log(sorted);

//: Create a function that filters out negative numbers =>

const negativeNum = [1, 2, 3, -5, 6, 7, 8, -100];

const filtered = (number) => {
  return Number.isInteger(number) && number > 0;
};

console.log(negativeNum.filter(filtered));

// Remove the spaces found in a string

const str = "Hello World";

const removeSpace = (str) => {
  return str.replace(" ", "");
};
console.log(removeSpace(str));

//: Return a Boolean if a number is divisible by 10

const booleanValue = (number) => {
  return number % 10 === 0 ? true : false;
};

console.log(booleanValue(100));

//: Return the number of vowels in the string

const vowels = (str) => str.match(/[aeiou]/gi);

console.log(vowels("I love JavaScript"));


console.log("==> DAY-2 CHALLENGES <==");