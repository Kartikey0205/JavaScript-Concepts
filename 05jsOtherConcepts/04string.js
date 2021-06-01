//string function

var sampleString = "Let\'s start our journey with JavaScript";

console.log(sampleString.indexOf('start'));
console.log(sampleString.lastIndexOf('start'));
console.log(sampleString.slice(5,11));

// substring(start,end)   --> substring() cannot accept negative indexes.
// substr(start,length)   --> second parameter specifies the length of the extracted part

console.log(sampleString.replace("journey" ,"Adventure"));

console.log(sampleString.toLowerCase());
console.log(sampleString.toUpperCase());


var name1 = "Kevin";
var name2 = new String("Kevin");  //--> this is object not a string

if (name1 === name2) {
    console.log("Result is true");
} else {
    console.log("Result is false");
}