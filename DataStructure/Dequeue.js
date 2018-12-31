class Dequeue
{
    constructor()
    {
        this.items=[];
        this.front=-1;
        this.rear=-1;
        this.size=0;
    }
}
class MyDequeue
{
    constructor(capacity)
    {
        this.capacity=capacity;
        var stk=new stk[capacity];
    }

    deque()
    {
        if(this.size==0)
        {
            return true;
        }
        return false;
    }
    addFrontitem(item)
    {
        if(this.front==this.capacity-1)
        {
            console.log("Queue is full");
            return;
        }
        else
        {
            this.items[++this.front]=item;
            this.size++;
            return this.items;
        }
    }
    addRearitem(item)
    {
        if(this.front==this.rear)
        {
            console.log("Queue is full");
            return;
        }
        else
        {
            this.rear=this.capacity-1;
            this.size++;
            this.items[this.rear--]=item;
            this.items;
        }
    }
    removeFront()
    {
        if(this.front=-1)
        {
            console.log("DeQue is empty");
            return ;
        }
        else{
            var ele=this.items[this.front++];
             this.size--;
            if(this.front>this.rear)
            {
                this.front=this.rear=-1;
            }
            return ele;
        }
    }
    removeRear()
    {
        if(this.rear=-1)
        {
            console.log("DeQue is empty");
            return ;
        }
        else{
            var ele1=this.items[]
        }
    }
}