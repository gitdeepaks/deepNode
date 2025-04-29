const multiply = require('./calculate/multiply');

var myName = 'deepNode';

var a = 10;

var b = 20;

console.log(myName);

// console.log(a + b);
console.log(globalThis === global);
// console.log(this);
// multiply(a, b);

console.log(multiply(a, b));

// console.log(test);
