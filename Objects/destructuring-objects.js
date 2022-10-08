// Destructuring Objects

/// write less code by unpacking properties from objects into distinct variables

// old method
const save = (params) => {
  saveData(params.name, params.email, params.number);
};

// new method

const save1 = ({ name, number, email }) => {
  saveData(name, email, number);
};

const obj = {
  name: "ANK",
  email: "therogersak@gmail.com",
  number: "43-45-44-54-54-4",
};

console.log(save1(obj));

/// other method
const { name, email, number } = obj;
console.log(name, email, number);
