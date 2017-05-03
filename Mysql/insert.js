var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'testing'
});
connection.connect();

var testing = {
    username : 'Hello',
    password : 'World'
}

var query = connection.query('insert into tbl_testing set ?',testing,function(err,result){
    console.log(query.sql);
    if(err){
        console.error(err);
    }
    else{
        console.log(result);
    }
});