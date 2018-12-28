var Utility=require('../../UtilityProgram/Utility');
var rl=Utility.input();

function primeFactor(){
rl.question('Enter the number',(number) =>{
    Utility.primeFactor(number);
    rl.close();
})
}
primeFactor();