console.log("hello world!")

console.log(typeof 42) // 'number'
console.log(typeof "str") // 'string'

// variable declaration
let counter = 0
const PI = 3.14
// variables dont have types
counter = 'zero'
// a const array or object can be mutated
const numbers = [1,2,3,4]
numbers[2] = 9 // fine
// prefer const over let
// **Dont user var keyword** you have been warned
// semicolons are optional

// Strict Mode
// For historical reasons, there are many obsolete, dangerous, dubious, questionable, and potentially disgusting features in JavaScript that we don't really want to use. 
// There is a strict mode that disables a good number of them. 
// To give you an example, without strict mode, it is legal to define a variable without even using let or const or var by simply naming the variable. 
// That is a terrible feature. If you misspelled the name of a variable, then a brand new variable would be created without any warning.
// add 'use strict' at top of file 
// or start node with '--use strict' command option.

// Special values : null, undefined , NaN
// - Three "bottom" values!
// - An uninitialized variable is undefined
// - A function return undefined if it exits without a return statement
// - The null value denotes an "intentionally" absent value.
// - Is this a useful distinction
// - My suggestion: Don't use null
// - The number NaN denotes "Not a number"
// - Caution: Inside a function, you can declare a local variable named undefined (or NaN)




