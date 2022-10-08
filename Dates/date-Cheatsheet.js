//* Js Date Cheatsheet

//! Javascript Date Formates
// there are genrally three date formates
// 1. ISO Date = '2015-04-30' (Internatinal Standered)
// 2. Short Date = '03/30/2015'
// 3. Long Date = "Jan 30,2015" or "30 Jan, 2015"

const date = new Date();
console.log(date); // Sat Sep 24 2022 06:35:19 GMT+0530 (India Standard Time)

// get the date as a number (1-31)
console.log(date.getDate()); // 8

// get the day as a number (0-6)
console.log(date.getDay()); // 6

// get the the month as a number (0-11)
console.log(date.getMonth()); // 8

// get the fullyear as a four digit number (yyyy)
console.log(date.getFullYear()); // 2022

// this featrue no in js
console.log(date.getYear()); // 122

// get the hour (0-23)
console.log(date.getHours()); // 6

// get the minutes (0-59)
console.log(date.getMinutes()); // 43

// get the seconds (0-59)
console.log(date.getSeconds()); //51

// get the milliseconds (0-999)
console.log(date.getMilliseconds()); // 608

// get the time (millisecond since jan 1, 1970)
console.log(date.getTime()); // 1663982085736

console.log(date.getTimezoneOffset()); // -330

//? UTC - Coordinated Universal Time

console.log(date.getUTCDate()); // 24
console.log(date.getUTCDay()); // 6
console.log(date.getUTCMonth()); // 8
console.log(date.getUTCFullYear()); // 2022
console.log(date.getUTCHours()); // 1
console.log(date.getUTCMinutes()); // 19
console.log(date.getUTCSeconds()); // 22
console.log(date.getUTCMilliseconds()); // 98

//* Javascript Set Date Methods

console.log(date.setDate(31)); // set the day as a number (1-31)
console.log(date.setMonth(10)); // set the month (0-11)
console.log(date.setFullYear(2030)); // set the year (optionally month and day)
console.log(date.setHours(12)); // set the hour (0-23)
console.log(date.setMinutes(34)); // set the minutes (0-59)
console.log(date.setSeconds(56)); // set the second (0-59)
console.log(date.setMilliseconds(900)); // set the millisecond (0-999)
console.log(date.setTime(40)); // set the time (mill1 second since January 1, 1970)

//* Date String Method

//! toString()
console.log(date.toString()); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

//! toDateSring()
// date object is converted into a string using toDateString() method and return the date portion of a date object

// First three letters of the week day name
// First three letters of the month name
// Two digit day of the month, padded on the left a zero if necessary
// Four digit year (at least), padded on the left with zeros if necessary

console.log(date.toDateString()); // Thu Jan 01 1970

//! toLocaleString()
// the toLocaleString method retruns a date object as a string, using locale settings.

// The default language depends on the locale setup on your computer.

console.log(date.toLocaleString("en-US")); // 1/1/1970, 5:30:00 AM

//! toLocalDateString()

//the toLocalDateString() method returns the date (not the time) of a date ojbect as a string, using locale conventions

console.log(date.toLocaleDateString()); // 1/1/1970

var option = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleDateString("hi-IN", option)); // गुरु, 1 जनवरी 1970

//! toGMTString()

// THE toGMTString() method converts a date object, according to Greenwich Mean Time(GMT), to a string and return result.

console.log(date.toGMTString()); // Thu, 01 Jan 1970 00:00:00 GMT

//! toUTCString()

// the toUTCString method return a date object as a string, according to UTC.

// UTC time is the same as GMT time
console.log(date.toUTCString()); // Thu, 01 Jan 1970 00:00:00 GMT
