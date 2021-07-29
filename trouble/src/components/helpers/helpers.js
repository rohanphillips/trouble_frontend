export const elipseCoordinates = (height, width, position, positions) => {
  const angleIncrement =( Math.PI / 2 ) / positions;
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  return {
    x: halfWidth + (halfWidth * Math.cos(position * angleIncrement)) - 15,
    y: halfHeight + (halfHeight * Math.sin(position * angleIncrement))- 15
  }
}