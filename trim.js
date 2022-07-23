// in this we are learn every thing about trim

/// trim fuction use to remove whitespace from the string. this not effect original string. and get new modify string.

const string = " I/am Rogers ak ";
const stringTrim = string.trim();

console.log(string); // ' I/am Rogers ak '
console.log(stringTrim); //  'I/am Rogers ak'
console.log(string.length); // 16
console.log(stringTrim.length); // 14


// trimLeft() or trimStart() it's remove whitespace from left/start
// trimRight() or trimEnd()  it;s remvoe whitespace from Light/End

console.log(string.trimLeft());
console.log(string.trimEnd());