//: JavaScript type coercion

/* Type coericion is the process of converting value from one type to another (such as string to number, onject to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coericion.
 */

//* Implicit vs. explicit coercion

/* Type coercion can be explicit and implicit. When a developer expresses the intention to convert between types by writing the appropriate code, like Number(value), it's called explicit type coercion(or type casting). 

Since JavaScript is a weakly-typed language. values can also be converted between different types automatically, and it is called implicit type coercion. It happens when you apply operators to value of different types, like

1 == null, 2/"5", null + new Date(), or it can be triggered by the surrounding context, like with if(value) {...}, where value is coerced to boolean.


One operator that does not trigger implicit type coercion is ===, which is called the strict equality operator. The loose equality operator == on the other hand does both comparison and type coercion if needed.

Implicit type coercion is a double edge sword: it's great source of frustration and defects, but also a useful mechanism that allow us to write less code without losing the readablity. */

//: 1.Three types of conversion in primitive

/*
  => to string
  => to boolean
  => to number 

  !Let's start with primitives first.
*/

//* => 1.String Conversion

/* To explicitly convert values to a string apply the String() function implicit coercion is triggered by the binary + operator, when any operand is a string: */

String(123); // explicit
123 + ""; // implicit

/* All primitive values are converted to strings naturally as you might expect. */

String(123); // '123'
String(-12.3); // '-12.3'
String(null); // 'null'
String(undefined); // 'undefined'
String(true); // 'true'
String(false); // 'false'

//* => 2.Boolean Conversion

/* To explicitly convert a value to a boolean apply the Boolean() function.

Implicit conversion happens in logical context, or is tiggered by logical operators (|| && !).*/

Boolean(2); // explicit
if (2) {
} // implicit due to logical context
!!2; // implicit due to logical operator
2 || "hello"; // implicit due to logical operator

/* 
? Note: logical operators such as || and && do boolean conversions internally, but actually return the value of original operands, even if they are not boolean. */

// return number 123, instead of returning true
// "hello" and 123 are still coerced to boolean internally to calculate the expression
let x = "hello" && 123; // x === 123

/* As soon as there are only 2 possible results of boolean conversion true or false, It's just easier to remember the list of falsy values. */

Boolean(""); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(false); // false

/* Any value that is not in the list is converted to true, including object function Array, Date, user-defined type, and so on, Symbols are truthy values. Empty object and array are truthy values as well. */

Boolean({}); // true
Boolean([]); // true
Boolean(Symbol()); // true
!!Symbol(); // true
Boolean(function () {}); // true

//* => 3.Numeric Conversion

/* For an explicit conversion just apply the Number() fucntion, same as you did with Boolean() and String().

Implicit conversion is tricky, because it's triggered is more cases:

=> comparison operators (>,<, <=, >=)
=> bitwise operators (|, &, ^, ~)
=> arithmetic operators (-, +, *, /, %). Note, that binary + does not tigger numeric conversion, when any operand is a string.
=> unary + operator
=> loose equality operator == (incl. !=).

?Note: that == does not trigger numeric conversion when both operands are strings.
*/

Number("123") + // explicit
  "123"; //  implicit
123 != "235"; // implicit
4 > "5"; // implicit
5 / null; // implicit
true | 0; // implicit

// Here is how primitive values are converted to numbers:

Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
Number(" 12 "); // 12
Number("-12.34"); // -12.34
Number("\n"); // 0
Number(" 12s "); // NaN
Number(123); // 123

/* 
!When converting a string to a number, the engine first trims leading and trailling whitespace, \n, \t characters, returning NaN if the trimmed string does not represent a valid number. If string is empty, it return 0.

null and undefined are handled differently: null becomes 0, whereas undefined becomes NaN.
 */

//? There are two special rules to remember:

/* => 1.When applying == to "null" or "undefined", numeric conversion does not happen. "Null" equals only to "null" or "undefined", and does not equal to anything else. */

null == 0; // false, null is not converted to 0
null == null; // true
undefined == undefined; // true
null == undefined; // true

// => 2.NaN does not equal to anything even itself

if (value !== value) {
  console.log("we're dealing with NaN here");
}

//: ES6 symbol.toPrimitive method

/* In ES5 you can hook into object-to-primitive conversion logic by overriding toString and valueOf methods.

In ES6 you can go farther and completely replace internal [[ToPrimitive]] routine by implementing the [Symbol.toPrimitive] method on an object.*/

// Examples

true + false; // 1
12 / "6"; // 2
"number" + 15 + 3; // 'number153'
15 +
  3 +
  "number"[1] > // '18number'
  null; // true
"foo" + +"bar"; // 'fooNaN'
"true" == true; // false
false == "false"; // false
null == ""; // false
(!!"false" ==
  !!"true"["x"]) == // true
  "x", // true
  [] +
    null +
    (1)[(1, 2, 3)] == // 'null1'
    [1, 2, 3]; // false
{
}
+[] + {} + [1]; // '0[object Object]1'
!+[] + [] + ![]; // 'truefalse'
new Date(0) - 0; // 0
new Date(0) + 0; // 'Thu Jan 01 1970 02:00:00(EET)0'

//* Binary "+" operator tiggers numeric conversion for true and flase

true + false
=> 1 + 0
  ==> 1


//* Arithmetic division operator "/" tiggers numeric conversion for string "6"

12 / "6"
=> 12 / 6
  ==> 2


/* 
* Operator "+" has left-to-right associativity, so expression "number" + 15 runs first. Since one operand is a string "+" operator tiggers string conversion for the number 15. On the second step expression "number15" + 3 is evaluated similarly.
*/

"number" + 15 + 3
=> "number15" + 3
  ==> "number153"


/* 
* Expression 15 + 3 is evaluated first. No need for coercion at all, since both operands are numbers. On the second step, expression 18 + 'number' is evaluated, and since one operand is a string, it triggers a string conversion.
 */

15 + 3 + "number"
=> 18 + 'number'
  ==> "18number"


//* Comparison operator "&"gt; tiggers numeric conversion for [1] and "null"

[1] > null
=> '1' > 0
  ==> true


/* 
* Unary + operator has higher precedence over binary + operator. So +'bar' expression evaluates first. Unary plus triggers numeric conversion for string 'bar'. Since the string does not represent a valid number, the result is NaN. On the second step, expression 'foo' + NaN is evaluated.  
*/


"foo" + + "bar"
=> "foo" + (+"bar")
=> "foo" + NaN
  ==> "fooNaN"


/*
 * == operator tiggers numeric conversion, string "true" is converted to NaN, boolean true is converted to 1
 */

'true' == true
=> NaN == 1
  ==> false


false == "false"
=> 0 == NaN
==> false


/* 
* == usually tiggers numeric conversion, but it's not the case with null, null equals to null or undefined only, and does not equal to anything else.
*/

null == ""
  ==> false


/* 
* !! operator converts both "true" and "false" strings to boolean true. since they are non-empty strings. Then == just checks equality of two boolean true's without any coercion.
*/


!!"false" == !!"true"
=> true == true
  ==> true


/* 
* == operator triggers a numeric conversion for an array. Array’s valueOf() method returns the array itself, and is ignored because it’s not a primitive. Array’s toString() converts ['x'] to just 'x' string.
*/

['x'] == 'x'  
=> 'x' == 'x'
  ==> true


/* 
* + operator triggers numeric conversion for []. Array’s valueOf() method is ignored, because it returns array itself, which is non-primitive. Array’s toString returns an empty string.

On the the second step expression '' + null + 1 is evaluated.
*/

[] + null + 1  
==>  '' + null + 1  
==>  'null' + 1  
  ==> 'null1'


/* 
* Logical || and && operators coerce operands to boolean, but return original operands (not booleans). 0 is falsy, whereas '0' is truthy, because it’s a non-empty string. {} empty object is truthy as well.
*/


0 || "0" && {}  
==>  (0 || "0") && {}
==> (false || true) && true  // internally
==> "0" && {}
==> true && true             // internally
  ==> {}


  /* 
  * No coercion is needed because both operands have same type. Since == checks for object identity (and not for object equality) and the two arrays are two different instances, the result is false.
  */


  [1, 2, 3] == [1, 2, 3]
  ==> false


  /* 
  
  * All operands are non-primitive values, so + starts with the leftmost triggering numeric conversion. Both Object’s and Array’s valueOf method returns the object itself, so it’s ignored. toString() is used as a fallback. The trick here is that first {} is not considered as an object literal, but rather as a block declaration statement, so it’s ignored. Evaluation starts with next +[] expression, which is converted to an empty string via toString() method and then to 0 .
  
  */

  {}+[]+{}+[1]
==> +[]+{}+[1]
==> 0 + {} + [1]
==> 0 + '[object Object]' + [1]
==> '0[object Object]' + [1]
==> '0[object Object]' + '1'
  ==> '0[object Object]1'


  /* 
  * This one is better explained step by step according to operator precedence.
  */

!+[] + [] + ![]
=> (!+[]) + [] + (![])
=> !0 + [] + false
=> true + [] + false
=> true + "" + false
=> "truefalse"


/* 
* - operator triggers numeric conversion for Date. Date.valueOf() returns number of milliseconds since Unix epoch.
*/

new Date(0) - 0
=> 0 - 0
  ==> 0


/* + operator triggers default conversion. Date assumes string conversion as a default one, so toString() method is used, rather than valueOf(). */


new Date(0) + 0
==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)' + 0
==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)0'