// ASSIGNMENT 45
// Exercise 03
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


// lower case
let personName:string="Aliza"
console.log("lowercase:",personName.toLowerCase());

// uper case

console.log("upercase:",personName.toLocaleUpperCase());

// title case

console.log("titleCase:",personName.replace(/\bw/g,c => c.toUpperCase()));