var Utility=require('../../UtilityProgram/Utility');
var rl=Utility.input();

function stopWatch(){
    rl.question('Press 1 to start time',function(startTime) {
        if(startTime=="1")
        {
           var start=Utility.getCurrentTime();
            rl.question('Press 0 to stop time ',function(stopTime){
             if(stopTime=="0"){
                 var stop=Utility.getCurrentTime();
                 var res=Utility.elapsedTime(start,stop);
             }
             console.log("elapsed Time is = "+res+"sec");
             rl.close();
            })
        }
        else{
            console.log("invalid input");
            stopWatch();
        }
    });
}
stopWatch();