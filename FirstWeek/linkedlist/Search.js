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

    // prepend
    // time complexity
// O(1)-constant time complexity

prepend(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
        node.next=this.head
        this.head=node
    }
    this.size++
}

// append
// complexity
// O(n)-linear time complexity

append(value){
const node =new Node(value)
if(this.isEmpty()){
    this.head=node
}else{
    let prev=this.head
    while(prev.next){
        prev=prev.next
        
    }
    prev.next=node
}this.size++

}

search(value){
    if(this.isEmpty()){
        return "list is empty"
    }
    let i=0
    let curr=this.head
    while(curr){
        if(curr.value===value){
            return i
        }
        curr=curr.next
        i++
    }
    return -1
}

// printing values
print(){
    if(this.isEmpty()){
        console.log('List is empty');
    }else{
        let curr=this.head
        let listValues=''
        while(curr){
            listValues+=`${curr.value} `
            curr=curr.next
        }
        console.log(listValues);
    }
}

}

const list =new LinkedList()
list.append(10)
list.print()
list.append(40)


list.append(80)
console.log(list.search(80));
