var http = require('http');
var fs = require('fs');
http.createServer(function(request,response){
    if(request.url === '/'){
        fs.createReadStream(__dirname + '/index.htm').pipe(response);
    }
    else if(request.url === '/api'){
        response.writeHead(200,'application/JSON');
        var add = {
            'houseno' : '12',
            'street' : 'abc'
        }
        var obj = {
            'firstname' : 'Dhiral',
            'lastname' : 'Kaniya',
            'add' : add
        }
        response.end(JSON.stringify(obj));
    }else{
        response.writeHead(404);
        response.end('Error');
    }
}).listen(1337,'127.0.0.1');