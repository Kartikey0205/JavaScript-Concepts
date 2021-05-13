const websites = ["YouTube","FaceBook","Instagram","Netflix","Flipkart"];


// for of loop is basicallly used for accessing array 
for (const n of websites){
    console.log(n);
}

const symbols = {
    yt : "YouTube",
    fb : "FaceBook",
    ig : "Instagram",
    nf : "Netflix",
    fp : "Flipkart"
}

// for in loop is basicallly used for accessing object and it gives key  
for( const n in symbols){
    console.log(n);
}

for( const n in symbols){
    console.log(`Key is : ${n} and its values is ${symbols[n]}`);
}