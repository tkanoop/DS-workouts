class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
    // node class is defined
} 

class LinkedList {
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
       return this.size ===0    // it will return true if size is equal to zero
    }
    getSize(){
        return this.size
    }
}

const list = new LinkedList()
console.log('list is empty',list.isEmpty());
console.log('list size',list.getSize());








