// Regular Expressions --> Pattern Recognization technique also used in form validation

let reg = /Kartikey/g;//globally
// i means incase sensitive


let str = "Kartikey is learning Web Development  Kartikey";

console.log(reg.exec(str));
console.log(reg.test(str));
console.log(str.match(reg));
console.log(str.search(reg));
console.log(str.replace(reg,"Kartikey Dubey"));

