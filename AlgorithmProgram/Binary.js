var Utility = require('../../UtilityProgram/Utility');
var readline = require('readline-sync');
function toBinary() {
    var num = readline.question("Enter your decimal value");
    //   var string="";
    //   var num1=string+num;
   // console.log("he ", num);
    Utility.toBinary(num);
}
toBinary();
