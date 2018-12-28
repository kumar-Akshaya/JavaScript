var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function tobin()
{
 var num=readline.question("Enter your decimal value ");
  var res=Utility.tobin(num);
  console.log("convertes form ",res);
}
tobin();