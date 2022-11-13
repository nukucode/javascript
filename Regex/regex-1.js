//: RegExp In Javascript

/* Regular Expression are patterns that allow you to 
describe, match, or parse text. With regular expression
, you can do things like find and replace text, verify
that input data follow the format required, and other 
similar things. */

//# How to create a regular Expression

/* In Javascript, you can create a regular expression in
either of two ways: */

//* Rexgular Expression Literal

/*
 Method #1: Using a regular Expression literal. this
consists of a pattern enclosed in forward slashes. you can
write this with or without flags. the syntax is a follow. 
*/

const regExp = /demo/; // without flags
const regExpWithFlags = /demo/g; // with flags

/* the forward slashes /.../ indicate that we are creating
a regular expression pattern, just the same way you use
quotes " " to create a string. */

//* Using RegExp Constucter Function

/* Method #2: using the RegExp constructor function. the 
syntax is as follows: */

// new RegExp(pattern, [,flags])

// the flags parameter, which is optional.

//# What are Regular Expression Flags?

/* Flags or modifires are characters that enable
advanced search features including case-insensitive and
global searching. You can use them indvidually or 
collectively. Some commonaly used ones are : */

/* 
1. g => is used for global search which means it'll match all occurrences. ==> the 'g' flag indicates that the regular expression should be tested against all possible matches in a string.

2. i => is used for case-insensitive search meaning that a match can occur regardless of the casing.

3. m => is used for multiline search.

4. u => is used for Unicode search (Unicode is a specification that aims to list every character used by human languages and give each character its own unique code.)

=> Unicode provides a unique number for every character,
   no matter what the platform, no matter what the program,
   no matter what the language.
*/

const regExpStr = "Hello World! hello there";
const regExpLiteral = /Hello/gi;

console.log(regExpStr.match(regExpLiteral)); // [("Hello", "hello")];

// Note: that if we did not flag the pattern with i, only Hello will be returned.

//# How to use a regex constructor:

// syntax: RegExp(pattern [,flags])

const regExpConstructor = new RegExp("xyz", "g"); // with flag -g

const str = "xyz xyz";

console.log(str.match(regExpConstructor)); // [ 'xyz', 'xyz' ]

//# How to use regular expression special characters

/* A special character in a regular expression is a character with a reserved meaning. Using special character, you can do more than just find a direct match. */

/*
=> Anchors: Anchors are metacharacter
that match the start and end of a line of text they are examining. You use them to assert where a boundary should be.

* The two characters used are ^ and $.

=> ^ : matches the start of a line and anchors a literal at the  beginnig of that line.
*/

const regexPattern1 = /^cat/;

console.log(regexPattern1.test("cat away from home")); // true

console.log(regexPattern1.test("the cat away from home")); // false

// without the ^ in the pattern, the output will return true
// because we did not assert a boundary

const regexPattern2 = /cat/;
console.log(regexPattern2.test("the cat away from home")); // true

/*
=> $ : matches the end of a line and anchors a literal at the end of that line.
*/

const regexPattern3 = /cat$/;

console.log(regexPattern3.test("a mouse and cat")); // true
console.log(regexPattern3.test("a cat and mouse")); // false

/* Note: that anchors characters ^ and $ match just the possition of the characters in the pattern and not the actual characters themselves */

/* 
=> Word Boundaries: are metacharacters that match the start and end position of a word - a sequence of alphanumeric characters. You can think of them as a word-based version of ^ and $. You use the metacharacter b and B to assert a word boundary. 

1. \b => matches the start or end of a word. The word is matched according to the position of the metacharacter. 
*/

//! syntax 1: /\b.../ where ... represents a word.

// search for a word that begins with the pattern ward

const regexPattern4 = /\bward/gi;

const text1 = "backward Wardrobe ward";

console.log(text1.match(regexPattern4)); //[ 'Ward', 'ward' ]

//! Syntxt 2: /...\b/

// search for a word that ends with the pattern ward

const regexPattern5 = /ward\b/gi;

const text2 = "backward wardrobe ward";

console.log(text2.match(regexPattern5)); // [ 'ward', 'ward' ]

//! Syntax 3: /\b...\b/

// search for a stand-alone word that begins and end with the pattern ward

const regexPattern6 = /\bward\b/gi;

const text3 = "backward wardrobe ward";

console.log(text3.match(regexPattern6)); // [ 'ward' ]

// \B  => is opposite of \b. It matches every postion \b doesn't

//# Shortcodes for other Metachracters:

/* 
 In addition to the metacharacters we have looked at, here are some of the most commonly used ones:

 => \d : matches any decimal digit and is shorthand for [0-9]

 => \w : matches any alphanumeric characters which could be a letter, a digit, or an underscore. \w is shorthand for [A-Za-z0-9]

 => \s : matches any white space character.

 => \D : matches any non-digit and is the same as [^0-9].

 => \W : matches any non-word (that is non-alphanumeric) character and is shorthand for [^A-Za-z0-9].

 => \S : matches a non-white space character

 => . : matches any character.
*/

//# What is a Character Class?

/* 
A character class is used to match any one of several characters in a particular possition. To denote a character class, you use square brackets [] and then list the characters you want to match inside the brackets. 
*/

const regexPattern7 = /priv[ra]te/;
console.log(regexPattern7.test("private")); // true

//# What is a Negated Character Class?

/* 
If you add a caret symbol inside a character class like this [^...], it will match any character that is not listed inside the square brackets.
 */

const regexPattern8 = /[^bc]at/;

console.log(regexPattern8.test("bat")); // false
console.log(regexPattern8.test("cat")); // false
console.log(regexPattern8.test("mat")); // true

//# What is a Range?

/* 
A hyphen - indicates range when used inside a character class. Suppose you want to match a set of numbers, say [0123456789], or a set of characters, say[abcdefg]. You can write it as a range like this, [0-9] and [a-g], respectively. 

regex = /[a-z]/; // matches all lowercase letters
regex = /[A-Z]/; // matches all uppercase letters
regex = /[e-l]/; // matches lowercase letters e to l (inclusive)
regex = /[F-P]/; // matches all uppercase letters F to P (inclusive)
regex = /[0-9]/; // matches all digits
regex = /[5-9]/; // matches any digit from 5 to 9 (inclusive)
regex = / [a-d1-7]/; // matches a letter between a and d and figures from 1 to 7, but not d1
regex = /[a-zA-Z]/; // matches all lowercase and uppercase letters
regex = /[^a-zA-Z]/; // matches non-letters
*/

// # What is Alternation?

/*
Alternation is yet another way you can specify a set of options. Here you use the pipe character "|" to match any of several subexpressions. Either of the subexpression is called an alternative.

The pipe symbol means 'or', so it matches a series of options. It allows you combine subexpression as alternatives.

Without the parentheses, x|y|z would mean x or y or z.
*/

const regexPattern9 = /(Ankit|Rogers)\sYadav/;

console.log(regexPattern9.test("Ankit Yadav")); // true
console.log(regexPattern9.test("Rogers Yadav")); // true
console.log(regexPattern9.test("Manish Yadav")); // false

//# What are Quantifiers?

//* => +  Means "one or more" the same as {1,}

const str1 = "+5(888)-555-35-66";
console.log(str1.match(/\d+/g));

//* => ? Means "Zero or one", the same as {0,1}. In other words, it makes the symbol optional.

const str2 = "Should I write color or colour";
console.log(str2.match(/colou?r/g));

//* => * Means "Zero or More", the same as {0,}. That is, the character may repeat any times or be absent.

let str3 = "10 100 1";
console.log(str3.match(/\d0*/g));

/* 
=> {N}, when appended to a character or character class, specifies how many of the character we want. For Example   /\d{3}/ means match three consecutive digits. 
*/

const text4 = "Hello We Have Numbers 123456789";
console.log(text4.match(/\d{5}/));

/*
=> {N,M} is called the interval quantifier and is used to specify a range for the minimum and maximum possible match. For example /\d{3, 6}/ means match a minimum of 3 and a maximum of 6 consecutive digits. 
 */

const regexPattern13 = /\d{2,3}/;

const text5 = "Hello 1 to 123";

console.log(text5.match(regexPattern13));

/*
=> {N, } denote an open ended-range. For Example /\d{3, }/ means match any 3 or more consecutive digits.
 */

const regexPattern14 = /\d{4,}/;

const text6 = "Hello 123 and hello 1254";
console.log(text6.match(regexPattern14));

//# What is Greediness in Regex?

/* All quantifires by default are greedy. This means that they will try to match all posible character.

To remove this default state and make them non-greedy, you append a ? to the operator like this +?, *?, {N}?, {N,M}? ... and so on.
*/

//# What are Grouping?

/* What if you wnat to use a quantifier like + or * on more than one character at a time - say a character class or group? You can group them together as a whole using the parentheses before appending the quantifire, just like in this example. */

const regexPattern15 = /abc+(xyz+)+/i;
console.log("abcxyzzzzXYZ".match(regexPattern15));

//# What are Backreferencing

/*
Backreferencing allows you to match a new pattern that is
the same as a previously matched pattern in a regular 
expression. You also use parentheses for backreferencing
because it can remember a previously matched 
subexpression it encloses (that is, the captured group).

However, it is possible to have more than one captured 
group in a regular expression. So, to backreference any 
of the captured group, you use a number to identify the 
parentheses.

Suppose you have 3 captured groups in a regex and you want
to backreference any of them. You use \1, \2, or \3, to
refer to the first, second, or third parentheses. To 
number the parentheses, you start counting the open 
parentheses from the left.
*/

//*  a(bc) =>  parentheses create a capturing group with value bc

//*  a(?:bc)* => using ?: we disable the capturing group

//*  a(?<foo>bc) => using ?:<foo> we put a name to the group

//# The Escape Rule

/* 
A Metacharacter has to be escaped with a backslash if you want it to appear as a literal in your regular expression. By escaping a metacharacter in regex, the metacharacter loses its special meaning. */

//: Regular Expression Methods

//# The test() method

/* The test() method compares the target text with the regex pattern and return a boolean value accordingly. */

const regexPattern16 = /abc/i;
console.log(regexPattern16.test("abcdef"));

//# The exec() method

/* 
The exec() method compares the target text with the regex pattern. if there's a match, it returns an array with the match - otherwise it returns null.
*/

const regexPattern17 = /abc/i;
console.log(regexPattern17.exec("abcdef"));
// [ 'abc', index: 0, input: 'abcdef', groups: undefined ]

/* Also, there are string methods that accept regular expression as a parameter like match(), replace(), replaceAll(), matchAll(), search(), and split(). */

//: Regex Examples

//* 1. How to use a regex pattern to match an emial address:

const emailPattern = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;

console.log(emailPattern.test("therogersak@gmail.com"));

//* 2. How to match a URL with format

const urlPattern = /^[https?]+:\/\/((w{3}.)?[\w+]+)\.[\w+]+$/i;

console.log(urlPattern.test("https://www.example.com"));

//# Lookahead and Lookbehind

/* 
Sometimes we need to find only those matches for a pattern that are followed or preceded by another pattern
*/

//* Lookahead

/* 

The syntax is: X(?=Y), it means "look for X, but match only if followed by Y". There may be any pattern instead of X and Y.
*/

let text7 = "1 indian costs 50₹";
console.log(text7.match(/\d+(?=₹)/)); // 50, the number 1 is ignored, as it's not followed by ₹

//* Negative Lookahead

let text8 = "2 indians cost 100₹";
console.log(text8.match(/\d+\b(?!₹)/g)); // 2

//* Lookbehind

/* 
=> Lookahead allow to add a condition for "what follows".
=> Lookbehind is similar, but it look behind. That is, is allow to match a pattern only if there's somethings before it.
*/

//! Syntax:

// 1.Positive lookbehind: (?<=Y)X, matches X, but only if there's Y before it.
// 2.Negative lookbehind: (?<!Y)X, matches X, but only if there's no Y before it.

let text9 = "Hello You Have 1 No I Have $100";
console.log(text9.match(/(?<=\$)\d+/)); // 100 (skipped the solo number)

let text10 = "You have 10 no I have $100";
console.log(text10.match(/(?<!\$)\d+/)); // 10 (the price not mathced)
