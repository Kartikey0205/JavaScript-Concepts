// falsy value
/*
undefined
null
0
''
NaN
*/

var user = null;
if (user) {
    console.log("Condition is True");
}

console.log(2 + 2);
// Js assumes another ones also a string --> Loosely Checking
console.log(2 + "2");
console.log("2" + 2);

var check = "2";
if (2 == check) {
    console.log("Loosely check so by assuming it will print");
}

if (2 === check) {
    console.log("Strict Checking thus condition will false so not print");

} else {

    console.log("Strict check so this time type will also be check");
}

