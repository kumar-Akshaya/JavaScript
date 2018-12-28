var Utility=require('../../UtilityProgram/Utility');
function payment()
 {
var principle=+process.argv[2];
var year=+process.argv[3];
var rate=+process.argv[4];
Utility.payment(principle,year,rate);
}
payment();