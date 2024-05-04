var firstUniqChar = function(s) {

  const charsMap = new Map();
  
  for( char of s){
    const charCount = charsMap.get(char);
    charsMap.set(char, charCount ? charCount + 1 : 1);
  }

  for (let i=0;i<s.length; i++){
    if (charsMap.get(s[i]) === 1) {
     return i
    }
  }
  
  return -1
};
