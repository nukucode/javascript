//: Use the literal syntax for array creation. eslint:no-array-constructor

// bad
const items = new Array();

// good
const items2 = [];

//: Use Array#push instead of direct assignment to add items to an array. 

const someStack = [];

// bad
someStack[someStack.length] = "abcdefgh";

// good
someStack.push("abcdefgh");

//: Use array spreads ... to copy arrays.

// bad
const len = items.length;
const itemCopy = [];
let i;

for (i; i < len; i++) {
  itemCopy[i] = items[i];
}

// good
const newItems = [...items];

//: To convert an iterable object to an array, use spreads ... instead of Array.form

const foo = document.querySelectorAll(".foo");

// good
const nodes = Array.from(foo);

// Best
const nodes2 = [...foo];

//: Use Array.form for converting an array-like object to an array

const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr2 = Array.from(arrLike);

//: Use Array.from instead of spread ... for mapping over iterable, because it avoids creating an intermediate array.

// bad
const baz = [...foo].map(bar);

// good
const baz2 = Array.from(foo, bar);

//: 4.7

/* Use return statements in array method callbacks. It's ok to omit the return if the function body consists of a single statement returning an expression without side effects, following 8.2. eslint: array-callback-return */

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return y * x;
});

// good
[1, 2, 3].map((x) => x + 1);

// bad - no returned value means `acc` becomes undefined after the first iteration
[
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
});

// good
[
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === "Science") {
    return author === "Ankit Yadav";
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === "Science") {
    return author === "Ankit Yadav";
  }

  return false;
});

//: 4.8

