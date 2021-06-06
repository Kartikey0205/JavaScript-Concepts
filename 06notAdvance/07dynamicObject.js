let score = 200;

let API = "angry";
let myObj = {
    user : "Kartikey",
    score,
    angry: 99,
    highScore : function(){
        console.log("I am high score");
        // return "I am high score"
    },
    veryHighScore(){
        console.log("hello");
    }

}

console.log(myObj.user);
console.log(myObj.score);
myObj.highScore();
//console.log(myObj.highScore()); // this is undefined because it is not returning anything

myObj.veryHighScore();


console.log(myObj.API); // THIS IS UNDEFINED

console.log(myObj[API]);