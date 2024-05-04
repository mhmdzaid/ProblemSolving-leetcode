/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const paranthsis = new Map();
  paranthsis.set('{', '}');
  paranthsis.set('[', ']');
  paranthsis.set('(', ')');
  
  const stack = []

  if(s.length === 0) {
    return true;
  }

  for(const char of s) {
    if(char === '{' || char === '[' || char === '(') {
      stack.push(char)
    } else {
      const top = stack.pop();
      if(paranthsis.get(top) !== char){
        return false
      }
    }
  }

return stack.length === 0;

};