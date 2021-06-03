var countries = ["India","America","Russia","Japan"];
console.log(countries);

var states = new Array("Uttar Pradesh", "Rajasthan", "Assam","Mumbai");
console.log(states[0]);

//Replacing any value in array
states[2]="Bangalore";
console.log(states);
console.log(states.length);

var user = ["Kartikey","dkartikey1@gmail.com",3 , 34 , true];

user.pop();//last value get rid off
console.log(user);

user.unshift("Added in first");// starting in very first and shifting all other ahead
console.log(user);
user.unshift("it will remove after shift operation");
console.log(user);

user.shift();//it will remove element from first
console.log(user);

// finding posotion of any element
console.log(user.indexOf(3));


// want to converting anything into array Array.from is used
console.log(Array.from("Kartikey"));