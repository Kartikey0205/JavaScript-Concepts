// Implicit Call
function sayHello(name) {
    console.log("Hello there ,Kartikey");
    console.log("Hello there , ",name);
    console.log(`Hello there , ${name} . How are you?`);

}

// sayHello();
sayHello("Kartikey");

// Explicit Call

function namesty() {
    return "Hello in India";
}

var greeting= namesty();
console.log(greeting);
console.log(namesty());