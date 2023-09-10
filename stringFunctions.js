function getLonger(value1, value2){
    if( value1 == undefined || value2 == undefined){
        throw new Error("This function requires two arguments!")
    }
   if(typeof value1 !== "string" || typeof value2 !== "string"){
        throw new Error("Arguments must be strings!")
   }
    if(value1.length > value2.length){
        console.log(value1)
        return value1
    }else  if(value1.length < value2.length){
        console.log(value2)
        return value2
    }else if(value1.length == value2.length){
        console.log("a")
        return ""
    }
}
function greet(name){
    if(name == undefined || name == ""){
        return "Hi!"
    }else{
        return `Hello, ${name}!`
    }
    
}
function isSubstring(value1, value2){
    if( value1 == undefined || value2 == undefined){
        throw new Error("This function requires two arguments!")
    }
   if(typeof value1 !== "string" || typeof value2 !== "string"){
        throw new Error("Arguments must be strings!")
   }
   if(value1 == "" && value2 == ""){
    throw new Error("Arguments must have a length greater than zero!")
   }
   if(value1.includes(value2)){
    return true
   }else{
    return false
   }
}

getLonger("red","blue")
module.exports ={getLonger,greet,isSubstring}