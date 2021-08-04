import React, { useState } from 'react';
import { connect } from 'react-redux'
import { SketchPicker } from 'react-color'
import { addPlayer } from '../reducers/board'
import { getDefaultPlayerColors } from '../helpers/controller/helpers'
import { createNewPlayer } from '../helpers/player/helpers'

const AddPlayer = (props) => {
  const [playername, setPlayerName] = useState("")
  const [playercolor, setPlayerColor] = useState("")
  const { playerAdded, playerCount, defaultPlayerColors, addPlayer, players } = props

  const returnedColor = (color) => {
    setPlayerColor(color.rgb)
  }

  const createPlayer = () => {
    addPlayer(createNewPlayer(playerCount + 1, playername, playercolor))
    playerAdded()
  }

  playercolor === "" && setPlayerColor(getDefaultPlayerColors(players, defaultPlayerColors)[0])
  return (
    <div>
      AddPlayer
      <form>
        <label>
          Player Name:
          <input type = "text" name="playername" value={playername} onChange={event => setPlayerName(event.target.value)} />
          <SketchPicker
            color={playercolor}
            onChangeComplete={returnedColor}
          />
          <input type="button" onClick={createPlayer} value="Add Player" />
        </label>
      </form>
      {/* <div>
        <button onClick={playerAdded}>Complete</button>
      </div>       */}
    </div>
  )
}

export default connect( state => {
  return {
    defaultPlayerColors: state.boardState.defaultPlayerColors,
    players: state.boardState.players
  }
}, { addPlayer })(AddPlayer)