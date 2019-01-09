//var utility=require('../../Oops Programs/Utility');
var filestream=require('fs');
//var content=filestream.readFileSync('company.json');
var content1=filestream.readFileSync('../Oops Programs/Comercial Data/customer.json','utf8');
//var data=JSON.parse(content);
var data1=JSON.parse(content1);


  // utility.commercial(data,data1);
for(var key in data1.user){
    console.log(data1.user[key]);
}