//? Detect OS System

var System = "";

function detectOS() {
  if (navigator.appVersion.indexOf("Win") != -1) {
    System = "Windows Operating System";
  }

  if (navigator.appVersion.indexOf("Mac") != -1) {
    System = "Mac Operating System";
  }

  if (navigator.appVersion.indexOf("X11") != -1) {
    System = "UNIX Operating System";
  }

  if (navigator.appVersion.indexOf("Linux") != -1) {
    System = "Linux Operating System";
  }

  return System;
}

console.log(detectOS());

//* Explanation OF indexOf()

// The indexOf() method return the position of the first occurrence of a value in a string.

// the indeof() method return -1 if the value is not found.

// the indexof() method is case sensitive.
