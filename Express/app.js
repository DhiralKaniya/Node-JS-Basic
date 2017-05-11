var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'testing'
});
connection.connect();

var port = process.env.PORT || 3000;

app.get('/',function(request,response){
    response.send('<html><body><h2>Hello World</h2></body></html>');
});
app.get('/:tblname/',function(request,response){
    console.log(request.params.tblname);
    console.log(request.query.column);
    console.log(request.query.type);
    response.send(200);
}); 
app.get('/person/:type/:val1',function(request,response){
    var type = request.params.type;
    var username = request.params.val1;
    if(type === 'search'){
        var qry = 'SELECT * FROM tbl_testing WHERE username = \''+username+'\'';
        var query = connection.query(qry,function(err,result){
            if(err)
                console.error(err);
            response.json(result);
        });
    }
    else if(type === 'delete'){
        var qry = 'DELETE FROM tbl_testing WHERE username = \''+username+'\'';
        var query = connection.query(qry,function(err,result){
            if(err)
                console.error(err);
            var myval = {
                'status' : 'success'
            }
            response.json(myval);
        });
    }    
    //response.send('<html><body><h2>Person : ' +  + '</h2></body></html>');
});
app.get('/person/:type/:val1/:val2',function(request,response){
    var type = request.params.type;
    var username = request.params.val1;
    var password = request.params.val2;
    var newuser = {
            'username' : username,
            'password' : password 
    }
    if(type === 'insert'){
        
        var qry = 'INSERT INTO tbl_testing set ?';
        var query = connection.query(qry,newuser,function(err,result){
            if(err){
                console.error(err);
                var myval = {
                    'status' : 'unsucess'
                }
            }
            else{
                var myval = {
                    'status' : 'sucess'
                }
            }
            response.json(myval);
        });
    }
    else if(type === 'update'){
        var qry = 'UPDATE tbl_testing SET password = \''+password+'\' WHERE username=\''+username+'\'' ;
        
        var query = connection.query(qry,function(err,result){
            if(err){
                console.error(err);
                var myval = {
                    'status' : 'unsucess'
                }
            }
            else{
                var myval = {
                    'status' : 'sucess'
                }
            }
            response.json(myval);
        });
    }
});
app.get('/json',function(request,response){
    response.json({firstname : 'Dhiral' , lastname : 'Kaniya'});
})

app.listen(port);