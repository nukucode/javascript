//* Sum all numbers till the given one

function sum(num) {
  if (num == 1) return 1;
  return num + sum(num - 1);
}

// 2

function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// 3

function sumTo2(n) {
  return (n * (n + 1)) / 2;
}

//* Calculate FACTORIAL

function factorial(num) {
  return num == 1 ? 1 : num * factorial(num - 1);
}

console.log(factorial(5));

// Fibonacci numbers
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(5));


// 2

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757
