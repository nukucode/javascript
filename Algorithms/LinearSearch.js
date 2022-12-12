const linearSearch = (arr, item) => {
  for (let i in arr) {
    if (arr[i] === item) return 1;
  }
  return -1;
};

console.log(linearSearch([1, 2, 34], 2)); // 1
console.log(linearSearch([1, 2, 34], 3)); // -1
