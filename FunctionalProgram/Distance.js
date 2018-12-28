var Utility=require('../../UtilityProgram/Utility');
function distance(){
var n1=+process.argv[2];
var n2=+process.argv[3];
Utility.distance(n1,n2);
}
distance();