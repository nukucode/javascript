//: 8.1 => /* When you must use an anonymous function (as when passing an inline callback), use arrow function notation. eslint:prefer=arrow-function, arrow-spacing */

/* Why? It creates a version of the function that executes in the context of this, which is usually what you want, and is a more concise syntax.

Why not? If you have a fairly complicated function, you might move that logic out into its own named function expression. */

// bad
[1, 2, 3, 4].map(function (x) {
  console.log(x);
});

// good
[1, 2, 3, 4, 5].map((x) => {
  console.log(x);
});

//: 8.2 => /* If the funtion body consist of a single statement returning an expression without side effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a return statement. eslint: arrow-parens, arrow-body-style */

/* Why? Syntatic sugar. It reads well when multiple functions are chained together. */

// bad
[1, 2, 3, 4].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}`;
});

// good
[1, 2, 3].map((number) => `A string containing the ${number + 1}`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

// No implicit return with side effects
function foo(callback) {
  const val = callback();
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false;

// bad
foo(() => (bool = true));

// good
foo(() => {
  bool = true;
});

//: 8.3 => In case the expression spans over multiple lines, wrap it in parentheses for better readability.

/* Why? It shows clearly where the function starts and ends. */

// bad
["get", "post", "put"].map((httpMethod) =>
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod
  )
);

// good
["get", "post", "put"].map((httpMethod) =>
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod
  )
);

//: 8.4 => Always include parentheses around arguments for clarity and consistency. eslint: arrow-parens

/* Why? Minimizes diff churn when adding or removing arguments. */

// bad
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].map((x) => x * x);

// bad
[1, 2, 3].map(
  (number) =>
    `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
);

// good
[1, 2, 3].map(
  (number) =>
    `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
);

// bad
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

//: 8.5 => Avoid confusing arrow function syntax (=>) with comparison operators (<=, >=). eslint: no-confusing-arrow

// bad
const itemHeight = (item) =>
  item.height <= 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight2 = (item) =>
  item.height >= 256 ? item.largeSize : item.smallSize;

// good
const itemHeight3 = (item) =>
  item.height <= 256 ? item.largeSize : item.smallSize;

// good
const itemHeight4 = (item) => {
  const { height, largeSize, smallSize } = item;
  return height <= 256 ? largeSize : smallSize;
};

//: 8.6 => Enforce the location of arrow function bodies with implicit returns. eslint: implicit-arrow-linebreak

// bad
(foo) => bar;

(foo) => bar;

// good
(foo) => bar;
(foo) => bar;
(foo) => bar;
