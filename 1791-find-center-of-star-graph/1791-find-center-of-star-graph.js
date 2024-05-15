/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  const nodeCountMap = new Map();
  
  for(const edge of edges) {    
    nodeCountMap.set(edge[0], (nodeCountMap.get(edge[0]) || 0) + 1);
    nodeCountMap.set(edge[1], (nodeCountMap.get(edge[1]) || 0) + 1);
  }

  let maxKey = null;
  let maxValue = -Infinity;
  
  for (let [key, value] of nodeCountMap.entries()) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
}