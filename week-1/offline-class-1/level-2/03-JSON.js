// JSON Methods: JSON.parse() and JSON.stringify()
function jsonMethods(json) {

  console.log("Original JSON String:", json);

  // JSON.stringify() method is used to convert JavaScript objects to JSON string
  let jsonStringified = JSON.stringify(json);
  console.log("After JSON.stringify():", jsonStringified);


  // JSON.parse() method is used to parse JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonStringified);
  console.log("After JSON.parse():", parsedObject);

}

// Example Usage for JSON Methods
const sampleJSON =
{
  "key": "value",
  "number": 42,
  "nested": { "nestedKey": "nestedValue" }
};

jsonMethods(sampleJSON);

// Output:
// Original JSON String: { key: 'value', number: 42, nested: { nestedKey: 'nestedValue' } }
// After JSON.stringify(): {"key":"value","number":42,"nested":{"nestedKey":"nestedValue"}}
// After JSON.parse(): { key: 'value', number: 42, nested: { nestedKey: 'nestedValue' } }