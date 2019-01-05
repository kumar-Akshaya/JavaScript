var Utility=require('../UtilityProgram/Utility');
var rl=Utility.input();

function CoinFlip(){
rl.question('Enter the number of tosses ',(flips) =>{
Utility.coinFlip(flips);
rl.close();
})
}
CoinFlip();
