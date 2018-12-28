var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function vendingMachine()
{
  var amount=readline.question("Enter the amount ");
  Utility.vendingMachine(amount,0,0);
}
vendingMachine();