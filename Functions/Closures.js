//: Closures In Javascript

const fifty = 50;

function sum(number) {
  console.log(number + fifty);
}

sum(100);

/*
Closures allow to continue access these outer variables even after the outer scope finished. Instead of the Instance variables being GC, they stay around in memory.

=> The variable is closed over by the inner function, which keeps it around Instead of it being subjected to GC.
*/

//* A Closure is a concept where a function (with its own local scope) has access to its outer scope (like its parent scope)

function outerTotal(number1) {
  return function innerTotal(number2) {
    const total = number1 + number2;
    console.log("Total", total);
  };
}

const findTotal = outerTotal(100);
findTotal(200);

//? Some Closures Examples =>

function lookUpStudent(id) {
  var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" },
  ];

  return function (greeting) {
    var student = students.find((student) => student.id == id);

    return `${student.name} : ${greeting}`;
  };
}

var chosenStudent = [lookUpStudent(6), lookUpStudent(14)];

console.log(chosenStudent[1]("Wow"));
console.log(chosenStudent[0]("Hello"));

//? Adding Closures

function adder(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

var a = adder(10);
var b = adder(20);

console.log(a(5));
console.log(b(10));

//? Now let's examine an example where the closed-over variable is updated

function increement() {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}

var increment1 = increement();
console.log(increment1())
console.log(increment1());
console.log(increment1());


/*  Though the enclosing scope of a closure is typically from a function, that's not actually required; there only needs to be an inner function present inside an outer scope: */


var hits;
{   // an outer scope (but not a function)
    let count = 0;
    hits = function getCurrent(){
        count = count + 1;
        return count;
    };
}
hits();     // 1
hits();     // 2
hits();     // 3