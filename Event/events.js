function Event(){
    this.event = {};
}
Event.prototype.on=function(type,listener){
    this.event[type] = this.event[type] || [];
    this.event[type].push(listener);
}
Event.prototype.execute=function(type){
    if(this.event[type]){
        this.event[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports=Event;