//: The Big 'O' Notation - An Introduction

/* Big O notation is used in computer science to describe the performace or complexity of an algorithm.

Algorithm are to computer programs. Different algorithms can achive a particular computer program. However, they are not all equally efficient or take the same amount of time to run. We use Big O to measure the efficiency of an algorithm.


=> For Eample, let's consider sorting. There are many sorting algorithms e.g. mergeSort, bubble sort, quicksort, and insertion sort. How do you know which is more efficient or less complex? This is why the Big O notation exists. 

You might wonder, why do we need a notation? Why don't we just consider the time it takes to run the algorithm? Here are two of many reason.

=> 1.Different computers have different processors ans thus some computers will spend less time running an algorithm that other.

=> 2.Some programming languages are faster than others.*/

//* O(1) - Constant Runtime

/* In this case, your algorithm runs the same time, regardless of the given inout data set. */

function returnFirst(ele) {
  return ele[0];
}

// The runtime is constant no matter the size of the input given

//* O(n) - Linear Runtime

/* Linear runtime occurs when the runtime grows in proportion with the size of the input data set. n is the size of the input data set. */

function constainsValue(ele, value) {
  for (let ele in ele) {
    if (ele === value) return true;
  }

  return false;
}

/* We see that the time taken to loop through all elements in the array grows with an increase in the size of the array. BUt what if the element is found before it reaches the last element in the array? Does the runtiime complexity changes.

Remember that the Big O notation considers the worst-case scenario. In this instance, it's the case where the loops run through all elements in the array. So that is what determines the runtime complexity of the algorithm.*/

//* O(n^2) - Quadratic Runtime

/* O(n^2) denotes an algorithm whose runtime is directly proportional to the square of the size of the input data set. An example of this is a nested iteration or loop to check if the data set contain duplicates. */

function constainsDuplicate(element) {
  for (let element in element) {
    for (let item in element) {
      if (element === item) return true;
    }
  }
  return false;
}

// Deeper nested iterations will produce runtime complexities of O(n^3), O(n^4) etc

//* O(log n) - Logarithm runtime

/* In this case, the runtime it takes for the algorithm to run will plateau no matter the size of the input data set.

A common example of this is a search algorithm like the binary search. The idea of a binary search is not to work with the entire data. Rather, reduce the amount of work done by half with each iteration. The number of operations required to arrive at the desired result will be log base 2 of the input size.*/

//* O(n log n) - Linearithmic runtime

/* Here, the runtime of the algorithm depends on running a logarithm operation n times.

Monst sorting alogrithms have a runtime complexity of O(n log n)*/

//* O(2^n) - Exponential runtime

/* This occurs in algorithms where for each increases in the size of the data set, the runtime is doubled. For a small data set, this might not look bad. But as the size of the data increase, the time taken to execute this algorithm increases rapidly */

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

console.log(fibonacci(2));

//* O(n!)  - factorial runtime

/* In this case, the algorithm runs in factorial time. The factorial of a non-negative integer (n!) is the product of all positive integers less than or equal to n. This is a pretty terrible runtime.

Any algorithm that performs permutation on a given data set is an example of O(n!) */
