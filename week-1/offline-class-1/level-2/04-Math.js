// Math Object
// Math is a built-in object that has properties and methods for mathematical constants and functions.
// It’s not a function object.
// Math works with the Number type.
// It doesn't work with BigInt.
// Math has properties and methods for mathematical constants and functions.
// Math is not a constructor. All properties and methods of Math are static.

// Math Methods
function mathMethods(value) {
  console.log("Original Value:", value);

  // Math.round(): It returns the value of a number rounded to the nearest integer.
  let rounded = Math.round(value);
  console.log("After round():", rounded);

  // Math.ceil(): It returns the smallest integer greater than or equal to a given number.
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  // Math.floor(): It returns the largest integer less than or equal to a given number.
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  // Math.random(): It returns a random number between 0 (inclusive), and 1 (exclusive).
  let randomValue = Math.random();
  console.log("After random():", randomValue);

  // Math.abs(): It returns the absolute value of a number.
  let absoluteValue = Math.abs(value);
  console.log("After abs():", absoluteValue);

  // Math.max(): It returns the largest of zero or more numbers.
  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  // Math.min(): It returns the smallest of zero or more numbers.
  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  // Math.pow(): It returns the value of a number raised to the power of another number.
  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  // Math.sqrt(): It returns the square root of a number.
  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);

  // Math.PI: It returns the value of PI (π).
  let piValue = Math.PI;
  console.log("PI Value:", piValue);

  // Math.E: It returns the value of Euler's number (e).
  let eValue = Math.E;
  console.log("E Value:", eValue);

  // Math.sin(): It returns the sine of a number.
  let sineValue = Math.sin(value);
  console.log("Sine Value:", sineValue);

  // Math.cos(): It returns the cosine of a number.
  let cosineValue = Math.cos(value);
  console.log("Cosine Value:", cosineValue);

  // Math.tan(): It returns the tangent of a number.
  let tangentValue = Math.tan(value);
  console.log("Tangent Value:", tangentValue);

  // Math.log(): It returns the natural logarithm (base E) of a number.
  let naturalLogValue = Math.log(value);
  console.log("Natural Log Value:", naturalLogValue);

  // Math.exp(): It returns the value of E raised to the power of a number.
  let expValue = Math.exp(value);
  console.log("Exponential Value:", expValue);

}

// Example Usage for Math Methods
mathMethods(4.56);
// Output:
// Original Value: 4.56
// After round(): 5
// After ceil(): 5
// After floor(): 4
// After random(): 0.5489718402581713
// After abs(): 4.56
// After max(): 15
// After min(): 5
// After pow(): 20.7936
// After sqrt(): 2.135415650406262
// PI Value: 3.141592653589793
// E Value: 2.718281828459045
// Sine Value: -0.977530117665097
// Cosine Value: 0.2107957994307797
// Tangent Value: -4.633978823472428
// Natural Log Value: 1.518466134717455
// Exponential Value: 95.47083745978685
