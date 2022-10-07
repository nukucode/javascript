//: ===> 40+ Killer Javascript One Liners <====

// 1. => Get a random boolean

const randomBoolean = () => Math.random() >= 0.5;

// 2. Check if the provided date is a weekday or weekend

const isWeekend = (data) => [0, 6].indexOf(data.getDay()) !== -1;

// 3. => Check if a number is even or odd

const isEven = (num) => num % 2 === 0;

// 4. => Remove all duplicate values in an array

const arr = (arr) => [...new Set(arr)];

// 5. => Check if a variable is an array

const isArray = (arr) => Array.isArray(arr);

// 6. => Generate a random number between two numbers

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// 7. => Generate a random string (unique id?)

const randomString = () => Math.random().toString(36).slice(2);

// 8. => Swapping Two Variables || Destructuring

let b = "a";
let a = "b";

[b, a] = [a, b];

// 9. => Calculate number of days between two dates

const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);

// 10. => Different ways of merging multiple arrays

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [8, 9, 10, 12, 3, 4, 5, 6];

const merge = (a, b) => array1.concat(array2);
//: or
const merge2 = (a, b) => [...a, ...b];
// or and remove the duplication
const merge3 = [...new Set(a.concat(b))];
//: or
const merge4 = [...new Set([...a], ...b)];

// 11. => Get the actual type of Js primitives

const trueType = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

// 12. => Truncate

//! String at the end
const truncate1 = (str, num) => {
  return str.length < num ? str : str.slice(0, num - 3) + "...";
};

//! string from the middle
const truncateStringMiddle = (str, num, start, end) => {
  return `${str.slice(0, start)}...${str.slice(str.length - end)}`;
};

//! a number to a fixed decimal point
const toFixed = (n, fixed) =>
  ~((Math.pow(10, fixed) * n) / Math.pow(10, fixed));

// 13. => Capitalizing a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalize("rogers"));

// 14. => Chech if the current tab is in view/focus

const isTabView = () => document.hidden;
//or
document.hidden ? "hidden" : "visible";

// 15. => Revers a string

const reverse = (str) => str.split("").reverse().join("");
//: or
const reverse2 = (str) => [...str].reverse().join``;

// 16. => Check if an element is currently in focus

const elementInFocus = (el) => el === document.activeElement;

// 17. => Check if the current user has touch events supported

const touchSupported = () => {
  "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch);
};

// 18. => Scroll to top of the page

const goToTop = () => window.scrollTo(0, 0, "smooth");
//: goToTop();
//! or
const scrollToTop = (ele) =>
  ele.scrollIntoView({ behavior: "smooth", block: "start" });
//: scroll to bottom of the page
const scrollToBottom = () => window.scrollTo(0, document.body.scrollHeight);

// 19. => Get average value of arguments

const average = (...arguments) =>
  arguments.reduce((a, b) => a + b / arguments.length);

console.log(average(1, 2, 3, 4, 5));

// 20. => Convert Fahrenheit/Celsius

const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

// 21. => Get query paramenters from the URL

const getQueryParams = (url) =>
  JSON.parse(
    '{"' +
      decodeURI(url.split("?")[1]).replace(/&/g, '", "').replace(/=/g, '":"') +
      '"}'
  );

console.log(getQueryParams("https://medium.com/search?q=javascript"));

// 22. => Clipboard Api

const copy = (text) => navigator.clipboard.writeText(text);

// To Paste text
const text = navigator.clipboard.readText();

// 23. => Get Value of a browser cookie

const cookie = (name) =>
  `; ${document.cookie}`.split(`;${name}=`).pop().split(";").shift();

// 24. => check if data is valid

const isDateValid = (...val) => !Number.isNaN(+new Date(...val));

// 25. => Find which is the day by a given data in year

const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

console.log(dayOfYear(new Date()));

// 26. => Clear All Cookies

const clearCookies = document.cookie
  .split(";")
  .forEach(
    (cookie) =>
      (document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/==.*/, `=;expires=${new Date(0).toUTCString()}; path=/`))
  );

// 27. => check if array is empty && object is empty

const isNotEmpty = (arr) => arr?.some((x) => x);
//: or
const isNotEmpty2 = (arr) => Array.isArray(arr) && arr.length > 0;

// 28. => object Is Empty

const isEmpty = (obj) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// 29. => Get Selected Text

const getSelectedText = () => window.getSelection().toString();

// 30. => Detect Dark Mode

const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

console.log(isDarkMode);

// 31. => Shuffle an array

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 32. => Generate Random Hex

const randomHex = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
//: or
const randomHex2 = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;

// 33. => convert RGB to Hex

const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

// 34. => Get Min & Max value of an array

const getMinMax = (arr) => [Math.min(...arr), Math.max(...arr)];

// 35. => Reload the current Page

const reload = location.reload();
// or
const reload2 = () => (location.href = location.href);

// 36. => Check if a string consists of a repeated character sequence

const consistsRepeatedSubstring = (str) =>
  `${str}${str}`.indexOf(str, 1) !== str.length;

// 37. => Convert a letter to associate emoji

const latterEmoji = (c) =>
  String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365);

// 38. => Calculate the angle of a line defined by two points

// IN RADIANS

const radiansAngle = (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x);

// IN DEGRESS

const degreesAngle = (p1, p2) =>
  Math.atan2(p2.y - p1.y, p2.x - p1.x) / 180 / Math.PI;

// 39. => Convert radians to degrees && degrees to radians

const radsToDegs = (red) => (red * 180) / Math.PI;

// &&

const degsToRads = (degs) => (deg * Math.PI) / 180.0;

// 40. => Wait for an amount of Time

const wait = async (millisecond) =>
  new Promise((resolve) => setTimeout(resolve, millisecond));

// 41. => Create an object from the pairs of key and value

const toObj = (arr) => Object.fromEntries(arr);

// 42. => Remove falsy values from array

const removeFalsy = (arr) => arr.filter(Boolean);

// 43. => get union of arrays

const union = (...arr) => [...new Set(arr.flat())];

// 44. => Partition an array based on a condition

const partition = (arr, criteria) =>
  arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);

console.log(partition([1, 2, 3, 4, 5, 6], (n) => n % 2));

// 45. => Verify that a given arguments is a number

function numChecker(n) {
  return !isNaN(parseFloat(n) && isFinite(n));
}
console.log(numChecker(5));
