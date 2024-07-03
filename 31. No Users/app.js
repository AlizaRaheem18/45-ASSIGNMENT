"use strict";
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let user = ['maha', 'muskan', 'alia', 'aliza', 'admin'];
if (user.length === 0) {
    console.log('We need to find some users!');
}
else {
    user = [];
    console.log("All user has removed" + user.length);
}
