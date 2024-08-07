var fs=require('fs')
var ts=  fs.createReadStream('./demofile.txt')
ts.on('open',function(){
    console.log('the file is open')
})