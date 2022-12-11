//? Javascript String Methods

const string = "Hello World";

//*  1.string.length

// the "length" is a string property that is used to find the length of a string. it returns the number of characters in the string including spaces

console.log(string.length); // 11

//* 2.string.charAt()

// the "charAt()" string method in javascript returns a character at the specific index of the given string

console.log(string.charAt(2));

//* 3.string.endsWith

// the "endsWith" string methods in javascript is used to determines whether the string ends with a specified substring or not

console.log(string.endsWith("d")); // true

//* 4.string.includes

// the "includes" string methods in javascript is used determines whether a given substring is present in the calling string or not

console.log(string.includes("World")); // true

//* string.match()

// the "match()" string method in js uses a regular expression to match a series of characters within the caalling string.

console.log(string.match(/[A-Z]/g)); // ['H', 'W']

//* string.repeat()

// The "repeat()" method concatenates a passed string by a specified number of times and return it as a new string

console.log(string.repeat(2)); // "Hello WorldHello World"

//* string.replace();

// the "replace" method selects one or all mathces from a string and replace it with a replacement string and return it as new string

console.log(string.replace("Hello", "New")); // "New World"

//* string.slice()

// the "slice" string method in js extracts a part of the string and return it as a new string

console.log(string.slice(1, 3)); // "el"

//* string.split()

// the "split" string method in js divides the given string into subString and return an array of subStrings.

console.log(string.split(" ")); // ["Hello", "World"]

//* string.startsWith

// The "startsWith" string method in javascript determines whether a string starts with some given substring or not. If it starts with the desired string then it returns true else return false.

console.log(string.startsWith("Hello")); // true

//* string.substr()

// the "substr()" string method in js is used to extract a substring from a string.

console.log(string.substr(6, 12)); // "World"

//* string.substring()

// The "substring()" method extracts a part of string between 2 given index values

console.log(string.substring(6, 12)); // "World"

//* string.toLowerCase()

// The "toLowerCase()" string method in javascript converts the case of a string to lowercase and returns it as a new string.

console.log(string.toLocaleLowerCase()); // "hello world"

//* string.toUpperCase()

// The "toUpperCase()" string method in javascript returns a new string by converting the calling string to uppercase.

console.log(string.toUpperCase()); // "HELLO WORLD"

//* string.trim();

// The "trim()" string method in js removes whitespaces from both ends of the string.

console.log(string.trim());
("Hello World");
