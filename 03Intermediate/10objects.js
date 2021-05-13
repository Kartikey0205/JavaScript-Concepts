//declaring Objects
var user = {
    firstName : "Kartikey",
    lastName :"Dubey",
    role : "Admin",
    loginCount : 32,
    facebookSignIn :true
};
//Accessing Object
console.log(user.firstName);
console.log(user["lastName"]);


console.log(user.loginCount);
user.loginCount =44;
console.log(user.loginCount);

console.log(user);
console.table(user);