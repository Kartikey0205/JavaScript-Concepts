// making object through function  --->> aka prototype
// and whenever it is done so then  this keyword is used inside a function in a format of this.something for giving a key for a object
// and for a object we use new keyword!

// in prototype name should be recommended in uppercase
//prototype
var User = function (firstName, courseCount) {

    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`Course Count is ${this.courseCount}`);
    };
};

// proto --> let us suppose we have to add on some more method in object so surely we can  do it directly by adding into it nut its not a good way so instead of this we will inject new method from outside and that's the reason why in browser console there proto is written it simply means that all these properties can be injected later on 

//Injecting new method from outside into the object named User -----proto
//Syntax -- ObjectName.prototype.MethodName = function(){}
User.prototype.getFirstName = function () {
  console.log(`Your First Name is : ${this.firstName}`);// this.firstName is directly used here bcoz we know that firstName is already defined but if not so then we have to access it with any method  
};

// new keyword is used for a object via function
var Kartikey = new User("Kartikey", 4); // not a regular call
// new keyword is invoking a constructor for every single time and making unique instance everytime
console.log(Kartikey);

//calling  method which is in Object itself

Kartikey.getCourseCount();

//calling outside injected method( aka proto ) after checking condition only
if (Kartikey.hasOwnProperty("firstName")) {
    Kartikey.getFirstName();
    
}


var Vanya = new User("Vanya", 2);
console.log(Vanya);
Vanya.getCourseCount();
Vanya.getFirstName(); // Blunt call because if this shows a undefined then it is difficult to find out so good habit is to put some checks like above one

// the summary is .. here User is behaving like a prototype or say constructor and further we are using it 