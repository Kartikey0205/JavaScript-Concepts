const trello = [];

trello.unshift("Complete NodeJs");
trello.unshift("Debug Code");
trello.unshift("Git");

// trello.forEach(function(todo , index){
//     console.log(`Your work no. ${index+1} and work is : ${todo}`);
// });

console.log(trello);

for (let index = 0; index < trello.length; index++) {
    console.log(`Your work no. ${index+1} and work is :`, trello[index]); 
    
}