var http=require('http')
http.createServer(function(req, res){
    res.writeHead(200 ,{'content-type': 'text/html'})
    res.end("hello coder")
}).listen(8080)