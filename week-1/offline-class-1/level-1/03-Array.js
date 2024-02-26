// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()


// push(): It adds new items to the end of an array, and returns the new length.
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);
// Output: Original Array: [ 1, 2, 3 ]
//         After push: [ 1, 2, 3, 4 ]


// pop(): It removes the last element from an array and returns that element.
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);
// Output: Original Array: [ 1, 2, 3 ]
//         After pop: [ 1, 2 ]


// shift(): It removes the first element from an array and returns that element.
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);
// Output: Original Array: [ 1, 2, 3 ]
//         After shift: [ 2, 3 ]



// unshift(): It adds new items to the beginning of an array, and returns the new length.
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);
// Output: Original Array: [ 1, 2, 3 ]
//         After unshift: [ 0, 1, 2, 3 ]

// Diffrance between push() and unshift()
// push() adds new items to the end of an array
// unshift() adds new items to the beginning of an array



// concat(): It is used to merge two or more arrays. 
//This method does not change the existing arrays, but instead returns a new array.
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);
// Output: Original Arrays: [ 1, 2, 3 ] [ 4, 5, 6 ]
//         After concat: [ 1, 2, 3, 4, 5, 6 ]



// forEach(): It calls a function for each element in the array.
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function (item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);
// Output: Original Array: [ 1, 2, 3 ]
//         1 0
//         2 1
//         3 2



// map(): It calls a function for each element in the array and returns a new array.
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function (item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);
// Output: Original Array: [ 1, 2, 3 ]
//         After map: [ 2, 4, 6 ]



// filter():  It calls a function for each element in the array and returns a new array.
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function (item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);
// Output: Original Array: [ 1, 2, 3, 4, 5 ]
//         After filter: [ 4, 5 ]

// Difference between map() and filter()
// map() returns a new array with the same length as the original array
// filter() returns a new array with the same or fewer elements than the original array



// find(): It returns the first element in the array that satisfies the provided testing function.
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function (item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);
// Output: Original Array: [ 1, 2, 3, 4, 5 ]
//         After find: 4



// sort(): It sorts the elements of an array in place and returns the sorted array.
// The default sort order is ascending, built upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
// Output: Original Array: [ 5, 2, 3, 4, 1 ]
//         After sort: [ 1, 2, 3, 4, 5 ]

//The Compare Function
// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40 - 100 (a - b), and returns -60 (a negative value).
// The sort function will sort 40 as a value lower than 100.

// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.
