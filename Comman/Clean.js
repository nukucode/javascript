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


