const Linkedlist=require('./linkedlist')

class LinkedListStack{
    constructor(){
        this.list=new Linkedlist()
    }
    push(value){
    this.list.prepend(value)
    }
    pop(){
        this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        this.list.getSize()
    }
    print(){
        this.list.print()
    }
}
const stack=new LinkedListStack()
console.log(stack.isEmpty());
stack.push(40)
stack.push(80)
stack.push(50)
stack.print()
stack.pop()
stack.print()
console.log(stack.peek());