//: 11.1 => Don't use iterators. Prefer JavaScript higher-order function instead of loops like for-in or for-of. eslint: no-iterator, no-restricted-syntax

/* Why? This inforces out immutable rule. Dealing with pure function that return values is easier to reason about than side effects. */

/* Use map() / every() / filter() / find() / findIndex() / reduce() / some()  to iterate over array, and Object.keys() / Object.values() / Object.entries() to preduce array sp you can iterate over object. */

const numbers = [1, 2, 3, 4, 5, 6];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 21;

// good
let sum2 = 0;
numbers.forEach((num) => {
  sum2 += num;
});
sum2 === 21;

// best (use the functional force)
const sum3 = numbers.reduce((total, num) => total + num, 0);
sum3 === 21;

// bad
const increasedByOne = [];
for (let i; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne2 = [];
numbers.forEach((num) => {
  increasedByOne2.push(num + 1);
});

// best
const increasedByOne3 = numbers.map((num) => num + 1);

//: 11.2 => Don't use generators for now
/* Why? They don't transpile well to ES5 */

//: 11.3 => /* If you must use generators, or if disregard our advice, make sure their function signature is spaced properly. eslint: generators-star-spacing */

/* Why? function and * are part of the same conceptupal keyword- * is not a modifier for function, function* is a unique construct, different from function. */

// bad
function* foo() {
  // ...
}

// bad
const bar = function* () {
  // ...
};

// bad
const baz = function* () {
  // ...
};

// bad
const quux = function* () {
  // ...
};

// bad
function* foo() {
  // ...
}

// bad
function* foo() {
  // ...
}

// very bad
function* foo() {
  // ...
}

// very bad
const wat = function* () {
  // ...
};

// good
function* foo() {
  // ...
}

// good
const foo = function* () {
  // ...
};
