//1 :- overriding exports with the function

/*
module.exports = function (){
    console.log("Hello World");
}

//to require this function
var v1 = require("./modules_pattern.js");
v1();
*/


//2 :-  to getting particular pattern of that module that is pattern 2 
/*
module.exports.m1 = function(){
    console.log("Hello World");
} 

module.exports.m2 = function(){
    console.log("World Hello");
}

//to access this property
var v1 = require("./module_pattern.js").m1;
var v2 = require("./module_pattern.js").m2;

*/

//3 :-  return object in the Module with reference
/*
function myobj(){
    this.name = 'Hello',
    this.displayname = function(){
        console.log(this.name);
    }
} 
module.exports = new myobj();

//this will return a references
//to access 
var myo = require('./modules_pattern.js');

// 4 :- return value in the module with object
/* 
function myobj(){
    this.name = 'Hello',
    this.displayname = function(){
        console.log(this.name);
    }
} 
module.exports = myobj;

to access this 
var myo = require('./modules_pattern.js');
var obj = new myo();
*/
