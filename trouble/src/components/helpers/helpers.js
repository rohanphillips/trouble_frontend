
const elipseCoordinates = (layer,height, width, boardReducer, position, positions) => {
  const angleIncrement =( Math.PI / 2 ) / positions;
  switch(layer){
    case "board_layer":
      width = width - boardReducer
      height = height - boardReducer
      break;
    default:
      break;
  }
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  return {
    x: halfWidth + (halfWidth * Math.cos(position * angleIncrement)) - 15,
    y: halfHeight + (halfHeight * Math.sin(position * angleIncrement))- 15
  }
}

export const createLayerStyle = (layer, height, width, boardReducer) => {
  let top = 0
  let left = 0
  switch(layer){
    case "board_layer":
      width = width - boardReducer
      height = height - boardReducer
      top = boardReducer / 2
      left = boardReducer / 2
    break;
    default:
      break;
  }
  return {width: `${width}px`, height: `${height}px`, top: `${top}px`, left: `${left}px`}
}

export const createPositionStyle = (layer,height, width, boardReducer, position) => {
  const coordinates = elipseCoordinates("board_layer", height, width, boardReducer, position, 8)
  switch(layer){
    case "board_layer":
      return {top: `${coordinates.y}px`, left: `${coordinates.x}px`, backgroundColor: 'rgb(255, 255, 255)'}
    default:
      return {top: `${coordinates.y}px`, left: `${coordinates.x}px`, backgroundColor: 'rgb(255, 255, 255)'}
  }
}