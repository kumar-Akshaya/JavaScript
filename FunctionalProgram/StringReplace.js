var Utility=require('../../UtilityProgram/Utility');
 var rl=Utility.input();
function replace(){
 rl.question('enter your name ?',(answer) =>{
     Utility.replace(answer);
     rl.close();
 });
}
replace();