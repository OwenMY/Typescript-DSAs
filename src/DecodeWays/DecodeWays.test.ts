const { decodeWaysFunc } = require('./DecodeWays');

describe('Decode Ways', () => {
  test('Should return 2', () => {
    const result: number = decodeWaysFunc('18');

    expect(result).toBe(2);
  });
  test('Should return 3', () => {
    const result: number = decodeWaysFunc('123');

    expect(result).toBe(3);
  });
});
