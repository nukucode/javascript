//* Lexical Scoping In Javascript

// -> lexical scoping is a convention used in many programing languages that sets the scope of a variable so that it  may only be called (referenced) from within the block of code in which it is defined. During runtime, Javascript does these two things parsing and execution. Lexical scoping takes place during the parsing phase of the js engine

//! what is parser

// A parser is a program that is part of the compiler, and parsing is part of the compiling process. Parsing happens during the anlysis stage of compilation.

// In parsing, code is taken from the preprocessor, broken into smaller pieces and analyzed so other software can understand it.

//* typical steps performed by compilers

// ? => lexical analysis => syntax analysis => semartic analysis => IR code generation => optimization => output code generation

//! parser end

// -> the ability of a function scope to access variables from the parent scope is called Lexical scope.

//? the child function is lexically bonded to the parent But the opposite is not true; the variables defined inside a functioncould not be accessed outside that function.

//! in the exapmle

function car() {
  var model = "BMW770";
  function displayModel() {
    console.log(model);
  }

  return displayModel;
}

var chooseCar = car();
chooseCar();
