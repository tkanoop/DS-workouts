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
    prepend(value){
   const node=new Node(value)
   if(this.isEmpty()){
    this.head=node
   }else{
    node.next=this.head
    this.head=node
   }this.size++

    }

    // append
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

    // insert

    insert(value,index){
        if(index<0 || index>this.size){
            console.log("its impossible");
            return 
            
        }if(index===0){     // if we want to insert a value at the beginning of linked list
            this.prepend(value)

        }else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){

            
            prev=prev.next
            }
            node.next=prev.next
            prev.next=node
           

        } 
        this.size++
    }

    // printing
    print(){
        if(this.isEmpty()){
            console.log('list is empty');

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
const list= new LinkedList()

list.insert(70,5)
list.print()








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

//     prepend(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//     }
//     insert(index,value){
//         if(index<0 || index>this.size){
//             console.log("invalid index");
//         }if(index===0){
//             this.prepend(value)
//         }else{
//             const node=new Node(value)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("its empty");
//         }else{
//             let curr=this.head
//             let listValues=""
//             while(curr){
//                 listValues+=`${curr.value} `
//                 curr=curr.next
//             }
//             console.log(listValues);
//         }


//     }
// }
// const list=new LinkedList()

// list.prepend(90)
// list.insert(3,25)
// list.print()