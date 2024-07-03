// ASSIGMENT 45
// Exercise 14
// Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people
// you’d like to invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.
let guest_list: string[] = ["Aliza", "Maheen", "Sara", "Razia"];
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `Dear freinds,` +
//       guest_list[i] +
//       `,\ni invited you on dinner tomorrow for my BIRTHDAY PARTY,\nTHANK YOU!`
//   );
// }


// Exercise 15
// Assignment 45
// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think 
// of someone else to invite.


let absent_guest : string[] = ['Maheen'];
let new_guest : string = ' Shazia';
guest_list[1] = new_guest;

// for (let i = 0; i < guest_list.length; i++) {
//     console.log(
//       `Dear freinds,` +
//         guest_list[i] +
//         `,\ni invited you on dinner tomorrow for my BIRTHDAY PARTY,\nTHANK YOU!`
//     );
//   }

// console.log(`My freind ${absent_guest}  will not coming tommorow at dinner` );


// exercise 16
// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of 
// your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// console.log('good news! i have found big table so we can invite more guest.')

guest_list.unshift(' KAMRAN');
guest_list.splice(2,0,' NASEEM');
guest_list.push('Asim')

// for (let i = 0; i < guest_list.length; i++) {
//     console.log(
//       `Dear freinds,` +
//         guest_list[i] +
//         `,\ni invited you on dinner tomorrow for my BIRTHDAY PARTY,\nTHANK YOU!`
//     );
   
// Exercise 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive
//  in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message
//  saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your 
// list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to
//  dinner.

// • Print a message to each of the two people still on your list, letting them
//  know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print
// your list to make sure you actually have an empty list at the end
// of your program.
console.log('\n sorry i can not arrange big table, i can invite only two people.')
while(  guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry Dear,${remove_guest} you are not invited for dinner`)
}
for (let i=0; i <guest_list.length ; i++){
    console.log(`Dear `+ guest_list [i] + `\n\n yor are invited for dinner tommorow at my BIRTHDAY PARTY\n\n  .\n\n THANK YOU! \n\n`);

}
guest_list.splice(0,2)
console.log(guest_list);
