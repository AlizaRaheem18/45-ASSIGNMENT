// ASSIGMENT 45
// Exercise 14
// Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people
// you’d like to invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.
var guest_list = ["Aliza", "Maheen", "Sara", "Razia"];
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
var absent_guest = ['Maheen'];
var new_guest = ' Shazia';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear freinds," +
        guest_list[i] +
        ",\ni invited you on dinner tomorrow for my BIRTHDAY PARTY,\nTHANK YOU!");
}
console.log("My freind ".concat(absent_guest, "  will not coming tommorow at dinner"));
// exercise 16
// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of 
// your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
console.log('good news! i have found big table so we can invite more guest.');
guest_list.unshift(' KAMRAN');
guest_list.splice(2, 0, ' NASEEM');
guest_list.push('Asim');
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear freinds," +
        guest_list[i] +
        ",\ni invited you on dinner tomorrow for my BIRTHDAY PARTY,\nTHANK YOU!");
}
