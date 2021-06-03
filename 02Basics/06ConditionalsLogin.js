// Allow user to access course if he is:
// 1. Logged in from Email
// 2. Logged in from Google
// 3. Logged in from Facebook

var email = true;
var google = false;
var facebook = true;

if (email || google || facebook) {
    console.log("You can Login");
} else {
    console.log("You can't Login");
}