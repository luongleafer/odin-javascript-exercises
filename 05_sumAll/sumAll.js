const isInteger = function(num){
    return Math.floor(num) === num;
}


const sumAll = function(start, end) {
    if(typeof(start) !== "number" || typeof(end) !== "number"){
        return "ERROR";
    }
    if(start < 0 || end < 0){
        return "ERROR";
    }
    if(!isInteger(start) || !isInteger(end)){
        return "ERROR";
    }

    if(start > end){
        let temp = start;
        start = end;
        end = temp;
    }

    let num = 0;
    
    for(let i = start; i<=end;i++){
        num+=i;
    }
    return num;

};


// Do not edit below this line
module.exports = sumAll;
