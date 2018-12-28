var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function tempConversion(){
var number=readline.question("Press 1 to conver temperature to fahrenheit, and 2 for fahrenheit to temperature");
Utility.tempConversion(number);
}
tempConversion();