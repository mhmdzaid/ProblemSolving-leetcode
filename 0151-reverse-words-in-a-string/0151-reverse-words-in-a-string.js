/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  let i = s.length - 1;
  let j = s.length - 1;
  let stringReversed = "";

  while (i >= 0) {
    if (s.charAt(i) === " ") {
      i--;
      j--;
    } else {
      while (i >= 0 && s.charAt(i) !== " ") {
        i--;
      }
      if (i !== j) {
        stringReversed += s.substring(i + 1, j + 1) + ' ';
      }
      j = i;
    }
  }

  return stringReversed.trim(); // Remove any trailing space
};