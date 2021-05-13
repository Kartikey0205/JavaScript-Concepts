 //THUMB RULE -  regular call gives window object

console.log(this); // regular call
var user = {
    firstName : "Kartikey",
    courseCount: 34,
    getCourseCount : function () {
        console.log("This is not a regular function so here this belongs to current object which returns ", this);
        function sayHello() {
            console.log("This is regular call so it will return window object ",this);
        }
        sayHello(); // regular call
    } ,     
}; 

user.getCourseCount(); // not a regular call