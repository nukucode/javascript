// check Device

const checkAppleDevice = () => {
  /Mac|iPod|iPhone|iPad/.test(navigator.platform);
};

console.log(checkAppleDevice());

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // true for mobile device
  document.write("mobile device");
} else {
  // false for not mobile device
  document.write("not mobile device");
}

/// check if tab active

const isTabActive = () => !document.hidden;
console.log(isTabActive());

/// SECTION TEXT BY USER

const slectedText = () => {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.selection) {
    return document.selection.createRange().text;
  }
  return "";
};

console.log(slectedText());

function foo() {
  const selObj = window.getSelection();
  console.log(selObj);
}

foo();

/// Append an array to another way

/// if your arrays are not huge, you can use the push() method of the array to which you want to add values

/// the push() method can take multiple parameters so you can use the apply() method to pass the array to be pushed as a collection of function parameters.

let arr1 = [12, 3, 4, 5, "Hello", "Ankit", "45", "47"];
let arr2 = [234, 45, 5, 665, 76, 678, "Hello", "Manish", 48];

Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // arr1 will be equal to
console.log(arr2);

/// Verify that a given arguments is a number

function numChecker(n) {
  return !isNaN(parseFloat(n) && isFinite(n));
}
console.log(numChecker(5));

/// cONVERT THE ARGUMENTS OBJECT TO AN ARRAY

//// the boject arguments is not an array. it is similar to an array, but does not have any array properties except length

//// however, it can be converted to a real array using the Array.prototype.slice

function myFunction(arguments) {
  return Array.prototype.slice.call(arguments);
}

const obj = {
  name: "Ankit",
  age: 18,
  WORK: "SOFTWARE ENGINEER",
};
console.log(myFunction(obj));
