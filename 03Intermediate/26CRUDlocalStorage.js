// Local Storage takes 2 parameter in the format of string only 

localStorage.setItem("hero","Thor");

var myKeyOfLOCAL = localStorage.getItem("hero")
console.log(myKeyOfLOCAL);


localStorage.setItem("todo","Buy IceCream");
console.log(localStorage.getItem("todo"));



localStorage.setItem("todo","Online Study");
console.log(localStorage.getItem("todo"));


localStorage.removeItem("hero");

myKeyOfLOCAL = localStorage.getItem("hero")
console.log(myKeyOfLOCAL);


localStorage.clear()