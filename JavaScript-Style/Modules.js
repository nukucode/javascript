//: 10.1 => /* Always use modules (import/export) over a non-standard module system. You can always transpile to your preferred module system. */

// bad
const JsStyle = require("./Arrays");
module.exports = JsStyle.es6;

// ok
import JsStyle from "./Arrays";
export default JsStyle.es6;

// best
import { es5 } from "./Arrays";
export default es5;


//: 10.2 => Do Not use wildcard imports.
/* Why? This makes sure you have a single default export.*/

// bad
import * as JsStyle from './Arrays';

// good
import JsStyle from './Arrays';


//: 10.3 => And do not export directly from an import.
/* Why? Having multiple lines that import from the same path can make code harder to maintain */

// bad
export { es6 as default } from './Arrays';

// good
import { es6 } from './Arrays';
export default es6;


//: 10.4 =>  Only import from a path in one place. eslint: no-duplicate-imports


// bad
import foo from 'foo';
// some other imports
import { es5, es6 } from 'foo';

// good
import foo, { name1, named2 } from './Arrays';

//: 10.5 => Do not export mutable bindings. eslint: import/no-mutable-exports

/* Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special class, in general, only constant references should be exported. */

// bad
let foo = 3;
export { foo };
    
// good
const foo2 = 3;
export {foo2}


//: 10.6 => In modules with a single export, prefer defualt export over named export;

export default function foo() { }


//: 10.7 => Put all import s above non-import statement

/* Why? Since import are hoisted, keeping them all at the top prevents surprising behavior. */


// bad
import foo from 'foo';
foo.init();

import bar from 'bar';

// good
import foo from 'foo';
import bar from 'bar';

foo.init();


//: 10.8 => Multiline imports should be indented just like multiline array and object literal.

// bad
import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

// good
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE,
} from 'path';


//: 10.9 => Disallow WebPack loader syntax in module import statement

// bad
import fooSass from 'css!sass!foo.scss';
import barCss from 'style!css!bar.css';

// good
import fooSass from 'foo.scss';
import barCss from 'bar.css';


//: 10.10 => Do not include JavaScript filename extensions

// bad
import foo from './foo.js';
import bar from './bar.jsx';
import baz from './baz/index.jsx';

// good
import foo from './foo';
import bar from './bar';
import baz from './baz';