// Object Methods Explanation
// The Object methods are used to perform operations on objects.
// The Object methods are static methods that can be called directly from the Object class.
function objectMethods(obj) {

  console.log("Original Object:", obj);

  // Object.keys(): It returns an array of a given object's own enumerable property names.
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  // Object.values(): It returns an array of a given object's own enumerable property values.
  let values = Object.values(obj);
  console.log("After Object.values():", values);

  // Object.entries(): It returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  // Object.hasOwnProperty(): It returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  // Object.assign(): It copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
  let newObj1 = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj1);
  
  console.log("Original Object:", obj);

  // Object.assign() can also be used to modify the original object.
  let newObj2 = Object.assign(obj, { newProperty: "newValue" });
  console.log("After Object.assign() on original object:", newObj2);

  console.log("Original Object:", obj);

}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);

// Output:
// Original Object: { key1: 'value1', key2: 'value2', key3: 'value3' }
// After Object.keys(): [ 'key1', 'key2', 'key3' ]
// After Object.values(): [ 'value1', 'value2', 'value3' ]
// After Object.entries(): [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]
// After hasOwnProperty(): false
// After Object.assign(): {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   newProperty: 'newValue'
// }
// Original Object: { key1: 'value1', key2: 'value2', key3: 'value3' }
// After Object.assign() on original object: {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   newProperty: 'newValue'
// }
// Original Object: {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   newProperty: 'newValue'
// }

// In the above example, we have used the Object methods to perform operations on the sampleObject.
