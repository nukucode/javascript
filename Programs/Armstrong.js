const number = prompt("Enter a number");
const digitLength = number.length;
let sum;

// create a temp variable
let temp = number;

while (temp > 0) {
  let reminder = temp % 10;

  sum += reminder ** digitLength;

  // removing the last digit of number
  temp = parseInt(temp / 10); // convert float into number
}

if (sum == number) {
  console.log(`${number} is an armStrong`);
} else {
  console.log(`${number} not an armStrong`);
}
