var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function insertionString()
{
   var arr=[];
   var res=Utility.arrayCall(arr);
  var res1=Utility.insertionString(res);
  console.log(res1);
}
insertionString();