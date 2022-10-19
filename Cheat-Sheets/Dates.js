//# Dates

var date = new Date();

Date("2017-06-23"); // date declaration
Date("2017"); // is set to Jan 01
Date("2017-6-23T12:00:00:09:45"); // YYYY-MM-DDTHH-MM-SSZ
Date("June 23 2017"); // Long Date Format
Date("Jun 23 2017 07:45:00 GMT+0530"); // time zone


getDate();  // day as a number (1-31)
getDay();   // weekday as a number (0-6)
getFullYear()  // four digit year (YYYY)
getHours()   // hour (0-23)
getMilliseconds()  // millisecond (0-999)
getMinutes()  // minutes (0-59)
getMonth()   // month (0-11)
getSecond()  // second (0-59)
getTime()   // millisecond since 1970 

