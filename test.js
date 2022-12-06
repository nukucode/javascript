let first = { key: "first" }; // shape A
let fast = { key: "fast" }; // the same shape A
let slow = { foo: "slow" }; // new Shape B

load(first);
load(fast);
load(slow);

function load(a) {
  return a.key;
}
