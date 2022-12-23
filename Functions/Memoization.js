//: Memoization

/* Memoization is the programmatic practice of making long recursive/iterative functions run much faster */

function memo() {
  var cache = {};
  return function (value) {
      if (value in cache) {
        console.log("Fetching cached value...")
      return cache[value] * 10
    } else {
      val = value * 2;
      cache[value] = val;
      return val;
    }
  };
}

const memoization = memo();
console.log(memoization(10));
console.log(memoization(10));




