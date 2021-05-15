// setTimeOut(function , milliseconds); ->> it means after given time function will run

// setInterval(function , milliseconds); -->> it means for such given time function will run


console.log("hEllo");
var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");


let count = 1;
setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 0.6);

setTimeout(() => {
    followers.innerText = "Followers on Instagram!";
},6000);


// SetTime out is like -- as in a game time is given that after this time game will be played
// similarly set interval is like -- as in a game time is given that only for this duration of  time game have to  play.