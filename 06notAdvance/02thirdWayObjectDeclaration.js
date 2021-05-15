// First Way of declaring Object -- directly with Key Value pair
//Second Way of declaring Object -- through function and use of new keyword while creating instance and injecting method from outside such as Object_Name.prototype
//Third Way of declaring Object -- through Object.create  and ,ost tricky part in this is lots of function

var User = {
    name : "",
    getFullName : function (){
        console.log(`User Name is : ${this.name}`);
    },

}
// 3rd way 
var Kartikey = Object.create(User);
console.log(Kartikey);

Kartikey.name = "Kartikey";
Kartikey.getFullName();

// Wierdness come while making constructor means passing at a same time 
var Vanya = Object.create(User , {
    name : {value : "Vanya"},
    courseCount : {value : 3},
});

Vanya.getFullName();