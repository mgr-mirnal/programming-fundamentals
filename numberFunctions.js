
function getBigger(nub1, nub2){
    if(nub1 === "number" && nub2 === "number"){
        console.log(true)
        return true;
    }
    if(nub1 > nub2){
        return nub1
    }
    if(nub2 > nub1){
        return nub2
    }
    if(nub1 == nub2){
        return 0;
    }
    
   
    
}

function getSmallest(arr){
    if(arr.length === 0){
        return null
    }
    const min = Math.min.apply(Math, arr)
    console.log(min)
    return min
 
}
function countValue(arr, value){
    if(arr.length === 0){
        return 0
    }
    if(value == null){
        return null
    }
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == value){
            count++
        }
    }
    console.log(count)
    return count;
}
   



countValue([1,2,1,1])



 module.exports = {getBigger,getSmallest,countValue};