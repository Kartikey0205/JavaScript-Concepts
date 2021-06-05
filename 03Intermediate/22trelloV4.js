// const myTodos = ["Buy Bread","Go To Gym","Online Study"];
// console.log(myTodos.indexOf("Buy bread"));

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
    }
]

const index = newTodos.findIndex(function (todo, index) {
    // console.log(todo);
    return todo.title === 'Go to Gym';
});

// console.log(index);



// //Method 1 
// const findTodo = function(anyTodo,title){
//     const index = anyTodo.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase();
//     });
//     // return index;
//     return anyTodo[index];
// };


// console.log(findTodo(newTodos ,'Go to Gym'));



// Method 2
const findTodo = function (anyTodo, title) {
    const index = anyTodo.find(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase();
    });
    // return index;
    return index;
};


console.log(findTodo(newTodos, 'Go to Gym'));





