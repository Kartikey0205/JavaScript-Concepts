console.log("checking");
function myFunction() {
    var x = document.forms["myForm"];
    var text = "";
    for (let index = 0; index < x.length; index++) {
        text += x.elements[index].value + "<br>";

    }
    document.getElementById("getValue").innerHTML = text;
}