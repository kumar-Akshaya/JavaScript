var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function binaryString()
{
    var arr=[];
    var res=Utility.arrayCall(arr);
    var ele=readline.question("Enter the element do you want to search ");
    var high=res.length,low=0;
   var res1= Utility.binaryString(res,low,high-1,ele);
    console.log(res1);

}
binaryString();