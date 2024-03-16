
// Class: It is a blueprint for creating objects. It is a template for objects.
// It is a way to create objects with the same properties and methods.
class Animal {
  // constructor(): It is a special method for creating and initializing an object created with a class.
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  // describe(): It is a method that returns a string that describes the object.
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

// Creating objects with the class
let dog = new Animal('dog', 4)
let cat = new Animal('cat', 4)
let bird = new Animal('bird', 2)

// Accessing the properties and methods of the objects
console.log(dog.describe())
console.log(cat.describe())
console.log(bird.describe())

// Output:
// dog has 4 legs
// cat has 4 legs
// bird has 2 legs

