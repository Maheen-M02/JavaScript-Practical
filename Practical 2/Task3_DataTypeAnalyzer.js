/*
NAME: NIDHI MANGTANI (23070521098)
SUBJECT: JAVASCRIPT
PRACTICAL 2 - TASK 3
--------------------------------------------------
TASK 3: Implement a Data Type Analyzer (without typeof)
--------------------------------------------------
Problem Statement:
Create a function analyzeData that:
• Takes any input and prints:
  - What kind of primitive or reference type it is (without using typeof)
  - Whether it’s mutable or immutable
  - A summary message
• Must detect string, number, boolean, undefined, null, symbol, bigint, array, object, function
• Cannot use typeof, must use constructor checks, Array.isArray, etc.
*/

function analyzeData(value) {
  let type = "unknown";
  let mutability = "unknown";

  if (value === null) {
    type = "null";
    mutability = "immutable";
  } else if (value === undefined) {
    type = "undefined";
    mutability = "immutable";
  } else if (Array.isArray(value)) {
    type = "array";
    mutability = "mutable";
  } else if (value instanceof Function) {
    type = "function";
    mutability = "mutable";
  } else if (value instanceof String || Object.prototype.toString.call(value) === "[object String]") {
    type = "string";
    mutability = "immutable";
  } else if (value instanceof Number || Object.prototype.toString.call(value) === "[object Number]") {
    type = "number";
    mutability = "immutable";
  } else if (value instanceof Boolean || Object.prototype.toString.call(value) === "[object Boolean]") {
    type = "boolean";
    mutability = "immutable";
  } else if (Object.prototype.toString.call(value) === "[object Symbol]") {
    type = "symbol";
    mutability = "immutable";
  } else if (Object.prototype.toString.call(value) === "[object BigInt]") {
    type = "bigint";
    mutability = "immutable";
  } else if (value instanceof Object) {
    type = "object";
    mutability = "mutable";
  }

  console.log(`Type: ${type}`);
  console.log(`Mutability: ${mutability}`);
  console.log(`Summary: This is a ${mutability} ${type}.`);
}

// SAMPLE OUTPUT:
// analyzeData([1,2,3]) → Type: array | Mutability: mutable
// analyzeData(null) → Type: null | Mutability: immutable
// analyzeData("Hello") → Type: string | Mutability: immutable
