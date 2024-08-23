const fibonacci = function(num) {
    num = Number(num);
    if(isNaN(num)){
        return null;
    }
    if(num < 0) return "OOPS";
    if(num === 0) return 0;
    let num1 = 0;
    let num2 = 1;
    let total = 1;
    for(let i = 0; i<num;i++){
        total = num1 + num2;
        num2 = num1;
        num1 = total;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
