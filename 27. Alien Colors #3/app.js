// ASSIGMENT 45
// QUESTION 27
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// version 01
var alien_colour = 'Green';
// • If the alien is green, print a message that the player earned 5 points.
if (alien_colour === 'Green') {
    console.log("Congratulion! You just earned 5 points.");
}
// • If the alien is yellow, print a message that the player earned 10 points
else if (alien_colour === 'Yellow') {
    console.log("Congratulion! You just earned 10 points.");
}
// • If the alien is red, print a message that the player earned 15 points
else if (alien_colour === 'Red') {
    console.log("Congratulion! You just earned 15 points.");
}
else {
    console.log("please select right colour");
}
// • Write three versions of this program, 
// making sure each message is printed for the appropriate color alien.
// version 02
alien_colour = 'Red';
if (alien_colour === 'Green') {
    console.log("Congratulion! You just earned 5 points.");
}
else if (alien_colour === 'Yellow') {
    console.log("Congratulion! You just earned 10 points.");
}
else if (alien_colour === 'Red') {
    console.log("Congratulion! You just earned 15 points.");
}
else {
    console.log("please select right colour.");
}
// version 03
alien_colour = 'Yellow';
if (alien_colour === 'Green') {
    console.log("Congratulion! You just earned 5 points.");
}
else if (alien_colour === 'Yellow') {
    console.log("Congratulion! You just earned 10 points.");
}
else if (alien_colour === 'Red') {
    console.log("Congratulion! You just earned 15 points.");
}
else {
    console.log("please select right colour.");
}
