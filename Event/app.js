var baseClass = require('./events');
var util = require('util');
var eventConfig = require('./config').events;

function Child(){
    baseClass.call(this);
    this.name = 'Dhiral';

}
util.inherits(Child,baseClass);

Child.prototype.displayName = function(){
    console.log(this.name);
    this.execute(eventConfig.ON);
}
Child.prototype.setEvent = function(){
    this.on(eventConfig.ON,function(){
        console.log('ON Event');
    });
    this.on(eventConfig.OFF,function(){
        console.log("OFF Event");
    });
}
var obj = new Child();
obj.setEvent();
obj.displayName();