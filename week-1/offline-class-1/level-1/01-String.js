// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.


// Length: It returns the length of the string.
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");
// Output: Original String: Hello World
//         Length: 11



// indexOf: It returns the index of the first occurrence of the specified value.
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");
// Output: Original String: Hello World
//         Index: 6



// lastIndexOf: It returns the index of the last occurrence of the specified value.
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");



// slice: It returns the selected elements in the array, as a new array object.
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);
// Output: Original String: Hello World
//         After slice: Hello


// substring: It returns the selected elements in the array, as a new array object.
//substr: The difference is that the second parameter specifies the length of the extracted part.
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);
// Output: Original String: Hello World
//         After substring: Hello

// Difference between slice and substring
// The difference is that substring cannot accept negative indexes.
// If you try to give a negative index, substring will treat it as 0.
// But slice will accept negative indexes, and it will start from the end of the string.



// replace : It replaces a specified value with another value in a string.
// replaceAll : It replaces all occurrences of a specified value with another value in a string.
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");
// Output: Original String: Hello World
//         After replace: Hello JavaScript



// split : It splits a string into an array of substrings, and returns the new array.
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");
// Output: Original String: Hello World
//         After split: [ 'Hello', 'World' ]




// trim: It removes whitespace from both sides of a string.
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");



// toUpperCase: It converts a string to uppercase letters.  
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");



// toLowerCase: It converts a string to lowercase letters.
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
