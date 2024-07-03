// ASSIGMENT
// QUESTION 26


// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.



let alien_colour: string = 'Yellow';


// if else statment 01
if(alien_colour == 'Yellow'){
    console.log("Congratulation! You just earned 5 point for shooting the alien.")
}else{console.log("Congratulation! You just earned 10 point for shooting the alien.")
}

// if else statment 02
alien_colour = 'Blue';

if(alien_colour == 'Yellow'){
    console.log("Congratulation! You just earned 5 point for shooting the alien.")
}else{console.log("Congratulation! You just earned 10 point for shooting the alien.")
}