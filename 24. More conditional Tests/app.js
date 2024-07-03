// ASSIGMENT 45
// QUESTION 24
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False 
// result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var Firstname = "aliza";
var age = 20;
var luckyNumbers = [1, 2, 3, 4];
// STRING TEST
// Test 1 (True)Equality
console.log("Is Firstname == 'aliza' ? I pridict True.");
console.log(Firstname == "aliza");
// Test 2 (False)Inequality
console.log("Is Firstname != 'aliza' ? I pridict False.");
console.log(Firstname != "aliza");
// lower case function test
// Test 5(True)
console.log("Is Firstname.toLowerCase() == 'aliza' ? I pridict True.");
console.log(Firstname.toLowerCase() == "aliza");
// Test 6(False)
console.log("Is Firstname.toLowerCase() == 'maheen' ? I pridict False.");
console.log(Firstname.toLowerCase() == "maheen");
// • Numerical tests
// Test 7(True)Equality
console.log("Is age == 20 ? I pridict True.");
console.log(age == 20);
// Test 8(False)Inequality
console.log("Is age != 25? I pridict True.");
console.log(age != 25);
// Test 9 Greater than(True)
console.log("Is age > 18 ? I pridict True.");
console.log(age > 18);
// Test 10 Less than (False)
console.log("Is age < 18 ? I pridict False.");
console.log(age < 18);
// Greater than or equal to Less than or equal to
console.log("Is age >= 18 ? I pridict True.");
console.log(age >= 18);
console.log("Is age <= 15? I pridict True.");
console.log(age <= 15);
// Logical Operators
// Test 11 AND (True)
console.log("Is 20 < age < 30 ? I pridict True.");
console.log(age < 20 && age > 30);
// Test 12 OR (False)
console.log("Is age > 5 || age < 15 ? I pridict False.");
console.log(age > 5 || age < 15);
// Array Test
// Test 13 (True)
console.log("Is 3 in luckyNumbers ? I pridict True.");
console.log(3 in luckyNumbers);
// Test 13 (False)
console.log("Is 5 in luckyNumbers ? I pridict False .");
console.log(5 in luckyNumbers);
