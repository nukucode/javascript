//: 19.1 => Perform type coercion at the beginning of the statement.

//: 19.2 => String: eslint: no-new-wrappers

// bad
const totalScore = new String(this.reviewScore); // typeof totoalscore is "object" not "string"

// bad
const totalScore2 = this.reviewScore + ""; // invokes this.reviewScore.valueOf()

// bad
const totalScore3 = this.reviewScore.toString(); // isn't guranteed to return a string

// good
const totalScore4 = String(this.reviewScore);

//: 19.3 => /* Numbers Use "Number" for type casting and parseInt always with a radix for parsing strings. eslint: redix, no-new-wrappers */

const inputValue = 4;

// bad
const val = new Number(inputValue);

// bad
const val2 = +inputValue;

// bad
const val3 = inputValue >> 0;

// bad
const val4 = parseInt(inputValue);

// good
const val5 = Number(inputValue);

// good
const val6 = parseInt(inputValue, 10);

//: 19.4 => /* If for whatever reason you are doing something wild and parseInt is your bottleneck and need to use Bitshift for performance reasons, leave a comment explainning why and what you're doing. */

// good
/* parseInt was the reason my code was slow.
   Bitshifting the string to coerce it to a
   Number made it a lot faster. */

const val7 = inputValue >> 0;

//: 19.5 => /* Note: BE CAREFUL when using "bitshift" operations. Numbers are represented as 64-bit values, but bitshift operations always return a 32-bit interger. Bishift can lead to unexpected behavior for integer value larger than 32 bits. Largerst signed 32-bit int is 2,147,483,647 */

2147483647 >> 0; // => 2147483647
2147483648 >> 0; // => -2147483648
2147483649 >> 0; // => -2147483647

//: 19.6 => Booleans: eslint: no-new-wrappers

const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge2 = Boolean(age);

// best
const hasAge3 = !!age;
