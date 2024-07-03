"use strict";
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let Magicians = ["Herry Poter", "Teller", "David Blaine", "Criss Angel"];
function make_great(Magicians) {
    let greetMagicians = [];
    Magicians.forEach(Magicians => {
        greetMagicians.push(`${Magicians} the Great`);
    });
    return greetMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let greetMagicians = make_great(Magicians.slice());
console.log("Orignal magicians");
show_magicians(Magicians);
console.log("Great Magicians:");
show_magicians(greetMagicians);
