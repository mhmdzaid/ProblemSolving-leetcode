/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
  let reversedString = '';
  const numberAsString = Math.abs(x).toString();
 
  for (char of numberAsString) {
    reversedString = char + reversedString;
  }

  const reversedNumber = x < 0 ? -parseInt(reversedString) : parseInt(reversedString);
    
  return is32Bit(reversedNumber) ? reversedNumber : 0;
};

function is32Bit(number) {
    return number >= -Math.pow(2, 31) && number <= Math.pow(2, 31) - 1;
}