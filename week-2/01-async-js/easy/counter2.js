// ## Counter without setInterval

// Without using setInterval, 
// try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter = 0;
let max = 10;

// setTimeout() is a function that calls a function or evaluates an expression after
//  a specified number of milliseconds.
//  The function is only called once.
//  The first parameter is the function to be executed.
//  The second parameter is the interval in milliseconds.
//  The third parameter is optional and is the first parameter to the function.
//  The fourth parameter is optional and is the second parameter to the function.
//  And so on...
//  The setTimeout() method will continue calling the function until clearTimeout() is called,
//  or the window is closed.

function count() {
    counter++;
    console.log(counter);
    if (counter < max) {
        setTimeout(count, 1000);
    }
}

count();
