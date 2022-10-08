//: Creating an array of objects

let cars = [
  {
    color: "red",
    type: "minivan",
    registration: new Date("2017-01-01"),
    capacity: 10,
  },

  {
    color: "green",
    type: "van",
    registration: new Date("2018-01-01"),
    capacity: 15,
  },

  {
    color: "yellow",
    type: "truck",
    registration: new Date("2012-01-01"),
    capacity: 50,
  },
];

//* Add a new object at the start Array.unshift

cars.unshift({
  color: "purple",
  type: "turbo",
  registration: new Date("2021-01-01"),
  capacity: 30,
});

console.log(cars);

//* Add a new object at the end - Array.push()

cars.push({
  color: "black",
  type: "car",
  registration: new Date("2025-01-01"),
  capacity: 2,
});

//* Add a new object in the middle Array.slice

/** Array.slice(
    {index where to start},
    {how many item to remove},
    {item to add}
) */

cars.splice(2, 0, {
  color: "white",
  type: "helicopter",
  registration: new Date("2019-01-01"),
  capacity: 4,
});

//* Find an object in an array by its values - Array.find

let car = cars.find((car) => car.color === "white");

//? It's also possible to search for multiple values:

let car2 = cars.find((car) => car.color === "red" && car.type === "minivan");

console.log(car2);

//* Get multiple items from an array that match a condition - Array.filter

const redCars = cars.filter((car) => car.color === "red");

//* Transform objects of an array - Array.map

let sizes = cars.map((car) => {
  if (car.capacity <= 2) {
    return "small";
  }
  if (car.capacity <= 4) {
    return "medium";
  }

  return "large";
});

console.log(sizes);

//? It's also possible to create a new object if we need more values

let carsProperties = cars.map((car) => {
  let properties = {
    capacity: car.capacity,
    size: "large",
  };

  if (car.capacity <= 2) {
    properties["size"] = "small";
  }
  if (car.capacity <= 4) {
    properties["size"] = "medium";
  }

  return properties;
});

console.log(carsProperties);

//* Sort an array by a property - Array.sort

let sortedCars = cars.sort((c1, c2) =>
  c1.capacity < c2.capacity ? 1 : c1.capacity > c2.capacity ? -1 : 0
);

console.log(sortedCars);

//* Checking if objects in array fulfill a condition - Array.every, array.includes

let carsEvery = cars.every(
  (car) => car.color === "red" && car.type === "minivan"
);

let carsSome = cars.some(
  (car) => car.color === "red" && car.type === "minivan"
);
