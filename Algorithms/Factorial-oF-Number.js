//: Factorial OF NUMBER

const factorial = (n) =>
  n < 0
    ? (() => {
        throw new TypeError("Negative numbers are not allowed");
      })()
    : n <= 1
    ? 1
    : n * factorial(n - 1);

console.log(factorial(6)); // 720
