// const sayHello = function(name){
//     return "Hey there " +  name + " !";
// }

// console.log(sayHello("Kartikey"));


// const sayHello = (name) => "Hey there " +  name + " !";

// console.log(sayHello("Kartikey"));


const newTodos = [
    {
        title: "Buy Bread",
        isDone: false,
    },
    {
        title: "Go to Gym",
        isDone: false,
    },
    {
        title: "Online Study",
        isDone: true,
    },
    {
        title: "Sleeping",
        isDone: true,
    },
    {
        title: "Eating",
        isDone: true,
    },
    {
        title: "TMKOC",
        isDone: true,
    }
]


const findThings = newTodos.filter((todo) => todo.isDone === true);

console.log(findThings);

const notDoneThings = newTodos.filter((todo) => todo.isDone === false);
notDoneThings.forEach(Title => console.log(Title.title));
// console.log(notDoneThings);