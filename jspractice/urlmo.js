var url=require('url')
var adr='https://www.w3schools.com/nodejs/nodejs_url.asp?year=2017&month=february';
var splitt= url.parse(adr,true)

console.log(splitt.host);
console.log(splitt.pathname);
console.log(splitt.search)
var qdata= splitt.query;
console.log(qdata.month)