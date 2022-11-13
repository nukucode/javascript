//: A quick cheatcheet - Regex(Regular Expression)

//# 1.Anchors

/* 
1. ^ => Start of string, or start of line in multiline pattern.
2. \A => Start of string.
3. $ => End of string, or end of line in multiline pattern.
4. \Z => End of string.
5. \b => Word boundary.
6. \B => Not word boundary.
7. \< => Start of word.
8. \> => End of word.
*/

//# Character Classes

/* 
1. \c => Control character.
2. \s => White space.
3. \S => Not white space.
4. \d => Digit.
5. \D => Not digit.
6. \w => word.
7. \W => Not word.
8. \x => Hexadecimal digit.
9. \O => Octal digit.
*/

//# Group and Ranges

/* 
1. . => Any character except new line (\n)
2. (a|b) => a or b
3. (...) => Group
4. (?:...) => Passive (non-capturing) group
5. [abc] => Range (a or b or c)
6. [^abc] => Not (a or b or c)
7. [a-q] => Lower case letter from a to q
8. [A-Q] => Upper case letter from A to Q
9. [0-7] => Digit from 0 to 7
10. \x => Group/subexpression number "x"
*/

//# Quantifiers

/* 
1. * => 0 or more {3} Exactly 3
2. + => 1 or More {3,} 3 or more
3. ? => 0 or 1 {3,5} 3,4 or 5

NOTE:: add a ? to a quantifier to make it ungreedy
*/

//# Pattern Modifires or Flags

/* 
1. g => Global match
2. i => Case-insensitive
3. m => Multiline
*/

//# Assertions

/* 
1. ?= => Lookahead assertion
2. ?! => Negative lookahead
3. ?<= => Lookbehind assertion
4. ?!= => Negative lookbehind
5. ?() => Condition [if then]
6. ?()| => Condition [if then else]
7. ?# => Comment
*/



//# Escape Sequences 

/* 
1. \ => Escape following character
2. \Q => Begin literal sequence
3. \E => End literal sequence

Note: "Escaping" is a way of treating character which have a special meaning in regular expression literally, rather than as special characters
*/