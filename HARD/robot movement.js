// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

// 20 steps North, now at (0, 20)
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).

trackRobot(20, 30, 10, 40); //➞ [-10, 10]

trackRobot(); //➞ [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10); //➞ [20, -20]
// The amount to move can be negative.
function trackRobot(north = 0, east = 0, south = 0, west = 0) {
  let x = 0;
  let y = 0;

  if (north == 0) {
    console.log("No movement means the robot stays at (0, 0).");
    return false;
  }

  if (north > 0) {
    y += north;
  }
  if (east > 0) {
    x += east;
  }
  if (south > 0) {
    y -= south;
  }
  if (west > 0) {
    x -= west;
  }
  const coordinates = [x, y];

  console.log(`Robot moved to: (${x}, ${y})`);
  return coordinates;
}
