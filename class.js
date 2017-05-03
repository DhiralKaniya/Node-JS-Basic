'use strict';

var baseClass = require('./Event/events');
var eventConfig = require('./Event/config').events;
module.exports = class Person extends baseClass{
    constructor(firstname,lastname){
        super();
        this.firstname = firstname;
        this.lastname = lastname;
    }
    DisplayData(){
        console.log(`Firstname is ${this.firstname} and secondname is ${this.lastname}`);
    }
    setData(){
        this.on(eventConfig.ON,function(){
            console.log(`On 1 call`);
        });
        this.on(eventConfig.OFF,function(){
            console.log(`off 1 call`);
        });
    }
    getData(){
        this.execute(eventConfig.OFF);
    }
}

