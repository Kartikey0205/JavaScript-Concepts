const Kartikey ={
    firstName : "Kartikey",
    lastName : "Dubey",
    role : "Admin",
    courseCount : 5,
    getInfo : function(){
        console.log(`
            First Name is : ${this.firstName}
            Last Name is : ${this.lastName}
            his role is : ${this.role}
            and he is enrolled in ${this.courseCount} courses.
        `);
    },
};

Kartikey.getInfo();

//getInfo(); ---->>> this simply means 
//getInfo ---->>> this simply means giving reference

const Vanya ={
    firstName : "Vanya",
    lastName : "Triphathi",
    role : "Sub-Admin",
    courseCount : 15,

};

// Vanya.getInfo();   ---->> this is not a function because getInfo is not defined in it

// now we are trying somehow getInfo will also be run from Vanya object this is done as when we run this code in browser then  we are able to see that there is one proto for object and also one proto is there for method itself and there we find 2 ways to invoke the same method via other

/*
Two ways are 
1. bind() --->> this only take reference and called further (by default both are point towards the initially Object if something is passed through it then only it will point toward that)
2. call() --->> this automatically execute the function (by default both are point towards the initially Object if something is passed through it then only it will point toward that)
 */


// Kartikey.getInfo --->> getinfo pe . dot lagate hi iske saare prototype ko access kr skte h

//bind()
 // Either call this way or the second way below
Kartikey.getInfo.bind(Vanya)();// This is now pointing to Vanya also

var getInfoForVanya = Kartikey.getInfo.bind(Vanya);
getInfoForVanya(); // this variable has reference of getInfo method 


// call()

Kartikey.getInfo.call(Vanya);// This is now pointing to Vanya also and automatically called
