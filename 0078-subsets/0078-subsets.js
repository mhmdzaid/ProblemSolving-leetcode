/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (nums.length === 0) {
    return [[]];
  }
  const firstNum = nums[0];
  const restNums = subsets(nums.slice(1));
  const subSets = restNums.map(sub => sub)
  const subSetWithFirstNum = subSets.map(sub => [firstNum, ...sub])

  return [...subSetWithFirstNum, ...subSets];
};