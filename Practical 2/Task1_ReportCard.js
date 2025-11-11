/*
NAME: NIDHI MANGTANI (23070521098)
SUBJECT: JAVASCRIPT
PRACTICAL 2 - TASK 1
--------------------------------------------------
TASK 1: Dynamic Student Report Card Using Destructuring and Template Literals
--------------------------------------------------
Problem Statement:
You are given a student object that contains the details of a student including name, roll number, and marks in 5 subjects.

Requirements:
• Calculate total and percentage
• Use destructuring to extract marks
• Use template literals to display a formatted report card
Example Output:
Report Card for Riya (Roll No: 101)
-----------------------------------
Subjects: Math: 85, Science: 90, English: 78, History: 88, Art: 92
Total Marks: 433
Percentage: 86.6%
*/

const student = {
  name: "Nidhi",
  prn: 23070521098,
  marks: { Math: 85, Science: 90, English: 78, History: 88, Art: 92 }
};

const { name, prn, marks: m } = student;
const total = m.Math + m.Science + m.English + m.History + m.Art;
const percentage = (total / 500) * 100;

console.log(`Report Card for ${name} (PRN: ${prn})`);
console.log(`Subjects: Math: ${m.Math}, Science: ${m.Science}, English: ${m.English}, History: ${m.History}, Art: ${m.Art}`);
console.log(`Total Marks: ${total}`);
console.log(`Percentage: ${percentage}%`);

// SAMPLE OUTPUT:
// Report Card for Nidhi (PRN: 23070521098)
// Subjects: Math: 85, Science: 90, English: 78, History: 88, Art: 92
// Total Marks: 433
// Percentage: 86.6%
