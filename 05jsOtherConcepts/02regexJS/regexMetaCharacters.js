

let str = "Kartikey is learning Web Development (Kartikey)";
// ^ this means starts with
let reg = /^Kartikey/g;
console.log(reg.test(str));

// $ this means ends with
reg = /Kartikey$/g;
console.log(reg.test(str));

// . this means have only one character at that place
reg = /K.rtikey/g;
console.log(reg.test(str));


// * this means have many character at that place
reg = /K*tikey/g;
console.log(reg.test(str));


// a? this means that it is optional at that place to have a or not 
reg = /Ka?rtikey/g;
console.log(reg.test(str));

// \* means * is compulsory present there
reg = /Ka\*rtikey/g;
console.log(reg.test(str));