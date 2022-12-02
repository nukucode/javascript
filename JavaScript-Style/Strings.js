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
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage2 = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage3 = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';