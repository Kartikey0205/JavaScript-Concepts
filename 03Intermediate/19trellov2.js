"use strict";
var myTodos = {
    day : 'Monday',
    meetings: 0,
    meetDone : 0,
}


let addMeetings = function(todo , meet = 0){
    todo.meetings = todo.meetings + meet;
}


let meetingsDone = function(todo , meet = 0){
    todo.meetDone = todo.meetDone - meet;
}

let resetAll = function(todo){
    todo.meetings =0;
    todo.meetDone =0;
}

let getSummaryOfAllDay = function(todo){
    let meetLeft = todo.meetings + todo.meetDone;
    return `You have ${meetLeft} meetings left!`;
}


addMeetings(myTodos,4);
console.log(myTodos);

addMeetings(myTodos,2);
console.log(myTodos);


meetingsDone(myTodos,5);
console.log(myTodos);

// resetAll(myTodos);

// console.log(myTodos);

console.log(getSummaryOfAllDay(myTodos));