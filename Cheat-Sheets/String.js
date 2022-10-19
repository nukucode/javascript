
//# String

var abc = 'abcdefghijklmnopqrstuvwxyz';
var esc = 'I don\'t \n know'; // \n new line
var len = abc.length;  // string length
abc.indexOf("lmno")  // find subString
abc.lastIndexOf("xyz")  // last occurance
abc.slice(3,6) // cuts out "def";
abc.replace("abc", '123'); // find and replace
abc.toUpperCase(); // convert to upper case
abc.toLowerCase(); // convert to lower case
abc.concat(" ", str2); // abc + " " + str2
abc.charAt(2); // character at index "c"
abc[2]; // unsafe. abc[2] = "c" does't work
abc.charCodeAt(2); // character code at index: "c" => 99
abc.split(""); // splitting a strgin 
128.toString(16)  // number to hex(16). octal or binary
            