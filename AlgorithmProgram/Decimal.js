var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function binaryToDecimal()
{
 var num= readline.question("Enter your binary value ");
  var ax=Utility.binaryToDecimal(num);
  console.log(ax);
}
binaryToDecimal();