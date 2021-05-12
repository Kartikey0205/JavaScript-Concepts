tipper("5");


function tipper(a) {
    var bill = parseInt(a); // parsing coming value into an int 
    console.log(bill + 5);

}

//bigTipper("55"); // here it is undefined because bigtipper is a not a function here it is something like a variable.
var bigTipper = function (a) {
    var bill = parseInt(a); // parsing coming value into an int 
    console.log(bill + 15);

}

bigTipper(55);
console.log(name1); // here name1 is actually undefined
var name1 = "Kartikey";

console.log(name1);

function sayName(){
    var name1 = "Mr. K";
    console.log(name1);
}

sayName();

console.log(name1);// this name1 is not any related to name1 which is inside a function

// hoisting means the lots of trouble which we faced here 