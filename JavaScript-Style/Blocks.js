//: 16.1 => /* Use braces with all muliline blocks. eslint: "nonblock-statement-body-position" */

// bad
if (test) return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function foo() {
  return false;
}

// good
function bar() {
  return false;
}

//: 16.2 => /* iF YOU'RE using multline blocks with if and else, put else on the same line as your "if" block closing brace. eslint: "brace-style" */

// bad
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}

//: 16.2 => /* If an "if" block always executes a return statement, the subsequent else block is unnecessary. A return is an "else if" block following an "if" block that contains a return can be separated into multiple "if" blocks. eslint:no-else-return */

// bad
function foo() {
  if (x) {
    return x;
  } else {
    return y;
  }
}

// bad
function cats() {
  if (x) {
    return x;
  } else if (y) {
    return y;
  }
}

// bad
function dogs() {
  if (x) {
    return x;
  } else {
    if (y) {
      return y;
    }
  }
}

// good
function foo() {
  if (x) {
    return x;
  }

  return y;
}

// good
function cats() {
  if (x) {
    return x;
  }

  if (y) {
    return y;
  }
}

// good
function dogs(x) {
  if (x) {
    if (z) {
      return y;
    }
  } else {
    return z;
  }
}