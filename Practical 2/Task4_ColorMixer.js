/*
NAME: NIDHI MANGTANI (23070521098)
SUBJECT: JAVASCRIPT
PRACTICAL 2 - TASK 4
--------------------------------------------------
TASK 4: Color Mixer using Destructuring and Spread/Rest Operators
--------------------------------------------------
Problem Statement:
Write a program that:
• Takes two arrays of colors from the user (e.g., ["red", "green"] and ["blue", "yellow"])
• Merges arrays using the spread operator into a new array called palette
• Extracts first and last colors using array destructuring
• Collects middle colors using the rest operator
• Displays a message like:
  "Main colors: Red and Yellow. Others in the palette: Green, Blue."
• No loops or manual array indexing allowed
*/

const colors1 = ["red", "green"];
const colors2 = ["blue", "yellow"];

const palette = [...colors1, ...colors2];
const [first, ...rest] = palette;
const last = rest.pop();
const others = rest;

console.log(`Main colors: ${capitalize(first)} and ${capitalize(last)}. Others in the palette: ${others.map(capitalize).join(", ")}.`);

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// SAMPLE OUTPUT:
// Main colors: Red and Yellow. Others in the palette: Green, Blue.
