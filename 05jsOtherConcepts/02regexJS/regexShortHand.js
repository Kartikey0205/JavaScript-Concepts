let str = "Kartikey";

// \w --> means 1 word character
// \w+ --> means 1 or more word character

// \W --> means 1 non-word character
// \W+ --> means 1 or more non-word character


// \d --> means 1 digit
// \d+ --> means 1 or more digit

// \D --> means 1 non-digit
// \D+ --> means 1 or more non-digit



// \s --> means 1 space character
// \s+ --> means 1 or more space character

// \S --> means 1 non-space character
// \S+ --> means 1 or more non-space character


// \b ---> means word boundary

let reg = /K\wrtikey/;
console.log(reg.test(str));


reg = /K\w+ikey/;
console.log(reg.test(str));



reg = /K\Wrtikey/;
console.log(reg.test(str));


reg = /K\W+ikey/;
console.log(reg.test(str));


str = "Karti90277key";
reg = /Karti\dkey/;
console.log(reg.test(str));


reg = /Karti\d+key/;
console.log(reg.test(str));



str = "Karti+%^key";
reg = /Karti\Dkey/;
console.log(reg.test(str));


reg = /Karti\D+key/;
console.log(reg.test(str));


str = "Karti  key";
reg = /Karti\skey/;
console.log(reg.test(str));


reg = /Karti\s+key/;
console.log(reg.test(str));


str = "Kart ikey";
reg = /Karti\Skey/;
console.log(reg.test(str));


reg = /Karti\S+key/;
console.log(reg.test(str));


let str1 = "kart45r5 jbxb";
let r = /45r5 \b/;
console.log(r.test(str1));


// Assertions

// (?=y)  --> means y hi ho 
str1 = "kart";
r = /kar(?=t)/;
console.log(r.test(str1));


// (!=y)  --> means y nhi ho 
str1 = "kart45r5";
r = /kar(?!t)45r5/;
console.log(r.test(str1));