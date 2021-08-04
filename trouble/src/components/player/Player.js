import React from 'react';
import { connect } from 'react-redux'
import { deletePlayer } from '../reducers/board'
import { rgbToHex } from '../helpers/controller/helpers'

const Player = (props) => {
  const { deletePlayer, player, playerID, players } = props
  console.log("playerID:", playerID)
  return (
    <div style={{backgroundColor: `${rgbToHex(player.color)}`}}>
      <div>
        Name: {player.name}
      </div>
      <div>
        Color:
      </div>
      <div>
        <button id={playerID} onClick={event => deletePlayer(parseInt(event.target.id))}>Delete</button>
      </div>
    </div>
  )
}

export default connect( state => {
  return {
  }
}, { deletePlayer }) (Player)