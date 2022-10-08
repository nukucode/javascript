//: the javascript math object allow to perform mathematical task on numbers.
//* the math object is static.

//   1. Math Property (Constans)
//  the syntax of any math property is (math.property)
//  Javascript has 8 math property

/* 

 1. console.log(Math.E) - retrun Euler's Number
 2. console.log(Math.PI) - retrun PI 
 3. console.log(Math.SQRT2) - retrun square root of 2
 4. console.log(Math.SQRT1_2) - return square root of 1/2
 5. console.log(Math.LN2) - retrun natural logarithm of 2
 6. console.log(Math.LN10) - retrun natural Logarithm of 10
 7. console.log(Math.lOG2E) - return base 2 of logarithm of E
 8. console.log(Math.LOG10E) - return base 10 of logarithm of E
 */

// Some Math Methods
// The syntax of Math any methods id Math.method(number)

/*
 1. abs(x)  - return the absolute value of x
 2. floor(x) - return x, rounded downwards to the nearest interfer
 3. random() - return a random number between 0,1
 4. round(x) - return x to the nearest integer */



 /// some example --->

 let a = Math.abs(-5.2);
 console.log(a); // 5.2

 let x = Math.random();
 console.log(x); // 0.54645645756766766

 let y = Math.floor(Math.random() * 1000)
 console.log(y);