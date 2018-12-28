var utility=require('../../UtilityProgram/Utility');
var read=require('readline-sync');
function coupan() {
    console.log("How many coupan number you wants");
    var l = read.question();
    if(l>=0)
    utility.coupan(l);//calling of Coupan method.
    else
    console.log("Please enter correct Number");
}
coupan();;
