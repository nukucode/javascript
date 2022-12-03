//: 6.1 => Use Single quotes '' for strings. eslint: quote

// bad
const name = "Capt. Ankit";

// bad - template literals should contain interpolation or newlines
const name2 = `Capt. Ankit`;

// good
const name3 = "Capt. Ankit";

//: 6.2 => Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.

/* Why? Broken strings are painful to work with and make code less searchable */

// bad
const errorMessage =
  "This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.";

// bad
const errorMessage2 =
  "This is a super long error that was thrown because " +
  "of Batman. When you stop to think about how Batman had anything to do " +
  "with this, you would get nowhere fast.";

// good
const errorMessage3 =
  "This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.";

//: 6.3 => When programmatically building up strings, use template strings instead of concatenation. eslint:prefer-template template-curly-spacing

// bad
function sayHi(name) {
  return "How are you, " + name + "?";
}

// bad
function sayHi2(name) {
  return ["How are you, ", name, "?"].join();
}

// good
function sayHi3(name) {
  return `How are you, ${name}?`;
}

//: 6.4 => Never Use eval() on a string, it opens too many vulnerabilities, eslint: no-eval

//: 6.5 => Do Not unnecessarily escape characters in strings. eslint: no-useless-escape

/* WHy? Backslashes harm reabability, thus they should only be present when necessary */

// bad
const foo = "'this' is \"quoted\"";

// good
const foo2 = "'this' is \"quoted\"";
const foo3 = `my name is "${name}"`;
