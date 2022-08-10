const func = require('./TwoSum');
describe('TwoSum', () => {
    test('Should find indexes of two numbers within input array', () => {
        const nums = [1, 2, 3, 4, 5];
        const target = 6;
        const expected = func(nums, target);
        expect(expected).toBe([1, 3]);
    });
    test('Should find indexes of two numbers within input array', () => {
        const nums = [0, 0, 0, 0, 0];
        const target = 5;
        const expected = func(nums, target);
        expect(expected).toBe(-1);
    });
});
