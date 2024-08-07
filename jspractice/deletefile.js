 var fs=require('fs')
 fs.unlink('./demohtml4.html' ,function(err){
    if(err)throw err;
    console.log("deleted")
 })