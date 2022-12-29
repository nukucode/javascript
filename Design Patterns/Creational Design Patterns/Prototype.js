//: Prototype creational design pattern

/* This pattern is an object-based creation design pattern. In this, we use a sort of a "skeleton" of an exiting object to create or instantiate new objects.

=> This pattern is specifically important and beneficial to javascript because it utilizes prototypal inheritance instead of a classic object-oriented inheritance. Hence, it plays to javascript dtrength and has native sipport.*/

// using Object.create as was recommended by ES5 standard

const car = {
  noOfWheels: 4,
  start() {
    return `stared`;
  },

  stop() {
    return `stopped`;
  },
};

// object.create(proto, [, propertiesObject])

const myCar = Object.create(car, { owner: { value: "Ankit" } });

console.log(myCar.__proto__ === car); // true
