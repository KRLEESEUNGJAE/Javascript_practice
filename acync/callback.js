'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration 
console.log('1');
setTimeout(function () {
    console.log('2')
}, 1000)
console.log('3');
