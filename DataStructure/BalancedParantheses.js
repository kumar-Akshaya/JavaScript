var stackaccess=require('../DataStructure/Stack');
var readline=require('readline-sync');

function Stack()
{
    var st= new stackaccess.Stack;
    var answer=readline.question("Enter your mathematical expression with parantheses ");
   var ch,i;
   for(i=0;i<answer.length;i++)
   {ch=answer.charAt(i);
       if(ch=='(' || ch=='[' || ch=='{')
       {
       st.push(ch);
       }
       else{
           switch (ch)
           {
               case ')':if(st.pop()!='('){
                                return false;
                            }
               case ']' : if(st.pop()!='[')
               {
                   return false;
               }
               case '}' : if(st.pop()!='{')
               {
                   return false;
               }
           }
       }

   }
   return true;
}
var bol=Stack();


if(bol){
    console.log("String is balanced");
    
}
else{
    console.log("Not balanced");
    }

