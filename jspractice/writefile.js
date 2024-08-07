var fs=require('fs')

fs.writeFile('./demohtml.hl','hey hold back' ,function(err){
    if(err)throw err;
    console.log("saved")

})