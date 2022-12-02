//: 5.1

/* Use Object destructuring when accessing and using multiple properties of an object. eslint:prefer-destructuring */

/* Why? Destructuring saves you from creating temporary references for those properties, and from repetitive access of the object. Repeating object access creates more repetitive code, requires more reading, and creates more opportunities for mistakes. Destructuring objects also provides a single site of definition of the object structure that is used in the block, rather than requiring reading the entire block to determine what is used. */

// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
  return `${firstName} ${lastName}`;
}

// good
function getFullName2(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// Best
function getFullName3({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

//: Use Array destructuring. eslint: prefer-destructuring

const arr = [1, 2, 3, 4, 5];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first2, second2] = arr;

//: Use object destructuring for multiple return values, not array destructuring

/* Why? You can add new Properties over time or change the order of things without braking call sites. */

// bad
function processInput(input) {
  return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, , top] = processInput(input);

// good
function processInput2(input) {
  return { left, right, top, bottom };
}

const { left2, top2 } = processInput2(input);
