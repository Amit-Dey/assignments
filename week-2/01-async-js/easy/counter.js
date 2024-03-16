// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


let counter = 0;

// setInterval() is a function that calls a function or evaluates an expression
//  at specified intervals (in milliseconds).
//  The setInterval() method will continue calling the function until clearInterval() is called,
//  or the window is closed.
//  The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
//  The first parameter is the function to be executed.
//  The second parameter is the interval in milliseconds.
setInterval(() => {
  counter++;
  console.log(counter);
}, 1000);
