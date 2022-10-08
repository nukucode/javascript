// flat

//  the flat method create a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// Argument - the depth level specifying how deep a nested array structure be flattened default value is 1;

// The flat method removes empty slots in arrays

const arr = [1, 2, 3, [4, 5, 6, 7, 8], 9];
console.log(arr.flat()); // depth is default = 1

const arr1 = [1, 2, [3, [4, 5], 6, 7, 8], 9];
console.log(arr1);
console.log(arr1.flat()); // depth is default = 1

const arr2 = [1, 2, [3, [4, 5], 6, 7, 8], 9];
console.log(arr2.flat(2)); // depth 2

const arr3 = [1, [2, [3, [4, 5, [6, 7, [8, 9]]]]], []];
console.log(arr3.flat(Infinity)); // depth infinity


