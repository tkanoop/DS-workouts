class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0

    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

// if current linkedlist is empty
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            // for already existing nodes in linked list
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++

        
    }
    // printing values of linkedlist

    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }else{
            let curr=this.head
            let listValues=""
            while(curr){
                listValues+=`${curr.value} `
                curr=curr.next

            }
            console.log(listValues)
        }
    }

}
const list=new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize());
list.print()
list.prepend(10)
list.print()
list.prepend(30)
list.prepend(40)
list.print()