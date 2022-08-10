const twoSum = (nums: number[], target: number):number[] => {
  const indexes: number[] = [];

  for (let i: number = 0; i < nums.length; i++) {
    let differenceIndex: number = nums.lastIndexOf(target - nums[i]);
    if (differenceIndex > -1 && differenceIndex !== i) {
      indexes.push(i, differenceIndex);
      break;
    }
  }

  return indexes;
};

module.exports = twoSum;