/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const intersectionMap = new Map();
  const intersections = [];

  for (const num of nums1) {
    intersectionMap.set(num, false);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (intersectionMap.has(nums2[i]) && !intersectionMap.get(nums2[i])) {
      intersections.push(nums2[i]);
      intersectionMap.set(nums2[i], true)
    }
  }

  return intersections;
};