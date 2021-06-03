//this code can't run directly from node(node Limitation) --> run this in browser
//direct function fetch() which takes API
fetch("https://api.chucknorris.io/jokes/random")
.then((response) => {
    //to get in json format
  return response.json();

})
.then((data) => {
    // console.log(data);
    var joke = data.value;
    console.log("Joke is: ",joke);
})
.catch();

// .then what return it comes to next .then()

//similarly like 

// try {
    
// } catch (error) {
    
// }