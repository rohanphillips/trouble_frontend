export const movePiece = (data) => {
  let boardPosition
  let player
  let otherPiece
  let newLocation
  //I will check if piece is in the start position
  const { pieceToMove, boardPositions, players, movePositions, pieceMove } = data
  const isStartPosition = pieceToMove.playerLocation <= 4
  //handle if it is
  //piece needs to move to start location
  //get player start board location from playerPosition 5
  if(pieceToMove.playerLocation === 36 || pieceToMove.playerLocation + movePositions > 36) return false
  player = players[pieceToMove.playerNumber - 1]
  console.log("movePiece Enter", player)
  if (isStartPosition) {    
    if(movePositions !== 6) return false
    console.log("isStartPosition")
    const playerStartLocation = player.locations[5].boardLocation
    console.log("playerStartLocation", playerStartLocation)
    boardPosition = boardPositions[playerStartLocation]
    console.log("boardPosition", boardPosition)
    newLocation = playerStartLocation
  } else if(!isStartPosition) {
    //not a start position, get boardPosition x spaces ahead
    console.log("isNotStartPosition")
    const moveToLocation = player.locations[pieceToMove.playerLocation + movePositions].boardLocation
    console.log("moveToLocation", moveToLocation)
    boardPosition = boardPositions[moveToLocation]
    console.log("boardPosition", boardPosition)
    newLocation = moveToLocation
  }
  //check if forward location is empty
  console.log("will check if boardPosition occupied")
  if(!isBoardPositionOccupied(boardPosition)) {
    //if it is not occupied, move piece
    console.log("isNotOccupied")
    const pieceMovePayload = {
      oldLocation: pieceToMove.boardLocation,
      newLocation: newLocation,
      piece: pieceToMove,
      newPlayerLocation: isStartPosition ? 5 : pieceToMove.playerLocation + movePositions
    }  
    console.log("payLoad:", pieceMovePayload)
    if(pieceMovePayload.newPlayerLocation <= 36){
      pieceMove(pieceMovePayload)
    } else {
      console.log("Cannot move")
    }
  } else {
    //if it's not
    //check if own piece
    console.log("isOccupied", boardPosition)
    otherPiece = boardPosition.pieceOccupying
    if(isPieceFromSamePlayer(pieceToMove, otherPiece)) {
      //if it is, piece can't move
      console.log("is piece from same player")
    } else {      
      //if it's not, it's another players piece, send that piece to the players move position
      //send other players piece home
      console.log("is piece from another player")
      // move this piece to new location
    }
  }

  //check if dice rolled a 6, player will have another turn

  //if not a 6, next players turn.
}

const isPieceFromSamePlayer = (piece, otherPiece) => {
  return piece.playerNumber === otherPiece.playerNumber
}
const isBoardPositionOccupied = (boardPosition) => {
  return boardPosition.occupied
}