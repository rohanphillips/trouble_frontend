export const createNewPlayer = (playerNo, playerName, playerColor) => {
  const player = {
    playerNumber: playerNo,
    name: playerName,
    color: playerColor,
    pieces: createPieces(playerNo),
    locations: createLocations(playerNo, 36)    
  }
  return player
}

const createLocations = (playerNo, count) => {
  let locations = {}
  for(let i = 1; i <= count; i++) {
    locations[i] = {
      occupied: false,
      piece: null,
      boardLocation: generateBoardLocation(boardMap, playerNo, i)
    }
  }
  return locations;
}

const boardMap = {
  1: {
    start: 28,
    board: -4,
    home: 12
  },
  2: {
    start: 32,
    board: 3,
    home: 16
  },
  3: {
    start: 36,
    board: 10,
    home: 20
  },
  4: {
    start: 40,
    board: 17,
    home: 24
  },
}

const generateBoardLocation = (boardMap, playerNo, location) => {
  let startingBoardPosition
  const boardAdjust = () => {
    const calc = location + boardMap[playerNo].board
    calc <= 28 ? startingBoardPosition = calc : startingBoardPosition = calc - 28
  }
  if(location > 0 && location <=4){
    startingBoardPosition = location + boardMap[playerNo].start
  } else if(location > 4 && location <= 32){
    boardAdjust()
  } else if(location > 32){
    startingBoardPosition = location + boardMap[playerNo].home
  }
  return startingBoardPosition
}

const createPieces = (playerNo) => {
  let pieces = {}
  for(let i = 0; i < 4; i++) {
    pieces[i + 1] = createPiece(i + 1, playerNo) 
  }
  return pieces
}

const createPiece = (id, playerNo) => {
  const piece = {
    id: id,
    playerNumber: playerNo,
    boardLocation: -1
  }
  return piece
}