// For (Of)

/// Arguably the same amount of code required but for (of) is know to be 24% fater than forEach

//old method
const arr = [];
const render = (data) => {
  data.forEach((d) => {
    Array.push(d);
  });
};

// new method

const render1 = (data) => {
  for (let i of data) {
    arr.push(i);
  }
};
