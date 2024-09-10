let isPalindrome = function(x) {
    if (x < 0) return false;
    const number = String(x);
    return (number === number.split('').reverse().join('')) ? true : false;
};