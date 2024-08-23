const palindromes = function (word) {
    const punctuationRegex = /[.,;:?!-/\s]/;
    word = word.split('').filter((char) => !punctuationRegex.test(char)).join('').toLowerCase();
    let i = 0;
    let j = word.length-1;
    while(j-i >= 1){
        if(word[i] !== word[j]) return false;
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
