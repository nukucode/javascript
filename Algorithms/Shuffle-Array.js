// Randomizes the order of the values of an array, retruning a new array.

const shuffle = ([...arr]) => {
  let m = arr.length;
  console.log(m);
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
};
const foo = [1, 2, 3];
console.log(shuffle(foo));
