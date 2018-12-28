var Utility=require('../../UtilityProgram/Utility');
var rl=Utility.input();
function quadratic()
{
rl.question('Enter the "a" value ',(a)=>{
 rl.question('Enter the "b" value ',(b) =>{
 rl.question('Enter the "c" value ',(c) =>{
     Utility.quadratic(a,b,c);
     rl.close();
 });
 });   
});
}
quadratic();
