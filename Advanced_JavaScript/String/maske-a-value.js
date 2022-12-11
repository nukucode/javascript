//: MASKE A VALUE

/* => Use String.prototype.slice() to grab the portion of the character that will remain unmasked.

=> String.prototype.padStart() to fill the beginning of the string with mask character up to the original length.

=> If num is negative, the unmasked characters will be at the start of the string.

=> Omit the second argument, num, to keep a default of 4 characters unmasked.

=> Omit the third argument, mask, to use a default character of "*" for the mask.*/

const mask = (cc, num = 4, mask = "*") => {
  return `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
};

console.log(mask(123456789)); // ******6789
console.log(mask(123456789, 3)); // *******789
console.log(mask(123456789, -4, "$")); // $$$$56789
