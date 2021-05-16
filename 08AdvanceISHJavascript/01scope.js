// scope of var and let 

/*
In other programming language scope is jsut limit to {}
but 
in javascript scope means somnething like fn
 */

console.log(name1); // this is undefined because var search whole code and check whether it is defined somewhere or not and thus if found yes then it will be undefined
//console.log(name2);  // this will show error because  we are using here let and we intentionally do thus so that in backened we got error message instead of undefined
var name1 = "Kartikey";


// let name2 = "Vanya";


if (true) {
    var lastName1 =" Dubey";
    console.log(lastName1);
}
console.log("This is from outside and still it gives the result of lastName because of var used -- > " +lastName1);


// to overcome such adverse thing we use let beacuse its scope is upto only if exist
if (true) {
    let lastName2 =" Triphathi";
    console.log(lastName2);
}
console.log("This will show error beacuse scope is now limited due to let  " +lastName2);