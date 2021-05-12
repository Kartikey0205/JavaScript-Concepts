// sayHello();

// function sayHello() {
//     console.log("Hello");
// }

if (2 === "2") {
    console.log("This is true statement");
}

// now window is one of the context which is already written in browser but here via node it will be in some other format


var myName ="Kartikey";
if (myName === myName) {
    console.log("This is true");
}

if (myName === window.myName) {
    console.log("This is again true");
}