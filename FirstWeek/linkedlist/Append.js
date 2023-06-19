// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }

//     // prepend
//     // time complexity
// // O(1)-constant time complexity

// prepend(value){
//     const node=new Node(value)
//     if(this.isEmpty()){
//         this.head=node
//     }else{
//         node.next=this.head
//         this.head=node
//     }
//     this.size++
// }

// // append
// // complexity
// // O(n)-linear time complexity

// append(value){
// const node =new Node(value)
// if(this.isEmpty()){
//     this.head=node
// }else{
//     let prev=this.head
//     while(prev.next){
//         prev=prev.next
        
//     }
//     prev.next=node
// }this.size++

// }

// // printing values
// print(){
//     if(this.isEmpty()){
//         console.log('List is empty');
//     }else{
//         let curr=this.head
//         let listValues=''
//         while(curr){
//             listValues+=`${curr.value} `
//             curr=curr.next
//         }
//         console.log(listValues);
//     }
// }

// }

// const list =new LinkedList()
// list.append(10)
// list.print()
// list.append(40)
// list.print()

// list.append(80)
// list.print()



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
        }
        this.size++

    }


    print(){
        if(this.isEmpty()){
            console.log("the list is empty");

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
list.append(40)
list.append(70)
list.append(90)
list.append(60)
list.print()