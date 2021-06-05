"use strict";
var myTodos = {
    day : 'Monday',
    meetings: 0,
    meetDone : 0,
    addMeeting : function(num){
        // console.log("Hey!");
        console.log(this);
        this.meetings = this.meetings + num;
    },
    meetingDone: function(num){
        this.meetDone = this.meetDone - num;
    },
    reset:function(){
        this.meetDone =0;
        this.meetings =0;
    },
    summary: function(){
        let meetLeft = this.meetings + this.meetDone;
        return `You have ${meetLeft} meetings left today!`;
    }
}

myTodos.addMeeting(4);
myTodos.addMeeting(9);
myTodos.meetingDone(5);

console.log(myTodos.summary());


myTodos.reset();

console.log(myTodos.summary());
