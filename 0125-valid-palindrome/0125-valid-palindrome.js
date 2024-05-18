var isPalindrome = function (s) {
  if (s.length === 0) {
    return true;
  }

  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    if (!isAlphanumeric(s.charAt(i))){
      i++;
      continue;
    }
    if (!isAlphanumeric(s.charAt(j))) {
      j--
      continue;
    }
    
    if (s.charAt(i).toLowerCase() === s.charAt(j).toLowerCase()) {
      i++;
      j--
    } else {
      return false;
    }
  }
  return true 
};

function isAlphanumeric(char) {
  const regex = /^[a-z0-9]$/i;
  return regex.test(char);
}