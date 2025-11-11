/*
NAME: NIDHI MANGTANI (23070521098)
SUBJECT: JAVASCRIPT
PRACTICAL 2 - TASK 2
--------------------------------------------------
TASK 2: Build a Custom Greeting Generator with Default Parameters and Arrow Functions
--------------------------------------------------
Problem Statement:
Write a function named generateGreeting that:
• Takes in name, role, and location as parameters (all with default values)
• Uses an arrow function to return a greeting like:
  "Hello [name]! Your role is [role] and you are currently in [location]."
• Do not use the function keyword
• Use template literals
• Call the function with different combinations of arguments
*/

const generateGreeting = (name = "Guest", role = "Visitor", location = "Unknown") =>
  `Hello ${name}! Your role is ${role} and you are currently in ${location}.`;

console.log(generateGreeting("Nidhi", "Student", "Nagpur"));
console.log(generateGreeting("Aman"));
console.log(generateGreeting("Priya", "Developer"));
console.log(generateGreeting());

// SAMPLE OUTPUT:
// Hello Nidhi! Your role is Student and you are currently in Nagpur.
// Hello Aman! Your role is Visitor and you are currently in Unknown.
// Hello Priya! Your role is Developer and you are currently in Unknown.
// Hello Guest! Your role is Visitor and you are currently in Unknown.
