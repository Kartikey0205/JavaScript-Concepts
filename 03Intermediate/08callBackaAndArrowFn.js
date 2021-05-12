/*

function isEven(element) {
    // if (element%2===0) {
    //     return true;
    // }
    // return false;
    return element%2===0;
}
*/
// var isEven = function (element) {
//     return element%2===0;

// }
//Arrow function
var isEven = (element) => {
    return element % 2 === 0;

}
console.log(isEven(8));

// Call Back function--> this function does not have any name

var result = [2, 5, 8, 4].every(isEven);// here i'm not using isEven() because i'm not calling it here i'm just giving reference here
console.log(result);



var result_Arrow_Call_Back = [2, 6, 8, 4].every((e) => {
    return e % 2 === 0;
});
console.log(result_Arrow_Call_Back);



var result_Call_Back = [2, 6, 8, 4].every((e) => (e % 2 === 0));
console.log(result_Call_Back);

// Two ways of call back -- 
/*

1. with return keyword
            (e) => {};
2. without return keyword
            (e) => ();
 */



