//: Primitives: When you access a primitive type you work directly on its value.

/* String, number, boolean, null, undefined, symbol, bigint */

const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9

/* Symbols and Bigints cannot be faithfully polyfilled, so they should not be used when targeting browsers/enviroments that don't support them natively. */

//: Complex: When you access a complex type you work on a reference to its value.

/* object, array, function */

const foo2 = [1, 2, 3];
const bar2 = foo;

bar[0] = 9;
console.log(foo[0], bar[0]); // => 9, 9
