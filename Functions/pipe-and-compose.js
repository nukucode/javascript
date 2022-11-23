//: Pipe() and Compose() In Javascript

//* Pipe =>

/* The concept of pipe is simple - it combines n functions. It's a pipe following left-to-right, calling each function with the output of the last one. */

// Let's write a function that returns someone's name.

const getName = (person) => person.name;

getName({ name: "therogersak" });
// "therogersak"

// Let's write a function that uppercases strings

const uppercase = (string) => string.toUpperCase();

uppercase("therogersak");
// "THEROGERSAK"

// So if we wanted to get and capitalize person's name, we could do this;

name = getName({ name: "Ankit" });
uppercase(name);
// "ANKIT"

/* Better, but I'm not fond of that nesting. It can get too crowded. What if we want to add a function that gets the first 6 characters of a string. */

const get5Characters = (string) => string.substring(0, 6);

get5Characters("therogersak");
// "thero"

// Resulting in:

get5Characters(uppercase(getName({ name: "therogersak" })));
// "THERO"

// Let's get really crazy and add a function to reverse strings.

const reverse = (string) => string.split("").reverse().join();

reverse("therogersak");
// 'aksregoreht'

// Now we have:

reverse(get5Characters(uppercase(getName({ name: "therogersak" }))));

//? Pipe to the rescue!
/* Instead od jamming function within functions or creating a bunch of intermediate variables, let's pipe all the things! */

pipe(getName, uppercase, get5Characters, reverse)({ name: "therogersak" }); // "OREHT"

// let's step through it.

pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

/* Using rest parameters. We can pipe n functions. Each function takes the output of the previous one and it's all reduced? to a single value.

And you can use it just like we did below.*/

pipe(getName, uppercase, get5Characters, reverse)({ name: "therogersak" });

// I'll expand pipe and add some debugger statement, and we'll go line by line.

pipe =
  (...functions) =>
  (value) => {
    debugger;

    return functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };

/* Check out the local variables. functions is an array of the 4 functions, and value is { name: 'therogersak' }. 
  
  Since we used rest parameters, pipe allows any number of function to be used. It'll just loop and call each one.*/

//* What about compose()?
/* It's just pipe in the other direction.
  
  So if you wanted the same result as our pipe above, you'd do the opposite.*/

comepose(reverse, get5Characters, uppercase, getName)({ name: "therogersak" });

/* Notice how getName is last in the chain and reverse is first?.

Here's a quick implementation of compose.*/

comepose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

//@ therogersak
