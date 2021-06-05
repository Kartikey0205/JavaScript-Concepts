var myYouTubeOne = {
    title : "Loops",
    vedioLength : 15,
    author : "Kartikey Dubey",
    description : "Loops in JavaScript"
}

var myYouTubeTwo = {
    title : "For Each Loops",
    vedioLength : 10,
    author : "Kartikey Dubey",
    description : "For Each in JavaScript"
}


// console.log(myYouTubeTwo.title);
let myVedioLength = function(Object){
    // return `Vedio Length is ${Object.vedioLength + 6}`;

    // return bhi object kr rhe h 
    return {
        formatOne : `Vedio Length is ${Object.vedioLength + 2}`,
        formatTwo : `Vedio Length is ${Object.vedioLength + 9}`,

    }
}

// console.log(myVedioLength(myYouTubeTwo));

let afterAddingAds = myVedioLength(myYouTubeOne);

console.log(afterAddingAds.formatOne);