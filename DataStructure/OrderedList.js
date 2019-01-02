class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
        this.size=0;
       
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
           return true;
        }
         var t=this.head;
        while(t.next!=null)
        {
           t=t.next;
        }
        this.size++;
        t.next=this.head;
        return true;
    }

    insertFirst(ele)
    {
       var node=new Node(ele);
       this.size++;
        node.next=this.head;
        this.head=this.node;
        return true;
    }
    insertAt(element,index)
    {
        if(index>0 && index>this.size)
        {
            return false;
        }
        else{
            var node = new Node(element,index);
            var current, previous;
            current=this.head;
            if(index==0)
            {
                this.next=current;
                this.head=node;
            }
            else{
                current=this.head;
                var num=0;
                while(num<index)
                {
                    num++;
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=this.head;
                return true;
            }
            this.size++;
        }

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
          this.size--;
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
            this.size--;
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
                
            }
            t=t.next;
        }
    }
}
var lst=new LinkedList();
lst.insert(20);
lst.insert(30);
lst.insert(40);
lst.insert(50);
lst.insertFirst(10);
lst.getSize();
lst.insertAt(10,1);
lst.show();
