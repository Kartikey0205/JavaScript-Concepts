// for(let i = 0; i<10;i++){
//     console.log(i);
// }

var myStates = [
    "Uttar Pradesh",
    "Rajasthan",
    "Assam",
    1947,
    "Tamil Nadu",
    "Delhi",
    "Maharashtra",
];

for(let i =0 ;i<myStates.length;i++){
    console.log(myStates[i]);
};

// using continue keyword
for(let i =0 ;i<myStates.length;i++){
    if(typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
};

for(let i =0 ;i<myStates.length;i++){
    if(typeof myStates[i] === "string") continue;
    console.log(myStates[i]);
};

// break keyword
for(let i =0 ;i<myStates.length;i++){
    if(typeof myStates[i] !== "string") break;
    console.log(myStates[i]);
};
