//: Check if the given string contain any whitespace

const isWhiteSpace = (str) => /\s/.test(str);

console.log(isWhiteSpace("hello")); // false
console.log(isWhiteSpace("hello world")); // true
