export const movePiece = (data) => {
  let boardPosition
  let player
  let otherPiece
  //I will check if piece is in the start position
  const piece = data.pieceToMove
  const isStartPosition = piece.playerLocation <= 4
  //handle if it is
  //piece needs to move to start location
  //get player start board location from playerPosition 5
  player = data.players[piece.playerNumber - 1]
  if(isStartPosition) {    
    const playerStartLocation = player.locations[5]
    boardPosition = data.boardPostions[playerStartLocation]
  } else {
    //not a start position, get boardPosition x spaces ahead
    const moveToLocation = player.locations[piece.playerLocation + data.movePositions]
    boardPosition = data.boardPosition[moveToLocation]
  }
  //check if forward location is empty
  if(!isBoardPositionOccupied(boardPosition)) {
    //if it is, move piece
  } else {
    //if it's not
    //check if own piece
    otherPiece = data.boardPostion.pieceOccupying
    if(isPieceFromSamePlayer(piece, otherPiece)) {
      //if it is, piece can't move
    } else {      
      //if it's not, it's another players piece, send that piece to the players move position
      //send other players piece home

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