/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
  let _happiness = [...happiness];
  _happiness.sort((a, b) => b - a)
  let maximumHappiness = 0
  for (let i = 0; i < k; i++) {
    const currentHappiness = _happiness[i] - i;

    if (currentHappiness <= 0) {
      continue;
    }
    maximumHappiness += currentHappiness;
  }

  return maximumHappiness
};
