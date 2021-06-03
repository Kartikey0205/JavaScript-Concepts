/*
Define a function that can answer the role of a user.
A user can be on the following roles:
admin - with all access 
subadmin - gets access to create/delete courses
testprep - gets access to create/delete tests
user - get access to consume content 
other - trial user 


input: getUserRole(name , role)
*/
//The old way of writing function is this
    //function getUserRole(name, role) {


//The new way of writing function is this --- here getUserRole is not a variable but a function name
    var getUserRole = function(name, role){ 

// Arrow functiom is also have something --> 
/*
    var getUserRole = (name, role) => { 

*/

    switch (role) {
        case "admin":
            return `${name} is admin with all the access`
            break;//This is not necessary
        case "subadmin":
            return `${name} is sub-admin with the access to create/delete courses`
            break;
        case "testprep":
            return `${name} is admin with the access to create/delete tests`
            break;
        case "user":
            return `${name} have a access to consume a content`
            break;
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Kartikey" ,"admin"));

var getRole = getUserRole("Sammy", "xyz");

console.log(getRole);