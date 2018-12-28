var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function binWord()
{
  var res=Utility.fileCall();
  var res1=res.sort();
  // console.log(arr);
  console.log(res1);
   var target;
   var target=readline.question("Enter the word do you want to search ");
  var high=res1.length-1;
   var low=0;
  var ab=Utility.binarySearch(res1,low,high,target);
  console.log("your word present at the index "+ab);

}
binWord();