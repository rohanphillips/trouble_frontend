import React, { useState } from 'react'
import { connect } from 'react-redux'
import AddPlayer from '../player/AddPlayer'
import Players from '../player/Players'
import { updateInProgress, initializePlayer } from '../reducers/board'
import { initializeBoard } from '../helpers/controller/helpers'

const GameController = (props) => {
  const [addingPlayer, setAddingPlayer] = useState(false)
  const { inProgress, playerCount, updateInProgress, players, initializePlayer, pieceToMove } = props

  const playerAdded = () => {
    setAddingPlayer(false)
  }

  const startGame = () => {
    updateInProgress(true)
    initializeBoard(initializePlayer, players)
  }
  console.log("Controller", pieceToMove)
  return (
    <div>
      Game Console
      <div>
        <Players/>
      </div>
      <div>
        {!inProgress && !addingPlayer && playerCount < 4 &&
          <button onClick={() => setAddingPlayer(true)}>Add Player</button>
        }
      </div>
      <div>
        {playerCount > 0 &&
          <button onClick={startGame}>Start Game</button>
        }
      </div>
      <div>
        {playerCount > 0 &&
          <button >Play</button>
        }
      </div>
      {addingPlayer &&
        <AddPlayer playerAdded={playerAdded} playerCount={playerCount}/>
      } 
    </div>
  )
}

export default connect( state => {
  return {
    settings: state.settingsState,
    currentRoll: state.boardState.currentRoll,
    inProgress: state.boardState.inProgress,
    playerCount: state.boardState.players.length,
    players: state.boardState.players,
    pieceToMove: state.boardState.pieceToMove
  }
}, { updateInProgress, initializePlayer })(GameController)