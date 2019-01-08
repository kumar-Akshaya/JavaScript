var readline=require('readline-sync');
var utility=require('../../Oops Programs/Utility');
var filestream = require('fs');
var content = filestream.readFileSync('inventManage.json');
var data = JSON.parse(content);
function invent()
{
   // var no_of_times=readline.question("Enter how many stocks do you want ");
    utility.inventManagement(data);
}
invent();