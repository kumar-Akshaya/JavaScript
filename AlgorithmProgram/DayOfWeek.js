var Utility=require('../../UtilityProgram/Utility');
function dayOfWeek(){
var day=+process.argv[2];
 var month=+process.argv[3];
 var year=+process.argv[4];
Utility.dayOfWeek(day,month,year);

}
dayOfWeek();