var http=require('http')
var dt=require('./myfirstmodule')
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('the current time is', + dt.myDateTime())
    res.end()
    
}).listen(8088)
