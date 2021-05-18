const uno = () => {
    return "I am One";
}

// const dos = () => {
//     setTimeout(()=>{
//         return "I am Two";
//     },3000)
     
// }

const dos = () => {

    // creating new promise which promise us to either get resolve or get rejected 
     return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("After waiting , I am Two");
        },3000)
     })
}

const tres = () => {
    return "I am Three";
}


// making a complete method to asyncronous so that it can wait upto all   
const callMe =  async() =>{
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

callMe();