var utility=require('../../Oops Programs/Utility');
var filestream=require('fs');
var content=filestream.readFileSync('company.json');
var content1=filestream.readFileSync('customer.json');
var data=JSON.parse(content);
var data1=JSON.parse(content1);


   utility.commercial(data,data1);
