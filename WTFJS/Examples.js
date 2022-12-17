//: Examples

//* => 1. [] is equal ![]

// Array is equal not array
[] == ![]; // => true

/* The abstract (==) equality operator converts both sides to numbers to compare them, and both sides become the number 0 for different reasons. Arrays are truthy, so on the right, the opposite of a truthy value is false, whihc is then coered to 0. On the left, however, an empty array is coerced to a number without becoming a boolean first, and empty arrays are coerced to 0, despite being truthy. */

+[] == +![];
0 == +false;
0 == 0;
true;

//* => 2.true is not equal ![], but not equal [] too

/* Array is not equal true, but not Aray is not equal true too: Array is equal false, not array is equal false too: */

true == []; // => false
true == ![]; // => false

false == []; // => true
fasle == ![]; // => true

//? Explanation =>
// According to the specification

// 1
true == []; // false

toNumber(true); // => 1
toNumber([]); // => 0

1 == 0;

//2
true == ![]; // => false
![]; // => false
true == false; // => false

//3
false == []; // => true
toNumber(false); // => 0
toNumber([]); // => 0

0 == 0; // => true

//4
false == ![]; // true
![]; // => false
false == false; // => true

//* => 3. true is false

!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true

//? Explanation

// true is 'truthy' and represented by value 1 (number), 'true' in string form is NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' is not the empty string, so it's a truthy value
!!"false"; // -> true
!!"true"; // -> true

//* => 4. baNaNa
"b" + "a" + +"a" + "a"; // => "baNaNa"
"foo" + +"bar"; // -> 'fooNaN'

//? Explanation:
/* This expression is evaluated as "foo"+ (+'bar), which converts "bar" to not a number */

//* => 5.Object.is()  and === weird cases

/* Object.is() determine if two values have the same value or not. It works similar to the === operator but there are a few weried cases: */

Object.is(NaN, NaN); // -> true
NaN === NaN; // -> false

Object.is(-0, 0); // -> false
-0 === 0; // -> true

Object.is(NaN, 0 / 0); // -> true
NaN === 0 / 0; // -> false

//? Explanation

/* In JavaScript lingo, NaN and NaN are the same value but they're not strictly equal. NaN === NaN being false is apparently due to historical reasons so it would probably be better to accept it as it is.

Similarly, -0 and 0 are strictly equal, but they're not the same value.

 */


//* => 6.[] is truthy, but not true

// An array is a truthy value, however, it's not equal to true.

!![]  // => true
[] == true // => false


//* => 7.null is falsy, but not false
// Despite the fact that null is a falsy value, it's not equal to false.

!!null; // => false
null == false // => false

// At the same time, other falsy values, like 0 or "" are equal to false.

0 == false; // -> true
"" == false // -> true


//* => 8.Adding arrays
// what if you try to add two arrays?

[1, 2, 3] + [4, 5, 6]  // => '1,2,34,5,6'


//? Explanation
// The concatenation happens. Step-by-step, it looks like this:

[1, 2, 3] + [4, 5, 6]
// -> [// call toString() (1,2,3)].toString() + [4,5,6].toString()
// concatenation
'1,2,3' + "4,5,6";
// => ("1,2,34,5,6")


//* Trailing commas in array

/* You've created an array with 4 empty elements. Despite all, you'll get an array with three elements, because of trailling commas */

let a = [, , ,];
a.length; // => 3
a.toString() // -> ",,"

/* Trailing commas (sometimes called "final commas") can be useful when adding new elements, parameter, or properties to Javascript code. if you want to add a new property, you can simply add a new line without modifying the previously last line if that line already uses a trailing comma. This makes version-control diffs cleaner and editing code might be less troublesome. */


//*  Comparison of three numbers

1 < 2 < 3 // -> true
3 > 2 > 1 // -> false


//? Explanation

1 < 2 < 3; // 1 > 2 -> true
true < 3; // ture -> 1
1 < 3;   // true

3 > 2 > 1; // 3 > 2 -> true
true > 1;  // true -> 1
1 > 1;    // false

// we can fix this with Graater than or equal operator (>=)

3 > 2 >= 1 // true