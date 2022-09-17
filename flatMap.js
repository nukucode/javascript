

// flatmap

/// the flatmap() method returns a new array formed by appylying a given callback function to each element of the array, and the flatening the array


/// it is identical to a map() followed by a flat;

let arr = [1,2,3,4,[1], [[4]]];

const example = arr.flatMap((x) => {
    return x * 2;
})

console.log(example);