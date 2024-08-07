var http=require('http')
http.createServer(function(req,res){
    res.writeHead(300,{'content-type:':'text/html'});
    res.write("heeii")
    res.end()

}).listen(3001)