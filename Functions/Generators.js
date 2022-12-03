//: Generators

/* A generator is a special type of function which can stop its execution midway and then start from the same point after some time. Generators are a combination of function and iterators. */

//* Basic syntax

/* Generators are defined as a function with an asterisk(*) beside the function. */

function* name(args) {
  //..
}

//* Return

/* A function can return almost anything ranging from a value. Object or another function itself. A generator function returns a special object called the generator object (not entirely true). The object like the snippet below. */

//? => {value:value, done: true|false}

/* The object has two properties "value" and "done". The value contains the value to be yeilded. Done consist of a Boolean (true|false) which tells the generator if .next() will yield a value or undefined. */

function* generator(e) {
  yield e + 10;
  yield e + 20;
  yield e + 30;
}

var generate = generator(5);

console.log(generate.next().value); // 15
console.log(generate.next().value); // 25
console.log(generate.next().value); // 35
console.log(generate.next().value); // undefined

//? Now let's try yielding another generator function from the original generator and also a return statement.

function* generator2(e) {
  yield e + 10;
  return 100;
  yield e + 20;
  yield e + 30;
}

const generate2 = generator2(5);

console.log(generate2.next().value); // 15
console.log(generate2.next().value); // 100
console.log(generate2.next().value); // undefined
console.log(generate2.next().value); // undefined


//* Advantages
// => Lazy Loading
// => Memory Efficient


//* Why do we need Generators
// => Implementing Iterators