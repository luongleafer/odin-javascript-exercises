const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(arr) {
    return arr.reduce(add,0);
};

const multiply = function(arr) {
    return arr.reduce((accumulator, current) => accumulator*current,1);
};

const power = function(base, power) {
    let result = 1;
    for(let i = 0; i<power; ++i){
        result *= base;
    }
    return result;
};

const factorial = function(num) {
    let result = 1;
    for(let i = 1; i<=num; ++i){
        result *= i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
