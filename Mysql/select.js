var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'testing'
});

var query = connection.query('SELECT * FROM tbl_testing',function(err,result){
    if(err)
        console.error(err);
    else
        console.log(result);
});


