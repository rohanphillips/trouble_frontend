
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
    case "popper_layer":
      width = width - (2 * (boardReducer + homeReducer));
      height = height - (2 * (boardReducer + homeReducer));
      top = homeReducer / 2;
      left = boardReducer / 15;
      break;
    default:
      break;
  }
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
  let style = ""
  let layerPosition = counter
  let base
  if(between(counter, 1, 28)){
    layerID = "board_layer"  
    style = "elipsoid_board"
  } else if(between(counter, 29, 44)){
    layerID = "start_layer"
    style = "elipsoid_position"
    base = 28
    if(between(counter, 29, 32)){
      layerPosition = counter - base;
    } else if(between(counter, 33, 36)){
      layerPosition = counter - base + 3;
    } else if(between(counter, 37, 40)){
      layerPosition = counter - base + 6;
    } else if(between(counter, 41, 44)){
      layerPosition = counter - base + 9;
    }
  } else if(between(counter, 45, 60)){
    layerID = "home_layer"
    style = "elipsoid_home"
    base = 45
    if(between(counter, 45, 48)){
      layerPosition = counter - base;
    } else if(between(counter, 49, 52)){
      layerPosition = counter - base + 3;
    } else if(between(counter, 53, 56)){
      layerPosition = counter - base + 6;
    } else if(between(counter, 57, 60)){
      layerPosition = counter - base + 9;
    }
  }

  return {
    occupied: false,
    pieceOccupying: null,
    layerPosition: layerPosition,
    layerID: layerID,
    style: style
  }
}

export const resetStyle = (boardLocation) => {
  let style
  switch(boardLocation.layerID){
    case "board_layer":
      style = "elipsoid_board"
      break
    case "start_layer":
      style = "elipsoid_board"
      break
    case "home_layer":
      style = "elipsoid_home"
      break
    default:
      style = "elipsoid_board"
      break
  }
  return style
}

export const nextPlayer = (currentRoll, currentPlayer, players) => {
  let player
  if(currentRoll === 6){
    player = currentPlayer
  } else {
    if(currentPlayer === players.length){
      player = 1
    } else {
      player = currentPlayer + 1
    }
  }
  console.log("nextPlayer", player)
  return player
}

export const randomColor = () => {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}