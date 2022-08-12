/*
Shortest Cell Path
In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

If the task is impossible, return -1.

Examples:

input:
grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: 8
(The lines below represent this grid:)
1111
0001
1111

grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: -1
(The lines below represent this grid:)
1111
0001
1011
Constraints:

[time limit] 5000ms
[input] array.array.integer grid
1 ≤ arr.length = arr[i].length ≤ 10
[input] integer sr
[input] integer sc
[input] integer tr
[input] integer tc
All sr, sc, tr, tc are valid locations in the grid, grid[sr][sc] = grid[tr][tc] = 1, and (sr, sc) != (tr, tc).
[output] integer
*/

const shortestCellPath = (
  grid: number[][],
  sr: number,
  sc: number,
  tr: number,
  tc: number
): number => {
  const bfs = (coords: number[]) => {
    let queue: number[][] = [coords];

    while (queue.length) {
      const n = queue.length;
      pathCount++;

      for (let i = 0; i < n; i++) {
        const cell: number[] = queue.shift();
        type qRow = number;
        type qCol = number;
        const [qRow, qCol] = cell;
        if (grid[qRow][qCol]) {
          grid[qRow][qCol] = 0;
          const neighbors: number[][] = getNeighbors(cell);
          queue.push(...neighbors);
        }

        if (qRow === tr && qCol === tc) {
          resultCount = pathCount;
          queue = [];
          break;
        }
      }
    }
  };

  const getNeighbors = (cell: number[]): number[][] => {
    const neighbors: number[][] = [];
    const xDelta: number[] = [0, 1, 0, -1];
    const yDelta: number[] = [1, 0, -1, 0];
    type cRow = number;
    type cCol = number;
    const [cRow, cCol] = cell;

    for (let i = 0; i < xDelta.length; i++) {
      const neighbor: number[] = [cRow + xDelta[i], cCol + yDelta[i]];
      const [nRow, nCol] = neighbor;

      if (0 <= nRow && 0 <= nCol && nRow < gridLength && nCol < rowLength) {
        neighbors.push(neighbor);
      }
    }

    return neighbors;
  };

  let pathCount = -1;
  let resultCount = -1;
  const gridLength: number = grid.length;
  const rowLength: number = grid[0].length;

  bfs([sr, sc]);

  return resultCount;
};

module.exports = shortestCellPath;
