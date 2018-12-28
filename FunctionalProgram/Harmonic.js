var Utility=require('../../UtilityProgram/Utility');
var rl=Utility.input();

function harmonic(){
rl.question('Enter the Nth Harmonic Number',(number)=>{
    Utility.harmonic(number);
    rl.close();
}
)}
harmonic();