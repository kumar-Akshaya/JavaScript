var Utility=require('../UtilityProgram/Utility');
var readline=require('readline-sync');

function Merge(){
var res=Utility.fileCall();
//var arr=['abc','xyz','aaa','bbb','ccc','hdg','hjs'];
Utility.mergeSort(res);
console.log("Merge sorted result ",res);
}
Merge();
