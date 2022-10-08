//* Type Of native errors in Javascript

//! 1. RangeError

// This is thrown when a number is outside an allowable ranges of values.

// const arr = [90, 88];
// arr.length = 90 ** 99;

// beacuse the number  we want to increase the arr array to is out of range specified by Js.

//! 2. ReferenceError

// this error is thrown when a reference made to a variable/item is broken. That is the variable/item doesn't exist.

// const name = "therogersak";
// name;
// name2;

// So, a RefernceError is thrown by Js Engine when a variable name can't be found in the env record.

// NOTE-: an undefined variable won't throw RefernceError because it exists in the env record just that its values hasn't been set.

//! 3. SyntaxError

// this is the most common error we encounter. This error occurs when we type code that the js engine can understand.

// this error is caught by the js engine during parsing. there are different stages in the Js engine our code is put through before we see those result on the terminal

// tokenization
// parsing
// interpreting

//? tokenization breaks the source of the code into individual units. At this stage numbers, keywords, literals, operators are sorted out and individually marked.

// During these two stages, tokenization and parsing, if the syntax/source of our codes doesn’t conform to the syntax rules of JS makes the stages fail and throw SyntaxError. For example,

// const age h = 12;

//! TypeError

// typeError is used to indicate an unsuccessful operation when none of the other NativeError objects are an appropriate indication of the failure cause.

// typeError occurswhen an operation is performed on a wrong data type. Maybe a boolean is expected but a string is found

// const num = 132;
// num.toUpperCase()

//! URIError

// this indicates that one of the global URI handling function was used in a way that is incompatible with its definition.

// URI (Uniform Resource Indicator) in js has the function: decodeURI, decodeURIComponent, etc.

// If we call any of them with the wrong parameter we will get a URIError.

decodeURI("%");

//! EvalError

// this is used identify errors when using the global eval() function.

// according to EcmaSpec 2018 edition

// this expeption in not currently used within this specification. this object remoains for compatibility with previous editions of the specification


//! IntelnalError


// this error occurs internally in js engine, especially when it has too much data to handle and the stack grows way over its critical limit.


// this occurs when the js engine is overwhelmed by too many recursions, too many switch cases, etc

switch(num) {
    case 1:
    ...
    break
    case 2:
    ...
    break
    case 3:
    ...
    break
    case 4:
    ...
    break
    case 5:
    ...
    break
    case 6:
    ...
    break
    case 7:
    ...
    break
    ... up to 1000 cases
    }

    // to much recursion, a simple example is this:

    function foo(){
        foo()
    }

    foo()