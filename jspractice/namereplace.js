var fs =require('fs')
 fs.rename('./for.html',"telecast.html",function(err){
    if(err)throw err;
    console.log("renamed")
 })