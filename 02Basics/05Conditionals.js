// User is only allowed to purchase when he is :
// isLoggedIn
// email verified
// card-info - valid
// If anyone is missing , stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if (isLoggedIn) {
//     console.log("Logged IN success!!");
//     if (isEmailVerified) {
//         console.log("Email is Verified");
//         if (cardInfo) {
//             console.log("You can make a purchase");
//         }
//     }
// }

// Better way
if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make a purchase");
} else {
    console.log("You are not allowed to make a purchase");
}