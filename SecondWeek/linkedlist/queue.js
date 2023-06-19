const Linkedlist=require('./linkedlist')
class linkedlistQueue{
    constructor(){
        this.list=new Linkedlist()

    }
    enqueue(value){
        this.list.prepend(value)

    }
    dequeue(){
        return this.list.removeFromEnd()

    }
    peek(){
        return this.list.head.value

    }
    isEmpty(){
        return this.list.isEmpty()

    }
    getSize(){
        return this.list.getSize()

    }
    print(){
          return this.list.print()
    }

}
const queue=new linkedlistQueue()

queue.enqueue(40)
queue.enqueue(80)
queue.enqueue(50)
queue.print()
queue.dequeue()
queue.print()