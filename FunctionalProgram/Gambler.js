var Utility=require('../../UtilityProgram/Utility');
var rl=Utility.input();

function gambler(){
rl.question('Enter number of times do you want to play ',(number)=>{
rl.question('Enter your amount ',(stack)=>{
rl.question('Enter your target amount ',(goal)=>{ 
    Utility.gambler(stack,goal,number);
    rl.close();
})
})
})
}
gambler();