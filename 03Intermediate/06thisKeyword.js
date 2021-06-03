//TODO - Part 1 for this keyword

console.log(this);
// We will discuss it further


/*
 this keyword is a notorious thing 
 this keyword which we have here gives a global context and it differs in a situation(various engine) 
 In the case of node it gives me a empty scope
 and in the case  of browser it gives us a window object.
  
 */
function sayName() {
    var name = "Kartikey";
    console.log(this);
}

sayName();