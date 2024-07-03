"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let Magicians = ["Herry Poter", "Teller", "David Blaine", "Criss Angel"];
function make_great(Magicians) {
    for (let i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + ` the Great`;
    }
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
make_great(Magicians);
show_magicians(Magicians);
