function init() {
    var firstName = "Kartikey";
    function sayName(){
        console.log(firstName);
    };
    sayName();
}

init();
console.log(firstName);// this is not in scope because as soon as init get executed the variable defined inside will also be destroy so .. to deal with such case Closure concepts comes in market.