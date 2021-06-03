var myMaps = new Map(); 

// inserting key value pair in Map
myMaps.set(1 ,"Uno");
myMaps.set(2 ,"dos");
myMaps.set(3 ,"Tres");
myMaps.set(4 ,"Cuatro");

console.log(myMaps);

// we generally use for of loop in case of Map

// ACCESSING KEYS FROM MAP
// make sure keys() is written because it is function
for(let key of myMaps.keys()){
    console.log(`Key is ${key}`);
}


// ACCESSING VALUES FROM MAP
// make sure values() is written because it is function
for(let value of myMaps.values()){
    console.log(`Value is ${value}`);
}


// ACCESSING BOTH KEYS AND VALUES FROM MAP
//Now no nee dof any functionto be written 
for(let [key,value] of myMaps){
    console.log(`Key is ${key} and Value is ${value}`);
}


// using for Each loop instead of for of loop
// typical PART - BECAUSE in for each it is pre assumed that there is no use of index so it gives value instead of key

myMaps.forEach((key) => console.log(key)); // here key is actually giving value 

myMaps.forEach((v,k)=> console.log(`${v}  and Key is ${k}`));


// deleleting any pair from key 
myMaps.delete(2); // delete the second key 
console.log(myMaps);