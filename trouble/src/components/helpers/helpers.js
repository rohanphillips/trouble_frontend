
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

export const createLayerStyle = (layer, height, width, boardReducer, homeReducer) => {
  let top = 0
  let left = 0
  switch(layer){
    case "board_layer":
      width = width - boardReducer
      height = height - boardReducer
      top = boardReducer / 2
      left = boardReducer / 2
      break;
    case "home_layer":
      width = width - boardReducer - homeReducer;
      height = height - boardReducer - homeReducer;
      top = homeReducer / 2;
      left = homeReducer / 2;
      break;
    default:
      break;
  }
  return {width: `${width}px`, height: `${height}px`, top: `${top}px`, left: `${left}px`}
}

export const createPositionStyle = (layer,height, width, boardReducer, position) => {
  const coordinates = elipseCoordinates("board_layer", height, width, boardReducer, position, 7)
  switch(layer){
    case "board_layer":
      return {top: `${coordinates.y}px`, left: `${coordinates.x}px`, backgroundColor: 'rgb(255, 255, 255)'}
    default:
      return {top: `${coordinates.y}px`, left: `${coordinates.x}px`, backgroundColor: 'rgb(255, 255, 255)'}
  }
}

export const between = (x, min, max) => {
  return x >= min && x <= max;
}

export const initializePosition = (counter) => {
  let layerID = ""
    if(between(counter, 1, 28)){
      layerID = "board_layer"
    } else if(between(counter, 29, 44)){
      layerID = "start_layer"
    } else if(between(counter, 45, 60)){
      layerID = "home_layer"
    }

    return {
      occupied: false,
      playerOccupying: null,
      layerID: layerID
    }
}