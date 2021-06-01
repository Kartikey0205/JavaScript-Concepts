// alert("hello")


// try {

//     aleert("hello");
// } catch (error) {
//     document.getElementById("test").innerHTML=error.message;
// }


function showError() {
    var msg, x;

    msg = document.getElementById("msg");
    msg.innerHTML = "";

    x = document.getElementById("some").value;
    try {
        if (x == "") throw "Please enter a number";
        if (x < 4) throw "Please enter a number greater than 3";
        if (isNaN(x)) throw "Only numbers are allowed";

    } catch (error) {
        msg.innerHTML = "Error is : " + error;
    }
    finally {
        document.getElementById("some").value = "";
    }
}