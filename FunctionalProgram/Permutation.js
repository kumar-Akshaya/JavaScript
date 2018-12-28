var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');

function permutation()
{
  var string= readline.question('Enter the String ');
  var vr=Utility.permutation("",string,0,string.length-1);
  //console.log(vr);
}
permutation();