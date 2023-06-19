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
prepend(value){
    const node =new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
        node.next=this.head
        this.head=node
    }this.size++

}

append(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
        let prev=this.head
        while(prev.next){
            prev=prev.next
           
        } 
        prev.next=node
       

    } this.size++
}


insert(value,index){
    if(index<0||index>this.size){
        console.log("invalid index");
    
    }if(index===0){
        this.prepend(value)
    }else{
        const node=new Node(value)
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node
        this.size++
    }
}


// removing a node from given index
remove(index){
    if(index<0||index>=this.size){
        console.log("invalid index");
        return null

    }
    let removedNode
    if(index===0){
        removedNode=this.head
        this.head=this.head.next
    }else{
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        removedNode=prev.next
        prev.next=removedNode.next
    }
    this.size--
    return removedNode.value 

}



print(){
    if(this.isEmpty()){
        console.log("This list empty");
    }else{
    let curr=this.head
    let listValues=""
    while(curr){
        listValues+=`${curr.value} `
        curr=curr.next
    }
    console.log(listValues);
    }
}



}
const list=new LinkedList()
list.prepend(20)
list.prepend(40)
list.prepend(60)
list.print()
console.log(list.remove(2));

list.print()