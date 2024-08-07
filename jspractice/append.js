 var fs=require('fs')

 fs.appendFile('./demohtml2.html', "how about this " ,function(err){
    if(err) throw(err)
        console.log('updated')

 })