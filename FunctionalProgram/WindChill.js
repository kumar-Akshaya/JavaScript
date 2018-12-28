var Utility=require('../../UtilityProgram/Utility')
function windChill()
{
var temp=+process.argv[2];
var vol=+process.argv[3];
Utility.windChill(temp,vol);
}
windChill();