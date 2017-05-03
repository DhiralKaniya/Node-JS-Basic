var express = require('express');
var search = require('./select');
var myrec = new search();
var app = new express();

var port = process.env.PORT || 3000;
app.get('/',function(request,response){
    response.json({myrec});
});
app.listen(port);