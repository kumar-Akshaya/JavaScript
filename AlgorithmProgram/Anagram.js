/*
 * find out the whether given two strings are Anagram or not
 * and print the Message on the output Screen
 * 
 * @author : AkshayKumar
 * @version : 1.0
 * @since 12/12/2018
 */
var Utility=require('../UtilityProgram/Utility');
var readline=require('readline-sync');
function anagram()
{
  var str=readline.question("Enter your first string ");
  var str1=readline.question("Enter your second string ");
  var result=Utility.isAnagram(str,str1);
  if(result)
  {
    console.log("String is Anagram ");
  }
  else{
    console.log("String is not an anagram");
  }

}
anagram();