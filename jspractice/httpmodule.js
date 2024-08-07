var http= require ('http')
http.createServer(function(req,res){
    res.writeHead(300,{'content-type':'text/html'})
    res.write("helo jobiin");
    res.end()

}).listen(3000)