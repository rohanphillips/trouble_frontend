import React, { useState } from 'react'
import { connect } from 'react-redux'
import AddPlayer from '../player/AddPlayer'

const GameController = (props) => {
  const [addingPlayer, setAddingPlayer] = useState(false)
  const { currentRoll, inProgress, playerCount } = props

  const playerAdded = () => {
    setAddingPlayer(false)
  }
  return (
    <div>
      Game Console
      <div>
        {!inProgress && !addingPlayer &&
          <button onClick={() => setAddingPlayer(true)}>Add Player</button>
}
      </div>
      <div>
        {playerCount > 0 &&
          <button>Start Game</button>
        }
      </div>
      {addingPlayer &&
        <AddPlayer playerAdded={playerAdded} player={playerCount + 1}/>
      } 
    </div>
  )
}

export default connect( state => {
  return {
    settings: state.settingsState,
    currentRoll: state.boardState.currentRoll,
    inProgress: state.boardState.inProgress,
    playerCount: state.boardState.players.length
  }
})(GameController)