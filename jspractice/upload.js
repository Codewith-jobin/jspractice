var http=require('http')
http.createServer(function(req,res){
    res.writeHead(300,{'content-typre':'text/html'})
    res.write('<form action="file upload" method="post" enctype=" multipart/form-data">')
    res.write('<input type="file" name="file upload"<br/>')
    res.write('<input type="submit">')
    res.write('</form>');
    return res.end ();



}).listen(3004)
