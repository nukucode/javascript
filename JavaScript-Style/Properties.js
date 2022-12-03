//: 12.1 => Use dot notation when accessing properties. eslint: dot-notation

const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke["jedi"];

// good
const isJedi2 = luke.jedi;

//: 12.2 => use bracket notation [] when accessing properties with a variable.

const luke2 = {
  name: "Ankit",
  age: 18,
};

function getProp(prop) {
  return luke2[prop];
}

const isJedi3 = getProp("name");

//: 12.3 => Use Exponentiation operator ** when calculating exponentiations.

// bad
const binary = Math.pow(2, 5);

// good
const binary2 = 2 ** 5;
