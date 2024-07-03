"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let favoriteFruit = ['Apple', 'Mango', 'Banana'];
if (favoriteFruit.includes('Apple')) {
    console.log('You really like Apple!');
}
if (favoriteFruit.includes('Mango')) {
    console.log('You really like Mango!');
}
if (favoriteFruit.includes('Orange')) {
    console.log('You really like Orange!');
}
if (favoriteFruit.includes('Banana')) {
    console.log('You really like Banana!');
}
if (favoriteFruit.includes('Grapes')) {
    console.log('You really like Grapes!');
}
