import React from 'react';
import { connect } from 'react-redux'
import { deletePlayer } from '../reducers/board'
import { rgbToHex } from '../helpers/controller/helpers'

const Player = (props) => {
  const { deletePlayer, player, playerID, inProgress } = props
  return (
    <div style={{backgroundColor: `${rgbToHex(player.color)}`}}>
      <div>
        Name: {player.name}
      </div>
      <div>
        Color:
      </div>
      <div>
        { !inProgress &&
          <button id={playerID} onClick={event => deletePlayer(parseInt(event.target.id))}>Delete</button>
}
      </div>
    </div>
  )
}

export default connect( state => {
  return {
    inProgress: state.boardState.inProgress
  }
}, { deletePlayer }) (Player)