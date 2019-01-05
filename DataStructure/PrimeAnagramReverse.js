var utility=require('../UtilityProgram/Utility');
var access=require('../DataStructure/StackLinked');
var take=require('util');
function ReverseAnagram()
{
  var arr=[];
  for(let i=0;i<100;i++)
  {
      if(utility.isPrime(i))
      {
        arr.push(i);
      }
  }
  
  var range=100, k=0;
  var stk=new access.StackLinkedList;
  for(let i=0;i<arr.length;i++)
  {
      for(let j=0;j<arr.length;j++)
      {
          if(utility.isAnagram(arr[i],arr[j]))
          {
              stk.push(arr[i]);
              stk.push(arr[j]);
              k++;
          }
      }
  }
  
  console.log("the numbers which are prime and anagram");
    stk.displayAnagram();
    for(let i=0;i<2*k;i++)
    {
        take.print(stk.pop(i));
    }
    
  console.log('\n\n');
}
ReverseAnagram();