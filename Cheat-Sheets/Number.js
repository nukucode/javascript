//# NUMBERS

var pi = 3.14;
pi.toFixed(0); // return 3
pi.toFixed(2); // return 3.14
pi.toPrecision(2); // return 3.1
pi.valueOf(); // return number
Number(true); // converts to number
Number(new Date()); // number of millisecond since 1970
parseInt("3 month"); // return number: 3
parseFloat("3.5 month"); // retrun number with decimal 3.5
Number.MAX_VALUE; // largest possible JS number
Number.MIN_VALUE; // smallest possible JS number
Number.NEGATIVE_INFINITY; // -Infinity
Number.POSITIVE_INFINITY; // Infinity
