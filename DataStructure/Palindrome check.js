var access=require('../DataStructure/Dequeue');
var readline=require('readline-sync');
function check()
{
    var take=new access.Dequeue;
  var answer=readline.question("Enter the string  ");
  var result=take.PalindromeChecker(answer);
  if(result==false)
  {
      console.log("String is not an a Palindrome ");
  }
  else
  {
      console.log("String is palindrome  ");
  }
}
check();