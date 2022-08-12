// eslint-disable-next-line @typescript-eslint/no-var-requires
const droneFlightPlanner = require('./DroneFlightPlanner');

type route = number[][];

describe('Drone Flight Planner', () => {
  test('Should return 0 when only one point is given', () => {
    const route: route = [[0, 1, 19]];

    expect(droneFlightPlanner(route)).toBe(0);
  });

  test('Should return 0 when route has excess watts', () => {
    const route: route = [
      [0, 2, 10],
      [10, 10, 8]
    ];

    expect(droneFlightPlanner(route)).toBe(0);
  });

  test('Should return 14', () => {
    const route: route = [
      [0, 2, 6],
      [10, 10, 20]
    ];

    expect(droneFlightPlanner(route)).toBe(14);
  });

  test('Should return 36', () => {
    const route: route = [
      [0, 2, 2],
      [3, 5, 38],
      [9, 20, 6],
      [10, 12, 15],
      [10, 10, 8]
    ];

    expect(droneFlightPlanner(route)).toBe(36);
  });

  test('Should return 0', () => {
    const route: route = [
      [0, 2, 10],
      [3, 5, 9],
      [9, 20, 6],
      [10, 12, 2],
      [10, 10, 10],
      [10, 10, 2]
    ];

    expect(droneFlightPlanner(route)).toBe(0);
  });

  test('Should return 5', () => {
    const route: route = [
      [0, 2, 10],
      [3, 5, 0],
      [9, 20, 6],
      [10, 12, 15],
      [10, 10, 8]
    ];

    expect(droneFlightPlanner(route)).toBe(5);
  });
});
