var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function anagram()
{
  var str=readline.question("Enter your first string ");
  var str1=readline.question("Enter your second string ");
  Utility.anagram(str,str1);
}
anagram();