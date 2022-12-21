console.log("==> DAY-3 CHALLENGES <==");

//: Even or Odd

const even_or_odd = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};

console.log(even_or_odd(0));
console.log(even_or_odd(2));

//: Clock

const past = (h, m, s) => {
  return h * 60 * 60 * m * 60 * s * 1000;
};

console.log(past(1, 1, 1));

//: Returning Strings

const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("John"));

//: Century From Year

const century = (year) => {
  return Math.ceil(year / 100);
};

console.log(century(2023));

//: Kepp Hydrated

const litres = (time) => {
  return Math.floor(time * 0.5);
};

console.log(litres(2));

//: Is n Divisible by x and y?

const isDivisible = (n, x, y) => {
  return n % x === 0 && n % y === 0;
};

console.log(isDivisible(2, 2, 2)); // true

//: Vowel Count

const getCount = (str) => {
  let vowelCount = 0;
  for (let i of str) {
    if ("aeiou".includes(i)) vowelCount++;
  }

  return vowelCount;
};

console.log(getCount("I love javascript"));

//: Disemvowel Trolls

const disemvowel = (str) => {
  return str.replace(/[aeiou]/gi, "");
};

console.log(disemvowel("This website is for losers Lol!"));

//: Finde the Odd int

const findOdd = (arr) => {
  return arr.reduce((acc, v) => acc ^ v);
};

console.log(findOdd([10]))  // 10

console.log("==> DAY-3 CHALLENGES <==");
