//# Regular Expression

/* 
A regular expression (also called regex for short) is fast way to work with strings of text

=> By formulating a regular expression with a special syntax, you can:
1. search for text in a string
2. replace substrings in a string
3. and extract information from a string
*/

//: What does a Regular Expression look like?

/* In Javascript, a regular expression is an obejct, which can be defind in two ways.

=> 1.Regular expression literal
=> 2.Using RegExp Constructor Function
*/

//: How does it work
/* 
The regular expression we defined as re1 above is a very simplee one. It searches the string hey, without any limitation. The string can contain lots of text, and hey in the middle, and the regex is satisfied. It could also contain just hey, and regex would be satified as well.
*/

const regex = /hey/;
console.log(regex.test("hey buddy")); // true

//: Anchoring

//* If you want to match string that start with hey, use the ^ operator:

// /^hey/.test('hey') //✅ /^hey/.test('bla hey') //❌

//* If you want to match strings that end with hey, use the $ operator:

// /^hey/.test('hey') //✅ /^hey/.test('bla hey') //❌

//* Combine those, and match strings that exactly match hey, and just that string:

// /^hey$/.test("hey") //✅

/* //* To match a string that start with a substring and ends with another you can use .*, which matches any character repeated 0 or more times. */

// /^hey.*joe$/.test('hey joe') //✅ /^hey.*joe$/.test('heyjoe') //✅ /^hey.*joe$/.test('hey how are you joe') //✅ /^hey.*joe$/.test('hey joe!') //❌

//: Match items in ranges

/* Instead of matching a particular string, you can choose to match any character in a range, like: */

// /[a-z]/ //a, b, c, ... , x, y, z /[A-Z]/ //A, B, C, ... , X, Y, Z /[a-c]/ //a, b, c /[0-9]/ //0, 1, 2, 3, ... , 8, 9

//* These regexes match strings that contain at least one of the character in those ranges:

// /[a-z]/.test('a') //✅ /[a-z]/.test('1') //❌ /[a-z]/.test('A') //❌ /[a-c]/.test('d') //❌ /[a-c]/.test('dc') //✅

//* Ranges can be combined:

// [A-Za-z0-9]

// /[A-Za-z0-9]/.test('a') //✅ /[A-Za-z0-9]/.test('1') //✅ /[A-Za-z0-9]/.test('A') //✅

//* Matching a range item multiple times

// /^[A-Za-z0-9]$/.test('A') //✅ /^[A-Za-z0-9]$/.test('Ab') //❌

//: Negating a Pattern

/* 
The ^ character at the beginning of a pattern anchors it to the beginning of a string.

Used inside a range, it negates it, so:
*/

// /[^A-Za-z0-9]/.test('a') //❌ /[^A-Za-z0-9]/.test('1') //❌ /[^A-Za-z0-9]/.test('A') //❌ /[^A-Za-z0-9]/.test('@') //✅

/* 

1.\d => matches any digit, equivalent to [0-9].
2.\D => matches any none digit, equivalent to [^0-9].
3.\w => marches any alphanumeric character, equivalent to [A-Za-z0-9].

4.\W => matches any non-alphanumeric character,equivalent to [^A-Za-z0-9].

5.\s => matches any whitespace character:spaces, tabs, newlines and Unicode spaces.

6.\S => matches any character that's not a whitespace
7.\0 => matches null
8.\n => matches a newline character
9.\t => matches a tab character
10.\uXXXX => matches a unicode character with code XXXX (requires the u flag).

11. . => matches any character that is not a newline char (e.g \n) (unless you use the s flag, explained later on).

12. [^] => matches any character, including newline character. It's useful on multiline strigns.
*/

//: Regular expression choices

//* If you want to search one string or another, use the | operator.

// /hey|ho/.test('hey') //✅ /hey|ho/.test('ho') //✅

//: Quantifiers

/* 
You can do it in 4 ways, using +,*,{n},{n,m}, ?. Let's look at these one by one
*/

//* => + : Match one or more (>=1) items

// /^\d+$/

// /^\d+$/.test('12') //✅ /^\d+$/.test('14') //✅ /^\d+$/.test('144343') //✅ /^\d+$/.test('') //❌ /^\d+$/.test('1a') //❌

//* => * : Match 0 or more (>=0) items

// /^\d*$/.test('12') //✅ /^\d*$/.test('14') //✅ /^\d*$/.test('144343') //✅ /^\d*$/.test('') //✅ /^\d*$/.test('1a') //❌

//* {n}

// Match exactly n items

//  /^\d{3}$/.test('123') //✅ /^\d{3}$/.test('12') //❌ /^\d{3}$/.test('1234') //❌ /^[A-Za-z0-9]{3}$/.test('Abc') //✅

//* {n,m}

// Match between n and m times:

// /^\d{3,5}$/.test('123') //✅ /^\d{3,5}$/.test('1234') //✅ /^\d{3,5}$/.test('12345') //✅ /^\d{3,5}$/.test('123456') //❌

//* m can be omitted to have an open ending. so you have at least n items:

// 3') //✅ /^\d{3,}$/.test('12345') //✅ /^\d{3,}$/.test('123456789') //✅

//: Optional Items

// Following an item with ? makes it optional:

// /^\d{3}\w?$/.test('123') //✅ /^\d{3}\w?$/.test('123a') //✅ /^\d{3}\w?$/.test('123ab') //❌

//: Groups

// Using parenthese, you can create groups of characters: (...)

// /^(\d{3})(\w+)$/.test('123') //❌ /^(\d{3})(\w+)$/.test('123s') //✅ /^(

/* 
Repetition character put after a group closing parenthese refer to the whole group:
*/

// /^(\d{2})+$/.test('12') //✅ /^(\d{2})+$/.test('123') //❌ /^(\d{2})+$/.test('1234') //✅

//: Capturing groups

/* 
A very cool feature of regular expression is the ability to capture parts of a string, and put them into an array.

You can do so using Groups, and in particular Capturing Groups.

By default, a Group is capturing Group. Now, instead of using RegExp.test(String), which just returns a boolean if the pattern is satisfied, we use either String.match(RegExp) or RegExp.exec(String)

They are exactly the same, and return an Array with the whole matched string in the first item, then each matched group content.

If there is no match, it return null:

'123s'.match(/^(\d{3})(\w+)$/) //Array [ "123s", "123", "s" ] 

/^(\d{3})(\w+)$/.exec('123s') //Array [ "123s", "123", "s" ] 

'hey'.match(/(hey|ho)/) //Array [ "hey", "hey" ] 
/(hey|ho)/.exec('hey') //Array [ "hey", "hey" ] 
/(hey|ho)/.exec('ha!') //null
*/

//* When a group is matched multiple times, only the last match is put in the result array:

// '1233456789'.match(/^(\d)+/);  //Array ["123456789", "9"]

//: Optional Groups

/* 
A capturing group can be made optional by usign (....)?. If it's not found, the resulting array slot will contain undefined.

/^(\d{3})(\s)?(\w+)$/.exec('123 s') //Array [ "123 s", "123", " ", "s" ] 

/^(\d{3})(\s)?(\w+)$/.exec('123s') //Array [ "123s", "123", undefined, "s" ]
*/

//: Named capturing groups

/* 
This is a new ES2018 feature.

A group can be assigned to a name, rather than just begin assigned a slot in the resulting array:

=> const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/ const result = re.exec('2015-01-02') 

=> // result.groups.year === '2015'; // result.groups.month === '01'; // result.groups.day === '02';

*/

//: Using match and exec without groups

/* There is a difference between using match and exec without groups: the first item in the array is not the whole matched string, but the match directly:

=> /hey|ho/.exec('hey') // [ "hey" ]
=> /(hey).(ho)/.exec('hey ho') // [ "hey ho", "hey", "ho" ]
*/

//: Noncapturing Group

/* 
Since by defalt are capturing Groups, you need a way to ignore some groups in the resulting array. This is possible using Noncapturing Groups, which start with (?:..).

=> '123 s'.match(/^(\d{3})(?:\s)(\w+)$/) //Array [ "123 s", "123", "s" ]
*/

//: Flags

/* 

=> g: matches the pattern multiple times
=> i: matches the regex case insensitive
=> m: enables multiline mode. In this mode, ^ and $ match the startand end of the whole string. Without this, with multiline strings they match the beginning and end of each line.
=> u: enables support for unicode (introduced in ES6/ES2015)
=> s: (new in ES2018) short for single line, it causes the . to match new line character as well.
*/

//: Inspecting a regex

/* 
=> Source the pattern string
=> multiline true with the m flag
=> global true with the g flag
=> ignoreCase true with the i flag
=> lastindex


=> /^(\w{3})$/i.source //"^(\\d{3})(\\w+)$" /^(\w{3})$/i.multiline //false /^(\w{3})$/i.lastIndex //0 /^(\w{3})$/i.ignoreCase //true /^(\w{3})$/i.global //false
*/

//: Escaping

/* 
These character are special:
=> \, /, [], (), {}, ?, +, *, |, ., ^, $
They are special because they are control character that have a meaning in the regular expression pattern. If you want to use them inside the pattern as matching character, you need to escape them, by prepending a backslash:

=> /^\\$/ /^\^$/ // /^\^$/.test('^') ✅ /^\$$/ // /^\$$/.test('$') ✅
*/

//: String Boundaries

/* 
\b and \B let you inspect whether a string is at the beginning or at the end of a word:

=> \b : matches a set of character at the beginning or end of a word.
=> \B : matches a set of character not at the beginning or end of a word.


=> d'.match(/\bbear\b/) //null 'cool_bear'.match(/\bbear\b/) //null
*/


//: Replace, using Regular Expressions

/* 
The string Object in Javascript has a replace() method, which can be used without Regular Expression to preform a single replecement on a string.

=> "Hello world!".replace('world', 'dog') //Hello dog! 

* This method also accepts a regular expression as argument:

"Hello Word!".replace(/Word/, 'dog') // Hello dog!

* USING the g flag is the only way to replace multiple occurrences in  a string in vanilla Javascript:

=> "My dog is a good dog!".replace(/dog/g, 'cat') //My cat is a good cat!

=> "Hello, world!".replace(/(\w+), (\w+)!/, '$2: $1!!!') // "world: Hello!!!"
*/


//: Greediness

/* 
Regular Expression are said to be greedy by default

* Take this regex
=> /\$(.+)\s?/.exec('This costs $100')[1] //100 

* but if we have more words after the number, it freaks out:
=> /\$(.+)\s?/.exec('This costs $100 and it is less than $200')[1] //100 and it is less than $200

Why? Because the regex after the $ sign matches any character with .+, and it won't stop until it reaches the end of the string. Then, it finishes off because \s? makes the ending space optional.

To dix this, we need to tell the regex to be lazy, and perform the least amount of matching possible. We can do so using the ? symbol after the quantifier:

=> /\$(.+?)\s/.exec('This costs $100 and it is less than $200')[1] //100


I removed the ? after \s. Otherwise it mathced only the first number, since the space was optional.

So, ? means different things based on its position, because it can be both a quantifier and a lazy mode indicator.

*/


//: Lookahead: match a string depending on what follow it.

/* 
* Use ?= to match a string that's followed by a specific substring:

=> /Roger(?= Waters)/.test('Roger is my dog') //false /Roger(?= Waters)/.test('Roger is my dog and Roger Waters is a famous musician') //true

* ?! performs the invers operations, matching if a string is not followed by a specific substring:

=> /Roger(?! Waters)/.test('Roger is my dog') //true /Roger(?! Waters)/.test('Roger Waters is a famous musician') //false
*/


//: Lookbehind: match a string depending on what precedes it.

/* 
This is an ES2018 feature.

*Lookahead use the ?= symbol. Lookbehinds use ?&1;=.

=> /(?<=Roger) Waters/.test('Roger is my dog and Roger Waters is a famous musician') //true

* a lookbehind is negated using ?&1 t;!:

=> /(?<!Roger) Waters/.test('Roger is my dog and Roger Waters is a famous musician') //false
*/


//: Regular Expression and Unicode

/* 
The u flag is mandatory when working with Unicode strings. In particular, this applies when you might need to handle character in astral planes (the ones that are not included in the first 1600 Unicodes characters).

If you don't add that flag, this simple regex that should match one character will not work, because for Javascript that emoji is represented internally by 2 characters (see Unicode in Javascript):

=> /^.$/.test('a') //✅ /^.$/.test('?') //❌ /^.$/u.test('?') //✅ 

So, always use the u flag. Unicode, just like normal characters, handle ranges:

/[a-z]/.test('a') //✅ /[1-9]/.test('1') //✅ /[?-?]/u.test('?') //✅ /[?-?]/u.test('?') //❌  
*/