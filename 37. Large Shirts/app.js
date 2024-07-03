"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", message = "I love Typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
//Large shirt with default message.
make_shirt();
//Medium shirt with default message.
make_shirt("medium");
//Custum shirt with a different message and size.
make_shirt("small", "Dive into Coding");
