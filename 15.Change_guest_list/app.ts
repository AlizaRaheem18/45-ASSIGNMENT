// ASSIGMENT 45
// Exercise 14
// Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people
// you’d like to invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.
let guest_list: string[] = ["Aliza", "Maheen", "sara", "razia"];
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `Dear freinds,` +
      guest_list[i] +
      `,\ni invited you on dinner tomorrow for my BIRTHDAY PARTY,\nTHANK YOU!`
  );
}


// Exercise 15
// Assignment 45
// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think 
// of someone else to invite.


let absent_guest : string[] = ['Maheen'];
let new_guest : string = ' shazia';
guest_list[1] = new_guest;

for (let i = 0; i < guest_list.length; i++) {
    console.log(
      `Dear freinds,` +
        guest_list[i] +
        `,\ni invited you on dinner tomorrow for my BIRTHDAY PARTY,\nTHANK YOU!`
    );
  }

console.log(`My freind ${absent_guest}  will not coming tommorow at dinner` );
