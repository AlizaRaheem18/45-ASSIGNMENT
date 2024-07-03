"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//Array of Magician's names.
let magicians = ["Herry Poter", "Teller", "David Blain", "Cris Angle"];
function show_magicians(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
