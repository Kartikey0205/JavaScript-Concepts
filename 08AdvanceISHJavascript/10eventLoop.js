const uno = () => {
    console.log("I am One");
}

const dos = () => {
    //Non blocking 
    setTimeout(()=>{
        console.log("Wooow finally after wait");
    },3000)
    console.log("I am Two");
}

const tres = () => {
    console.log("I am Three");
}

uno();
tres();
dos();

// Here it says that is other thing are there in sequence to execute then let them execute and as soon as i get ready i will execute 
//  But if we are fetching data from database then I don't want to execute other operation untill this get executed so there we will have to wait