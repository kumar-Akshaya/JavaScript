var Utility=require('../../UtilityProgram/Utility');
var rl=Utility.input();

function leapYear(){
rl.question('Enter the Year',(year) =>{
    Utility.leapYear(year);
    rl.close();
})
}
leapYear();
