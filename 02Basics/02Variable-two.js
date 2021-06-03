const uid ="abc123";

var fullName ="Kartikey Dubey";
var email ="dkartikey1@gmail.com";
var password = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// Ways of getting result
console.log(fullName);
console.log(email);
console.log("Full Name is : "+ fullName);
console.log("Eamil is : ", email);

// fullName = prompt("Enter your Name ")---> Bad way 


// Good way is using Back Ticks
console.log(`
    With Unique Id is : ${uid}
    User is : ${fullName}
    and his email is : ${email}
    and uses the password : ${password}
`);

