var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function pow()
{
  var res=readline.question("enter your base number");
  var res1=readline.question("enter your power value");
  var a=Utility.pow(res,res1);
  console.log(a);
}
pow();