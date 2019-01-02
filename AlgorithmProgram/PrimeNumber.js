var Utility=require('../UtilityProgram/Utility');
var readline=require('readline-sync');
function prime()
{
    var res=readline.question("Enter the Range ");
    Utility.prime(res);
}
prime();