class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
    this.items.pop()
    }
    peek(){
        return console.log(this.items[this.items.length-1]);
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

const stack=new Stack()

console.log(stack.isEmpty()); 
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.peek()
console.log(stack.size());
stack.pop()
stack.print()