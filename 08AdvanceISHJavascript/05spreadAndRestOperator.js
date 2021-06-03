var returnedValue = Math.max(2,5,7,3,9,8,1,0);
console.log(returnedValue);

var myObj ={};

Object.assign(myObj,{a:1,b:3,c:6},{x:8,y:2,z:0});
console.log(myObj);


//spread Operator 
function sumOne(a,b){
    return a+b;
}

console.log(sumOne(5,4));

var myA =[8,2];
console.log(sumOne(myA));// thsi is the problem as function is not able to recognize what exactly to do so it tried it best to do so but can't so it return as it is 

// now Spread Operator is used to overcome this problem it says now you can pass either individual or bunch i will convert it into individual part
console.log(sumOne(...myA));// spread Op



// REST Operator
function sumTwo(a, b, ...args){ // Rest Operator --> it says now you can pass as much as but i will see upto which args is taking value then see either it is individual or bunch then i will convert it into array and by iterating we will proceed
    console.log(args);
    let multi = a*b;
    let sum =0;
    for (const arg of args) {
        sum += arg;
    }
    return [sum ,multi];
}

console.log(sumTwo(2,3,5,7,8));