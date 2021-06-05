// suppose Data is coming from db

var john = {
    name : "I am John",
    isActive : true,
    age : 24,
}

var marry = {
    name : "I am Marry",
    isActive : true,
    age : 47,
}
var sam = {
    name : "I am Sam",
    isActive : false,
    age : 40,
}


let users = new Map();

// console.log(typeof users);

/*
.set("ourKey", this is coming from db)
*/
users.set("john",john);
users.set("marry",marry);
users.set("sam",sam);

// it returns us a iterators

console.log(users);
console.log(users.size);
console.log(users.get("marry")); // gives everything related to marry
console.log(users.keys());  // all the keys 
console.log(users.values());  // all the values 
 



/*

for (const iterator of users.keys()) {
    console.log(iterator);
}

for (const iterator of users.values()) {
    console.log(iterator);
}


*/
for (const [key , value] of users) {
    console.log(key + " = " +  value);
}
for (const [key , value] of users.entries()) {
    console.log(`${key}  =  ${value}`);
}

// array of array
var arrOfArr = [["one","1"],["two","2"],["three","3"]]
var newMap = new Map(arrOfArr);

console.log(newMap);