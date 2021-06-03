const google ='google';
const fb =null;// it is a falsy value not a false REMEMBER

if (google) {
    console.log("1st Block Executed");
}

// Making completely 100% it as  a true or false by using double shot
if (!!fb) {
    console.log("2nd Block Executed");
}