/*
if we want to import everything from a file then 


syntax- 

import * as Superman from " ";
this superman function is a key value pair also k/a Object

and everything can be access by - 
Superman.variable_Name;
Superman.function_Name_call;



*/



import {score , cardFees} from "../08AdvanceISHJavascript/15myFileExport.js";
// import {cardFees} from "../08AdvanceISHJavascript/15myFileExport.js";

console.log(score);// this is actual variable
cardFees();


// if default and other values is coming from one file then

/*
Syntax-


import default_value 
*/

import name from "../08AdvanceISHJavascript/15defaultExport.js"

console.log(name);
