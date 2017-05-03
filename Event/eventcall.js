var Event = require('./events');
var eventConfig = require('./config.js').events;

var event = new Event();
event.on(eventConfig.ON,function(){
    console.log('On event is call');
});
event.on(eventConfig.ON,function(){
    console.log('Second event');
});
event.on(eventConfig.OFF,function(){
    console.log('off event call');
});
console.log('Event on successfully..!');
event.execute(eventConfig.OFF);
