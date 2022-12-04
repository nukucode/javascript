//: 18.1 => Use /** ... */ for multiline comments

// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
  // ...

  return element;
}

//: 18.2 => /**  Use "//" for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it's on the first line of a block  */

// bad
const active = true; // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log("fetching type...");
  // set the default type to 'no type'
  const type = this.type || "no type";

  return type;
}

// good
function getType() {
  console.log("fetching type...");

  // set the default type to 'no type'
  const type = this.type || "no type";

  return type;
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this.type || "no type";

  return type;
}

//: 18.3 => Start all comments with a space to make it easier to read. eslint: "spaced-comment"

// bad
//is current tab
const active = true;

// good
// is current tab
const active = true;

// bad
/**
 *make() returns a new element
 *based on the passed-in tag name
 */
function make(tag) {
  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
  // ...

  return element;
}

//: 18.4 => Use // FIXME: to annotate problems.

class Calculator extends Abacus {
  constructor() {
    super();

    // FIXME: shouldn’t use a global here
    total = 0;
  }
}

//: 18.5 => Use // TODO: to annotate solutions to problems.

class Calculator extends Abacus {
  constructor() {
    super();

    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}

