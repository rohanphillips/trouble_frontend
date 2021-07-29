
const elipseCoordinates = (layer,height, width, boardReducer, homeReducer, position, positions) => {
  const angleIncrement =( Math.PI / 2 ) / positions;
  switch(layer){
    case "board_layer":
      width = width - boardReducer
      height = height - boardReducer
      break;
    case "home_layer":
      width = width - boardReducer - homeReducer;
      height = height - boardReducer - homeReducer;
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
  console.log("layer", layer)
  return {width: `${width}px`, height: `${height}px`, top: `${top}px`, left: `${left}px`}
}

export const createPositionStyle = (layer,height, width, boardReducer, homeReducer, position) => {
  const coordinates = elipseCoordinates(layer, height, width, boardReducer, homeReducer, position, 7)
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
  let boardPosition = counter
  let base
  if(between(counter, 1, 28)){
    layerID = "board_layer"    
  } else if(between(counter, 29, 44)){
    layerID = "start_layer"
    base = 28
    if(between(counter, 29, 32)){
      boardPosition = counter - base;
    } else if(between(counter, 33, 36)){
      boardPosition = counter - base + 3;
    } else if(between(counter, 37, 40)){
      boardPosition = counter - base + 6;
    } else if(between(counter, 41, 44)){
      boardPosition = counter - base + 9;
    }
  } else if(between(counter, 45, 60)){
    layerID = "home_layer"
    base = 45
    if(between(counter, 45, 48)){
      boardPosition = counter - base;
    } else if(between(counter, 49, 52)){
      boardPosition = counter - base + 3;
    } else if(between(counter, 53, 56)){
      boardPosition = counter - base + 6;
    } else if(between(counter, 57, 60)){
      boardPosition = counter - base + 9;
    }
  }

  return {
    occupied: false,
    playerOccupying: null,
    boardPosition: boardPosition,
    layerID: layerID
  }
}