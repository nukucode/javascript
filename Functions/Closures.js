//: Closures In Javascript

const fifty = 50;

function sum(number) {
  console.log(number + fifty);
}

sum(100);

/* In this code, you can see that the fifty variable has 
   its own scope (globle scope), and the number variable
   (argument in the sum function)  has its own scope. What you
   notice here is that the sum function has access to the
   global scope. therefore it has access to fifity 
*/

//* A Closure is a concept where a function (with its own local scope) has access to its outer scope (like its parent scope)



function outerTotal(number1) {
  return function innerTotal(number2) {
    const total = number1 + number2;
    console.log("Total",total);
  };
}

const findTotal = outerTotal(100);
findTotal(200)
