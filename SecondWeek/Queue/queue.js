// class Queue{
//     constructor(){
//         this.items=[]
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }
//     size(){
//         return this.items.length
//     }
//     print(){
//           console.log(this.items.toString())
//     }
// }
// const queue =new Queue()
// queue.enqueue(20)
// queue.enqueue(40)
// queue.enqueue(60)
// console.log(queue.peek());
// queue.dequeue()
// queue.print()



class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()
    }
    isEmpty(){
        return this.items.length===0
    }
    peek(){
       return this.items[0]
    }
    size(){
    return   this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}
const queue=new Queue()
queue.enqueue(20)
queue.enqueue(40)
queue.enqueue(70)
queue.enqueue(10)
queue.print()
console.log(queue.peek());
queue.dequeue()
queue.print()
