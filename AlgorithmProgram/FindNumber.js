var Utility = require('../../UtilityProgram/Utility');
var readline = require('readline-sync');
function numgame() {
    var num = readline.question("enter a number between 0 t0 N-1, where N=2^n :")
    var res = Utility.isPower(num);

    if (res) {
        var n = (Math.sqrt(num, 2));

        if (n % 2 == 0) {
            console.log("Think an integer between 0 and ", (num - 1));
            var toFind = Utility.search(0, num);
            console.log("Your number is ", toFind);
        }
        else {
            console.log("Invalid input ");
        }
    }
}

numgame();