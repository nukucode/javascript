//: Arrow function revisited

//* Arrow function have no "this"

/* arrow function do not have this. If this is accessed it is taken from the outside. */

let group = {
  title: "Our Group",
  students: ["Jhon", "Peter", "Ankit", "Alice"],

  showList() {
    this.students.forEach((student) =>
      console.log(this.title + ": " + student)
    );
  },
};

group.showList();

/* Here is forEach, the arrow function is used, so this.title in it is exactly the same as in the outer method showList. That is: group.title */

//! If we used a "regular" function there would be an error

let students = {
  title: "Our Group",
  students: ["Jhon", "Peter", "Ankit", "Alice"],

  showList() {
    this.students.forEach(function (student) {
      // Error: Cannot read property "title" of undefined
      console.log(this.title + ": " + student);
    });
  },
};

students.showList();

//! The error because forEach runs function with this=undefined by default, so the attempt to access undefined.title is made

//? Arrow function can't run with new
/* Not having this naturally means another limitation: arrow function can't be used as constructors. They can't be called with new */

//* Arrow have no "arguments"
/* Arrow functions also have no arguments variable.
=> That's great for decorators, when we need to forward a call with the current this and arguments. */

function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  console.log(`Hello ${who}`);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("Jhon"); // Hello, Jhon after 2 second

// The same without an arrow function would look like:

function defer2(f, ms) {
  return (...args) => {
    let ctx = this;
    setTimeout(function () {
      return f.apply(ctx, args);
    }, ms);
  };
}



/* 

=> DO NOT HAVE  -> this
=> DO NOT HAVE -> arguments
=> CAN'T BE CALLED WITH -> new
=> THEY ALSO DON'T HAVE -> super
*/
