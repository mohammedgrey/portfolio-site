export const generateCircularPoints = (numPoints: number) => {
  // Define the radius of the circle and the number of points
  const radius = 10;

  // Calculate the angle between each point
  const angleStep = (2 * Math.PI) / numPoints;

  // Calculate the coordinates of each point
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleStep;
    const x = radius * Math.sin(angle);
    const y = 0;
    const z = radius * Math.cos(angle);
    points.push([x, y, z] as const);
  }
  return points;
};
