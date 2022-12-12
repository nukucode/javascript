//: Fibonacci

// Generates an array, containing the FIBONACCI SEQUENCE, UP UNTIL THE NTH TERM

const Fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

  console.log(Fibonacci(10))