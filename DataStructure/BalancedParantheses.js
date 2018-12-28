var stackaccess=require('../DataStructure/Stack');
var readline=require('readline-sync');
var st=stackaccess.Stack;
function Stack()
{
    var st=stackaccess.Stack;
    var answer=readline.question("Enter your mathematical expression with parantheses ");
   var ch=answer.charAt();
   for(var i=0;i<=ch.length;i++)
   {
       if(ch[i]=='(' || ch[i]=='[' || ch[i]=='{')
       {
       st.push(ch[i]);
       }
       else{
           switch (ch[i])
           {
               case ')':if(Pop()!='(')
               {
                   break;
               }
               case ']' : if(pop()!='[')
               {
                   break;
               }
               case '}' : if(pop()!='{')
               {
                   break;
               }
           }
       }
   }
    
}
Stack();