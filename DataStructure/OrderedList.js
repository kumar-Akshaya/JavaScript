class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head=null;
        this.lenght=0
    }

    
    insert(ele)
    {
        var node=new Node(ele);
        if(this.head==null)
        {
           this.head=node;
           return false;
        }
        t=this.head;
        while(t.next!=null)
        {
           t=t.next;
        }
        t.next=this.head;
        return true;
    }

    insertFirst()
    {
       var node=new Node(ele);
        node.next=this.head;
        head=node;
        return true;
    }
    remove(ele)
    {
        t=this.head;
        t1=this.head;
        while(t!=ele)
        {
          if(t.data==ele)
          {
              //return false;
              break;
          }
          t1.next=t.next;
          return t.data;
        }
    }
    removePos(pos)
    {
        t=this.head;
        t1=this.head;
        while(t!=null)
        {
            pos--;
            if(pos==0)
            {
                break;
            }
            t1.next=t.next;
        }
    }
    show()
    {
      var  t=this.head;
        while(t!=null)
        {
            console.log(t.data);
            if(t.next!=null)
            {
                console.log("=>");
                t=t.next;
            }
        }
    }
}
var lst=new LinkedList();
lst.insert(20);
lst.show();
