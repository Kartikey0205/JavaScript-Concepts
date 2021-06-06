const students = {
    name: "Kartikey",
    age: 20,
    isActive : true,
}

console.log(typeof students);

// changing object into string 
const ObjectIntoString =  JSON.stringify(students);

console.log(typeof ObjectIntoString);

// console.log(ObjectIntoString.);---> It is now become a string so it can't be access key of object but it can acccess all the property and method of string

// localStorage.setItem("students" , ObjectIntoString);



// changing back again string into object  
const StringIntoObject =  JSON.parse(ObjectIntoString);

console.log(typeof StringIntoObject);

console.log(StringIntoObject.age);