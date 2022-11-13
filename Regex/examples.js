//# Regular Expression Some Examples

//: 1.Password strength validation

const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!=.*\s)(?=.*[!@#$*])/;

//: 2. Email

const emailRegExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

//: URL

const urlRegExp =
  /https?:\/\/(www\.)?[-a-zA-Z0–9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0–9@:%_\+.~#()?&//=]*)/;

//: Dates

const dateRegExp =
  /^(19|20)\d\d[- /.](0[1-9]| 1[012]) [- /.](0[1-9]|[12][0-9]|3[01])$/;

//: HTML TAGS

const htmlRegExp = /<\/?[\w\s]*>|<.+[\W]>/;


//: Empty String

const emtStrRegExp = /^\s*$/;


//: Capture text between double quotes

const captureStrInDoubleQuote= /"([^']*)"/;

