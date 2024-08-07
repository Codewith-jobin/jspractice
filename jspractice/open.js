var fs=require('fs')

fs.open('./demohtml.html' ,'w',function(err,file){
    if(err) throw err;
        console.log("open")

})