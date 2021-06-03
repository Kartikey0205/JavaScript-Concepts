// "use strict";

var doSomething = function (work){
    console.log(work);
    console.log(this);
}

doSomething("PushUps");

var exercise = {
    benchPress : "4 sets",
    squats : "3 sets"
}

doSomething.call(exercise);

doSomething.call(exercise , exercise.squats);

doSomething.apply(exercise , ['crunches']);

