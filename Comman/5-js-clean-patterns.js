// //: 5 Javascript Clean coding patterns to Enhance your code.

// //# 1. Removing else's from conditional handling

if (condition) {
  // a lot of code
} else if (condition2) {
  // other code
}

/* Well, there's a different way of dealing with this scenario,that can make things more simple to read. */

if (condition) {
  // do stuff
  return;
}
if (condition2) {
  // other code
  return;
}

//# 2.More declarative code with built-in functions

let arr = [2, 3, 4, 5, 3, 2, 4, 8];
// sorting
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sort(arr)); // [ 2, 2, 3, 3, 4, 4, 5, 8 ]

/* This way, using the array method sort from Javascript ES6 the code can be greatly simlified and also improved the speed for bigger arrays. */

function sort2(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sort2(arr)); // [ 2, 2, 3, 3, 4, 4, 5, 8 ]

//# Separate your code into logical blocks

const input = "-banana,lemon,orange,pineapple,apple-";

const FRUIT_MAP = {
  banana: "non-citric",
  lemon: "citric",
  orange: "citric",
  pineapple: "citric",
  apple: "non-citric",
};

//logic

let modifiedInput = input.replaceAll("-", "");
let fruits = modifiedInput.split(",");

const output = fruits.map((fruit) => {
  return `${fruit} is ${FRUIT_MAP[fruit]}.`;
});

console.log(output); //['banana is non-citric.', 'lemon is citric.','orange is citric.','pineapple is citric.','apple is non-citric.' ]

//# Switch case with dictionaries

var option = "all";

switch (option) {
  case "all":
    option = "All items";
    break;

  case "category1":
    option = "Category 1 Items";
    break;

  case "category2":
    option = "category2 items";
    break;

  case "category3":
    option = "category3 items";
    break;

  case "category4":
    option = "category4 items";
    break;

  default:
    option = "All items";
}

// Do this

const option2 = "all";

const filterDictionary = {
  all: "All items",
  category1: "category items",
  category2: "category2 items",
  category3: "category3 itmes",
  category4: "category4 items",
};

console.log(filterDictionary[option2]); // All items

//# Use destructuring/spread for simple object reassignment

const state = {
  a: 2,
  b: 5,
};

function changeState(state) {
  const myObj = {};
  for (let key in state) {
    myObj[key] = state[key];
  }

  // Applying a change
  myObj["a"] += 5;
  return myObj;
}

console.log(changeState(state)); // { a: 7, b: 5 }

/* With ES6 we have a more simple way of doing this, using the object.assign method or even simpler spread syntax */

function changeState2(state) {
  return { ...state, a: state.a + 5 };
}

console.log(changeState2(state)); // { a: 7, b: 5 }


// Another Example 

function changeState3(state){
    myObj = {};
    const returnObj = Object.assign(state, myObj);
    returnObj['a'] += 5;

    return returnObj;
}

console.log("One MOre",changeState3(state)) // { a: 7, b: 5 }