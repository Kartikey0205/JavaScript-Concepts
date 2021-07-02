let sym1 = Symbol('Batman');
let sym2 = Symbol('Batman');


console.log(sym1 === sym2);

let obj = {
    name : 'Bruce',
    power : 'Detective',
    [sym1] : 3456,
}

console.log(obj);
console.log(obj[sym1]);


// Use Case 1 
 
const M_KEY = Symbol();

let obj1 = {};

obj1[M_KEY]=9876;


// Use Case 2 --> in angular or ionic framework

const COLOR_RED = Symbol('Red'); // switch case statement and return value