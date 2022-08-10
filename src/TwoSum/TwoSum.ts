const twoSum = (nums: number[], target: number):number[] => {
  const indexes: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const differenceIndex: number = nums.lastIndexOf(target - nums[i]);
    if (differenceIndex > -1 && differenceIndex !== i) {
      indexes.push(i, differenceIndex);
      break;
    }
  }

  return indexes;
};

module.exports = twoSum;