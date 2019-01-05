var readline=require('readline-sync');
var access=require('../Oops Programs/Utility');

function regex()
{
  var name=readline.question("Enter your name ");
  while(isNaN(name)==false)
  {
      console.log("Please, Re-enter your name ");
      var name=readline.question("Enter your name ");
  }
  var fullname=readline.question("Enter your Full name ");
  while(isNaN(fullname)==false)
  {
      console.log("Please,Re-enter your fullname ");
      var fullname=readline.question("Enter your fullname ");
  }
  var contact=readline.question("Enter your Mobile number");
  while(isNaN(contact)==true || contact.length!=10)
  {
      console.log("Please, Re-enter your mobile number ");
      var contact=readline.question("Enter your mobile number ");
  }

  var date=new Date();
  var answer=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  
  access.regexExpression(name,fullname,contact,answer);
}
regex();