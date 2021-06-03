
// grabbing particular element from HTML
const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");


//  In CSS everything which is written in such format like some-some but in computed format it is written in someSome format means -some is replaced by Some.


// Trying to access the background color for above grabbed element

/*
One way -
console.log(window.getComputedStyle(red).backgroundColor);
*/

//Second Way -- as a function

// const BgColor = function (){}

const BgColor = ((selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
});

console.log(BgColor(orange));


// Trying to add a event listener on above grabbed element and making some effect after grabbing it


//Event Listener --> it takes two thing first what event you are listening for and second what really you want to do

var gettingColor = BgColor(cyan);

cyan.addEventListener('mouseenter',()=>{
    center.style.backgroundColor = gettingColor;
});

// adding event listener by making method

 const magicColor = (elementForListen , colorToSee) => {
    return elementForListen.addEventListener('mouseenter',()=>{
        center.style.backgroundColor = colorToSee;
    });
 } ;

 magicColor(orange,BgColor(orange));
 magicColor(red,BgColor(red));
 magicColor(violet,BgColor(violet));
 magicColor(pink,BgColor(pink));
