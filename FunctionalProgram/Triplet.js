var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');

function triplet()
{
    var arr=[];
    var res=[];
    res=Utility.arrayCall(arr);
    Utility.triplet(res);
}
triplet();