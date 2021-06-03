function init() {
    var firstName = "Kartikey";
    console.log("I am in init right now ");
    function sayName(){
        console.log(`Hello you are called as closure ,Welcome ${firstName}`);
    };
    return sayName;
}
//Closure --> it is 100% true to call it as a pointer but for understanding purpose you can go through it as init is returning a reference of a function and after storing it into some variable then it is called 
var value= init();
// doing so simply means that init doesn't leaves it memory after closure call becuase it stores a reference thus first name is accessable

value(); // .... this is a closure 


// 2nd example based on Closure

function Addition(x){
    // it is return some reference no name of function just a refernce
    return function (y){
        return x+y;
    };
};

var addingValue = Addition(6); // here addition function is invoked but the memory will remain in stack because it is still taking a reference of something

console.log(addingValue(7)); // now the reference function is invoked that means Closure is invoked and now it will return 6=7=13


// There is another way of invoking such closure 

console.log(Addition(8)(9)); // this is all depends on how memory is stored in JS

//Addition()()()// this is also known as curring