//: Clean-code JavaScript

//* => 1.Variables

/* 1.Use meaningful and pronounceable variable names */

//! BAD:
const yyyymmdstr = moment().format("YYYY/MM/DD");

//? Good:
const currentDate = moment().format("YYYY/MM/DD");

/* 2.use the same vocabulary for the same type of variable */

//! BAD:
getUserInfo();
getClientData();
getCostomerRecord();

//? GOOD:
getUser();

/* 3.Use serachable names */

//! BAD:
// WHAT the heck is 86400000 for?
setTimeout(blastOff, 86400000);

//? GOOD
// 4.Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 60 * 60 * 25 * 1000;

setTimeout(blastOff, MILLISECONDS_PER_DAY);

/* 5.Use explanatory variables */

//! BAD:
const address = "One Infinite Loop, Cupertino 904535";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{6})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex[1]),
  address.match(cityZipCodeRegex[2])
);

//? GOOD
const address2 = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex2 = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [_, city, zipCode] = address2.match(cityZipCodeRegex2) || [];
saveCityZipCode(city, zipCode);

/* 6.Avoid Mental Mapping */

//! BAD:
const locations = ["India", "Japan", "Indonesia", "Russia", "USA"];
locations.forEach((l) => {
  doStuff(), doSomeOtherStuff();
  // ....
  // .....
  // wait, what is 'l' for again
  dispatch(l);
});

//? GOOD:
const locations2 = ["India", "Japan", "Indonesia", "Nepal", "China", "USA"];

locations2.forEach((location) => {
  doStuff();
  doSomeOtherStuff();
  // ....
  ///....
  // ....
  dispatch(location);
});

/* 7.Don't add unneeded context */

//! BAD:
const car = {
  carModal: "BS6",
  carColor: "Red",
};

function paintColor(car, color) {
  car.carColor = "Blue";
}

//? GOOD:
const car2 = {
  modal: "BS6",
  color: "Pink",
};

function paintColor2(car, color) {
  car.color = "Red";
}

/* 8.Use default parameters instead of short circuiting or conditionals */

//! BAD:
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
}

//? GOOD:
function createMicrobrewery2(name = "Hipster Brew Co.") {
  const breweryName = name;
}

//* Functions

/* => 1.Function arguments (2 or fewer ideally) */

//! BAD:
function createMenu(title, body, buttonText, cancellable) {
  //...
}

createMenu("foo", "bar", "baz", true);

//? GOOD:
function createMenu2({ title, body, buttonText, cancellable }) {
  //...
}

createMenu2({
  titie: "foo",
  body: "bar",
  buttonText: "Baz",
  cancellable: true,
});

/* => 2.Functions should do one thing.

This is by far the most important rule in software engineering. When functions do more than one thing, they are harder to compose, test, and reason about. When you can isolate a function to just one action, it can be refactored easily and your code will read much cleaner. If you take nothing else away from this guide other than this, you'll be ahead of many developers.*/

//! BAD:
function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = data.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

//? GOOD:
function emailActiveClients(clients) {
  clients.filter(isActive).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(email);
  return clientRecord.isActive();
}

/* => 3.Function names should say what they do */

//! BAD:
function addToDate(data, monthe) {
  //...
}

const date = new Date();

// It's hard to tell from the funtion name what is added
addToDate(date, 1);

//? GOOD:
function addMonthToDate(month, date) {
  ///...
}

const date2 = new Date();
addMonthToDate(1, date2);

/* => 4.Function should only be one level of abstraction.

When you have more than one level of abstraction your function is usually doing too much. Splitting up function leads to reusability and easier testing.*/

//! BAD:
function parseBetterJSAlternative(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      // ...
    });
  });

  const ast = [];
  tokens.forEach((token) => {
    // lex...
  });

  ast.forEach((node) => {
    // parse...
  });
}

//? GOOD:
function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const syntaxTree = parse(tokens);
  syntaxTree.forEach((node) => {
    // parse...
  });
}

function tokenize(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      tokens.push(/* ... */);
    });
  });

  return tokens;
}

function parse(tokens) {
  const syntaxTree = [];
  tokens.forEach((token) => {
    syntaxTree.push(/* ... */);
  });

  return syntaxTree;
}

