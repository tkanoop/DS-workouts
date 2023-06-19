function recurssivebinarysearch(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftindex,rightindex){
    if(leftindex>rightindex){
        return -1
    }
    let middleindex=Math.floor((leftindex+rightindex)/2)

    if(arr[middleindex]===target){
        return middleindex
    }
    if(target<arr[middleindex]){
        return search(arr,target,leftindex,middleindex-1)
    }else{
        return search(arr,target,middleindex+1,rightindex)
    }
}
console.log(recurssivebinarysearch([10,20,30,40,50],30));






if(isEmpty()){
    this.head=node
}else{
    node.next=this.head
    this.head=node
}


if(isEmpty()){
    this.head=node
}else{
    let prev=this.head
    while(prev.next){
        prev=prev.next
    }
    prev.next=node
}this.size++
