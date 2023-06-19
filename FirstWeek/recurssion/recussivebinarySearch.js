function recurssivebinarySearch(arr,target){
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
    }
    else{
        return search(arr,target,middleindex+1,rightindex)
    }
}

console.log(recurssivebinarySearch([10,20,30,50,60,70,80],90));