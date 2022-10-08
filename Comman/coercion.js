//* ==> Coercion

// Converting a value from one type to another is often called "type casting", When done  explicitly and "coercion" when done implicitly (forced by the rules of how a value is used)

//? Coercion IN JS

(function () {
  var x = 22;
  var y = x + ""; // implicit coercion
  console.log(y); // "22"

  var z = String(x); // explicit ceorcion
  console.log(z); // "22"
})();

//! Equality checks

(function () {
  console.log("" == "0");
  console.log(0 == "");
  console.log(0 == "0");

  console.log(false == "false");
  console.log(false == "0");

  console.log(false == undefined);
  console.log(false == null);
  console.log(null == undefined);

  console.log(" /t/r/n " == 0);
})();

//? Array
var a = [1, 2, 3];
var b = [1, 2, 3];

console.log(a == b); // false
console.log(a === b); // false

//? Objec
var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

console.log(c == d); // false
console.log(c === d); // false

//? String
var e = "text";
var f = "tex" + "t";

console.log(e == f); // true
console.log(e === f); // true

console.log("abc" == new String("abc")); // true
console.log("abc" === new String("abc")); // false