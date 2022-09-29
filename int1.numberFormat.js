//* Int1.NumberFormat

// the Int1.NumberFormat object enables language-sensitive number formatting.

const number = 34343.453;

//! example 2

const rupees = new Intl.NumberFormat("hi-IN", {
  style: "currency",
  currency: "INR",
}).format(number);

console.log(rupees); // ₹34,343.45

//! example 2

const jpy = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
}).format(number);

console.log(jpy); // ￥34,343

//! example 3

const eur = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
}).format(number);

console.log(eur); // 34.343,45 €

//! example 4

//? limit to three significant digits

console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(number)
);

// 34,300

//* without specifying a locale, a formatted string in the default locale and with default options is retruned.

const num = 5000;

console.log(new Intl.NumberFormat().format(num));

// 5,000 if in US English locale

//* using locales

console.log(new Intl.NumberFormat("ar-EG").format(num));
// -> ٥٬٠٠٠

console.log(new Intl.NumberFormat("de-DE").format(num));
// -> 5.000

// the nu extension key requests a numbering system, e.g. Chinese decimal

//*the nu extension key requests a numbering system, e.g. Chinese decimal

console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(num));
// → 五,〇〇〇

//* when requsting a language that may not be supported, such as
// Rajastani, includes a fallback language, in this case Indian

console.log(new Intl.NumberFormat(["raj", "id"]).format(number));

// -> 34.343,453

//* using Options

// the result can be customized using the optons arguments

const numbr = 34254353.435;

//* request a currency format

console.log(
  new Intl.NumberFormat("hi-IN", { style: "currency", currency: "INR" }).format(
    numbr
  )
); // -> ₹3,42,54,353.44

//* the japanese yen doesn't use a minor unit

console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    numbr
  )
);

// -> ￥34,254,353

//* limit to three significant digits

console.log(
  new Intl.NumberFormat("hi-IN", {
    maximumSignificantDigits: 4,
  }).format(numbr)
); // 3,42,50,000

//* Formating with units

console.log(
  new Intl.NumberFormat("hi-In", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(100)
);

// -> 100 कि॰मी॰/घं॰

console.log(
  new Intl.NumberFormat("hi-IN", {
    style: "unit",
    unit: "liter",
    unitDisplay: "short",
  }).format(50))

  // -> 50 ली॰



  // * style

//   the formatting to use. the default is "decimal"

//? "decimal" for plain number formatting.
//? "currency" for currency formating
//? "percent" for percent formatting.
//? "unit" for percent formatting


const formatter =  Intl.NumberFormat('hi', {
    notation: 'compact'
})

console.log(formatter.format(1235))
console.log(formatter.format(123455))
console.log(formatter.format(1233455)
)
console.log(formatter.format(12345434567657))


// let formatter = Intl.NumberFormat('en', { notation: 'compact' });
// // example 1
// let million = formatter.format(123456);
// // example 2
// let billion = formatter.format(1234567890);
// // print
// // console.log(million == '1M', billion == '1B');

// console.log(million);
// console.log(billion);