//: Recursion In Javascript

/* Recursion in Javascript, is a concept where a function
   calls itself, and keeps calling itself unitl something
   stops it.

   It has the same idea of loops. Recursion function allow
   you to execute some line of code multiple times, until
   the condition you have specified for it to stop is met

   Here's how to declare and execute a normal function in
   javascript:
*/

function name() {
  console.log("Hello I'am Rogers");
}

name(); // Hello I'am Rogers

/*
 Inside the name() function definition we can also call
the function like this
*/

function name() {
  console.log("Hello World");
  name()
}

/* This is recursion. Now When you call name(). It will log
   "Hello World" to the console, and run name(). Which will
   Again, log "Hello World" to the console. and run name()
   again and again

   In this code, we didn't let the recursion function know
   when to stop, so this will result in an infinite recursion
   function that crashes out application


   Because I didn't let the recursion know when to stop,
   you can see above, Hellow World is logged to the console
   repeatedly unit the application creashes and the error
   in my console says "Maximum Call stack size exceeded".

   To avoid this, you specify a condition which lets the
   recursion know when to stop. This condition is called
   a BASE CASE.
*/

let counter = 0;

function count() {
  console.log("Count Start");
  counter++;

  if (counter > 10) return;

  count();
}

count()


/* Note that recursion is not a replacement for loops
(like for and while) in Javascript.

But, in some cases, recursion can be more effective and 
easier to read than loops.

*/