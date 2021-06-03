let iAmGlobal = "Some Value";

if (true) {
    var globalHiHuMeinAndarBaharSbJgh = "global Hi Hu Mein Andar Bahar Sb Jgh";
    let iAmLocal = "Some More Value";
    iAmGlobal = "Now Global value is changed in If block";
    console.log(iAmGlobal);
    console.log(iAmLocal);
    
}
// console.log(iAmLocal);
console.log("Lo mjhe bhr se bhi access kr lo kuki ",globalHiHuMeinAndarBaharSbJgh);
console.log("Hey! now I am totally chnged -->",iAmGlobal);
