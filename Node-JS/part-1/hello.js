const maths = require('./math');  // Importing the math module

console.log("Hello World! I am learning Node.js"); 

//console.log(window);  // ->. works only in browser   This will throw an error because 'window' is not defined in Node.js. 
//console.log(alert);   // ->. works only in browser

//console.log(global);  // ->. works only in Node.js   This will log the global object in Node.js, which is similar to the 'window' object in browsers.
//console.log(setTimeout); // ->. works only in Node.js   This will log the setTimeout function, which is available in both Node.js and browsers, but it is part of the global object in Node.js.


console.log("The value of my module is",  maths.Add(5, 3));  // Using the Add function from the math module