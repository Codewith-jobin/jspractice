var http=require('http')
var fs= require('fs')
http.createServer(function(req, res){
    fs.readFile('./demohtml.html',function(err , data){
        res.writeHead(300,{'content-type':'text/html'})
        res.write(data)
        return res.end()
    });

}).listen(3030)
