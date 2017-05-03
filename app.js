import * as myobj from 'greet';
var util = require('util');

myobj.g();
//Variable declaration
var a=10;
var b=20;
var c=a+b;
console.log(c);

//function declaration
var v1 = function() {
    console.log('hello world');
}
v1();

var v1 = require('./exports.js');

var myname = 'dhiral';
var fname = util.format(myname);
util.log(fname);