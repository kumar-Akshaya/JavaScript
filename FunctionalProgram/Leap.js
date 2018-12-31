var Utility=require('../UtilityProgram/Utility');
var rl=Utility.input();

function leapYear(){
rl.question('Enter the Year',(year) =>{
    if(year>999 && year<10000){
    var res=Utility.leapYear(year);
    if(res==true){
    console.log(year + " is Leap year");
    }
    else {
        console.log(year + " is not a leap year");
    }
}
else {
    console.log("Please, Enter 4 digit number");
}
    
    rl.close();
})
}
leapYear();
