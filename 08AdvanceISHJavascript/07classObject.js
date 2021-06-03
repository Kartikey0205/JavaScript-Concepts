// import User from "./06classesJS";

const User = require("./06classesJS.js");
const Kartikey = new User("Katikey","dkartikey1@gmail.com");

console.log(Kartikey.getInfo());

Kartikey.enrollCourse("React Bootcamp");
Kartikey.enrollCourse("Angular Bootcamp");

console.log(Kartikey.getCourseInfo());

let courses =Kartikey.getCourseInfo();
courses.forEach(c => {console.log(c);})

