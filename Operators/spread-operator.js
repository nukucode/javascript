//: spread oprator in depth

//* in es6 the three dots operator means two things

// 1. spread operator
// 2. rest operator

// spead operator

// 1. when used as a spread operator, the three dots operator spreads the elements of an array where zero or more argunments are expected

// 2. when dealing with objects, you can use the spread operator to spread operator to spread key-value pairs where expected

//// spread syntax in function calls

let numbers = [1, 2, 34, 5];

function name(x, y, z, a) {
  return x + y + z + a;
}

console.log(name(...numbers));

//// spread syntax with array literals

// ["el1", "el2", "po1", ...arr];
// add the elements of arr to the array;

// spread syntax with objects literals
// let objcopy = { ...obj };
// spread all key-value pairs from obj to a new object

///// spread example with a function

function showNumbers(a, b, c, d) {
  console.log(`1:${a} , 2:${b}, 3:${c}, 4:${d}`);
}

const cord = [2, 3, 4, 5];

showNumbers(...cord);

/// with an array literal

const names = ["ankit", "suresh", "kashish", "manish", "rahul"];
const names2 = ["gopal", "santosh", "mohan", "deepak"];

const allNames = [...names, ...names2];

console.log(allNames);

const all = ["rohit", "abishek", ...names, "chris", ...names2];

console.log(all);

/// with object literal

let obj1 = {
  name: "Ankit Yadav",
  name1: "Manish Yadav",
};

let obj2 = {
  Age: 18,
  Age1: 17,
};

const combined = { ...obj1, ...obj2 };
console.log(combined);

// one more example

// old method
const details = { name: "Ankit" };
const stats = { work: "from home" };

const team = Object.assign({}, details, stats);

// new method

const team1 = { ...details, ...stats };

