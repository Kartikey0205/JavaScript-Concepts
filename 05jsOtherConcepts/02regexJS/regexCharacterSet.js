let str = "Kartikey";


// [a-z] means a to z kch bhi aa skta h 
let reg = /K[a-z]rtikey/g;
console.log(reg.test(str));

// [A-Z] means A to z kch bhi aa skta h 
reg = /K[A-Z]rtikey/g;
console.log(reg.test(str));

// [0-9] means 0 to 9 kch bhi aa skta h 
reg = /Kartike[0-9]y/g;
console.log(reg.test(str));

// [^aty] means aty m se kch nhi aa skta h
reg = /K[^aty]rtikey/g;
console.log(reg.test(str));


// it means iske bhhech m aa skta h 
reg = /K[A-Za-z]rti[a-zA-Z]ey/;
console.log(reg.test(str));



// Quantifiers
str1 ="Kaartikey";
// it means a 2 times repeat ho skta h
let re = /Ka{2}rtikey/;
console.log(re.test(str1));



strNew ="Karrrikey";
// it means a 0 se 2 times repeat ho skta h
re = /Ka{0,2}r{0,3}t{0,8}ikey/;
console.log(re.test(strNew));

//Groups
str2 = "KarKartikey";

// it means (Kar) 2 times repeat ho skta h
let r = /(Kar){2}tikey/;
console.log(r.test(str2));