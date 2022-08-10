const func = require('./TwoSum');

describe('TwoSum', () => {
  test('Should find indexes of two numbers within input array', () => {
    const nums: number[] = [1, 2, 3, 4, 5];
    const target: number = 6;
    const expected: number[] = func(nums, target);

    expect(expected).toBe([1, 3]);
  });
  test('Should find indexes of two numbers within input array', () => {
    const nums: number[] = [0, 0, 0, 0, 0];
    const target: number = 5;
    const expected: number[] = func(nums, target);

    expect(expected).toBe(-1);
  });
});
