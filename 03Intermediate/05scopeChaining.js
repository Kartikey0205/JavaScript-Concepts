var name1 = "Kartikey"; // global variable

console.log("Line number 3 ", name1);


function sayname1() {
    // console.log("Line number 7 ->  this is coming from global  and name1 is ", name1);
    var name1 = "Mr. K";
    console.log(`Line number 9 ${name1} , this is coming from function sayname1 itself `);

    sayFullname1();
    function sayFullname1() {

        // console.log("Line number 14  , this is coming from global and name1 is ", name1);
        var name1 = "Mr. KD";
        console.log(`Line number 16 ${name1} , this is coming from function sayFullname1 itself  `);


    }

}



sayname1();