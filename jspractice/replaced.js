var fs=require('fs')
fs.writeFile('./htlml3.html' ,'hope it changes',function(err){
    if(err)throw err;
    console.log("Replaced")
})