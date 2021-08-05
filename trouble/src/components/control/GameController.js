import React, { useState } from 'react'
import { connect } from 'react-redux'
import AddPlayer from '../player/AddPlayer'
import Players from '../player/Players'
import GameLogic from './GameLogic'
import { updateGameInProgress, initializePlayer } from '../reducers/board'
import { initializeBoard } from '../helpers/controller/helpers'

const GameController = (props) => {
  const [addingPlayer, setAddingPlayer] = useState(false)
  const { gameInProgress, playerCount, updateGameInProgress, players, initializePlayer } = props

  const playerAdded = () => {
    setAddingPlayer(false)
  }

  const startGame = () => {
    updateGameInProgress(true)
    initializeBoard(initializePlayer, players)
  }

  return (
    <div>
      Game Console
      <div>
        <GameLogic/>
        <Players/>
      </div>
      <div>
        {!gameInProgress && !addingPlayer && playerCount < 4 &&
          <button onClick={() => setAddingPlayer(true)}>Add Player</button>
        }
      </div>
      <div>
        {playerCount > 0 && !gameInProgress &&
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
    gameInProgress: state.boardState.gameInProgress,
    playerCount: state.boardState.players.length,
    players: state.boardState.players, 
  }
}, { updateGameInProgress, initializePlayer })(GameController)