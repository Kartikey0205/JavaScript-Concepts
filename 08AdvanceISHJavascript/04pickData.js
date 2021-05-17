
const user =["Kartikey" ,5 ,"admin"];

/*
Simplest way 
console.log(user[2]);
// or we can store the value in some variable and then access it
var name = user[0];
var courseCount = user[1];
var role = user[2];

console.log(name);

 */
// Destructuring the data 
const [name , courseCount ,role ] = user;
console.log(name);


const Myuser ={
    firstName : "Vanya",
    lastName : "Triphathi",
    newCourseCount : 5,
    newRole: "Sub-admin",
}

// in case of object both right side = left hand side but in this case key will also be same otherwise error

const {firstName,lastName ,newCourseCount,newRole} = Myuser;
console.log(newRole);