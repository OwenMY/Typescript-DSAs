// eslint-disable-next-line @typescript-eslint/no-var-requires
const findShortestCellPath = require('./ShortestCellPath');
describe('Shortest Cell Path', () => {
  test('Should find shortest cell path', () => {
    const grid = [
      [1, 1, 1, 1],
      [0, 0, 0, 1],
      [1, 1, 1, 1]
    ];
    const expected = findShortestCellPath(grid, 0, 0, 2, 0);
    expect(expected).toEqual(8);
  });
  test('Should find shortest cell path with multiple paths', () => {
    const grid = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ];
    const expected = findShortestCellPath(grid, 0, 0, 2, 0);
    expect(expected).toEqual(2);
  });
  test('Should return -1 if no path is found', () => {
    const grid = [
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [1, 1, 1, 1]
    ];
    const expected = findShortestCellPath(grid, 0, 0, 2, 0);
    expect(expected).toEqual(-1);
  });
});
