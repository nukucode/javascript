//: 13.1 => /* Always use "const" or "let" to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. */

// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();

//: 13.2 => /* Use one const or let declaration per variable or assignment */

/* Why? It’s easier to add new variable declarations this way, and you never have to worry about swapping out a ; for a , or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once. */

// bad
const items = getItems(),
  goSportsTeam = true,
  dragonball = "z";

// bad
// (compare to above, and try to spot the mistake)
const items2 = getItems(),
  goSportsTeam2 = true;
dragonball2 = "z";

// good
const items3 = getItems();
const goSportsTeam3 = true;
const dragonball3 = "z";

//: 13.3 => Group all your "const"s and then group all your "let"s.

/* Why? This is helpful when later on you might need to assign a variable depending on one of the previously assigned variables. */

// bad
let i,
  len,
  dragonball,
  items = getItems(),
  goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;

//: 13.4 => Assign variables where you need them, but place them in a reasonable place.

/* Why? "let" and "const" are block scoped and not function scoped. */

// bad - unnecessary function call
function checkName(hasName) {
  const name = getName();

  if (hasName === "test") {
    return false;
  }

  if (name === "test") {
    this.setName("");
    return false;
  }

  return name;
}

// good
function checkName(hasName) {
  if (hasName === "test") {
    return false;
  }

  const name = getName();

  if (name === "test") {
    this.setName("");
    return false;
  }

  return name;
}

//: 13.5 Don't chain variable assignments

// bad
let a = (b = c = 1);
//? the "let" keyword only applies to variable a; variables b and c becoms global variable.

// good
let x = 1;
let y = a;
let z = b;

//: 13.6 => Avoid using unary increments and decrements (++, --).

/* Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like num += 1 instead of num++ or num ++. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs. */

// bad
const arr = [1, 2, 3, 4, 5];
let num = 1;
num++;
--num;

let sum = 0;
let truthyCount = 0;
for (let i = 0; i < arr.length; i++) {
  let value = arr[i];
  sum += value;
  if (value) {
    truthyCount++;
  }
}

// good
const array = [1, 2, 3, 4, 5];
let num2 = 1;
num += 1;
num -= 1;

const sum2 = array.reduce((a, b) => a + b, 0);
const truthyCount2 = array.filter(Boolean).length;

//: 13.7 => /* Avoid linebreaks before or after = in  an assignment. If your assignment violates max-len, surround value in parens, */

// bad
const foo =
  superLongLongLongLongLongLongLongLongFunctionName();

// bad
const foo2
  = 'superLongLongLongLongLongLongLongLongString';

// good
const foo3 = (
  superLongLongLongLongLongLongLongLongFunctionName()
);

// good
const foo4 = 'superLongLongLongLongLongLongLongLongString';


//: 13.8 => Disallow unused variables

/* Why? Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers. */

// bad

const some_unused_var = 42;

// Write-only variables are not considered as used.
let y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
let z = 0;
z = z + 1;

// Unused function arguments.
function getX(x, y) {
    return x;
}

// good

function getXPlusY(x, y) {
  return x + y;
}

const x = 1;
const y = a + 2;

alert(getXPlusY(x, y));

// 'type' is ignored even if unused because it has a rest property sibling.
// This is a form of extracting an object that omits the specified keys.
const { type, ...coords } = data;
// 'coords' is now the 'data' object without its 'type' property.