var user = ["ted" ,"tim" ,"som" ,"sed","sam","kar"];

// slice is just like a cutting of cake , it takes 2 parameter one a starting value and second a end value

console.log(user.slice(1,4));
console.log(user.slice(1));


// start from 1 and count upto 3 value and then put these value in it
user.splice(1,3,"Hi", "Bye");
console.log(user);