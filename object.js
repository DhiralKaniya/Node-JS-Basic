var myObj = {
    firstname : 'Hello',
    lastname : 'world',
    myname : function(){
        console.log(this.firstname + ' '+ this.lastname);
    },
    myn : function(fname,lname){
        console.log('Hello ' + fname + ' '+lname);
    }
}


myObj.myname();
myObj.myn('Dhiral','Kaniya');