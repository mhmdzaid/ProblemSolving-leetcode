/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    return fact(n*2)/(fact(n+1)*fact(n))
};

function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}