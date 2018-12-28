var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function bubbleSort()
{
  var arr=[];
  var res=Utility.insertArray(arr);
 var res1=Utility.bubbleSort(res);
  console.log(res1);
}
bubbleSort();