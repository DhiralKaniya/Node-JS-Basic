var obj = {
    name : 'hello',
    displayName : function(){
        console.log(`hello ${this.name} `);
    }
}

obj.displayName();
obj.displayName.call({name:'dhiral'});
