function binarySearch(arr,target){
    let leftindex=0
    let rightindex=arr.length-1
    while(leftindex<=rightindex){
        let middleindex=Math.floor((leftindex+rightindex)/2)
        if(target===arr[middleindex]){
            return middleindex
        }if(target<arr[middleindex]){
            rightindex=middleindex-1
        }else{
            leftindex=middleindex+1
        }
    }
    return -1
}
console.log(binarySearch([10,20,30,40,60,70],40));







